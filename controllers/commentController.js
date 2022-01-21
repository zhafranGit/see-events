const errorHandler = require('../utils/error-handler') //error handler
const { Comment, Event } = require('../models') // use models
const { verifyToken } = require("../utils/jwt")


module.exports = {
 createComment: async (req, res) => {
    const body = req.body;
    const {eventId: id} = req.params
    const userId = verifyToken(req.headers.authorization.replace("Bearer ", ""));
    try {
        const comment = await Comment.create({...body, eventId: id, userId: userId.id})
        //user id masih harus input manual di body
        if (!comment) {
            return res.status(500).json({
                status: "Server error",
                message: "Failed to create comment"
            })
        }
        res.status(201).json({
            status: "Success",
            message: "Comment Created",
            result: comment
        })
    } catch (error) {
        errorHandler(res, error);
    }
 },

}