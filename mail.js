const nodemailer = require('nodemailer')
const mailGun = require('nodemailer-mailgun-transport')

const auth ={
    auth:{
        api_key:"",
        domain:""

    }
}

const transporter =nodemailer.createTransport(mailGun(auth));

const mailOptions={
    from:"jebessadejene2021@gmail.com",
    to:"jebessadejene2020@gmail.com",
    subject:"this the subject",
    message:" here is the message"
}

transporter.sendMail(mailOptions,function(err,data){
    if(err){
        console.log("error occurs");
    }else{
        console.log("message sent");
    }
})