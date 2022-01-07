import Conversation from "../model/Conversation.js";

export const newConversation = async (req, res) => {
  let senderId = req.body.senderId;
  let reciverId = req.body.reciverId;


  try {
    const exist = await Conversation.findOne({
      members: { $all: [reciverId, senderId] },
    });

    if (exist) {
      res.status(200).json("conversation already exist!!!");
      return;
    }
    const newChat = new Conversation({
      members: [senderId, reciverId],
    });
    await newChat.save();
    res.status(200).json("new conversation added successfully!!");
  } catch (error) {
    res.status(500).json("error calling new Conversation!!");
  }
};

export const getConversation = async (req, res) => {
  try {
    const conversation = await Conversation.findOne({
      members: { $all: [req.body.sender, req.body.reciver] },
    });
    res.status(200).json(conversation);
  } catch (error) {
    res.status(500).json(error);
  }
};
