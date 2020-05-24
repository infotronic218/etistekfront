 const {Nuxt} = require('nuxt');
 const express = require('express');
 const bodyParser = require('body-parser');
 const cors = require('cors');
 //const configs = require('../nuxt.config.js');


 /**Function to send a mail */


const nodemailer = require('nodemailer');
const mailSender = function(req, res){
    res.set('Access-Control-Allow-Origin','*')
    var data = {
        email:req.body['email'],
        title:req.body['title'],
        text:req.body['text']
    }
    var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'sstechnologies226@gmail.com',
        pass: '*sstechnologies*2020'
    }
    });
    var mailOptions = {
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




 const app = express() ;
 app.use(bodyParser.json());
 app.use(cors()) ;
 app.use(express.static('public'))

 const config = {
     dev:false,
     buildDir:'app',
     debug:true,
     build:{
         publicPath:'/app'
     }
 }

const nuxt = new Nuxt(config) ;
 const { host, port } = nuxt.options.server;
var handleRequest= async function(req, res){
    await nuxt.ready();
    res.set('Cache-Control', 'public, max-age=1, s-maxage=1');
    nuxt.render(req, res);
  };

  var handleRequestV2= function(req,res){
    let url = req._parsedUrl.pathname;
    console.log(req._parsedUrl)
     console.log('URL DATA',req._parsedUrl.path)
    return nuxt.renderRoute(url).then(result=>{
       return  res.send(result.html)
     }).catch(error=>{
         return nuxt.render(req, res)
         //eturn res.send(error)
     })

  }

  var init = async function(){
      await nuxt.ready()
      app.use(nuxt.render)
  }



//init()

app.post('/mail', mailSender);
app.get('*',handleRequest)
app.listen(3000,'localhost',()=>{
  console.log('App started')
})

