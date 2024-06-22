import {
  RouterProvider,
  createBrowserRouter,
  redirect,
} from "react-router-dom";
import HomePage from "./pages/HomePage";
import AdminLayout from "./Layouts/AdminLayout";
import ListQuestion from "./pages/QuestionManagement/ListQuestion";
import AddQuestion from "./pages/QuestionManagement/AddQuestion";
import Dashboard from "./pages/Dashboard";
import UpdateQuestion from "./pages/QuestionManagement/EditQuestion";
import QuizConfig from "./pages/QuizConfig/QuizConfig";
import PlayHistory from "./pages/PlayHistory";
import SignIn from "./pages/SignIn";
import WrapperAdminContent from "./Layouts/WrapperAdminContent";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "",
      element: <HomePage />,
    },
    {
      path: "sign-in",
      element: <SignIn />,
    },
    {
      path: "admin",
      element: <AdminLayout />,
      loader: () => {
        const userInfo = JSON.parse(
          localStorage.getItem("QUIZ_USER_INFO") as string
        );

        if (!userInfo?.email) {
          throw redirect("/sign-in");
        }

        return null;
      },
      children: [
        {
          path: "",
          element: <Dashboard />,
        },
        {
          path: "questions",
          element: (
            <WrapperAdminContent>
              <ListQuestion />
            </WrapperAdminContent>
          ),
        },
        {
          path: "questions/add",
          element: (
            <WrapperAdminContent>
              <AddQuestion />
            </WrapperAdminContent>
          ),
        },
        {
          path: "questions/:id/edit",
          element: (
            <WrapperAdminContent>
              <UpdateQuestion />
            </WrapperAdminContent>
          ),
        },
        {
          path: "configs",
          element: (
            <WrapperAdminContent>
              <QuizConfig />
            </WrapperAdminContent>
          ),
        },
        {
          path: "play-history",
          element: (
            <WrapperAdminContent>
              <PlayHistory />
            </WrapperAdminContent>
          ),
        },
      ],
    },
  ]);

  return (
    <div className="font-roboto">
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
