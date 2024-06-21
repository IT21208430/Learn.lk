

const User = require('../models/userManagement_model');

// Controller to accept a user
exports.acceptUser = async (req, res) => {
    const { userId } = req.params;
    try {
        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        // Update user status to 'accepted'
        user.status = 'accepted';
        await user.save();
        res.status(200).json({ message: 'User accepted successfully' });
    } catch (error) {
        console.error('Error accepting user:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

// Controller to decline a user
exports.declineUser = async (req, res) => {
    const { userId } = req.params;
    try {
        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        // Update user status to 'declined'
        user.status = 'declined';
        await user.save();
        res.status(200).json({ message: 'User declined successfully' });
    } catch (error) {
        console.error('Error declining user:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};
