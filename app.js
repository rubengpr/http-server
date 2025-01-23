const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send("This is the homepage")
});

app.get('/about', (req, res) => {
    res.send("This is the about page")
});

app.get('/contact-me', (req, res) => {
    res.send("This is the contact page")
});

app.use((req, res) => {
    res.status(404).send("Page not found!");
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`My first Express app - listening on port ${PORT}!`);
});