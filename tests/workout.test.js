
import { Workout } from "../../Workout.js";
import knex from "knex";
import config from "../../knexfile.js";

const db = knex(config.development);

befforeAll(async () => {
  await db.migrate.latest(); // Varmistaa, että viimeisin migraatio on käytössä
});

befforeEach(async () => {
  await db.seed.run(); // Tyhjennetään workouts-taulu ennen jokaista testiä
});

afterAll(async () => {  
  await db.destroy(); // Sulkee tietokantayhteyden testien jälkeen
});

describe("Workout Integration Tests", () => {
  test("should add a new exercise to the database", async () => {
    // ARRANGE: Luodaan Workout-instanssi
    const workout = new Workout();

    // ACT: Lisätään harjoitus "squats" tietokantaan
    await db("workouts").insert({ exercise: "squats" });

    // ASSERT: Haetaan kaikki harjoitukset ja tarkistetaan, että "squats" on lisätty
    const exercises = await db("workouts").select("*");
    expect(exercises).toHaveLength(1);
    expect(exercises[0].exercise).toBe("squats");
  });
});

test("should remove an exercise from the database", async () => {
  // ARRANGE: Lisätään harjoitus "squats" tietokantaan
  await db("workouts").insert({ exercise: "squats" });

  // ACT: Poistetaan "squats" tietokannasta
  await db("workouts").where({ exercise: "squats" }).del();

  // ASSERT: Varmistetaan, että tietokanta on tyhjä
  const exercises = await db("workouts").select("*");
  expect(exercises).toHaveLength(0);
});

