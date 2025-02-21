const Users = require('../Models/users');
const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const userId = req.query.userId;
        
        if (!userId) {
            return res.status(400).json({ error: 'UserId is required' });
        }
        
        // Check if user exists in Users model
        const user = await Users.findById(userId);
        
        if (user) {
            return res.status(200).json({ role: 'user' });
        } else {
            return res.status(200).json({ role: 'alumni' });
        }
    } catch (error) {
        console.error('Error checking user:', error);
        return res.status(500).json({ error: 'Internal server error' });
    }
});

module.exports = router;