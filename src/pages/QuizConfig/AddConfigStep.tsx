import { MediaPlayer, MediaProvider } from "@vidstack/react";
import {
  DefaultVideoLayout,
  defaultLayoutIcons,
} from "@vidstack/react/player/layouts/default";
import { TimePicker } from "antd";
import { ChangeEvent, useState } from "react";
import { IQuestion } from "./AddConfig";

import dayjs from "dayjs";

export interface IListQuestionStep {
  step: number;
  questions: string[];
  time: number;
}

interface IAddConfigStepProps {
  type: "ADD" | "UPDATE";
  onSubmit: (listQuestionsStep: IListQuestionStep[]) => void;
  questions: IQuestion[];
  videoUrl: string;
}

const AddConfigStep = (props: IAddConfigStepProps) => {
  const { type, onSubmit, questions, videoUrl } = props;

  const [listQuestionsStep, setListQuestionsStep] = useState<
    IListQuestionStep[]
  >([]);
  const [listStep, setListStep] = useState<number[]>([0]);

  const onChangeQuestion = (
    e: ChangeEvent<HTMLSelectElement>,
    step: number
  ) => {
    const questionId = e.target.value;

    const foundQuestionStep = listQuestionsStep.find((it) => it.step === step);

    if (foundQuestionStep) {
      const foundQuestions = foundQuestionStep.questions.find(
        (id) => id === questionId
      );
      if (!foundQuestions) {
        const newData = listQuestionsStep.map((it) =>
          it.step === step
            ? { ...it, questions: [...it.questions, questionId] }
            : it
        );

        setListQuestionsStep(newData);
      }
    } else {
      setListQuestionsStep((prev) => [
        ...prev,
        {
          questions: [questionId],
          step,
          time: 0,
        },
      ]);
    }
  };

  const onDeleteQuestion = (step: number, questionId: string) => {
    const newData = listQuestionsStep.map((it) => {
      if (it.step === step) {
        const newQuestions = it.questions.filter((id) => id !== questionId);

        return {
          ...it,
          questions: newQuestions,
        };
      } else {
        return it;
      }
    });

    setListQuestionsStep(newData);
  };

  const onAddMore = () => {
    setListStep([...listStep, listStep.length]);
  };

  const onChangeTime = (date: dayjs.Dayjs, step: number) => {
    const second = dayjs
      .duration({
        hours: date.get("h"),
        minutes: date.get("minute"),
        seconds: date.get("second"),
      })
      .asSeconds();

    const foundData = listQuestionsStep.find((it) => it.step == step);

    if (foundData) {
      setListQuestionsStep(
        listQuestionsStep.map((it) =>
          it.step === step
            ? {
                ...it,
                time: second,
              }
            : it
        )
      );
    } else {
      setListQuestionsStep([
        ...listQuestionsStep,
        {
          step,
          questions: [],
          time: second,
        },
      ]);
    }
  };

  const renderStep = () => {
    return listStep.map((step) => {
      const questionsSelected = listQuestionsStep.find(
        (it) => it.step === step
      );

      return (
        <div className="mb-8" key={`step-item-${step}`}>
          <div className="flex items-center gap-x-3 mb-2">
            <p>{step + 1}: Hiện câu hỏi lúc:</p>

            <TimePicker
              className="w-60 max-w-full"
              placeholder="Chọn thời gian"
              onChange={(data) => onChangeTime(data, step)}
              showNow={false}
            />
          </div>

          <select
            name=""
            id=""
            className="border border-black rounded px-3 py-1.5 w-full outline-none"
            onChange={(e) => onChangeQuestion(e, step)}
          >
            <option value="">---Chọn câu hỏi---</option>
            {questions.map((it) => (
              <option value={it._id} key={it._id}>
                {it.question}
              </option>
            ))}
          </select>

          {questionsSelected?.questions?.map((questionId) => {
            const foundQuestion = questions.find((it) => it._id === questionId);

            return (
              <div
                key={questionId}
                className="mt-2 flex items-center justify-between"
              >
                <p>{foundQuestion?.question}</p>

                <button onClick={() => onDeleteQuestion(step, questionId)}>
                  Delete
                </button>
              </div>
            );
          })}
        </div>
      );
    });
  };

  return (
    <div>
      <div className="text-center mb-4">
        <MediaPlayer src={videoUrl} className="w-1/2 max-w-full max-md:w-full">
          <MediaProvider />
          <DefaultVideoLayout icons={defaultLayoutIcons} />
        </MediaPlayer>
      </div>

      {renderStep()}

      <button
        onClick={onAddMore}
        className="block mx-auto bg-black text-white px-4 py-1.5 rounded"
      >
        Thêm
      </button>

      <button
        onClick={() => onSubmit(listQuestionsStep)}
        className="bg-black text-white rounded px-3 py-2 my-3 outline-none [&:disabled]:opacity-50"
      >
        {type === "ADD" ? "Add config" : "Update quiz"}
      </button>
    </div>
  );
};

export default AddConfigStep;
