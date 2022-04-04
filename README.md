# CourseManagement API
Made an api to manage courses.\
Deployed using Heroku: https://powerful-island-03920.herokuapp.com/

This is a test api for the Reyna Health application

Test data:
An array of 3 courses is used as test data

[
    { id: 1, name: 'COSC'},
    { id: 2, name: 'PHIL'},
    { id: 3, name: 'ECON'}
];

### API functions:
1. app.get('/api/courses', (req, res)) - Get request for all courses
2. app.get('/api/courses/:id', (req, res)) - Get request for a course based on its ID
3. app.post('/api/courses', (req, res)) - Adds a new course
4. app.put('/api/courses/:id', (req, res)) - Adds a course based on the given ID
5. app.delete('/api/courses/:id', (req, res)) - Deletes a course based on the given ID

