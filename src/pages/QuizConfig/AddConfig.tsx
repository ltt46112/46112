import { useEffect, useRef, useState } from "react";
import { QuestionApi } from "../../api/questionApi";
import QuizApi from "../../api/configQuizApi";

export interface IQuestion {
  _id: string;
  question: string;
  answers: {
    content: string;
    isCorrect: boolean;
  }[];
}

import dayjs from "dayjs";
import duration from "dayjs/plugin/duration";
import AddConfigStep, { IListQuestionStep } from "./AddConfigStep";
dayjs.extend(duration);

interface IAddConfigProps {
  refresh: () => void;
}

const AddConfig = (props: IAddConfigProps) => {
  const { refresh } = props;

  const [videoInfo, setVideoInfo] = useState({
    url: "",
    duration: 0,
  });

  const [questions, setQuestions] = useState<IQuestion[]>([]);

  useEffect(() => {
    fetchQuestions();
  }, []);

  const fetchQuestions = async () => {
    try {
      const { data } = await QuestionApi.getQuestions();

      setQuestions(data);
    } catch (error) {
      console.log(error);
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

  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [step, setStep] = useState(1);

  const onAddConfig = async (listQuestionsStep: IListQuestionStep[]) => {
    try {
      await QuizApi.addConfig({
        url: videoInfo.url,
        questionsStep: listQuestionsStep,
      });

      alert("Add quiz successfully");
      refresh();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="mt-3">
        {step === 1 && (
          <>
            <div className="mb-4">
              <label htmlFor="">Video url *</label>
              <input
                type="text"
                className="w-full px-3 py-2 rounded border border-black outline-none mt-2"
                placeholder="Nhập đường url video"
                value={videoInfo.url}
                onChange={(e) => {
                  const url = e.target.value;

                  setVideoInfo((prev) => ({ ...prev, url }));
                }}
              />
            </div>

            <button
              onClick={onCheckVideoDuration}
              className="bg-black px-3 py-2 text-white rounded outline-none mt-3"
            >
              Tiếp tục
            </button>
          </>
        )}

        {step === 2 && (
          <AddConfigStep
            onSubmit={onAddConfig}
            type="ADD"
            questions={questions}
            videoUrl={videoInfo.url}
          />
        )}
      </div>

      <video hidden ref={videoRef}></video>
    </>
  );
};

export default AddConfig;
