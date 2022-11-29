import express from "express";
import app from "./routes";

const server = express();

server.use(express.json());
server.use(app);
server.listen(3000, () => {
  console.log("Server started on port 3000!");
});
