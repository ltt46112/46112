import { ChangeEvent, useEffect, useRef, useState } from "react";
import QuizApi, { IQuizResponse } from "../../api/configQuizApi";
import { QuestionApi } from "../../api/questionApi";
import { IQuestion } from "./AddConfig";
import { TimePicker } from "antd";

import dayjs from "dayjs";
import duration from "dayjs/plugin/duration";
import AddConfigStep, { IListQuestionStep } from "./AddConfigStep";
dayjs.extend(duration);
import Player from "../../components/Player";

interface IUpdateConfigProps {
  data: IQuizResponse;
  refresh: () => void;
}

const UpdateConfig = (props: IUpdateConfigProps) => {
  const { data, refresh } = props;

  const [editable, setEditable] = useState(false);
  const [step, setStep] = useState(1);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const [videoInfo, setVideoInfo] = useState({
    url: "",
    duration: 0,
  });
  const [questions, setQuestions] = useState<IQuestion[]>([]);

  useEffect(() => {
    fetchQuestions();

    setListQuestionsStep(
      data.questionsStep.map((it, index) => ({
        step: index,
        questions: it.questions.map((x) => x._id),
        time: it.time,
      }))
    );

    setVideoInfo({
      url: data.url,
      duration: 0,
    });
  }, [data]);

  const fetchQuestions = async () => {
    try {
      const { data } = await QuestionApi.getQuestions();

      setQuestions(data);
    } catch (error) {
      console.log(error);
    }
  };

  const [listQuestionsStep, setListQuestionsStep] = useState<
    { step: number; questions: string[]; time: number }[]
  >([]);

  const renderStep = () => {
    return listQuestionsStep.map((questionStep, index) => {
      return (
        <div key={index} className="mb-3">
          <div className="flex items-center gap-x-3 mb-2">
            <p>{index + 1}: Hiện câu hỏi lúc:</p>

            <TimePicker
              className="w-60 max-w-full"
              placeholder="Chọn thời gian"
              showNow={false}
              value={dayjs().startOf("day").add(questionStep.time, "second")}
              format="HH:mm:ss"
              onChange={(data) => onChangeTime(data, index)}
            />
          </div>

          <select
            name=""
            id=""
            className="border border-black rounded px-3 py-1.5 w-full outline-none"
            onChange={(e) => onChangeQuestion(e, index)}
          >
            <option value="">---Select your question---</option>
            {questions.map((it) => (
              <option value={it._id} key={it._id}>
                {it.question}
              </option>
            ))}
          </select>

          {questionStep?.questions?.map((questionId) => {
            const foundQuestion = questions.find((it) => it._id === questionId);

            return (
              <div
                key={questionId}
                className="mt-2 flex items-center justify-between"
              >
                <p>{foundQuestion?.question}</p>

                <button onClick={() => onDeleteQuestion(index, questionId)}>
                  Delete
                </button>
              </div>
            );
          })}
        </div>
      );
    });
  };

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

  const onUpdateQuestions = async () => {
    try {
      await QuizApi.updateConfig(data._id, {
        questionsStep: listQuestionsStep,
      });

      alert("Update quiz successfully");
    } catch (error) {
      console.log(error);
    }
  };

  const onAddNew = () => {
    if (!editable) {
      setEditable(true);
      setListQuestionsStep([]);
    } else {
      onCheckVideoDuration();
    }
  };

  const onCheckVideoDuration = () => {
    if (!videoInfo.url || !videoRef.current) {
      alert("Please enter video url!");
      return;
    }

    videoRef.current.src = videoInfo.url;
    videoRef.current.addEventListener("loadeddata", () => {
      setVideoInfo((prev) => ({
        ...prev,
        duration: Math.floor(videoRef.current?.duration || 0),
      }));
      setStep(2);
    });
  };

  const onAddConfig = async (listQuestionsStep: IListQuestionStep[]) => {
    try {
      await QuizApi.updateConfig(data._id, {
        url: videoInfo.url,
        questionsStep: listQuestionsStep,
      });
      alert("Update quiz successfully");
      setEditable(false);
      setStep(1);
      refresh();
    } catch (error) {
      console.log(error);
    }
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

  return (
    <>
      <div className="mt-4">
        {step === 1 && (
          <>
            <div className="text-center mb-3">
              <Player videoUrl={videoInfo.url} />
            </div>

            <div className="mb-4">
              <label htmlFor="">Video url *</label>
              <input
                type="text"
                className="w-full px-3 py-2 rounded border border-black outline-none mt-2"
                placeholder="Enter your video url"
                value={videoInfo.url}
                onChange={(e) => {
                  const url = e.target.value;

                  setVideoInfo((prev) => ({ ...prev, url }));
                }}
                disabled={!editable}
              />
            </div>

            <button
              onClick={onAddNew}
              className="bg-black text-white rounded px-3 py-2 block mx-auto mt-3"
            >
              {editable ? "Continue" : "Update"}
            </button>
          </>
        )}

        {step === 2 && (
          <>
            <AddConfigStep
              questions={questions}
              videoUrl={videoInfo.url}
              type="UPDATE"
              onSubmit={onAddConfig}
            />
          </>
        )}

        {!editable && (
          <>
            <div className="mt-8">{renderStep()}</div>

            <button
              onClick={onUpdateQuestions}
              className="bg-black text-white rounded px-3 py-2 block mx-auto mt-3"
            >
              Update
            </button>
          </>
        )}
      </div>

      <video ref={videoRef} hidden></video>
    </>
  );
};

export default UpdateConfig;
