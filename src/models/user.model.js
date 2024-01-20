var dbConn=require('../../config/db.config');
const csvreader=require('../csvreader')




var User =function(user){
    this.name = user.name;
    this.email = user.mail;
    this.password = user.password
    this.phone_number = user.number

}


User.getAllUser=(result)=>{
    dbConn.query('select*from data;',(err,res)=>{
        if (err){
            console.log("error fetching user")
            result(null,err);
        }else{
            console.log("fetched")
            result(null,res)
        }
    })
}



User.getuserbyid=(id,result)=>{
    id =`${id}`
    dbConn.query('SELECT * FROM data WHERE mail=?', id, (err, res)=>{
        if(err){
            console.log('Error while fetching employee by id', err);
           console.log(err)
            result(null, err);
        }else{
            result(null, res);
        }
    })

}

User.createuser=(userData,result)=>{
    dbConn.query('INSERT INTO data SET ? ',userData,(err,res)=>{

console.log(userData);


        if(err){
            console.log('Error while inserting data');
            console.log(err)
            result(null, err);
        }else{
            console.log('user created successfully');
            result(null, res)
        }

    })

}
      

User.getCSV=(result)=>{
    
            result(null, csvreader.results)
    


    }
module.exports=User