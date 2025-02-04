export default {
  development: {
    client: "sqlite3",
    connection: {
      filename: "./dev.sqlite" // Tietokanta tallennetaan tähän tiedostoon
    },
    useNullAsDefault: true
  }
};
