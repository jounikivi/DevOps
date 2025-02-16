export function up(knex) {
  return knex.schema.createTable("workouts", function (table) {
    table.increments("id").primary();
    table.string("exercise").notNullable();
    table.timestamp("created_at").defaultTo(knex.fn.now());
  });
}

export function down(knex) {
  return knex.schema.dropTable("workouts");
}
