const express = require("express");
const router = express.Router();
const {
    getEventDetail,
    getEvents
} = require("../controllers/eventController")
const {
    isLogin
} = require("../middlewares/auth")

router.get("/", getEvents)
router.get("/:eventId", getEventDetail)

module.exports = router