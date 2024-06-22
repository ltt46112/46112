import { useEffect, useState } from "react";
import AddConfig from "./AddConfig";
import QuizApi, { IQuizResponse } from "../../api/configQuizApi";
import UpdateConfig from "./UpdateConfig";

const QuizConfig = () => {
  const [loading, setLoading] = useState(true);
  const [quizConfig, setQuizConfig] = useState<IQuizResponse | null>(null);

  useEffect(() => {
    fetchConfigs();
  }, []);

  const fetchConfigs = async () => {
    try {
      const { data } = await QuizApi.getConfig();
      setQuizConfig(data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h1 className="font-semibold text-xl">Quiz Config</h1>

      {quizConfig ? (
        <UpdateConfig data={quizConfig} refresh={fetchConfigs} />
      ) : (
        <AddConfig refresh={fetchConfigs} />
      )}
    </div>
  );
};

export default QuizConfig;
