const nodemailer = require('nodemailer');
const mailSender = function(req, res){
    res.set('Access-Control-Allow-Origin','*')
    let data = {
        email:req.body['email'],
        title:req.body['title'],
        text:req.body['text']
    }
    let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'sstechnologies226@gmail.com',
        pass: '*sstechnologies*2020'
    }
    });
    let mailOptions = {
    from: data.email,
    to: 'ousseni218@gmail.com',
    subject: data.title,
    text: data.text
    };
    return transporter.sendMail(mailOptions, function(error, info){
    if (error) {
       return res.status(200).send({
            state:true
        })
    } else {
      return res.status(200).send({
            state:false
        })
    }
    });

};

export default mailSender
