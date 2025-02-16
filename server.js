import experss, { json } from 'express';

const app = express();

app.use((express,json()));

app.get("/Workout", (req, res) => {
  res.json([{ id: 1, exercise: "squats" }]);
});