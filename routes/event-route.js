const express = require("express");
const router = express.Router();
const {
    getEventDetail,
    getEvents
} = require("../controllers/eventController")

router.get("/", getEvents)
router.get("/:eventId", getEventDetail)

module.exports = router