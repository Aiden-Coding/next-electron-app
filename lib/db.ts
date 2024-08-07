// lib/db.js
import Database from "better-sqlite3";
import path from "path";

const dbPath = path.resolve(process.cwd(), "database.db");
const db = new Database(dbPath);

export default db;
