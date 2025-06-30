// Express.js Framework explained

// Introduction to Express.js
//     Express.js is a minimal and flexible Node.js web application framework that provides a robust set of features for building web and mobile applications.
//     It is designed for building web applications and APIs, making it easier to handle routing, middleware, and HTTP requests and responses.
//     Express.js is built on top of Node.js and provides a simpler way to create server-side applications.

//Setting up a basic Express.js application
const express = require('express');
const app = express();

// Routing in Express.js
app.get('/', (req, res) => {
    res.send('Hello World!');
});
app.get('/about', (req, res) => {
    res.send('About Page');
});

// Middleware in Express.js
app.use(express.json()); // Middleware to parse JSON bodies
app.use(express.urlencoded({ extended: true })); // Middleware to parse URL-encoded bodies

//Request and Response handling in Express.js
app.post('/submit', (req, res) => {
    const data = req.body;
    res.json({ message: 'Data received', data: data });
});

// Error handling in Express.js
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});