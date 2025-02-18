const express = require('express');
const app = express();
const mongoose = require('mongoose');
app.use(express.json());
require('dotenv').config();
const productRoutes = require('./routes/productRoutes');
const userRoutes = require('./routes/userRoutes');
// app.use(middleware);
// app.use(logger);

mongoose
    .connect(process.env.MONGO_URL)
    .then(() => {
        console.log("DB Connection Successful");
    })
    .catch((err) => {
        console.log("Failed ",err);
    });

app.use('/api/products',productRoutes);
app.use('/api/users',userRoutes);


//listen the port 
app.listen(3000, () => { console.log('Listening on port 3000...') });
// let courses = [
//     { id: 1, name: 'course1' },
//     { id: 2, name: 'course2' },
//     { id: 3, name: 'course3' }
// ]
// //get call
// app.get('/courses', (req, res) => {
//     res.json(courses);
// });
// //post call
// app.post('/courses', (req, res) => {
//     const course = {
//         id: courses.length + 1,
//         name: req.body.name
//     };
//     courses.push(course);
//     // console.log(req.body);
// });
// //update call
// app.put('/courses/:id', (req, res) => {
//     const course = courses.find(
//         c => c.id === parseInt(req.params.id)
//     );
//     if (!course) {
//         console.log('Course not found');
//         return;
//     };
//     course.name = req.body.name;
//     res.send(course);
// });
// //delete call
// app.delete('/courses/:id', (req, res) => {
//     const course = courses.find(
//         c => c.id === parseInt(req.params.id)
//     );
//     if (!course) {
//         console.log('Course not found');
//         return;
//     };
//     const index = courses.indexOf(course);
//     courses.splice(index, 1);
//     res.send(courses);
// });

// //custom middle ware
// function middleware(req, res, next) {
//     console.log('called...');
//     next();
// }
// //logger
// function logger(req, res, next) {
//     // Log the HTTP method, IP address, hostname, and current date/time
//     console.log(`Method: ${req.method} | IP: ${req.ip} | Hostname: ${req.hostname} | Date: ${new Date()}`);
//     next();
// }





