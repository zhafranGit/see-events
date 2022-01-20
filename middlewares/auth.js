const { User } = require('../models')
const { verifyToken } = require('../utils/jwt')
const errorHandler = require('../utils/error-handler')

module.exports = {
    isLogin: async (req, res, next) => {
        try {
            let token = req.header("Authorization")
            // cek token
            if (!token) {
                return res.status(401).json({
                    msg: "TokenNya Mana Woi",
                    status: "Unauthorized",
                })
            }
            const decoded = verifyToken(token, process.env.JWT_KEY)
            // // cek verifyToken
            // if (!decoded) {
            //     return res.status(401).json({
            //         msg: "token tidak sama",
            //         status: "Unauthorized",
            //     })
            // }
            const user = await User.findByPk(decoded.id)
            if (!user) {
                return res.status(401).json({
                    msg: "User Tidak Ada",
                    status: "Unauthorized",
                })
            }
            res.status(200).json({
                msg: "Successfully Login",
                status: "Success",
            })
            next()
        }
        catch (error) {
            errorHandler(res, error)
        }
    }
}