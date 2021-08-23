var patientsdb= require('../model/model');


exports.create=(req,res)=>{
    if(!req.body){
        res.status(400).send({ message : "Content can not be emtpy!"});
        return;

}

const patient = new patientsdb({
    nic:req.body.nic,
    name:req.body.name,
    age:req.body.age,
    vaccine:req.body.vaccine
})

patient
  .save(patient)
  .then(data=>{
      res.send(data)
  })
  .catch(err=>{
      res.status(500).send({
            message:err.message || "some error occurred while creaing a create operation "
      });
  });


}
exports.find=(req,res)=>{
    
}

exports.update=(req,res)=>{
    
}

exports.delete=(req,res)=>{
    
}

