import jwt from "jsonwebtoken";

//Protected Routes token base
export const requireSignIn = async (req, res, next) => {
    try {
        const decode = jwt.verify(
            // tokens within the headers
            req.headers.authorization,
            process.env.JWT_SECRET
        );
        next();
    } catch (error) {
        console.log(error);
    }
} 