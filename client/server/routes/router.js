const express = require('express');
const route = express.Router()

const services=require("../services/render")

route.get('/',services.homeRoutes);
 
 route.get('/add-user',services.add_patient )
 
 route.get('/update-patient', services.update_patient)

 module.exports = route