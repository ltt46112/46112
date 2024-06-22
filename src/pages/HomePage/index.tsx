import { useEffect, useRef, useState } from "react";
import ConfigQuizApi, { IQuizResponse } from "../../api/configQuizApi";
import VideoPlayer from "../../components/VideoPlayer";
import { formatTime } from "@vidstack/react";
import { QuizApi } from "../../api/quizApi";
import Header from "../../components/Header";
import MainContent from "../../components/MainContent";
import Footer from "../../components/Footer";

import styles from "./index.module.css";

import { Helmet } from "react-helmet";

const HeaderHelmet = () => {
  return (
    <>
      <Helmet>
        <link
          href="assets/vendor/bootstrap/css/bootstrap.min.css"
          rel="stylesheet"
        />
        <link
          href="assets/vendor/bootstrap-icons/bootstrap-icons.css"
          rel="stylesheet"
        />
        <link href="assets/vendor/aos/aos.css" rel="stylesheet" />
        <link
          href="assets/vendor/glightbox/css/glightbox.min.css"
          rel="stylesheet"
        />
        <link
          href="assets/vendor/swiper/swiper-bundle.min.css"
          rel="stylesheet"
        />

        <link href="assets/css/main.css" rel="stylesheet" />

        <script src="assets/vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
        <script src="assets/vendor/php-email-form/validate.js"></script>
        <script src="assets/vendor/aos/aos.js"></script>
        <script src="assets/vendor/glightbox/js/glightbox.min.js"></script>
        <script src="assets/vendor/swiper/swiper-bundle.min.js"></script>
        <script src="assets/vendor/waypoints/noframework.waypoints.js"></script>
        <script src="assets/vendor/imagesloaded/imagesloaded.pkgd.min.js"></script>
        <script src="assets/vendor/isotope-layout/isotope.pkgd.min.js"></script>
        <script src="assets/js/main.js"></script>
      </Helmet>
    </>
  );
};

const HomePage = () => {
  const [status, setStatus] = useState<"IDE" | "STARTED" | "ENDED">("IDE");
  const [quizData, setQuizData] = useState<IQuizResponse | null>(null);
  const [showLoading, setShowLoading] = useState(true);

  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const [playerInfo, setPlayerInfo] = useState({
    time: 0,
    name: "",
  });

  useEffect(() => {
    const timerId = setTimeout(() => {
      setShowLoading(false);
    }, 1000);

    return () => clearTimeout(timerId);
  }, []);

  const onStartGame = async (playerName: string) => {
    try {
      setPlayerInfo((prev) => ({ ...prev, name: playerName }));
      const { data } = await ConfigQuizApi.getConfig();

      if (!data) {
        alert("Quiz not found!");
      } else {
        setQuizData(data);
        setStatus("STARTED");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const onStarted = () => {
    timerRef.current = setInterval(() => {
      setPlayerInfo((prev) => ({ ...prev, time: prev.time + 1 }));
    }, 1000);
  };

  const onEnded = async () => {
    timerRef.current && clearInterval(timerRef.current);
    setStatus("ENDED");

    try {
      await QuizApi.submitQuiz({
        name: playerInfo.name,
        totalTime: playerInfo.time,
      });
    } catch (error) {
      console.log(error);
    }
  };

  if (showLoading) {
    return (
      <>
        <HeaderHelmet />
        <div id="preloader"></div>
      </>
    );
  }

  return (
    <>
      <HeaderHelmet />

      {status === "IDE" && (
        <>
          <Header />
          <MainContent onStartGame={onStartGame} />
          <Footer />
        </>
      )}

      {status === "STARTED" && quizData && (
        <div className={styles.backgroundImage}>
          <div className="container mx-auto p-3">
            <h1 className="text-center font-semibold text-2xl">Quizizz Game</h1>

            <div className="text-center mt-4">
              <div className="flex items-center mb-3 justify-center gap-x-6">
                <p>Người chơi: {playerInfo.name}</p>

                <p className="font-semibold">
                  <span>Thời gian {`=> `}</span>

                  <span className="text-red-500">
                    {formatTime(playerInfo.time)}
                  </span>
                </p>
              </div>

              <VideoPlayer
                url={quizData?.url}
                onStarted={onStarted}
                quizData={quizData}
                onEnded={onEnded}
              />
            </div>
          </div>
        </div>
      )}

      {status === "ENDED" && (
        <div className="container mx-auto p-3">
          <h1 className="text-center font-semibold text-2xl">Quizizz Game</h1>

          <p className="mt-4 text-center">
            Game ended, total time: {formatTime(playerInfo.time)}
          </p>
        </div>
      )}
    </>
  );
};

export default HomePage;
