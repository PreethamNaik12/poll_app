CREATE DATABASE polldata;

CREATE TABLE todo (
    todo_id SERIAL PRIMARY KEY,
    description VARCHAR(255)
);

CREATE TABLE pollresp (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    vote_choice BOOLEAN NOT NULL,
    submission_date DATE NOT NULL
);
