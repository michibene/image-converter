import path from "path";

const conversionController = {};

conversionController.toGrayscale = (req, res, next) => {
    try {
        console.log(req.file);
        return res.sendFile(req.file.originalname, { root: path.resolve("./tempUploads") });
    } catch (error) {
        console.log("_______ERROR______");
        next(error);
    }
};

export default conversionController;
