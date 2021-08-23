const mongoose = require('mongoose');

var schema = new mongoose.Schema({
     nic:{
         type:String,
         required:true
     },
     name:{
         type:String,
         required:true
     },
     age:{
         type:String,
         required:true
     },
     vaccine:String
})

const patientsdb =mongoose.model('patientsdb', schema);

module.exports = patientsdb;
