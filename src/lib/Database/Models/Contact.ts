import mongoose from "mongoose";

const contactSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { 
      type: String, 
      required: true, 
      match: [/\S+@\S+\.\S+/, "Please enter a valid email address"] 
    },
    company: { type: String, required: true },
    message: { type: String, required: true }
  },
  {
    timestamps: true,
  }
);

// Prevent redefining the model during hot reload (important for Next.js)
const Contact = mongoose.models.Contact || mongoose.model("Contact", contactSchema);

export default Contact;
