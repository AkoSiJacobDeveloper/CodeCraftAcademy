const routes = {
  home: {
    title: "Home",
    contentUrl: './HomeContent.html'
  },
  about: {
    title: "About",
    contentUrl: './About.html'
  },
  contact: {
    title: "Contact",
    contentUrl: './Contact.html'
  },
  profile: {
    title: "Profile",
    contentUrl: './Profile.html'
  },
  introduction: {
    title: "Introduction",
    contentUrl: './Introduction.html'
  },
  "setup-environment": {
    title: "Setting Up Your Environment",
    contentUrl: './SettingUp.html'
  },
  "html-introduction": {
    title: "Introduction to HTML",
    contentUrl: './HtmlIntroduction.html'
  },
  "text-elements": {
    title: "Text Elements and Structure",
    contentUrl: './TextElements.html'
  },
  "links-images": {
    title: "Links and Images",
    contentUrl: './LinksImages.html'
  },
  "lists": {
    title: "Lists: Unordered and Ordered",
    contentUrl: './Lists.html'
  },
  "forms-input": {
    title: "Forms and Input Elements",
    content: `
      <h1>Forms and Input Elements</h1>
      <p>Creating forms and input elements in HTML.</p>
    `
  },
  "tables": {
    title: "Tables: Structuring Data",
    content: `
      <h1>Tables</h1>
      <p>Learn to structure data with tables in HTML.</p>
    `
  },
  "semantic-html": {
    title: "Semantic HTML",
    content: `
      <h1>Semantic HTML</h1>
      <p>The importance of semantic elements in HTML.</p>
    `
  },
  "html-comments": {
    title: "HTML Comments",
    content: `
      <h1>HTML Comments</h1>
      <p>Using comments to document your HTML code.</p>
    `
  },
  "html-attributes": {
    title: "HTML Attributes",
    content: `
      <h1>HTML Attributes</h1>
      <p>Understanding attributes in HTML elements.</p>
    `
  },
  "media-elements": {
    title: "HTML Media Elements",
    content: `
      <h1>HTML Media Elements</h1>
      <p>Using audio, video, and other media in HTML.</p>
    `
  },
  "html5-elements": {
    title: "HTML5 New Elements",
    content: `
      <h1>HTML5 New Elements</h1>
      <p>Introduction to new elements in HTML5.</p>
    `
  },
  "basic-layout": {
    title: "Basic HTML Layout with CSS",
    content: `
      <h1>Basic HTML Layout with CSS</h1>
      <p>Structuring HTML layouts with CSS styles.</p>
    `
  }
};



function loadContent() {
  const hash = location.hash.slice(1); 
  const route = routes[hash];
  const appContent = document.getElementById("app-content");

  if (route) {
    document.title = route.title;
    if (route.contentUrl) {
      fetch(route.contentUrl)
        .then(response => response.text())
        .then(content => {
          appContent.innerHTML = content;
        })
        .catch(error => {
          appContent.innerHTML = `<h1>Error</h1><p>Unable to load content.</p>`;
          console.error("Error loading content:", error);
        });
    } else {
      appContent.innerHTML = route.content;
    }
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
