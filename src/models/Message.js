import mongoose from 'mongoose'

const Schema = new mongoose.Schema({
  content:{
    type: String,
    required: true 
  },
  author:{
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  }
})

export default mongoose.model("Message", Schema)