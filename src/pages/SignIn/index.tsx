import { SubmitHandler, useForm } from "react-hook-form";
import { AuthApi } from "../../api/authApi";
import { useNavigate } from "react-router-dom";

type Inputs = {
  email: string;
  password: string;
};

const SignIn = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { isValid },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = async (formData) => {
    try {
      const { data } = await AuthApi.signIn(formData);

      localStorage.setItem("QUIZ_USER_INFO", JSON.stringify(data.user));

      navigate("/admin");
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      alert(error?.response?.data?.message);
      console.log(error);
    }
  };

  return (
    <div className="container mx-auto p-3">
      <h1 className="font-semibold text-center text-xl">Đăng nhập tài khoản</h1>

      <form action="" onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4">
          <label htmlFor="" className="block">
            Email *
          </label>
          <input
            type="text"
            className="w-full px-3 py-2 rounded border border-black outline-none mt-2"
            placeholder="Enter your email"
            {...register("email", {
              required: "Vui lòng nhập email",
            })}
          />
        </div>

        <div className="mb-4">
          <label htmlFor="" className="block">
            Password *
          </label>
          <input
            type="password"
            className="w-full px-3 py-2 rounded border border-black outline-none mt-2"
            placeholder="Enter your password"
            {...register("password", {
              required: "Vui lòng nhập mật khẩu",
            })}
          />
        </div>

        <button
          disabled={!isValid}
          className="bg-black text-white mt-4 rounded px-3 py-2 [&:disabled]:opacity-50"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default SignIn;
