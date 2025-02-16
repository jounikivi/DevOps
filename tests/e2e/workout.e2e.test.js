import request from "supertest"; // Supertest kirjasto HTTP-pyyntöjen tekemiseen
import { app } from "../../server.js"; // Tuodaan Express-palvelin testattavaksi

describe("Workout API End-to-End Tests", () => {
  
  // Testaa, että GET /workouts palauttaa listan harjoituksista
  test("GET /workouts should return a list of workouts", async () => {
    const response = await request(app).get("/workouts"); // Lähetetään GET-pyyntö API:lle

    expect(response.status).toBe(200); // Varmistetaan, että statuskoodi on 200 (OK)
    expect(response.body).toBeInstanceOf(Array); // Varmistetaan, että vastaus on lista
    expect(response.body.length).toBeGreaterThan(0); // Varmistetaan, että listassa on vähintään yksi harjoitus
    expect(response.body[0]).toHaveProperty("id"); // Varmistetaan, että ensimmäisellä harjoituksella on "id"-kenttä
    expect(response.body[0]).toHaveProperty("exercise"); // Varmistetaan, että ensimmäisellä harjoituksella on "exercise"-kenttä
  });

  // Testaa, että POST /workouts lisää uuden harjoituksen
  test("POST /workouts should add a new workout", async () => {
    const newExercise = { exercise: "push-ups" }; // Määritellään lisättävä harjoitus

    const response = await request(app)
      .post("/workouts") // Lähetetään POST-pyyntö
      .send(newExercise) // Lähetetään harjoituksen tiedot JSON-muodossa
      .set("Content-Type", "application/json"); // Asetetaan pyynnön sisällön tyyppi JSON-muotoiseksi

    expect(response.status).toBe(201); // Varmistetaan, että statuskoodi on 201 (Created)
    expect(response.body).toHaveProperty("id"); // Varmistetaan, että vastauksessa on "id"-kenttä
    expect(response.body.exercise).toBe("push-ups"); // Varmistetaan, että harjoituksen nimi on oikein
  });
});
