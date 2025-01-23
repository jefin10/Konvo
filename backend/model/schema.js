import mongoose from "mongoose";

const chatSchema = new mongoose.Schema({
    text: {type: String, required: true },
    time: { type: Date, default: Date.now },
    sent:{type:Boolean, default:true}
});

const chatPeopleSchema = new mongoose.Schema({
    chat_person: { type: String, required: true },
    timestamp: { type: Date, default: Date.now },
    chat: [chatSchema]
});

const userSchema = new mongoose.Schema({
    userId: { type: String,required: true ,unique: true},
    username: { type: String,required: true },
    password: { type: String,required: true },
    chat_people: [chatPeopleSchema]
});

const User = mongoose.model("User", userSchema);
export default User;