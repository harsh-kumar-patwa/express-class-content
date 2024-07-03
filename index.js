const express = require('express');
const app = express();

app.use(express.json());

let courses = [
    {id:1, name:'course1'},
    {id:2, name:'course2'},
    {id:3, name:'course3'}
]
//get call
app.get('/courses',(req,res)=>{
    res.json(courses);
});
//post call
app.post('/courses',(req,res)=>{
    const course = {
        id: courses.length + 1,
        name: req.body.name
    };
    courses.push(course);
    console.log(req.body);
});
//update call
app.put('/courses/:id',(req,res)=>{
    const course = courses.find(
        c=>c.id === parseInt(req.params.id)
    );
    if(!course) {
        console.log('Course not found');
        return;
    };
    course.name = req.body.name;
    res.send(course);
});
//delete call
app.delete('/courses/:id',(req,res)=>{
    const course = courses.find(
        c=>c.id === parseInt(req.params.id)
    );
    if(!course) {
        console.log('Course not found');
        return;
    };
    const index = courses.indexOf(course);
    courses.splice(index,1);
    res.send(courses);
});
//listen the port 
app.listen(3000,()=>{console.log('Listening on port 3000...')});
