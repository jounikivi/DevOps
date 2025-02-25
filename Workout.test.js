import { jest } from "@jest/globals"; // 🔹 Oikea tapa tuoda jest-mock ESM-moduuleissa
import { Workout } from "./Workout.js";
import logger from "./logger.js";

// Tehtävä 5c: Spy-testin toteutus logituksen tarkistamiseen
describe("Lokituksen testaus - Tehtävä 5c", () => {
    test("varmistaa, että logger.info kutsutaan oikeilla argumenteilla", () => {
        // ARRANGE: Luodaan vakooja (spy) loggaustoiminnolle
        const loggerSpy = jest.spyOn(logger, "info");
        const workout = new Workout();
        
        // ACT: Lisätään harjoitus ja tarkistetaan logitus
        workout.addExercise("squats");
        
        // ASSERT: Tarkistetaan, että logger.info kutsuttiin kerran oikeilla argumenteilla
        expect(loggerSpy).toHaveBeenCalledTimes(1);
        expect(loggerSpy).toHaveBeenCalledWith(expect.objectContaining({
            level: 30,
            workoutId: 1,
            exerciseName: "squats",
            msg: "Exercise squats added to workout 1"
        }));

        // Puhdistetaan vakooja testin jälkeen
        loggerSpy.mockRestore();
    });
});

// Tehtävä 5e: Stub korvaamaan logger.info testin ajaksi
describe("Lokituksen stub-testaus - Tehtävä 5e", () => {
    test("stub korvaa logger.info eikä tulosta testin aikana", () => {
        // ARRANGE: Luodaan stub loggerille
        const loggerStub = jest.spyOn(logger, "info").mockImplementation(() => {});

        const workout = new Workout();

        // ACT: Lisätään harjoitus, mutta lokiviesti ei tulostu
        workout.addExercise("pushups");

        // ASSERT: Tarkistetaan, että logger.info kutsuttiin kerran
        expect(loggerStub).toHaveBeenCalledTimes(1);
        expect(loggerStub).toHaveBeenCalledWith(expect.objectContaining({
            exerciseName: "pushups"
        }));

        // Puhdistetaan stub testin jälkeen
        loggerStub.mockRestore();
    });
});

// Tehtävä 6b: Mocking imports
describe("Mocking imports - Tehtävä 6b", () => {
    test("varmistaa, että logger.info voidaan mockata ilman oikeaa kutsua", () => {
        // ARRANGE: Luodaan mock loggerille testin sisällä
        const loggerMock = jest.spyOn(logger, "info").mockImplementation(() => {});

        const workout = new Workout();
        
        // ACT: Lisätään harjoitus, mutta mockauksen ansiosta lokiviestiä ei tulosteta
        workout.addExercise("mocked-exercise");
        
        // ASSERT: Tarkistetaan, että mockattu logger.info kutsuttiin kerran
        expect(loggerMock).toHaveBeenCalledTimes(1);
        expect(loggerMock).toHaveBeenCalledWith(expect.objectContaining({
            exerciseName: "mocked-exercise"
        }));

        // Puhdistetaan mock testin jälkeen
        loggerMock.mockRestore();
    });
});
