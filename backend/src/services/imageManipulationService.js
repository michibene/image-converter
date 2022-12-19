import { unlink } from "fs/promises";
import Jimp from "jimp";
import path from "path";

const imageManipulationService = {};

imageManipulationService.toGrayscale = async (originalName, imagePath) => {
    const [name, fileType] = originalName.split(".");
    const convertedImageName = `${name}-grayscale.${fileType}`;

    await Jimp.read(imagePath)
        .then(async (image) => {
            image.grayscale();
            await image.writeAsync(path.resolve(`./tempUploads/${convertedImageName}`));
            return image;
        })
        .catch((err) => {
            console.error(err);
        });

    return convertedImageName;
};

imageManipulationService.deleteFromTemp = async (imagePath) => {
    try {
        await unlink(imagePath);
    } catch (err) {
        console.log(err);
    }
};

export default imageManipulationService;
