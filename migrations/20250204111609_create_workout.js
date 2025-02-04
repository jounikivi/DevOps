/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function up(knex) {
  await knex.schema.createTable("workouts", (table) => {
    table.increments("id").primary();  // Automaattisesti kasvava ID
    table.string("exercise").notNullable();  // Harjoituksen nimi (ei voi olla tyhjä)
  });
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function down(knex) {
  await knex.schema.dropTable("workouts");  // Poistaa workouts-taulun, jos peruutetaan
}
