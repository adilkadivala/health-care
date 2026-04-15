import app from "./app";

const PORT = Number(process.env.PORT) || 8000;

if (process.env.VERCEL !== "1") {
  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server is running on port ${PORT}`);
  });
}

export default app;
