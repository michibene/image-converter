import cors from "cors";
import express from "express";
import mainRouter from "./routes/mainRouter.js";

const app = express();

// CORS
app.use(cors());

app.use("/api", mainRouter);

export { app };

