import express from "express";
import { config } from "dotenv";
import cors from "cors";
import { connection } from "./database/dbConnection.js";
import userRouter from "./routes/userRouter.js";

export const app = express();

config({ path: "./config.env" });

// Enable CORS (Cross-Origin Resource Sharing)
app.use(
  cors({
    origin: [process.env.FRONTEND_URL],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

app.use(cors());

app.use(express.json());

app.use("/api/auth", userRouter);

connection();
