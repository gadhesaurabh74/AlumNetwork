const express = require('express');
const protectRoute = require('../Middlewares/ProtectRoute');
const { getAluminisForSidebar } = require('../Controllers/UserController');
const { getAluminiProfile,updateAluminiProfile } = require('../Controllers/UserProfileController');

const router = express.Router();

router.get('/', protectRoute, getAluminisForSidebar);
router.put('/:id', updateAluminiProfile);
router.get('/:id', getAluminiProfile);



module.exports = router;
