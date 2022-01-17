require('dotenv').config();
const express = require('express');
const router = express.Router();
const authRoute = require('./auth-route');
const eventRoute = require('./event-route');
const profileRoute = require('./profile-route');

router.use('/auth', authRoute);
router.use('/events', eventRoute);
router.use('/profile', profileRoute);

module.exports = router