import knex from "knex";

const config = await import("./knexfile.js"); // Käyttää dynaamista importtia

const db = knex(config.default.development);

export const addExercise = async (exercise) => {
  return db("workouts").insert({ exercise });
};

export const getExercises = async () => {
  return db("workouts").select("*");
};

export { db };
