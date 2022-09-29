const events = require("events");
const eventEmitter = new events();

eventEmitter.on("start", () => {
    console.log("Durante")
});

console.log("Antes");

eventEmitter.emit("start");           //Exacução do evento de forma síncrona, pois está sincronizado.

console.log("Depois");

