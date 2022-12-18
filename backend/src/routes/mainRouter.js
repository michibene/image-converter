import { Router } from "express";
import conversionController from "../controllers/conversionController.js";
import handleTempImageUpload from "../middlewares/uploadMiddleware.js";

const mainRouter = Router();

mainRouter.post("/convert/grayscale", handleTempImageUpload.single("imageToConvert"), conversionController.toGrayscale);

export default mainRouter;
