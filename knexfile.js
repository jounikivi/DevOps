export default {
  development: {
    client: "sqlite3",
    connection: {
      filename: "./workout-dev.sqlite"
    },
    useNullAsDefault: true,
    migrations: {
      directory: "./migrations"
    },
    seeds: {
      directory: "./seeds"
    }
  }
};
