import path from "path";
import imageManipulationService from "../services/imageManipulationService.js";

const conversionController = {};

conversionController.toGrayscale = async (req, res, next) => {
    try {
        const imageName = req.file.originalname;
        const convertedImageName = await imageManipulationService.toGrayscale(imageName);

        res.sendFile(convertedImageName, { root: path.resolve(`./tempUploads`) });

        await imageManipulationService.deleteFromTemp(imageName);
        await imageManipulationService.deleteFromTemp(convertedImageName);
    } catch (error) {
        next(error);
    }
};

export default conversionController;
