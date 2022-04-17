// const { Router } = require("express");
var nodemailer = require('nodemailer');
var mongoose=require("mongoose")
const express = require("express");

const app = express()


moURL="mongodb://localhost:27017/?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false";

mongoose.connect(moURL,{useNewUrlParser: true,useUnifiedTopology:true}).then((result)=>(
    app.listen(4000))).catch((err)=>{
        console.log(err);
    });



// app.listen(3500)

app.use(express.static("public"));
app.use(express.urlencoded({extended:false}))


app.set("view engine", 'ejs')
   
app.post('/email',(req,res)=>{
    console.log(req.body);
    
    res.json({message: "Message recieved"})
})

app.get('/',(req,res)=>{
    // res.redirect("/abouts")
    res.render("index")
      
   })
app.use(express.json());
// app.use("/abouts",aboutRouters)

// app.use((req,res)=>{
//     res.status(404).render("404",{title: "404"})
// })
