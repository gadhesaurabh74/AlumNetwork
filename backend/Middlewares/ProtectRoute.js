const jwt = require("jsonwebtoken");
const User = require("../Models/users");
const Alumini = require("../Models/alumni");

const protectRoute = async (req, res, next) => {
    try {
        const token = req.headers.authorization?.split(" ")[1];
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        
        console.log('Decoded token:', decoded);
        
        // Check if it's a user route or alumni route
        if (req.originalUrl.includes('/api/user')) {
            req.user = await User.findById(decoded.userId);
        } else if (req.originalUrl.includes('/api/alum')) {
            req.user = await Alumini.findById(decoded.userId);
        }
        
        if (!req.user) {
            return res.status(404).json({ error: "User not found" });
        }
        
        next();
    } catch (error) {
        console.error('ProtectRoute Error:', error);
        res.status(401).json({ error: "Unauthorized" });
    }
};

module.exports = protectRoute;
