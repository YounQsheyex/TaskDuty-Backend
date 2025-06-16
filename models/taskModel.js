const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const taskSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  priority: {
    type: String,
    enum: ["Important", "Urgent"],
    default: "Important",
  },
});

const TASK = mongoose.model("task", taskSchema);
module.exports = TASK;
