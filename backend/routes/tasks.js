import { Router } from "express";
import { getTasks, addTask, toggleTask, deleteTask } from "../controllers/taskController.js";

const router = Router();

router.get("/", getTasks);
router.post("/", addTask);
router.put("/:id", toggleTask);
router.delete("/:id", deleteTask);

export default router;
