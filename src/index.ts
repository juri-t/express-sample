import { createApp } from "./app";

const app = createApp();

// environment
const PORT = 8000;

app.listen(PORT, () => {
  console.log(`server is listening... port:${PORT}`)
});