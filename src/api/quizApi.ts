import { AxiosResponse } from "axios";
import { apiClient } from "./apiClient";

export interface ISubmitQuizBody {
  name: string;
  totalTime: number;
}

export interface IPlayHistoryResponse {
  _id: string;
  name: string;
  totalTime: number;
  createdAt: string;
  updatedAt: string;
}

export const QuizApi = {
  submitQuiz: (data: ISubmitQuizBody) => {
    return apiClient.post("/quizzes", data);
  },

  getPlayHistory: (): Promise<AxiosResponse<IPlayHistoryResponse[]>> => {
    return apiClient.get("/quizzes");
  },

  deleteHistory: () => {
    return apiClient.delete("/quizzes");
  },
};
