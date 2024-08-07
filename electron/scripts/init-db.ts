// scripts/init-db.ts
import db from "../../lib/db";

const createTable = `
  CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    email TEXT NOT NULL UNIQUE
  )
`;

db.exec(createTable);

console.log("Database initialized successfully");
