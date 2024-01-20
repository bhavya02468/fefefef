const userModel=require('../models/user.model')
const csvreader=require('../csvreader')







exports.getuserlist=(req,res)=>{
    // console.log('here all user list')
    userModel.getAllUser((err,user)=>{
        console.log('we are here')
        console.log('user',user)
        res.send(user)
    })
}


exports.getuserbyid=(req,res)=>{
    console.log("by id")
    if(req.body.constructor === Object && Object.keys(req.body).length === 0){
        res.send(400).send({success: false, message: 'Please fill all fields'});
    }else{
  userModel.getuserbyid(req.params.id,(err,user)=>{

        console.log('single user data',user)
        res.send(user)
    })
    }
  
}
exports.getcsv=(req,res)=>{
    userModel.getCSV((err,user)=>{

        console.log('single user data',user)
        res.send(user)   
    })
 
 
}

exports.createNewUser=(req,res)=>{
    console.log("create new ",req.body)
    const userData=new userModel(req.body)
    console.log("valid data")
    userModel.createuser(userData,(err,user)=>{
        if(err){
            res.send(err)
            
        }else{
            
        }
    })
}
