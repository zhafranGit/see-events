const jwt = require("jsonwebtoken");
const catchHandler = require("../utils/catch-handler");
const {
    Users
} = require("../models");

module.exports = {
    isLogin: async (req, res, next) => {
        try {
            // get bearer token from authorization header
            let token = req.header("Authorization");
            // check token exist
            if (!token) {
                return res.status(401).json({
                    status: "Unauthorized",
                    message: "No token detected",
                    result: {},
                });
            }
            // delete bearerToken
            token = token.replace("Bearer ", "");
            // decode token by jwt
            const decoded = jwt.verify(token, process.env.SECRET_TOKEN);
            // check user from db
            const user = await Users.findByPk(decoded.id);
            if (!user) {
                return res.status(401).json({
                    status: "Unauhtorized",
                    message: "User not found",
                });
            }
            // send to next controller
            req.user = {
                id: user.id,
                email: user.email,
                isAdmin: user.isAdmin,
            };
            next();
        } catch (error) {
            return res.status(401).json({
                catchHandler(res, error)
            });
        }
    }
}