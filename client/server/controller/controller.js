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
    vaccine:req.body.status
})

patient
  .save(patient)
  .then(data=>{
      res.redirect("/add-user")
  })
  .catch(err=>{
      res.status(500).send({
            message:err.message || "some error occurred while creaing a create operation "
      });
  });


}

exports.find=(req,res)=>{

    if(req.query.id){
        const id = req.query.id;

        patientsdb.findById(id)
            .then(data =>{
                if(!data){
                    res.status(404).send({ message : "Not found patient with id "+ id})
                }else{
                    res.send(data)
                }
            })
            .catch(err =>{
                res.status(500).send({ message: "Erro retrieving patient with id " + id})
            })

    }else{
    patientsdb.find()
    .then(patient => {
        res.send(patient)
    })
    .catch(err =>{
        res.status(500).send({message:err.message || "some error occurred while retriving patients information "})
    })
}
}

exports.update=(req,res)=>{
    if(!req.body){
        res.status(400).send({ message : "Data Update can not be emtpy!"})
        return;
    }
    const id = req.params.id;
    patientsdb.findByIdAndUpdate(id, req.body, {useFindAndModify:false})
    .then(data=>{
        if(!data){
            res.status(404).send({message: 'can not update patient with ${id}.May patient not found' })
        }else{
            res.send(data)
        }
    })
    .catch(err =>{
        res.status(500).send({message:'Error update patient info'})
    })
}



exports.delete=(req,res)=>{
    const id = req.params.id;

    patientsdb.findByIdAndDelete(id)
        .then(data => {
            if(!data){
                res.status(404).send({ message : `Cannot Delete with id ${id}. Maybe id is wrong`})
            }else{
                res.send({
                    message : "Patient was deleted successfully!"
                })
            }
        })
        .catch(err =>{
            res.status(500).send({
                message: "Could not delete patient with id=" + id
            });
        });
}

