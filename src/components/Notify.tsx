"use client";

import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "react-toastify";
import axios from "axios";

// Define form field types
interface FormValues {
  name: string;
  email: string;
  company?: string;
  message: string;
}

const Notify: React.FC = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>();

  // Handle form submission
  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const res = await axios.post(`/api/contact`, data, config);
    console.log("the res is", res);
    toast.success("You will be notified!");
    reset(); // Clear form after submission
  };

  return (
    <Dialog>
      <DialogTrigger
        asChild
        className="w-[20%] bg-[#001A72] flex justify-center items-center  hover:bg-blue-500"
      >
        <Button variant="default" size="lg" className="text-white font-bold">
          Notify Me
        </Button>
      </DialogTrigger>
      <DialogContent className="w-full max-w-md mx-auto sm:max-w-lg md:max-w-xl lg:max-w-2xl px-16">
        <DialogHeader>
          <DialogTitle className="text-4xl font-michroma font-medium">Sign Up for Updates</DialogTitle>
        </DialogHeader>

        <h1 className="mt-4 text-[#646464] font-inter text-xl"> We appreciate your interest in iona.ai. We will notify you as soon as we have something suitable for you.</h1>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {/* Name Field */}
          <div className="space-y-2">
            <Label htmlFor="name">Name</Label>
            <Input
              id="name"
              placeholder="Enter your name"
              className="bg-[#D9D9D9]"
              {...register("name", { required: "Name is required" })}
            />
            {errors.name && (
              <p className="text-red-500">{errors.name.message}</p>
            )}
          </div>

          {/* Email Field */}
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              className="bg-[#D9D9D9]"
              placeholder="Enter your email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^\S+@\S+\.\S+$/,
                  message: "Enter a valid email",
                },
              })}
            />
            {errors.email && (
              <p className="text-red-500">{errors.email.message}</p>
            )}
          </div>

          {/* Company Field (Optional) */}
          <div className="space-y-2">
            <Label htmlFor="company">Company</Label>
            <Input
              id="company"
              className="bg-[#D9D9D9]"
              placeholder="Enter your company name"
              {...register("company")}
            />
          </div>

          {/* Message Field */}
          <div className="space-y-2">
            <Label htmlFor="message">Message</Label>
            <Textarea
              id="message"
              placeholder="Enter your message"
              className="min-h-[100px] bg-[#D9D9D9]"
              {...register("message", { required: "Message is required" })}
            />
            {errors.message && (
              <p className="text-red-500">{errors.message.message}</p>
            )}
          </div>

          {/* Submit Button */}
         <div className="flex items-center justify-center">
         <Button type="submit" className="w-[30%] bg-[#001A72] font-mono text-xl">
            Notify Me
          </Button>
         </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default Notify;
