const express = require('express');
const route = express.Router()

const services=require("../services/render")
const controller= require("../controller/controller")

route.get('/',services.homeRoutes);
 
 route.get('/add-user',services.add_patient )
 
 route.get('/update-patient', services.update_patient)

route.post('/api/patients',controller.create);
route.get('/api/patients',controller.find);
route.put('/api/patients/:id',controller.update);
route.delete('/api/patients/:id',controller.delete);

 module.exports = route