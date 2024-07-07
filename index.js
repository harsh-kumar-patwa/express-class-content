const express = require('express');
const app = express();
const mongoose = require('mongoose');
app.use(express.json());
// app.use(middleware);
// app.use(logger);

mongoose.connect("mongodb+srv://HarshKumarPatwa:Harsh3446@cluster0.mccbu.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
    .then(() => {
        console.log("DB Connection Successful");
    })
    .catch((err) => {
        console.log("Failed",err);
    });

const productSchema = new mongoose.Schema({
    product_name: {
        type: String,
        required: true
    },
    product_price: {
        type: String,
        required: true
    },
    isInStock:{
        type:Boolean,
        required:true
    },
    category:{
        type:String,
        required:true
    
    }
    
});
const productModel = mongoose.model('products', productSchema);



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


//post call
app.post('/api/products',async(req,res)=>{
    const body = req.body;
    const product = productModel.create({
        product_name:body.product_name,
        product_price:body.product_price,
        isInStock:body.isInStock,
        category:body.category
    });
    console.log(product);
    return res.status(201).json({message:"Product Created"});
});

//listen the port 
app.listen(3000, () => { console.log('Listening on port 3000...') });


