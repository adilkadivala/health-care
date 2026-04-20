import express from "express";
import cors from "cors";
import path from "node:path";
import routes from "./routes";

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/uploads", express.static(path.join(process.cwd(), "uploads")));

app.use("/api", routes);
app.use(routes);

app.get("/", (req, res) => {
  res.send("Hello from Health Care server!");
});

export default app;
export const handler = app;