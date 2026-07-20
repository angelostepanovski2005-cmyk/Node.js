const express = require("express");
const path = require("path");
const analysisController = require("./controllers/analysisController");

const app = express();
const PORT = 3000;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.urlencoded({ extended: true }));

app.get("/analiza", analysisController.getAnalysis);

app.post("/analiza", analysisController.postAnalysis);

app.listen(PORT, () => {
  console.log(`Серверот работи на http://localhost:${PORT}/analiza`);
});
