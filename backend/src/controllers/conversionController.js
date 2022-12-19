import path from "path";
import imageManipulationService from "../services/imageManipulationService.js";

const conversionController = {};

conversionController.toGrayscale = async (req, res, next) => {
    try {
        const imageName = req.file.originalname;
        const rootPath = path.resolve(`./tempUploads`);
        const convertedImageName = await imageManipulationService.toGrayscale(imageName, `${rootPath}/${imageName}`);

        res.sendFile(convertedImageName, { root: rootPath });

        await imageManipulationService.deleteFromTemp(`${rootPath}/${imageName}`);
        await imageManipulationService.deleteFromTemp(`${rootPath}/${convertedImageName}`);
    } catch (error) {
        next(error);
    }
};

export default conversionController;
