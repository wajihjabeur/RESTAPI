const mongoose = require('mongoose');
const express =require('express')
const app =express()
app.listen(5000,(err)=>{
    err?console.log(err):console.log('server is running')
})

require('dotenv').config({path:'./Config/.env'})
// connect to server 

mongoose.connect(process.env.MONGO_URI,
    { useNewUrlParser: true, useUnifiedTopology: true },
    (err) => (err ? console.log(err) : console.log("Database connected")))


    const User =require('./Models/User')
    app.use(express.json());


    app.get('/users',(req,res)=>
         User.find().then(el=>res.json(el)).catch((err)=>console.log(err))
        // sinon res.send(User)
        
    )


    app.post("/user_add", (req, res) => {
    let person=new User(req.body)
    person.save().then(el=>res.json(el)).catch((err)=>console.log(err))})
     
    
    app.put('/users/:id',(req,res)=>{
        User.findByIdAndUpdate(req.params.id,{ $set:req.body},{new:true})
        .then((el)=>res.json(el)).catch((err)=>console.log(err))
    }
    )


    app.delete('/:id',(req,res)=>{

        User.deleteOne({_id:req.params.id})
        .then((el)=>res.json(el)).catch((err)=>console.log(err))

    })











