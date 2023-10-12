const mongoose = require("mongoose");
const { Schema } = mongoose;

const commentSchema = new Schema(
  {
    content: {
      type: String,
      required: true,
    },
    tag: Object,
    reply: mongoose.Schema.Types.ObjectId,
    likes: [{ type: mongoose.Schema.Types.ObjectId, ref: "user" }],
    user: { type: mongoose.Schema.Types.ObjectId, ref: "user" },
    postId: mongoose.Schema.Types.ObjectId,
    postUserId: mongoose.Schema.Types.ObjectId,
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("comment", commentSchema);
