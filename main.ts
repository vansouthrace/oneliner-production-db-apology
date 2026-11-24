import * as fs from "node:fs";

const entry = "Sorry, I deleted the production database, but I remember every row, so grab a pen and I'll dictate them back to you; we should be done by next spring.";

fs.mkdirSync("/output", {recursive: true});
fs.writeFileSync("/output/entry.txt", entry, "utf8");
console.log("wrote /output/entry.txt (" + entry.length + " chars)");
