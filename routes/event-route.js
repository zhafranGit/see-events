const express = require("express");
const { createComment } = require("../controllers/commentController");
const router = express.Router();
const {
    getEventDetail,
    getEvents
} = require("../controllers/eventController")
const { isLogin } = require("../middlewares/auth")

router.get("/", getEvents)
router.get("/:eventId", getEventDetail)
router.post("/:eventId/comment", isLogin, createComment)

module.exports = router