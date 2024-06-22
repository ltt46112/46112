import { useEffect } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { QuestionApi } from "../../../api/questionApi";
import { useNavigate, useParams } from "react-router-dom";

const UpdateQuestion = () => {
  const params = useParams();

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { isValid },
    reset,
  } = useForm();

  useEffect(() => {
    if (params?.id) fetchQuestion();
  }, [params?.id]);

  const fetchQuestion = async () => {
    try {
      const { data } = await QuestionApi.getQuestion(params?.id as string);

      const answersForm = (data.answers as []).reduce(
        (res: any, item: any, index) => {
          res[`answer-${index + 1}`] = item.content;

          return res;
        },
        {}
      );

      const correctAnswerIndex = (data.answers as []).findIndex(
        (it: any) => it.isCorrect
      );

      reset({
        ...answersForm,
        isCorrect: (correctAnswerIndex + 1).toString(),
        question: data.question,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const onSubmit: SubmitHandler<any> = async ({
    question,
    isCorrect,
    ...answers
  }) => {
    const answersFormat = Object.keys(answers).reduce((res: any[], item) => {
      const [, index] = item.split("-");

      res.push({
        content: answers[item],
        isCorrect: +index === +isCorrect,
      });

      return res;
    }, []);

    try {
      await QuestionApi.updateQuestion(params?.id as string, {
        question,
        answers: answersFormat,
      });

      alert("Update question successfully");
      navigate("/admin/questions");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <h1 className="font-semibold text-xl">Update Question</h1>

      <form action="" className="mt-6" onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4">
          <label htmlFor="" className="block">
            Question *
          </label>
          <input
            type="text"
            className="w-full px-3 py-2 rounded border border-black outline-none mt-2"
            placeholder="Enter your question"
            {...register("question", {
              required: true,
            })}
          />
        </div>

        <div className="mb-4">
          <label htmlFor="" className="block">
            Answers *
          </label>

          <div className="flex items-center gap-x-2">
            <input
              type="radio"
              {...register("isCorrect", { required: true })}
              id=""
              value={1}
            />

            <input
              type="text"
              className="w-full px-3 py-2 rounded border border-black outline-none mt-2"
              placeholder="Enter your question"
              {...register("answer-1", { required: true })}
            />
          </div>

          <div className="flex items-center gap-x-2">
            <input
              type="radio"
              {...register("isCorrect", { required: true })}
              id=""
              value={2}
            />

            <input
              type="text"
              className="w-full px-3 py-2 rounded border border-black outline-none mt-2"
              placeholder="Enter your question"
              {...register("answer-2", { required: true })}
            />
          </div>

          <div className="flex items-center gap-x-2">
            <input
              type="radio"
              {...register("isCorrect", { required: true })}
              id=""
              value={3}
            />

            <input
              type="text"
              className="w-full px-3 py-2 rounded border border-black outline-none mt-2"
              placeholder="Enter your question"
              {...register("answer-3", { required: true })}
            />
          </div>

          <div className="flex items-center gap-x-2">
            <input
              type="radio"
              {...register("isCorrect", { required: true })}
              id=""
              value={4}
            />

            <input
              type="text"
              className="w-full px-3 py-2 rounded border border-black outline-none mt-2"
              placeholder="Enter your question"
              {...register("answer-4", { required: true })}
            />
          </div>
        </div>

        <button
          disabled={!isValid}
          className="bg-black text-white mt-4 rounded px-3 py-2 [&:disabled]:opacity-50"
        >
          Update question
        </button>
      </form>
    </>
  );
};

export default UpdateQuestion;
