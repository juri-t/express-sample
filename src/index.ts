import { createApp } from "./app";

const app = createApp();

// environment
const PORT = 8000;

app.listen(PORT, () => {
  console.log(`API is running on http://localhost:${PORT}/`);
});