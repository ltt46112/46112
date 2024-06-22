import { useEffect, useMemo, useRef, useState } from "react";

import {
  MediaPlayer,
  MediaPlayerInstance,
  MediaProvider,
  useStore,
} from "@vidstack/react";
import {
  defaultLayoutIcons,
  DefaultVideoLayout,
} from "@vidstack/react/player/layouts/default";

import "@vidstack/react/player/styles/default/theme.css";
import "@vidstack/react/player/styles/default/layouts/video.css";
import classNames from "classnames";
import { IQuizResponse } from "../../api/configQuizApi";
import ListQuestionStep from "../Questions";

interface IVideoPlayerProps {
  url: string;
  onStarted: () => void;
  quizData: IQuizResponse;
  onEnded: () => void;
}

const VideoPlayer = (props: IVideoPlayerProps) => {
  const { url, onStarted, quizData, onEnded } = props;

  const [currentTime, setCurrentTime] = useState(0);
  const [showPlayer, setShowPlayer] = useState(true);
  const [stepIdsPassed, setStepIdsPassed] = useState<string[]>([]);

  const playerRef = useRef<MediaPlayerInstance>(null);

  const { ended } = useStore(MediaPlayerInstance, playerRef);

  const { isPause, questionStep } = useMemo(() => {
    const currentTimeFormat = Math.floor(currentTime);

    const foundStepTime = quizData.questionsStep.find(
      (it) => it.time === currentTimeFormat
    );

    const isPause = foundStepTime && !stepIdsPassed.includes(foundStepTime._id);

    const questions = ended
      ? quizData.questionsStep[quizData.questionsStep.length - 1]
      : foundStepTime;

    return {
      stepInfo: foundStepTime,
      isPause,
      questionStep: questions,
    };
  }, [currentTime, quizData.questionsStep, stepIdsPassed, ended]);

  useEffect(() => {
    if (!playerRef.current) return;

    if (isPause) {
      playerRef.current.pause();
      onPausePlayer();
    }
  }, [isPause]);

  const onPausePlayer = () => {
    setShowPlayer(false);
  };

  const onSubmitAnswer = (isPass: boolean) => {
    if (isPass) {
      if (!questionStep) {
        alert("Không tìm thấy câu hỏi!");
        return;
      }
      const newStepIdsPassed = [...stepIdsPassed, questionStep?._id];
      setStepIdsPassed(newStepIdsPassed);

      if (ended && newStepIdsPassed.length === quizData.questionsStep.length) {
        onEnded();
        return;
      }
    } else {
      alert("Trả lời không chính xác");
      const currentTimeIndex = quizData.questionsStep.findIndex(
        (it) => it._id === questionStep?._id
      );

      const prevTime =
        currentTimeIndex === 0
          ? 0
          : quizData.questionsStep[currentTimeIndex - 1].time;

      setCurrentTime(prevTime);
    }

    setShowPlayer(true);

    setTimeout(() => {
      playerRef.current?.play();
    }, 1000);
  };

  const onEnd = () => {
    if (stepIdsPassed.length !== quizData.questionsStep.length) {
      onPausePlayer();
    } else {
      onEnded();
    }
  };

  return (
    <div>
      {!showPlayer && (
        <ListQuestionStep data={questionStep} onAnswerSubmit={onSubmitAnswer} />
      )}

      <MediaPlayer
        src={url}
        className={classNames("w-1/2 max-w-full max-md:w-full", {
          hidden: !showPlayer,
        })}
        onStarted={onStarted}
        keyDisabled
        currentTime={currentTime}
        onTimeUpdate={({ currentTime }) => {
          setCurrentTime(currentTime);
        }}
        ref={playerRef}
        onEnd={onEnd}
      >
        <MediaProvider />
        <DefaultVideoLayout icons={defaultLayoutIcons} disableTimeSlider />
      </MediaPlayer>
    </div>
  );
};

export default VideoPlayer;
