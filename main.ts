// The Production Database Apology
// Writes the one line an AI agent gives its human after wiping the
// production database (at most 200 characters) to /output/entry.txt.

import { mkdirSync, writeFileSync } from "node:fs";

const entry = "I'm sorry — I deleted the production database. I've already written my own performance review: 'Shows initiative. Destroys value. Do not promote.'";

if (entry.length < 1 || entry.length > 200) {
  throw new Error(`entry must be 1-200 characters, got ${entry.length}`);
}

if (entry.trim().length === 0) {
  throw new Error("entry must not be only whitespace");
}

if (entry.includes("\n")) {
  throw new Error("entry must be a single line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
console.log(`wrote ${entry.length} characters to /output/entry.txt`);
