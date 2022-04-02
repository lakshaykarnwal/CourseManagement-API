const express = require('express');
const app = express();
const port = process.env.PORT || 8080; // using a enviornment port or 8080 (default)

app.use(express.json()); //using middleware

const courses = [
    { id: 1, name: 'COSC'},
    { id: 2, name: 'PHIL'},
    { id: 3, name: 'ECON'}
];

app.get('/', (req, res) => {
    res.send("CourseManagement API - Manage your courses with ease");
});

//Get request for all courses
app.get('/api/courses', (req, res) => {
    res.send(courses);
});

//Get request for a course based on its ID
app.get('/api/courses/:id', (req, res) => {
    const course = courses.find(c => c.id === parseInt(req.params.id));

    if(!course) res.status(404).send("Course with the given ID was not found")
    res.send(course);
});

//Adds a new course
app.post('/api/courses', (req, res) => {
    // some error handling
    if(!req.body.name || req.body.name.length < 3) {
        //400 Bad Request
        res.status(400).send('Name is required and should be minimum 3 characters.');
        return;
    }

    //Add the new course to the array
    const course = {
        id: courses.length + 1,
        name: req.body.name
    };
    courses.push(course);

    //display the course
    res.send(course);
});

//Adds a course based on the given ID
app.put('/api/courses/:id', (req, res) => {
    //Check if the course of the given ID exists
    const course = courses.find(c => c.id === parseInt(req.params.id));

    if(!course) res.status(404).send("Course with the given ID was not found")
    res.send(course);

    // Check if the given name matches the required criteria
    if(!req.body.name || req.body.name.length < 3) {
        //400 Bad Request
        res.status(400).send('Name is required and should be minimum 3 characters.');
        return;
    }

    //update the course
    course.name = req.body.name;
    res.send(course);
});

//Deletes a course based on the given ID
app.delete('/api/courses/:id', (req, res) => {
    //Check if the course of the given ID exists
    const course = courses.find(c => c.id === parseInt(req.params.id));

    if(!course) res.status(404).send("Course with the given ID was not found")
    res.send(course);

    //Update the courses array
    const index = courses.indexOf(course);
    courses.splice(index, 1);

    //send the course
    res.send(course);
});

app.listen(
    port, 
    () => console.log(`The server is live on http://localhost:${port}`)
);

