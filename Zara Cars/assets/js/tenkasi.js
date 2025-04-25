const cars = [
  {
    id: 1,
    name: "Swift Maruti",
    type: "5",
    image: "./assets/images/5 Seater cars (Manual and automatic)-Santro AT Hyndai image.png",
    specs: ["Hatchback", "Manual", "5Seats", "₹2500 Perday"],
    fare: {
      base: 400, pickup: 500, insurance: "Included", deposit: 2000,
      total: 2900, kms: 539, fuel: "Excluded", extra: "7/km", tolls: "To be paid by you"
    }
  },
  {
    id: 2,
    name: "Santro AT Hyundai",
    type: "7",
    image: "./assets/images/Our Rental cars Manual -Baleno AT Maruti image.png",
    specs: ["SUV", "Automatic", "7Seats", "₹4000 Perday"],
    fare: {
      base: 600, pickup: 500, insurance: "Included", deposit: 3000,
      total: 4100, kms: 600, fuel: "Excluded", extra: "8/km", tolls: "To be paid by you"
    }
  },
  {
    id: 3,
    name: "Baleno AT Maruti",
    type: "5",
    image: "./assets/images/5 Seater cars (Manual and automatic)-Santro AT Maruti image.png",
    specs: ["SUV", "Automatic", "5Seats", "₹3500 Perday"],
    fare: {
      base: 600, pickup: 500, insurance: "Included", deposit: 3000,
      total: 4100, kms: 600, fuel: "Excluded", extra: "8/km", tolls: "To be paid by you"
    }
  },
  {
    id: 4,
    name: "Innova Crysta",
    type: "5",
    image: "./assets/images/5 Seater cars (Manual and automatic)-Swift Maruti image.png",
    specs: ["SUV", "Automatic", "5Seats", "₹4500 Perday"],
    fare: {
      base: 600, pickup: 500, insurance: "Included", deposit: 3000,
      total: 4100, kms: 600, fuel: "Excluded", extra: "8/km", tolls: "To be paid by you"
    }
  },
  {
    id: 5,
    name: "Santro AT Hyundai",
    type: "5",
    image: "./assets/images/7 Seater cars (Manual and Automatic)-Baleno AT Maruti image.png",
    specs: ["SUV", "Automatic", "5Seats", "₹3000 Perday"],
    fare: {
      base: 600, pickup: 500, insurance: "Included", deposit: 3000,
      total: 4100, kms: 600, fuel: "Excluded", extra: "8/km", tolls: "To be paid by you"
    }
  },
  {
    id: 6,
    name: "Innova Crysta",
    type: "7",
    image: "./assets/images/7 Seater cars (Manual and Automatic)-Santro AT Huyndai image.png",
    specs: ["SUV", "Automatic", "7Seats", "₹3000 Perday"],
    fare: {
      base: 600, pickup: 500, insurance: "Included", deposit: 3000,
      total: 4100, kms: 600, fuel: "Excluded", extra: "8/km", tolls: "To be paid by you"
    }
  },
  {
    id: 7,
    name: "Baleno AT Maruti",
    type: "5",
    image: "./assets/images/7 Seater cars (Manual and Automatic)-Swift Maruti.png",
    specs: ["SUV", "Automatic", "5Seats", "₹2000 Perday"],
    fare: {
      base: 600, pickup: 500, insurance: "Included", deposit: 3000,
      total: 4100, kms: 600, fuel: "Excluded", extra: "8/km", tolls: "To be paid by you"
    }
  },
  {
    id: 8,
    name: "Santro AT Hyundai",
    type: "7",
    image: "./assets/images/Our Rental cars Automatic -Santro AT Hyundai  image.png",
    specs: ["SUV", "Automatic", "7Seats", "₹4000 Perday"],
    fare: {
      base: 600, pickup: 500, insurance: "Included", deposit: 3000,
      total: 4100, kms: 600, fuel: "Excluded", extra: "8/km", tolls: "To be paid by you"
    }
  },
  {
    id: 9,
    name: "Innova Crysta",
    type: "7",
    image: "./assets/images/Our Rental cars Manual -Baleno AT Maruti image.png",
    specs: ["SUV", "Automatic", "7Seats", "₹3500 Perday"],
    fare: {
      base: 600, pickup: 500, insurance: "Included", deposit: 3000,
      total: 4100, kms: 600, fuel: "Excluded", extra: "8/km", tolls: "To be paid by you"
    }
  }

];

const specIcons = {
"SUV": "./assets/images/Cars Hatchback-icon.png",
"Hatchback": "./assets/images/Cars Hatchback-icon.png",
"Sedan": "./assets/images/Cars Hatchback-icon.png",
"Manual": "./assets/images/Manual cars icon.png",
"Automatic": "./assets/images/Manual cars icon.png",
"5Seats": "./assets/images/Cars seats icon.png",
"7Seats": "./assets/images/Cars seats icon.png",
};


function loadCars(carArray) {
  const container = document.getElementById("carList");
  container.innerHTML = "";
  carArray.forEach(car => {
    const card = document.createElement("div");
    card.className = "car-card";
    card.innerHTML = `
      <h5>${car.name}</h5>
      <img src="${car.image}">

  <div class="specs">
    ${car.specs.map(spec => {
// Skip icon if spec includes ₹ symbol
if (spec.includes("₹")) {
  return `<div class="spec-item"><span class="spec-text">${spec}</span></div>`;
}
return `
      <div class="spec-item">
        <img src="${specIcons[spec] || ''}" alt="${spec}" class="spec-icon" />
        <span class="spec-text">${spec}</span>
      </div>
    `}).join("")}
  </div>

      <button onclick="showDetails(${car.id})">View Details</button>
    `;
    container.appendChild(card);
  });
}


function filterCars() {
const type = document.getElementById("carType").value;
const pickup = document.getElementById("pickupLocation").value;
const drop = document.getElementById("dropLocation").value;
const date = document.getElementById("pickupDate").value;
const time = document.getElementById("pickupTime").value;

// Validation: check all fields
if (!pickup || !drop || !date || !time) {
alert("Please fill in all pickup/drop details, date, and time.");
return;
}

// If car type not selected, show all
if (!type) {
loadCars(cars);
return;
}

// Filter based on type
const filtered = cars.filter(car => car.type === type);
loadCars(filtered);
document.getElementById("carList").scrollIntoView({ behavior: "smooth" });
}


function showDetails(carId) {
  const car = cars.find(c => c.id === carId);
  const details = document.getElementById("detailsSection");
  const pickup = document.getElementById("pickupLocation").value;
  const drop = document.getElementById("dropLocation").value;
  const date = document.getElementById("pickupDate").value;
  const time = document.getElementById("pickupTime").value;

  document.getElementById("carList").style.display = "none";

  details.innerHTML = `
    <div class="details-left">
      <div class="content-left">
      <h3>${car.name}</h3>
      <img src="${car.image}" width="300" />

<div class="specs">
${car.specs.map(spec => {
// Skip icon if spec includes ₹ symbol
if (spec.includes("₹")) {
  return `<div class="spec-item"><span class="spec-text">${spec}</span></div>`;
}
return `
<div class="spec-item">
  <img src="${specIcons[spec] || ''}" alt="${spec}" class="spec-icon" />
  <span class="spec-text">${spec}</span>
</div>
`}).join("")}
</div>


</div>
      <div class="booking-box">
        <h4>BOOKING DETAILS</h4>
        <p>${pickup} (${time})<br>${date}</p>
        <strong>To</strong>
        <p>${drop} <br>${date}</p>
      </div>
    </div>

    <div class="details-right">
      <div class="fare-box">
        <h3>Fare Details</h3>
        <div class="line"><span>Base fare</span><span>₹ ${car.fare.base}</span></div>
        <div class="line"><span>Doorstep delivery & pickup</span><span>₹ ${car.fare.pickup}</span></div>
        <div class="line"><span>Insurance & GST</span><span>${car.fare.insurance}</span></div>
        <div class="line"><span>Refundable deposit</span><span>₹ ${car.fare.deposit}</span></div>
        <hr>
        <div class="line"><strong>Total</strong><strong>₹ ${car.fare.total}</strong></div>
        <hr>
        <div class="line"><span>Kms limit</span><span>${car.fare.kms} kms</span></div>
        <div class="line"><span>Fuel</span><span>${car.fare.fuel}</span></div>
        <div class="line"><span>Extra kms</span><span>${car.fare.extra}</span></div>
        <div class="line"><span>Tolls, Parking, etc.</span><span>${car.fare.tolls}</span></div>
        <button class="proceed-btn">Proceed To Pay</button>
      </div>
    </div>
  `;
  details.style.display = "flex";
}

loadCars(cars); // Show all cars initially
