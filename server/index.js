import "dotenv/config";
import express from "express";
import { Pool } from "pg";

const pool = new Pool({ connectionString: process.env.DATABASE_URL });
const app = express();
app.use(express.json());

app.get("/api/products", async (_req, res) => {
  const { rows } = await pool.query("SELECT * FROM products ORDER BY id");
  res.json(rows);
});

app.get("/api/products/:id", async (req, res) => {
  const { rows } = await pool.query("SELECT * FROM products WHERE id = $1", [req.params.id]);
  if (!rows.length) return res.status(404).json({ error: "Not found" });
  res.json(rows[0]);
});

app.post("/api/products", async (req, res) => {
  const { name, price } = req.body;
  const { rows } = await pool.query(
    "INSERT INTO products (name, price) VALUES ($1, $2) RETURNING *",
    [name, price]
  );
  res.status(201).json(rows[0]);
});

app.put("/api/products/:id", async (req, res) => {
  const { name, price } = req.body;
  const { rows } = await pool.query(
    "UPDATE products SET name = $1, price = $2 WHERE id = $3 RETURNING *",
    [name, price, req.params.id]
  );
  if (!rows.length) return res.status(404).json({ error: "Not found" });
  res.json(rows[0]);
});

app.delete("/api/products/:id", async (req, res) => {
  const { rowCount } = await pool.query("DELETE FROM products WHERE id = $1", [req.params.id]);
  if (!rowCount) return res.status(404).json({ error: "Not found" });
  res.status(204).send();
});

app.listen(3000, () => console.log("API on http://localhost:3000"));
