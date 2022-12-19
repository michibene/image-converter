const CustomErrorHandler = (error, req, res, next) => {
    const errStatus = error.statusCode || 500;
    const errMsg = error.message || "Server cannot process request";

    res.status(errStatus).contentType("application/json").json({
        success: false,
        status: errStatus,
        message: errMsg,
    });
};

export default CustomErrorHandler;
