import knex from "knex";
import config from "./knexfile.mjs";

// Luo tietokantayhteys Knexillä
const db = knex(config.development);

// Lisää harjoitus tietokantaan
export const addExercise = async (exercise) => {
  return db("workouts").insert({ exercise });
};

// Hae kaikki harjoitukset tietokannasta
export const getExercises = async () => {
  return db("workouts").select("*");
};

// Vie tietokantayhteys muihin moduuleihin
export { db };
