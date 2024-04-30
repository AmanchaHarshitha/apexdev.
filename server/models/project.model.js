import { mongoose, Schema } from "mongoose";

const projectSchema = new Schema({
  projectId: {
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
  imagelink: {
    type: String,
  },
  technologiesUsed: {
    type: [String],
  },
  likes: {
    type: Number,
    default: 0,
  },
  dislikes: {
    type: Number,
    default: 0,
  },
  rating: {
    type: Number,
    get: function () {
      if (this.likes + this.dislikes === 0) {
        return 0;
      }
      return (this.likes / (this.likes + this.dislikes)) * 100;
    },
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
}, {timestamps: true});

const Project = mongoose.model("Project", projectSchema);

export default Project;
