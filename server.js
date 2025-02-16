import express from "express";

const app = express();
app.use(express.json());

app.get("/workouts", (req, res) => {
  res.json([{ id: 1, exercise: "squats" }]);
});

app.post("/workouts", (req, res) => {
  const { exercise } = req.body;
  if (!exercise) {
    return res.status(400).json({ error: "Exercise name is required" });
  }
  res.status(201).json({ id: 2, exercise });
});

export { app };
