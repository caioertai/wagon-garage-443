// Import plugins
import { handleCarsForm, fetchAndInsertCars } from "./cars";

// Assign behaviours
const carForm = document.querySelector("#new-car");
carForm.addEventListener("submit", handleCarsForm);

// Call ajax
fetchAndInsertCars();
