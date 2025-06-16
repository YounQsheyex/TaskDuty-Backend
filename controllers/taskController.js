const TASK = require("../models/taskModel");

const create = async (req, res) => {
  try {
    const createTask = new TASK(req.body);
    const { title } = createTask;
    const taskExist = await TASK.findOne({ title });
    if (taskExist) {
      return res.status(400).json({ message: "Task already exist" });
    }
    const saveTask = await createTask.save();
    return res
      .status(200)
      .json({ message: "Task created successfully", saveTask });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const newTask = async (req, res) => {
  try {
    const allTask = await TASK.find();
    if (allTask.length === 0) {
      return res.status(404).json({ message: "No task found" });
    }
    res.status(200).json(allTask);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const update = async (req, res) => {
  try {
    const id = req.params.id;
    const taskExist = await TASK.findById(id);
    if (!taskExist) {
      return res.status(404).json({ message: "Task not found" });
    }
    const updateTask = await TASK.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    return res
      .status(201)
      .json({ message: "Task Updated Succesfully", updateTask });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteTask = async (req, res) => {
  try {
    const id = req.params.id;
    const taskExist = await TASK.findById({ _id: id });
    if (!taskExist) {
      return res.status(404).json({ message: "Task not found" });
    }
    await TASK.findByIdAndDelete({ _id: id });
    res.status(201).json({ message: "Task Deleted Succesfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { newTask, create, update, deleteTask };
