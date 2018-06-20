// Configuration
// -----------------------------------------------------------------------------
const express = require("express");

// "app" variable represents our application
// (all configuration and content will be defined through it)
const app = express();

// Make Express aware of the "public/" folder
// (makes all files inside available through localhost:3000)
app.use(express.static("public"));


// Routes
// -----------------------------------------------------------------------------
// Route structure:
// app.VERB("URL", CALLBACK);

// GET request to localhost:3000/
app.get("/", (request, response, next) => {
  response.sendFile(__dirname + "/views/home-page.html");
});

// GET request to localhost:3000/cat
app.get("/cat", (request, response, next) => {
  response.sendFile(__dirname + "/views/cat-page.html");
});

app.listen(3000, () => {
  console.log("I'm listening!");
});
