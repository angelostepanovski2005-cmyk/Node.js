const fs = require("fs");

fs.writeFile("message.txt", "Hello from the core module!", (err) => {
  if (err) throw err;
  console.log("File has been written successfully.");
});
