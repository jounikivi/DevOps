import  request  from "supertest";
import { app } from "../../server.js";

describe("Workout E2E Tests", () => {
  test("GET /workouts should return a list of workouts", async () => {

    const response = await request(app).get("/workouts");

    expect(response.status).toBe(200);
    expect(response.body).toBeInstanceOf(Array);
    extect(response.body.length).toBeGreaterThan(0);
    expect(response.body[0]).toHaveProperty("id");
    expect(response.body[0]).toHaveProperty("exercise");
  });
});

test("POST /workouts should add a new workout", async () => {

  const newWorkout = { exercise: "push-ups" };

  const response = await request(app)
    .post("/Workouts")
    .send(newExercise)
    .set("Content-Type", "application/json");

    expect(response.status).toBe(201);
    expect(response.body).toHaveProperty("id");
    expect(response.body.exercise).toBe("push-ups");
});
