import mongoose from 'mongoose'

const threadSchema = new Schema({
    threadId: {
        type: String,
        required: true,
        unique: true,
      },
      title: {
        type: String,
        required: true,
      },
      description: {
        type: String,
        required: true,
      },

      comments: {
        type: [
          {
            userId: {
              type: mongoose.Schema.Types.ObjectId,
              ref: "User",
            },
            text: {
              type: String,
              required: true,
            },
            date: {
              type: Date,
              default: Date.now,
            },
          },
        ],
      },
      developer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
      },
})

const Thread = mongoose.model("Thread", threadSchema)

export default Thread