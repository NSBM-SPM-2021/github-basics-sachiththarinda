const axios = require('axios');


exports.homeRoutes =(req,res)=>{
    axios.get('http://localhost:3000/api/patients')
    .then(function(response){
        console.log(response.data)
        res.render('index', { patients : response.data });
    })
    .catch(err =>{
        res.send(err);
    })
   
}

exports.add_patient =(req,res)=>{
    res.render('add_patient');
}

exports.update_patient =(req,res)=>{
    res.render('update_patient');
}
