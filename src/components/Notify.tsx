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
    console.log("Form Submitted:", data);
    toast.success("You will be notified!");
    reset(); // Clear form after submission
  };

  return (
    <Dialog>
      <DialogTrigger asChild className="w-full justify-center items-center bg-white hover:bg-yellow-700">
        <Button variant="default" size="lg" className="text-black font-bold">
          Notify Me
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Get Notified</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {/* Name Field */}
          <div className="space-y-2">
            <Label htmlFor="name">Name</Label>
            <Input
              id="name"
              placeholder="Enter your name"
              {...register("name", { required: "Name is required" })}
            />
            {errors.name && <p className="text-red-500">{errors.name.message}</p>}
          </div>

          {/* Email Field */}
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="Enter your email"
              {...register("email", { 
                required: "Email is required",
                pattern: { value: /^\S+@\S+\.\S+$/, message: "Enter a valid email" }
              })}
            />
            {errors.email && <p className="text-red-500">{errors.email.message}</p>}
          </div>

          {/* Company Field (Optional) */}
          <div className="space-y-2">
            <Label htmlFor="company">Company</Label>
            <Input
              id="company"
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
              className="min-h-[100px]"
              {...register("message", { required: "Message is required" })}
            />
            {errors.message && <p className="text-red-500">{errors.message.message}</p>}
          </div>

          {/* Submit Button */}
          <Button type="submit" className="w-64">
            Notify Me
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default Notify;
