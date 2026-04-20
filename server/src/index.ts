import env from "env";
env.configure();


import express from "express";
import cors from "cors";
import path from "node:path";
import routes from "./routes";

const app = express();

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT;

app.use("/api", routes);
app.use(routes);

app.get("/", (req, res) => {
  res.send("Hello from Health Care server!");
});

if(process.env.NODE_ENV !== "production") {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
}

export default app;
export const handler = app;
