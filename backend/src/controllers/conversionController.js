import path from "path";
import imageManipulationService from "../services/imageManipulationService.js";

const conversionController = {};

conversionController.toGrayscale = async (req, res, next) => {
    try {
        const imageName = req.file.originalname;
        const rootPath = path.resolve(`./tempUploads`);
        const convertedImage = await imageManipulationService.toGrayscale(imageName, `${rootPath}/${imageName}`);

        return res.sendFile(convertedImage, { root: rootPath });
    } catch (error) {
        next(error);
    }
};

export default conversionController;
