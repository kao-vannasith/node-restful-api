import authJwt from"../middleware/authJwt.js";
import controller  from "../controllers/company_infra.controller.js";
import express from 'express'
import logger from "../config/logger.config.js";


const router = express.Router()


  router.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  router.get('/api/company-infra', [authJwt.verifyToken], async (req,res) => {
    try{
      const resp = await controller.getAllCompany_infra()
      res.send(resp);
    }
    catch(err){
      logger.error('Exception occured while try to get all users',err);
      res.send([]);
    }
  });
  router.get('/api/company-infra/:id', [authJwt.verifyToken], async (req,res) => {
    try{
      const id = req.params.id
      const resp = await controller.getByIDCompany_infra(id)
      res.send(resp);
    }
    catch(err){
      logger.error('Exception occured while try to get all users',err);
      res.send([]);
    }
  });

  router.post('/api/company-infra',[authJwt.verifyToken], async (req, res) => {
   
    try{
      const company = {
        comid: req.body.comid,
        group_seat: req.body.group_seat,
        valet: req.body.valet,
        booking: req.body.booking,
        pet: req.body.pet,
        rest_area: req.body.rest_area,
        parking: req.body.parking,
        visit_trip: req.body.visit_trip,
        wifi: req.body.wifi,
        facilities: req.body.facilities,
        coffee: req.body.coffee,
        writedate: req.body.writedate,
        modifydate: req.body.modifydate
       
      };
        await controller.CreateCompany_infra(company);
        res.send('Create Company Sccuessfully')
    }
    catch(err){
        console.log(err)
      logger.error('Retrun', err);
      res.send([])
    }
   })

   router.patch('/api/company-infra', async (req, res) => {
   
    try{
      const company = { 
        ciid: req.body.ciid,
        comid: req.body.comid,
        group_seat: req.body.group_seat,
        valet: req.body.valet,
        booking: req.body.booking,
        pet: req.body.pet,
        rest_area: req.body.rest_area,
        parking: req.body.parking,
        visit_trip: req.body.visit_trip,
        wifi: req.body.wifi,
        facilities: req.body.facilities,
        coffee: req.body.coffee,
        writedate: req.body.writedate,
        modifydate: req.body.modifydate
      };
        await controller.UpdateCompany_infra (company);
        res.send('Update Sccuessfully')
    }
    catch(err){
      logger.error('Retrun', err);
      res.send([])
    }
   })
 

  export default router