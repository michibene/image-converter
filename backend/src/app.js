import cors from "cors";
import express from "express";
import CustomErrorHandler from "./middlewares/errorHandlingMiddleware.js";
import mainRouter from "./routes/mainRouter.js";

const app = express();

// CORS
app.use(cors());

app.use("/api", mainRouter);

// Custom ERROR handling
app.use(CustomErrorHandler);

export { app };
