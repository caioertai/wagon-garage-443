// Parameters
const baseURL = "https://wagon-garage-api.herokuapp.com";
const garageSlug = "le-wagons-wagons";
const url = `${baseURL}/${garageSlug}/cars`;

// Element selection
const carsList = document.querySelector(".cars-list");

const buildCarTag = (carObject) => {
  return `
    <div class="car">
      <div class="car-image">
        <img src="http://loremflickr.com/280/280/${carObject.brand} ${carObject.model}" />
      </div>
      <div class="carObject-info">
        <h4>${carObject.brand} ${carObject.model}</h4>
        <p><strong>Owner:</strong> ${carObject.owner}</p>
        <p><strong>Plate:</strong> ${carObject.plate}</p>
      </div>
    </div>
  `
}

const insertCar = (car) => {
  carsList.insertAdjacentHTML("beforeEnd", buildCarTag(car));
}

const insertCars = (cars) => {
  cars.forEach(insertCar);
};

const fetchAndInsertCars = () => {
  fetch(url)
    .then(response => response.json())
    .then(insertCars);
}

const postCar = (carObject) => {
  fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(carObject)
  })
    .then(response => response.json())
    .then((car) => {
      insertCar(car);
    })

}

const handleCarsForm = (event) => {
  event.preventDefault();
  // 3. Get user inputs from the form
  const brandValue = document.querySelector("#brand").value;
  const modelValue = document.querySelector("#model").value;
  const plateValue = document.querySelector("#plate").value;
  const ownerValue = document.querySelector("#owner").value;
  // 4. Build a car
  const car = {
    brand: brandValue,
    model: modelValue,
    plate: plateValue,
    owner: ownerValue,
  };
  // 5. Post the car
  postCar(car);
}

export { handleCarsForm, fetchAndInsertCars };
