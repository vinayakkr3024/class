// app.js

// Import required modules
const express = require('express');
const path = require('path');
const hbs = require('hbs');

// Initialize Express app
const app = express();
const port = 3000;

// Set up middleware to serve static files from the public directory
app.use(express.static(path.join(__dirname, 'public')));

// Set up Handlebars view engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

// Define routes
app.get('/', (req, res) => {
    res.render('home', { title: 'Home' });
});

app.get('/contact', (req, res) => {
    res.render('contact', { title: 'contact US' });
});

app.get('/about', (req, res) => {
    res.render('about', { title: 'About US' });
});

app.get('/testimonial', (req, res) => {
    res.render('testimonial', { title: 'Testimonial' });
});

app.get('/login', (req, res) => {
    res.render('login', { title: 'Login' });
});

app.get('/page5', (req, res) => {
    res.render('page5', { title: 'Page 5' });
});

// Start the server
app.listen(port, () => {
    console.log(`Server is listening at http://localhost:${port}`);
});
