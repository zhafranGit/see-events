const { User } = require('../models')
const { verifyToken } = require('../utils/jwt')
const errorHandler = require('../utils/error-handler')

module.exports = {
    isLogin: async (req, res, next) => {
        try {
            let token = req.header("Authorization").replace("Bearer ", "")
            console.log(token);
            // cek token
            if (!token) {
                return res.status(401).json({
                    msg: "TokenNya Mana Woi",
                    status: "Unauthorized",
                })
            }
            const decoded = verifyToken(token, process.env.JWT_KEY)

            const user = await User.findByPk(decoded.id)
            if (!user) {
                return res.status(401).json({
                    msg: "User Tidak Ada",
                    status: "Unauthorized",
                })
            }

            next()
        }
        catch (error) {
            errorHandler(res, error)
        }
    }
}