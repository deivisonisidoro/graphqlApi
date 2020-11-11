import Message from "../../../models/Message"
import User from "../../../models/User"

export default {
   Message:{
    author: (message)=>  User.findById(message.author)
  },
  Query:{
    messages: ()=>Message.find(),
    message: (_, {id})=>Message.findById(id),
  },
  Mutation:{
    createMessage:async (_, {data}, {pubsub})=>{
      const message = await Message.create(data)
      pubsub.publish("MESSAGE_ADDED", {
        messageAdded: message
      })
      return message
     
    },
    updateMessage:(_, {id, data})=>Message.findOneAndUpdate(id, data, {new: true}),
    deleteMessage: async (_, {id})=>!!(await Message.findOneAndDelete(id)) 

  },
  Subscription:{
    messageAdded: {
      subscribe:(obj, args, {pubsub})=> pubsub.asyncIterator("MESSAGE_ADDED")
    }
  }
  
}