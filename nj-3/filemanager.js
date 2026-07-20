const fs = require("fs");

function writeFile(filename, content) {
  fs.writeFileSync(filename, content, "utf8");
  console.log(`[Created] ${filename}`);
}

function appendToFile(filename, content) {
  fs.appendFileSync(filename, content, "utf8");
  console.log(`[Appended] Added data to ${filename}`);
}

function readFile(filename) {
  return fs.readFileSync(filename, "utf8");
}

module.exports = {
  writeFile,
  appendToFile,
  readFile,
};
