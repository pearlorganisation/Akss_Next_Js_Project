"use client";

import { Challenge, createChallenge } from "@/lib/Database/Actions/ChallengeAction";
import { useForm } from "react-hook-form";

const AddChallenge = () => {
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm<Challenge>();

  const onSubmitForm = async (data: Challenge) => {
    try {
      await createChallenge(data);
      reset(); // Clear the form after successful submission
      alert("Challenge added successfully!"); // Provide feedback to the user
    } catch (error) {
      console.error("Error adding challenge:", error);
      alert("Failed to add challenge.");
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Add New Challenge</h2>
      <form onSubmit={handleSubmit(onSubmitForm)} className="space-y-4">
        {/* Title Input */}
        <div>
          <label className="block font-semibold">Title:</label>
          <input
            type="text"
            {...register("title", { required: "Title is required" })}
            className="w-full p-2 border rounded"
          />
          {errors.title && <p className="text-red-500 text-sm">{errors.title.message}</p>}
        </div>

        {/* Description Input */}
        <div>
          <label className="block font-semibold">Description:</label>
          <textarea
            {...register("description", { required: "Description is required" })}
            className="w-full p-2 border rounded"
          />
          {errors.description && <p className="text-red-500 text-sm">{errors.description.message}</p>}
        </div>

        {/* Solution Input */}
        <div>
          <label className="block font-semibold">Solution:</label>
          <textarea
            {...register("solution", { required: "Solution is required" })}
            className="w-full p-2 border rounded"
          />
          {errors.solution && <p className="text-red-500 text-sm">{errors.solution.message}</p>}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
        >
          Add Challenge
        </button>
      </form>
    </div>
  );
};

export default AddChallenge;
