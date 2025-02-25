// logger.js
// Tehtävä 5a: Luodaan loggeri käyttämällä pino-kirjastoa

import pino from "pino";

// Luo loggeri, joka tallentaa lokiviestit JSON-muodossa
const logger = pino({
    level: "info", // Määritetään oletustasoksi "info"
    transport: {
        target: "pino-pretty", // Tulostaa luettavassa muodossa terminaaliin
        options: { colorize: true }
    }
});

export default logger; // 🔹 Varmista, että tämä rivi on mukana
