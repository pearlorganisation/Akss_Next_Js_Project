import mongoose from "mongoose";

const challengesSchema = new mongoose.Schema({
    title:{type: String, required: true},
    description:{type :String, required: true},
    solution:{type: String, required: true}
},
{
    timestamps: true
})

const Challenge = mongoose.models.challenges || mongoose.model("challenges", challengesSchema)
export default Challenge;