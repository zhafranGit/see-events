const express = require("express");
const router = express.Router();
const {
    editProfile,
    getProfile
} = require("../controllers/profileController");
const {
    uploadCloud
} = require("../middlewares/fileUpload");

router.put("/edit/:profileId", uploadCloud("image"), editProfile)
router.get("/:profileId", getProfile)

module.exports = router