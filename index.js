require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const PORT = process.env.PORT || 4000;
const taskRoutes = require("./routes/taskRoutes");

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.status(200).json({ success: true, message: "Task Duty Server" });
});
app.use("/api/task", taskRoutes);

const startServer = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL, { dbName: "TaskDuty" });
    app.listen(PORT, () => {
      console.log(`App is running on port :${PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
};
startServer();
