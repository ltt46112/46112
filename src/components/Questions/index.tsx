import { IQuestionsStep } from "../../api/configQuizApi";
import { SubmitHandler, useForm } from "react-hook-form";

interface IListQuestionStepProps {
  data?: IQuestionsStep;
  onAnswerSubmit: (isPass: boolean) => void;
}

const ListQuestionStep = (props: IListQuestionStepProps) => {
  const { data, onAnswerSubmit } = props;

  const {
    register,
    handleSubmit,
    formState: { isValid },
  } = useForm();

  const onSubmit: SubmitHandler<any> = (formData) => {
    const isPassed = Object.keys(formData).every((it: any) => {
      const [, questionId] = it.split("-");
      const answerId = formData[it];

      const isCorrect = data?.questions
        .find((it) => it._id === questionId)
        ?.answers.some((it) => it._id === answerId && it.isCorrect);

      return isCorrect;
    });

    onAnswerSubmit(isPassed);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {data?.questions?.map((it, index) => {
        return (
          <div key={`question-${it._id}`} className="text-left mb-3">
            <p className="font-semibold">
              Question {index + 1}: {it.question}
            </p>

            {it.answers?.map((answer) => {
              return (
                <div
                  key={`answer-${answer._id}`}
                  className="flex items-center gap-x-2"
                >
                  <input
                    type="radio"
                    id={`answer-${answer._id}`}
                    {...register(`question-${it._id}`, {
                      required: true,
                    })}
                    value={answer._id}
                  />

                  <label
                    htmlFor={`answer-${answer._id}`}
                    className="cursor-pointer"
                  >
                    {answer.content}
                  </label>
                </div>
              );
            })}
          </div>
        );
      })}

      <button
        disabled={!isValid}
        className="bg-black px-4 py-2 rounded outline-none text-white mt-4 [&:disabled]:opacity-40"
      >
        Submit
      </button>
    </form>
  );
};

export default ListQuestionStep;
