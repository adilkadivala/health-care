import app from "./index";

const defaultPort = 8000;
const rawPort = process.env.PORT ?? `${defaultPort}`;
const port = Number.parseInt(rawPort, 10);

if (Number.isNaN(port)) {
  throw new Error(`Invalid PORT value: ${rawPort}`);
}

app.listen(port, "0.0.0.0", () => {
  console.log(`Health Care server listening on port ${port}`);
});
