import express from "express";
const app = express();
app.use(express.json());

let todos = [];

app.get("/todos", (req, res) => res.json(todos));

app.post("/todos", (req, res) => {
  const todo = { id: Date.now(), task: req.body.task };
  todos.push(todo);
  res.status(201).json(todo);
});

app.put("/todos/:id", (req, res) => {
  const todo = todos.find((t) => t.id == req.params.id);
  if (todo) todo.task = req.body.task;
  res.json(todo || {});
});

app.delete("/todos/:id", (req, res) => {
  todos = todos.filter((t) => t.id != req.params.id);
  res.status(204).send();
});

app.listen(3000);
