// In-memory tasks array
let tasks = [];

export function getTasks(req, res) {
  res.json(tasks);
}

export function addTask(req, res) {
  const { title } = req.body;
  if (!title) return res.status(400).json({ error: "Task title is required" });

  const newTask = { id: Date.now(), title, done: false };
  tasks.push(newTask);
  res.json(newTask);
}

export function toggleTask(req, res) {
  const id = parseInt(req.params.id);
  const task = tasks.find(t => t.id === id);
  if (!task) return res.status(404).json({ error: "Task not found" });

  task.done = !task.done;
  res.json(task);
}

export function deleteTask(req, res) {
  const id = parseInt(req.params.id);
  tasks = tasks.filter(t => t.id !== id);
  res.json({ message: "Task deleted" });
}
