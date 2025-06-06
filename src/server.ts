import { Server } from "http";
import app from "./app";

const port = 3000;

async function main() {
  const server: Server = app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
  });
  server.on("error", (error) => {
    console.error("Error starting server:", error);
  });
  server.on("close", () => {
    console.log("Server closed");
  });
  server.on("request", (req, res) => {
    console.log("New request:", req.method, req.url);
  });
  server.on("upgrade", (req, socket, head) => {
    console.log("WebSocket upgrade request:", req.url);
  });
}

main();
