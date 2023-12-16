const express = require('express');
const router = express.Router();
const { ORM_Poll } = require('../models'); // Adjust the path based on your project structure

// Create a new poll
router.post('/', async (req, res) => {
    try {
        const { userName, choice } = req.body;
        const newPoll = await ORM_Poll.create({ userName, choice });
        res.status(201).json(newPoll);
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
});

// Get all polls
router.get('/', async (req, res) => {
    try {
        const allPolls = await ORM_Poll.findAll();
        res.json(allPolls);
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
});

// Get a specific poll by ID
router.get('/:id', async (req, res) => {
    try {
        const poll = await ORM_Poll.findByPk(req.params.id);
        if (!poll) {
            return res.status(404).json({ message: 'Poll not found' });
        }
        res.json(poll);
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
});

// Update a poll by ID
router.put('/:id', async (req, res) => {
    try {
        const { userName, choice } = req.body;
        const updatedPoll = await ORM_Poll.update({ userName, choice }, {
            where: { id: req.params.id },
            returning: true,
        });
        if (!updatedPoll[0]) {
            return res.status(404).json({ message: 'Poll not found' });
        }
        res.json(updatedPoll[1][0]);
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
});

// Delete a poll by ID
router.delete('/:id', async (req, res) => {
    try {
        const deletedPoll = await ORM_Poll.destroy({
            where: { id: req.params.id },
        });
        if (!deletedPoll) {
            return res.status(404).json({ message: 'Poll not found' });
        }
        res.json({ message: 'Poll deleted successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
});

module.exports = router;
