import createDOMPurify from 'dompurify';
import { JSDOM } from 'jsdom';

const window = new JSDOM('').window;
const DOMPurify = createDOMPurify(window);

export const xssClean = (req, res, next) => {
    const clean = (obj) => {
        if (typeof obj === 'string') return DOMPurify.sanitize(obj);
        if (Array.isArray(obj)) return obj.map(clean);
        if (typeof obj === 'object' && obj !== null) {
            const cleaned = {};
            for (const key in obj) {
                cleaned[key] = clean(obj[key]);
            }
            return cleaned;
        }
        return obj;
    };

    if (req.body) req.body = clean(req.body);
    next();
};