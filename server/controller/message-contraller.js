import Message from '../model/Message.js'
import Conversation from '../model/conversation.js'
export const newMessage = async (req, res) => {
    const newMessage = new Message(req.body)
    try {
        await newMessage.save()
        await Conversation.findByIdAndUpdate(req.body.conversationId, {message: req.body.text})
        res.status(200).json('message send successfully')
    } catch (error) {
        res.status(500).json(error)
    }
}


export const getMessages = async (req, res) => {
    try {
        const messages = await Message.find({ conversationId: req.params.id })
        res.status(200).json(messages)
    } catch (error) {
        res.status(500).json(error)
    }
}