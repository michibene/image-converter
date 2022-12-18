const conversionController = {};

conversionController.toGrayscale = (req, res, next) => {
    console.log(req.file);
    return res.status(200).send({
        message: "Received successfully: " + req.file.originalname,
    });
};

export default conversionController;
