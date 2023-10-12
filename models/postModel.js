const mongoose = require("mongoose");
const { Schema } = mongoose;


const postSchema = new Schema(
  {
    content: String,
    images: {
      type: Array,
      required: true,
    },
    likes: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
      },
    ],
    comments: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "comment",
      },
    ],
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
    },
    reports: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
      },
    ],
  },
  {
    timestamps: true,
  }
);


module.exports = mongoose.model('post', postSchema);