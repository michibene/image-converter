import { unlink } from "fs/promises";
import Jimp from "jimp";
import path from "path";

const imageManipulationService = {};

imageManipulationService.getRootPath = path.resolve("./tempUploads");

imageManipulationService.toGrayscale = async (originalName) => {
    const [name, fileType] = originalName.split(".");
    const convertedImageName = `${name}-grayscale.${fileType}`;

    await Jimp.read(`${imageManipulationService.getRootPath}/${originalName}`)
        .then(async (image) => {
            image.grayscale();
            await image.writeAsync(`${imageManipulationService.getRootPath}/${convertedImageName}`);
        })
        .catch((err) => {
            console.error(err);
        });

    return convertedImageName;
};

imageManipulationService.deleteFromTemp = async (imageName) => {
    try {
        await unlink(`${imageManipulationService.getRootPath}/${imageName}`);
    } catch (err) {
        console.log(err);
    }
};

export default imageManipulationService;
