const express = require("express");
const { createComment } = require("../controllers/commentController");
const router = express.Router();
const {
    getEventDetail,
    getEvents
} = require("../controllers/eventController")

router.get("/", getEvents)
router.get("/:eventId", getEventDetail)
router.post("/:eventId/comment", createComment)

module.exports = router