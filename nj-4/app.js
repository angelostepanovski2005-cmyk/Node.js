const crud = require("./crudManager");

const CARS_FILE = "cars.json";
const MOVIES_FILE = "movies.json";

console.log("--- STARTING CRUD DEMO --- \n");

console.log("=== Testing Cars ===");

crud.addEntity(CARS_FILE, { make: "Tesla", model: "Model 3", year: 2024 });
crud.addEntity(CARS_FILE, {
  make: "Porsche",
  model: "911 Carrera",
  year: 2025,
});
crud.addEntity(CARS_FILE, { make: "Toyota", model: "Rav4", year: 2023 });

const secondCar = crud.getEntityById(CARS_FILE, 2);
console.log("[READ SINGLE] Car with ID 2:", secondCar);

crud.updateEntity(CARS_FILE, 2, { model: "911 Turbo S", year: 2026 });

crud.deleteEntity(CARS_FILE, 1); 

console.log("[READ ALL] Current Cars List:", crud.getAllEntities(CARS_FILE));

console.log("\n--------------------------------------------\n");

console.log("=== Testing Movies ===");

crud.addEntity(MOVIES_FILE, {
  title: "Inception",
  director: "Christopher Nolan",
  rating: 8.8,
});
crud.addEntity(MOVIES_FILE, {
  title: "The Matrix",
  director: "Lana Wachowski",
  rating: 8.7,
});

console.log(
  "[READ ALL] Current Movies List:",
  crud.getAllEntities(MOVIES_FILE),
);
