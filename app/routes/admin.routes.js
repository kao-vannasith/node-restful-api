import authJwt from"../middleware/authJwt.js";
import controller  from "../controllers/admin.controller.js";
import express from 'express'
import logger from "../config/logger.config.js";
import bcrypt  from "bcryptjs";


const router = express.Router()


  router.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  router.get('/api/admin', [authJwt.verifyToken], async (req,res) => {
    try{
      const resp = await controller.getAllAdmin();
      res.send(resp);
    }
    catch(err){
      logger.error('Exception occured while try to get all users',err);
      res.send([]);
    }
  });

  router.post('/api/admin', async (req, res) => {
   
    try{
      const admin = {
       
        type: req.body.type,
        id: req.body.id,
        password: bcrypt.hashSync(req.body.password, 8),
        password_expiredate: req.body.password_expiredate,
        name: req.body.name,
        phone: req.body.phone,
        activation: req.body.activation,
        comp_mng: req.body.comp_mng,
        mbr_mng: req.body.mbr_mng,
        srvc_mng: req.body.srvc_mng,
        rsv_mng: req.body.rsv_mng,
        cnt_mng: req.body.cnt_mng,
        second_code: req.body.second_code,
        second_code_time: req.body.second_code_time,
        writedate: req.body.writedate,
        modifydate: req.body.modifydate
       
      };
      console.log(admin)
        await controller.CreateAdmin(admin);
        res.send('Create Admin Sccuessfully')
    }
    catch(err){
        console.log(err)
      logger.error('Retrun', err);
      res.send([])
    }
   })
 

  export default router