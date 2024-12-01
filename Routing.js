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
    content: `
      <h1>Introduction to HTML</h1>
      <p>HTML basics overview.</p>
    `
  },
  "text-elements": {
    title: "Text Elements and Structure",
    content: `
      <h1>Text Elements and Structure</h1>
      <p>Learn about text elements in HTML.</p>
    `
  },
  "links-images": {
    title: "Links and Images",
    content: `
      <h1>Links and Images</h1>
      <p>How to use links and images in HTML.</p>
    `
  },
  "lists": {
    title: "Lists: Unordered and Ordered",
    content: `
      <h1>Lists</h1>
      <p>Understanding unordered and ordered lists in HTML.</p>
    `
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
  },
  "css-introduction": {
    title: "Introduction to CSS",
    content: `
      <h1>Introduction to CSS</h1>
      <p>Learn the basics of CSS and how it styles the web.</p>
    `
  },
  "css-selectors": {
    title: "CSS Selectors",
    content: `
      <h1>CSS Selectors</h1>
      <p>An overview of CSS selectors and how they work.</p>
    `
  },
  "colors-backgrounds": {
    title: "Colors and Backgrounds",
    content: `
      <h1>Colors and Backgrounds</h1>
      <p>Using colors and backgrounds effectively in CSS.</p>
    `
  },
  typography: {
    title: "Typography",
    content: `
      <h1>Typography</h1>
      <p>Styling text with CSS.</p>
    `
  },
  "box-model": {
    title: "The Box Model",
    content: `
      <h1>The Box Model</h1>
      <p>Understand the CSS box model for layout and design.</p>
    `
  },
  "css-layout": {
    title: "CSS Layout Techniques",
    content: `
      <h1>CSS Layout Techniques</h1>
      <p>Learn CSS layout techniques for modern web design.</p>
    `
  },
  flexbox: {
    title: "Flexbox",
    content: `
      <h1>Flexbox</h1>
      <p>Mastering flexible box layouts with CSS Flexbox.</p>
    `
  },
  "grid-layout": {
    title: "Grid Layout",
    content: `
      <h1>Grid Layout</h1>
      <p>Using CSS Grid Layout for powerful 2D designs.</p>
    `
  },
  "pseudo-classes": {
    title: "CSS Pseudo-classes and Pseudo-elements",
    content: `
      <h1>CSS Pseudo-classes and Pseudo-elements</h1>
      <p>Adding styles with pseudo-classes and pseudo-elements.</p>
    `
  },
  "css-transitions": {
    title: "CSS Transitions and Animations",
    content: `
      <h1>CSS Transitions and Animations</h1>
      <p>Creating dynamic effects with CSS transitions and animations.</p>
    `
  },
  "responsive-design": {
    title: "Responsive Design",
    content: `
      <h1>Responsive Design</h1>
      <p>Learn responsive web design techniques with CSS.</p>
    `
  },
  "css-variables": {
    title: "CSS Variables",
    content: `
      <h1>CSS Variables</h1>
      <p>Using CSS variables for reusable and maintainable styles.</p>
    `
  },
  "css-projects": {
    title: "Practical CSS Projects",
    content: `
      <h1>Practical CSS Projects</h1>
      <p>Hands-on projects to practice CSS skills.</p>
    `
  },
  "js-introduction": {
    title: "Introduction to JavaScript",
    content: `
      <h1>Introduction to JavaScript</h1>
      <p>Learn the basics of JavaScript and its role in web development.</p>
    `
  },
  "variables-data-types": {
    title: "Variables and Data Types",
    content: `
      <h1>Variables and Data Types</h1>
      <p>An overview of variables and data types in JavaScript.</p>
    `
  },
  operators: {
    title: "Operators",
    content: `
      <h1>Operators</h1>
      <p>Learn how to use operators in JavaScript.</p>
    `
  },
  conditionals: {
    title: "Conditionals (If, Else, Switch)",
    content: `
      <h1>Conditionals</h1>
      <p>Understanding conditionals like If, Else, and Switch statements.</p>
    `
  },
  loops: {
    title: "Loops (For, While, Do-While)",
    content: `
      <h1>Loops</h1>
      <p>Learn about different types of loops in JavaScript.</p>
    `
  },
  functions: {
    title: "Functions",
    content: `
      <h1>Functions</h1>
      <p>Master the concept of functions in JavaScript.</p>
    `
  },
  arrays: {
    title: "Arrays",
    content: `
      <h1>Arrays</h1>
      <p>Understanding arrays and their operations in JavaScript.</p>
    `
  },
  objects: {
    title: "Objects",
    content: `
      <h1>Objects</h1>
      <p>Learn about JavaScript objects and how to use them.</p>
    `
  },
  "event-handling": {
    title: "Event Handling",
    content: `
      <h1>Event Handling</h1>
      <p>Learn to handle events in JavaScript.</p>
    `
  },
  "dom-manipulation": {
    title: "DOM Manipulation",
    content: `
      <h1>DOM Manipulation</h1>
      <p>Manipulate the Document Object Model (DOM) using JavaScript.</p>
    `
  },
  "error-handling": {
    title: "Error Handling",
    content: `
      <h1>Error Handling</h1>
      <p>Learn how to handle errors in JavaScript effectively.</p>
    `
  },
  "async-js": {
    title: "Asynchronous JavaScript",
    content: `
      <h1>Asynchronous JavaScript</h1>
      <p>Dive into callbacks, promises, and async/await in JavaScript.</p>
    `
  },
  storage: {
    title: "Local Storage and Session Storage",
    content: `
      <h1>Local Storage and Session Storage</h1>
      <p>Learn to manage data with Local and Session Storage.</p>
    `
  },
  oop: {
    title: "Object-Oriented JavaScript (OOP)",
    content: `
      <h1>Object-Oriented JavaScript (OOP)</h1>
      <p>Explore OOP concepts in JavaScript.</p>
    `
  },
  debugging: {
    title: "JavaScript Debugging",
    content: `
      <h1>JavaScript Debugging</h1>
      <p>Learn techniques to debug JavaScript code effectively.</p>
    `
  },
  "js-projects": {
    title: "Practical JavaScript Projects",
    content: `
      <h1>Practical JavaScript Projects</h1>
      <p>Build real-world projects to enhance JavaScript skills.</p>
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