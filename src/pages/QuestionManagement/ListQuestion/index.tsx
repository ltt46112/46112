import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { QuestionApi } from "../../../api/questionApi";

const ListQuestion = () => {
  const [questions, setQuestions] = useState([]);

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

  const onRemoveQuestion = async (id: string) => {
    const isConfirm = confirm("Are you sure you want to delete this question?");

    if (isConfirm) {
      try {
        await QuestionApi.deleteQuestion(id);

        fetchQuestions();
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <>
      <div className="flex justify-between items-center">
        <h1 className="font-semibold text-xl">Questions Management</h1>

        <Link
          to="/admin/questions/add"
          className="text-white bg-black rounded px-3 py-2 outline-none"
        >
          Add question
        </Link>
      </div>

      <table className="w-full mt-6 text-left">
        <thead>
          <tr>
            <th className="border border-black px-3 py-2">STT</th>
            <th className="border border-black px-3 py-2">Question</th>
            <th className="border border-black px-3 py-2">Actions</th>
          </tr>
        </thead>

        <tbody>
          {questions.map((it: any, index: number) => (
            <tr key={it._id}>
              <td className="border border-black px-3 py-2">{index + 1}</td>
              <td className="border border-black px-3 py-2">{it.question}</td>
              <td className="border border-black px-3 py-2">
                <div className="flex items-center gap-x-2">
                  <Link to={`/admin/questions/${it._id}/edit`}>Edit</Link>

                  <button onClick={() => onRemoveQuestion(it._id)}>
                    Delete
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default ListQuestion;
