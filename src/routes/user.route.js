const express=require('express');
const router= express.Router();


const usercontroller=require('../controllers/user.controller')

router.get('/',usercontroller.getuserlist);

router.get('/user/:mail',usercontroller.getuserbyid)

router.get('/csv',usercontroller.getcsv);

router.post('/',usercontroller.createNewUser)




module.exports=router;



