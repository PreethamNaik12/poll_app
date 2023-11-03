const express = require('express');
const app = express();
const cors = require("cors");
const pool = require("./db");

//middleware
app.use(cors());
app.use(express.json()); //req.body
const PORT = process.env.PORT || 5000;

//ROUTES

// Create a poll
app.post("/polls", async (req, res) => {
    try {
        const { name, voteChoice, submissionDate } = req.body;
        const newResp = await pool.query(
            "INSERT INTO pollresp (name, vote_choice, submission_date) VALUES($1, $2, $3) RETURNING *",
            [name, voteChoice, submissionDate]
        );

        res.json(newResp.rows[0]);
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});


//get all polls

app.get("/polls", async (req, res) => {
    try {
        const allPolls = await pool.query("SELECT * FROM pollresp");
        res.json(allPolls.rows);
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

//get poll choices by date
app.get("/pollChoice", async (req, res) => {
    try {
        const pollResults = await pool.query("SELECT submission_date, COUNT(*) FILTER(WHERE vote_choice = true) AS no_of_yes, COUNT(*) FILTER(WHERE vote_choice = false) AS no_of_no FROM pollresp GROUP BY submission_date");

        // Format dates to a more readable format
        const formattedResults = pollResults.rows.map(result => {
            return {
                submission_date: result.submission_date.toLocaleDateString(),
                no_of_yes: result.no_of_yes,
                no_of_no: result.no_of_no
            };
        });

        res.json(formattedResults);
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});




//get a poll

app.get("/polls/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const poll = await pool.query("SELECT * FROM pollresp WHERE id = $1", [
            id
        ]);

        if (poll.rows.length === 0) {
            return res.status(404).json({ error: 'Poll not found' });
        }

        res.json(poll.rows[0]);
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});



//update a poll

app.put("/polls/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const { name, voteChoice, submissionDate } = req.body;
        const updatePoll = await pool.query(
            "UPDATE pollresp SET name = $1, vote_choice = $2, submission_date = $3 WHERE id = $4",
            [name, voteChoice, submissionDate, id]
        );

        if (updatePoll.rowCount === 0) {
            return res.status(404).json({ error: 'Poll not found' });
        }

        res.json("Poll was updated!");
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});


//delete a poll
app.delete("/polls/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const deletePoll = await pool.query("DELETE FROM pollresp WHERE id = $1", [
            id
        ]);

        if (deletePoll.rowCount === 0) {
            return res.status(404).json({ error: 'Poll not found' });
        }

        res.json("Poll was deleted!");
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});


app.listen(PORT, () => {
    console.log("server has started on port 5000");
});