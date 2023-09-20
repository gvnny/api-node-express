const logger = (req, res, next) => {
    console.log(req.baseUrl);
    console.log(req.method);
    console.log(req.hostname);
    console.log(req.ip);
    console.log(req.originalurl);
    next();
}

export default logger;