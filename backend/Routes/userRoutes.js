const express = require('express');
const protectRoute = require('../Middlewares/ProtectRoute');
const { getUsersForSidebar} = require('../Controllers/UserController');
const { getUserProfile, updateUserProfile } = require('../Controllers/UserProfileController');

const router = express.Router();

router.put('/:_id', updateUserProfile);
router.get('/:_id', getUserProfile);
router.get('/', protectRoute, getUsersForSidebar);


module.exports = router;
