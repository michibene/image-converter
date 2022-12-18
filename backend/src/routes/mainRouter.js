import { Router } from "express";
import multer from "multer";
import conversionController from "../controllers/conversionController.js";

const mainRouter = Router();

// Middleware for handling image file sent in request
const handleFormData = multer({
    fileFilter(req, file, callbackFn) {
        if (!file.originalname.match(/\.(jpg|jpeg|png|bmp|tiff)$/)) {
            return callbackFn(new Error("Please upload a valid image file in JPEG, PNG, BMP or TIFF format"));
        }
        callbackFn(undefined, true);
    },
});

mainRouter.post("/convert/grayscale", handleFormData.single("imageToConvert"), conversionController.toGrayscale);

export default mainRouter;
