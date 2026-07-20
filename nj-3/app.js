const fs = require("fs");
const fileManager = require("./fileManager");

const targetFile = "log.txt";

fileManager.writeFile(targetFile, "Line 1: Initial Entry.\n");

console.log(`\n[Watching] Standing by for changes to ${targetFile}...`);
fs.watch(targetFile, (eventType) => {
  if (eventType === "change") {
    console.log("\n[Change Detected] Reading updated file content:");
    const updatedContent = fileManager.readFile(targetFile);
    console.log("----------------------------");
    console.log(updatedContent.trim());
    console.log("----------------------------");
  }
});

setTimeout(() => {
  fileManager.appendToFile(
    targetFile,
    "Line 2: This data was dynamically appended!\n",
  );
}, 2000);
