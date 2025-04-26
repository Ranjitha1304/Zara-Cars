const sidebar = document.getElementById("signInSidebar");
const form = document.getElementById("signInForm");
const successModal = document.getElementById("successModal");
const signInLink = document.getElementById("signInLink");
const closeSidebar = document.getElementById("closeSidebar");
const passwordError = document.getElementById("passwordError");

// Show the sidebar
signInLink.addEventListener("click", (e) => {
  e.preventDefault();
  sidebar.classList.add("open");
});

// Close the sidebar
closeSidebar.addEventListener("click", () => {
  sidebar.classList.remove("open");
});

// Submit handler
form.addEventListener("submit", (e) => {
  e.preventDefault();

  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();
  passwordError.innerHTML = "";

  if (!email || !password) {
    alert("Please enter both email and password");
    return;
  }

  if (!validateEmail(email)) {
    alert("Please enter a valid email address.");
    return;
  }

  const passwordErrors = getPasswordErrors(password);
  if (passwordErrors.length > 0) {
    passwordError.innerHTML = passwordErrors
      .map((err) => `<li>${err}</li>`)
      .join("");
    return;
  }

  sidebar.classList.remove("open");
  successModal.style.display = "block";

  setTimeout(() => {
    successModal.style.display = "none";
    window.location.href = "index.html";
  }, 3000);
});

// Email Validation
function validateEmail(email) {
  const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  return re.test(email);
}

// Password Validation Details
function getPasswordErrors(password) {
  const errors = [];
  if (password.length < 8) {
    errors.push("Password must be at least 8 characters long.");
  }
  if (!/[A-Z]/.test(password)) {
    errors.push("Password must contain at least one uppercase letter.");
  }
  if (!/[a-z]/.test(password)) {
    errors.push("Password must contain at least one lowercase letter.");
  }
  if (!(/[0-9]/.test(password) || /[\W_]/.test(password))) {
    errors.push("Password must contain either a number or a special character.");
  }
  return errors;
}

const googleBtn = document.querySelector('.google-btn');

googleBtn.addEventListener('click', function () {
  window.location.href = "https://accounts.google.com/";
});

