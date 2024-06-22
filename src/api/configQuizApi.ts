import { AxiosResponse } from "axios";
import { apiClient } from "./apiClient";

export interface IQuizResponse {
  _id: string;
  url: string;
  questionsStep: IQuestionsStep[];
}

export interface IQuestionsStep {
  _id: string;
  time: number;
  questions: {
    _id: string;
    question: string;
    answers: {
      _id: string;
      content: string;
      isCorrect: boolean;
    }[];
  }[];
}

interface IConfigBody {
  url?: string;
  questionsStep: {
    time: number;
    questions: string[];
  }[];
}

const QuizApi = {
  getConfig: (): Promise<AxiosResponse<IQuizResponse>> => {
    return apiClient.get("/configs");
  },

  addConfig: (data: IConfigBody) => apiClient.post("/configs", data),

  updateConfig: (id: string, data: IConfigBody) =>
    apiClient.put(`/configs/${id}`, data),
};

export default QuizApi;
