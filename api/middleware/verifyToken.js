import jwt from "jsonwebtoken";

export const verifyToken = (req, res, next) => {
    const token = req.cookies.access_token;
    if (!token) {
        console.log("No token found");
        return res.status(401).json({ message: "Not authenticated!" });
    }

    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
        if (err) {
            console.log("Token verification failed:", err.message);
            return res.status(403).json({ message: "Token is not valid!" });
        }
        req.userId = user.id;
        console.log("User ID from token:", req.userId);
        next();
    });
};

