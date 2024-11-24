const routes = {
    home: {
      title: "Home",
      content: `
        <h1>Welcome to the Home Page</h1>
        <p>This is the home page content.</p>
      `
    },
    about: {
      title: "About",
      content: `
        <h1>About Us</h1>
        <p>This page is about us.</p>
      `
    },
    contact: {
      title: "Contact",
      content: `
        <h1>Contact Us</h1>
        <p>Reach us at contact@example.com.</p>
      `
    }
  };
  
  function loadContent() {
    const hash = location.hash.slice(1) || "home";
    const route = routes[hash];
    const appContent = document.getElementById("app-content");
  
    if (route) {
      document.title = route.title;
      appContent.innerHTML = route.content;
    } else {
      appContent.innerHTML = `<h1>404</h1><p>Page not found.</p>`;
    }
  }
  
  window.addEventListener("hashchange", loadContent);
  
  if (location.hash) {
    loadContent();
  } else {
    location.hash = "#home";
}

  