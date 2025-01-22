const express = require('express');
const app = express();

app.get('/', (req, res) => {
    console.log("This is the homepage")
});

app.get('/about', (req, res) => {
    console.log("This is the about page")
});

app.get('/contact-me', (req, res) => {
    console.log("This is the contact me page")
});

app.get('/404', (req, res) => {
    console.log("This is the error page")
});