// import { express } from "express";
import express from "express";
import { config } from "dotenv";

export const app = express();
// Load environment variables from the config.env file
config({ path: "./config.env" });

app.get("/api", (req, res) => {
  console.log("api all here");
  res.send("data get here");
});
