const router = require("express").Router();
const {
  newTask,
  create,
  update,
  deleteTask,
} = require("../controllers/taskController.js");

router.post("/newTask", create);
router.get("/allTask", newTask);
router.patch("/editTask/:id", update);
router.delete("/deleteTask/:id", deleteTask);
module.exports = router;
