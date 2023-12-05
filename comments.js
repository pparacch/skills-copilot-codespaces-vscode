// Create web server using express
const express = require('express');
const app = express();
// Create a port to listen to
const port = 3001;
// Create a route
const comments = [
    {username: 'Todd', comment: 'lol that is so funny!'},
    {username: 'Skyler', comment: 'I like to go birdwatching with my dog'},
    {username: 'Sk8erBoi', comment: 'Plz delete your account, Todd'},
    {username: 'onlysayswoof', comment: 'woof woof woof'},
    {username: 'iliketurtles', comment: 'I like turtles!'}
]

app.get('/comments', (req, res) => {
    console.log(req);
    res.json(comments);
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});

