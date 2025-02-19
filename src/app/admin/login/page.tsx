"use client";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";

export default function AdminLogin() {
  const router = useRouter();

  interface FormData {
    username: string;
    password: string;
  }

  const { register, handleSubmit, formState: { errors } } = useForm<FormData>();

  const handleLogin = (data: { password: string; username: string }) => {
    if (
      data.password === process.env.NEXT_PUBLIC_STATIC_PASSWORD &&
      data.username === process.env.NEXT_PUBLIC_STATIC_USERNAME
    ) {
      localStorage.setItem("isAdmin", "true");
      router.push("/admin");
    } else {
      alert("Invalid username or password!");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-xl p-8 w-full max-w-sm">
        <h1 className="text-2xl font-semibold text-center text-gray-800 mb-6">Admin Login</h1>
        <form onSubmit={handleSubmit(handleLogin)} className="space-y-4">
          <div>
            <input
              type="text"
              placeholder="Admin Username"
              {...register("username", { required: "Username is required" })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
            />
            {errors.username && <p className="text-red-500 text-sm mt-1">{errors.username.message}</p>}
          </div>
          <div>
            <input
              type="password"
              placeholder="Admin Password"
              {...register("password", { required: "Password is required" })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
            />
            {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>}
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
