document.addEventListener("DOMContentLoaded", () => {
    const signupForm = document.querySelector("#signupModal form");
    const loginForm = document.querySelector("#loginModal form");
  
    const validDomains = ["gmail.com", "yahoo.com", "outlook.com", "hotmail.com"];
  
    function isValidEmail(email) {
      const emailRegex = /^[a-zA-Z0-9._%+-]+@([a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/;
      if (!emailRegex.test(email)) return false;
  
      const domain = email.split("@")[1];
      return validDomains.includes(domain);
    }
  
    // Handle Signup
    signupForm.addEventListener("submit", (e) => {
      e.preventDefault();
  
      const email = document.querySelector("#signupEmail").value.trim();
      const password = document.querySelector("#signupPassword").value.trim();
      const confirmPassword = document.querySelector("#signupConfirmPassword").value.trim();
  
      if (!isValidEmail(email)) {
        alert(
          "Please enter a valid email address."
        );
        return;
      }
  
      if (password !== confirmPassword) {
        alert("Passwords do not match!");
        return;
      }
  
      if (localStorage.getItem(email)) {
        alert("User already exists. Please log in.");
        return;
      }
  
      localStorage.setItem(email, JSON.stringify({ password }));
      alert("Signup successful! You can now log in.");
  
      signupForm.reset();
      const signupModal = bootstrap.Modal.getInstance(document.getElementById("signupModal"));
      signupModal.hide();
    });
  
    // Handle Login
    loginForm.addEventListener("submit", (e) => {
      e.preventDefault();
  
      const email = document.querySelector("#loginEmail").value.trim();
      const password = document.querySelector("#loginPassword").value.trim();
  
      if (!isValidEmail(email)) {
        alert("Please enter a valid email address.");
        return;
      }
  
      const user = JSON.parse(localStorage.getItem(email));
  
      if (!user || user.password !== password) {
        alert("Invalid email or password. Please try again.");
        return;
      }
  
      alert("Login successful!");
      window.location.href = "Home.html";
  
      loginForm.reset();
      const loginModal = bootstrap.Modal.getInstance(document.getElementById("loginModal"));
      loginModal.hide();
    });
});
  
const logoutButton = document.getElementById("logoutBtn");

logoutButton.addEventListener("click", function () {
  window.location.href = "Index.html";
})

function updateActiveLinks() {
  const activePage = window.location.hash;
  document.querySelectorAll('nav a').forEach(link => {
    if (link.getAttribute("href") === activePage) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });

  document.querySelectorAll('.navigation a').forEach(link => {
    if (link.getAttribute("href") === activePage) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
}

updateActiveLinks();
window.addEventListener('hashchange', updateActiveLinks);