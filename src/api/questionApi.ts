import { apiClient } from "./apiClient";

export const QuestionApi = {
  addQuestion: (data: any) => {
    return apiClient.post("/questions", data);
  },

  getQuestions: () => {
    return apiClient.get("/questions");
  },

  getQuestion: (id: string) => apiClient.get(`/questions/${id}`),

  deleteQuestion: (id: string) => apiClient.delete(`/questions/${id}`),

  updateQuestion: (id: string, data: any) =>
    apiClient.put(`/questions/${id}`, data),
};
