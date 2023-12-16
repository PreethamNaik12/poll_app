const express = require('express');
const app = express();
const cors = require("cors");
const pool = require("./db");

//middleware
app.use(cors());
app.use(express.json()); //req.body
const PORT = process.env.PORT || 5000;

//ROUTES
const orm_poll = require("./routes/orm_pollRoutes");
app.use("/ormpoll", orm_poll); //use orm_poll.js file for orm_poll route


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


app.listen(PORT, () => {
    console.log(`server has started on port ${PORT}`);
});