import authJwt from"../middleware/authJwt.js";
import controller  from "../controllers/company.controller.js";
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

  router.get('/api/company', [authJwt.verifyToken], async (req,res) => {
    try{
      const { page, size, comp_name } = req.query;
      const resp = await controller.getAllCompany(page, size, comp_name)
      
      res.send(resp);
    }
    catch(err){
      logger.error('Exception occured while try to get all users',err);
      res.send([]);
    }
  });
  router.get('/api/company/:id', [authJwt.verifyToken], async (req,res) => {
    try{
      const id = req.params.id
      const resp = await controller.getByIDCompany(id)
      res.send(resp);
    }
    catch(err){
      logger.error('Exception occured while try to get all users',err);
      res.send([]);
    }
  });

  router.post('/api/company',[authJwt.verifyToken], async (req, res) => {
   
    try{
      const company = {
        id: req.body.id,
        password: bcrypt.hashSync(req.body.password, 8),
        comp_name: req.body.comp_name,
        phone: req.body.phone,
        addr1: req.body.addr1,
        addr2: req.body.addr2,
        latitude: req.body.latitude,
        longitude: req.body.longitude,
        entry: req.body.entry,
        introduction: req.body.introduction, 
        business_type: req.body.business_type,
        cop_sn: req.body.cop_sn,
        ceo_nm: req.body.ceo_nm,
        biz_kind: req.body.biz_kind,
        biz_type: req.body.biz_type,
        email: req.body.email,
        second_code: req.body.second_code,
        second_code_time: req.body.second_code_time,
        writedate: req.body.writedate,
        modifydate: req.body.modifydate
       
      };
        await controller.CreateCompany(company);
        res.send('Create Company Sccuessfully')
    }
    catch(err){
        console.log(err)
      logger.error('Retrun', err);
      res.send([])
    }
   })

   router.patch('/api/company', async (req, res) => {
   
    try{
      const company = { 
        comid: req.body.comid,
        comp_name: req.body.comp_name,
        phone: req.body.phone,
        addr1: req.body.addr1,
        addr2: req.body.addr2,
        latitude: req.body.latitude,
        longitude: req.body.longitude,
        entry: req.body.entry,
        introduction: req.body.introduction,
        business_type: req.body.business_type,
        cop_sn: req.body.cop_sn,
        ceo_nm: req.body.ceo_nm,
        biz_kind: req.body.biz_kind,
        biz_type: req.body.biz_type,
        email: req.body.email,
        second_code: req.body.second_code,
        second_code_time: req.body.second_code_time,
        writedate: req.body.writedate,
        modifydate: req.body.modifydate
      };
        await controller.UpdateCompany(company);
        res.send('Update Sccuessfully')
    }
    catch(err){
      logger.error('Retrun', err);
      res.send([])
    }
   })
 

  export default router