import multer from "multer";

const tempUploadsStorage = multer.diskStorage({
    destination: function (req, file, callbackFn) {
        callbackFn(null, "./tempUploads/");
    },
    filename(req, file, callbackFn) {
        callbackFn(null, file.originalname);
    },
});

const allowedFileTypes = ["image/jpg", "image/jpeg", /* "image/png" */, "image/bmp", "image/tiff"];

const fileValidation = (req, file, callbackFn) => {
    if (!allowedFileTypes.some((type) => type === file.mimetype)) {
        callbackFn(new Error("Please upload a valid image file in JPEG, PNG, BMP or TIFF format"));
    }
    callbackFn(null, true);
};

// Middleware for handling image file sent in request
const handleTempImageUpload = multer({
    storage: tempUploadsStorage,
    fileFilter: fileValidation,
});

export default handleTempImageUpload;
