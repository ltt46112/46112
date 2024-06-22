import { ChangeEvent, useEffect, useState } from "react";
import { IPlayHistoryResponse, QuizApi } from "../../api/quizApi";
import { formatTime } from "@vidstack/react";
import dayjs from "dayjs";

const PlayHistory = () => {
  const [playHistory, setPlayHistory] = useState<IPlayHistoryResponse[]>([]);

  useEffect(() => {
    fetchPlayHistory();
  }, []);

  const fetchPlayHistory = async () => {
    try {
      const { data } = await QuizApi.getPlayHistory();

      setPlayHistory(data);
    } catch (error) {
      console.log(error);
    }
  };

  const onFilter = (e: ChangeEvent<HTMLSelectElement>) => {
    const filterType = e.target.value;

    let newData = [...playHistory];
    switch (filterType) {
      case "DEFAULT": {
        newData = newData.sort((a, b) => dayjs(b.createdAt).diff(a.createdAt));
        break;
      }

      case "TIME_DESC": {
        newData = newData.sort((a, b) => b.totalTime - a.totalTime);
        break;
      }

      case "TIME_ASC": {
        newData = newData.sort((a, b) => a.totalTime - b.totalTime);
        break;
      }
    }

    setPlayHistory(newData);
  };

  const onDelete = async () => {
    const isConfirm = confirm("Xác nhận xoá toàn bộ LS?");

    if (isConfirm) {
      try {
        await QuizApi.deleteHistory();
        alert("Xoá LS thành công");
        fetchPlayHistory();
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <>
      <div className="flex justify-between items-center">
        <h1 className="font-semibold text-xl">Play History Management</h1>

        <div className="flex items-center gap-x-3">
          <button
            className="bg-black text-white px-4 py-2 rounded"
            onClick={onDelete}
          >
            Xoá LS
          </button>

          <select
            name=""
            id=""
            className="border border-black px-3 py-2 rounded outline-none"
            onChange={onFilter}
          >
            <option value="">Sắp xếp theo</option>
            <option value="DEFAULT">Mặc định</option>
            <option value="TIME_DESC">Thời gian xem nhiều nhất</option>
            <option value="TIME_ASC">Thời gian xem ít nhất</option>
          </select>
        </div>
      </div>

      {!playHistory.length ? (
        <p className="mx-auto mt-4">Không có lịch sử nào</p>
      ) : (
        <table className="w-full mt-6 text-left">
          <thead>
            <tr>
              <th className="border border-black px-3 py-2">STT</th>
              <th className="border border-black px-3 py-2">Name</th>
              <th className="border border-black px-3 py-2">Total Time</th>
            </tr>
          </thead>

          <tbody>
            {playHistory.map((it, index) => (
              <tr key={it._id}>
                <td className="border border-black px-3 py-2">{index + 1}</td>
                <td className="border border-black px-3 py-2">{it.name}</td>
                <td className="border border-black px-3 py-2">
                  {formatTime(it.totalTime)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </>
  );
};

export default PlayHistory;
