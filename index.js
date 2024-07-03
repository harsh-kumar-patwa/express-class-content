const express = require('express');
const app = express();

app.use(express.json());

let courses = [
    {id:1, name:'course1'},
    {id:2, name:'course2'},
    {id:3, name:'course3'}
]

app.get('/courses',(req,res)=>{
    res.json(courses);
});
app.post('/courses',(req,res)=>{
    const course = {
        id: courses.length + 1,
        name: req.body.name
    };
    courses.push(course);
    console.log(req.body);
    
});
app.listen(3000,()=>{console.log('Listening on port 3000...')});
