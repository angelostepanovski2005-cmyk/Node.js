const express = require("express");

const app = express();
const PORT = 3000;

const data = {
  cars: ["Car1", "Audi", "Mercedes", "Car4"],
  books: ["Book1", "Kletnici"],
  cities: ["Skopje", "Ohrid", "London", "New York"],
};

app.get("/", (req, res) => {
  res.json(data);
});

app.get("/cars", (req, res) => res.json(data.cars));
app.get("/books", (req, res) => res.json(data.books));
app.get("/cities", (req, res) => res.json(data.cities));

app.get("/car", (req, res) => {
  const { query } = req.query;
  const found =
    data.cars.find((c) => c.toLowerCase() === query?.toLowerCase()) ||
    data.cars[Number(query)];
  res.send(found ? `Car: ${found}` : "Car not found");
});

app.get("/book", (req, res) => {
  const { query } = req.query;
  const found =
    data.books.find((b) => b.toLowerCase() === query?.toLowerCase()) ||
    data.books[Number(query)];
  res.send(found ? `Book: ${found}` : "Book not found");
});

app.get("/city", (req, res) => {
  const { query } = req.query;
  const found =
    data.cities.find((c) => c.toLowerCase() === query?.toLowerCase()) ||
    data.cities[Number(query)];
  res.send(found ? `City: ${found}` : "City not found");
});

app.get("/users", async (req, res) => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await response.json();

    const userNames = users.map((user) => user.name);

    res.json(userNames);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch users data" });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
