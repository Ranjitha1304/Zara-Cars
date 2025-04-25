
  function redirectToLocation() {
    const pickupLocation = document.getElementById('pickupLocation').value;

    // Map each location to its corresponding HTML page
    const locationMap = {
      "Surandai": "/surandai.html",
      "Tirunelveli": "/tirunelveli.html",
      "Sankarankovil": "/sankarankovil.html",
      "Kovilpatti": "/kovilpatti.html",
      "Rajapalayam": "/rajapalayam.html",
      "Pavoorchatram": "/pavoorchatram.html",
      "Sengottai": "/sengotai.html"
    };

    if (locationMap[pickupLocation]) {
      window.location.href = locationMap[pickupLocation];
    } else {
      alert("Please select a valid Pickup Location.");
    }
  }

