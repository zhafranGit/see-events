const errorHandler = require('../utils/error-handler') //error handler
const {
    Comment,
} = require('../models') // use models
const {
    verifyToken
} = require("../utils/jwt")


module.exports = {
    createComment: async (req, res) => {
        const {
            comment
        } = req.body;
        const {
            eventId
        } = req.params
        const userId = verifyToken(req.headers.authorization.replace("Bearer ", ""));
        try {
            const commentData = await Comment.create({
                comment,
                eventId,
                userId: userId.id
            })
            if (!commentData) {
                return res.status(500).json({
                    status: "Internal Server Error",
                    message: "Failed to create comment"
                })
            }
            res.status(201).json({
                status: "Success",
                message: "Comment Created",
                result: {
                    commentData
                }
            })
        } catch (error) {
            errorHandler(res, error);
        }
    },
    getComments: async (req, res) => {
        const {
            eventId
        } = req.params
        const userId = verifyToken(req.headers.authorization.replace("Bearer ", ""));
        try {
            const commentData = await Comment.findAll({
                where: {
                    eventId,
                    userId: userId.id,
                }
            })
            console.log(commentData);
            if (!commentData) {
                return res.status(404).json({
                    status: "Not Found",
                    message: "No Comment Found"
                })
            }
            res.status(200).json({
                status: "OK",
                message: "Successfully retrieve the data",
                results: commentData
            })
        } catch (error) {
            errorHandler(res, error);
        }
    }
}