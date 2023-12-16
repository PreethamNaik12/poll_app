const express = require('express');
const router = express.Router();
const { ORM_Poll, Sequelize } = require('../models'); // Adjust the path based on your project structure
const { INTEGER } = require('sequelize');

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

router.get('/try/:num', async (req, res) => {
    const num = Number(req.params.num);
    try {
        const count = await ORM_Poll.count();

        const remaining = await ORM_Poll.count({
            where: {
                id: {
                    [Sequelize.Op.gte]: num + 10, // Using less than or equal to (lte) operator
                },
            },
        });

        if (remaining < 10) {
            const limitedUsers = await ORM_Poll.findAll({
                where: {
                    id: {
                        [Sequelize.Op.gte]: num // Using greater than or equal to (gte) operator
                    },
                },
            });
            res.json({ limitedUsers, count, nextPage: false, remaining: 0 });
        }

        else {
            const limitedUsers = await ORM_Poll.findAll({
                where: {
                    id: {
                        [Sequelize.Op.gte]: num, // Using greater than or equal to (gte) operator
                        [Sequelize.Op.lt]: num + 10, // Using less than or equal to (lte) operator
                    },
                },
            });

            let nextPage = false;
            if (remaining > 0) {
                nextPage = true;
            }

            res.json({ limitedUsers, count, nextPage, remaining });
        }

    } catch (err) {
        console.error(err.message);
        res.status(500).json({ error: 'Internal Server Error' });
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
