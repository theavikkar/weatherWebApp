const express = require("express");
const app = express();
const path = require("path");

//Public static path

app.set("view engine", "hbs");

app.use(express.static(path.join(__dirname, "../public")));

//Routing area

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/about", (req, res) => {
  res.render("about");
});

app.get("/weather", (req, res) => {
  res.render("weather");
});

app.get("*", (req, res) => {
  res.render("404page", {
    errorMessage: "Your request page is not found",
  });
});

app.listen(8000, (error) => {
  console.log("Server running 8000 ........");
});
