import { db, addExercise, getExercises } from "./db.mjs";

beforeEach(async () => {
  await db("workouts").truncate(); // Tyhjennä tietokanta ennen jokaista testiä
});

afterAll(async () => {
  await db.destroy(); // Sulje tietokantayhteys testien jälkeen
});

test("should add an exercise to the database", async () => {
  await addExercise("push-ups");
  const exercises = await getExercises();
  expect(exercises).toEqual([{ id: 1, exercise: "push-ups" }]);
});

test("should retrieve all exercises from the database", async () => {
  await addExercise("squats");
  await addExercise("lunges");
  const exercises = await getExercises();
  expect(exercises).toEqual([
    { id: 1, exercise: "squats" },
    { id: 2, exercise: "lunges" }
  ]);
});
