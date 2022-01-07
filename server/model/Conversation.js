import mongoose from "mongoose";

const conversationSchema = new mongoose.Schema(
  {
    members: {
      type: Array,
    }
  },
  {
    timestamps: true,
  }
);

const chat = mongoose.model("conversation", conversationSchema);

export default chat;


    // message: {
    //   type: String,
    // },