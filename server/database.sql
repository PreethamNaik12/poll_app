CREATE DATABASE polldata;

CREATE TABLE pollresp (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    vote_choice BOOLEAN NOT NULL,
    submission_date DATE NOT NULL
);
