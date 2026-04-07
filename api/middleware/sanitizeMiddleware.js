const sanitizeObject = (obj) => {
    if (obj instanceof Object) {
        for (let key in obj) {
            if (/^\$/.test(key)) {
                delete obj[key];
            } else {
                sanitizeObject(obj[key]);
            }
        }
    }
    return obj;
};

export const mongoSanitize = (req, res, next) => {
    if (req.body) sanitizeObject(req.body);
    next();
};