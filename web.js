 const {Nuxt} = require('nuxt');
 const express = require('express');
 const bodyParser = require('body-parser');
 const cors = require('cors');
 const mailSender = require('sender')
 const PORT = process.env.PORT || 5000
 //const configs = require('../nuxt.config.js');

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
let handleRequest= async function(req, res){
    await nuxt.ready();
    res.set('Cache-Control', 'public, max-age=1200, s-maxage=2400');
    nuxt.render(req, res);
  };

app.post('/mail', mailSender);
app.get('*',handleRequest)
app.listen(PORT,()=>{
  console.log('App started')
})

