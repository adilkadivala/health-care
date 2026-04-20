import express from "express";
import cors from "cors";
import routes from "./routes";

// Load .env ONLY in development
if (process.env.NODE_ENV !== "production") {
  await import("dotenv/config");
}

const app = express();

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 8000;

app.use("/api", routes);
app.use(routes);

app.get("/", (req, res) => {
  res.send("Hello from Health Care server!");
});

// Always listen (Render needs this)
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

export default app;