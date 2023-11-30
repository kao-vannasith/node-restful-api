import authJwt from"../middleware/authJwt.js";
import controller  from "../controllers/holiday.controller.js";
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

  router.get('/api/holiday', [authJwt.verifyToken], async (req,res) => {
    try{
      const resp = await controller.getAllHoliday()
      res.send(resp);
    }
    catch(err){
      logger.error('Exception occured while try to get all users',err);
      res.send([]);
    }
  });
  router.get('/api/holiday/:id', [authJwt.verifyToken], async (req,res) => {
    try{
      const id = req.params.id
      const resp = await controller.getByIDHoliday(id)
      res.send(resp);
    }
    catch(err){
      logger.error('Exception occured while try to get all users',err);
      res.send([]);
    }
  });

  router.post('/api/holiday',[authJwt.verifyToken], async (req, res) => {
   
    try{
      const holiday = {
        comid: req.body.comid,
        startdate: req.body.startdate,
        enddate: req.body.enddate,
        writedate: req.body.writedate,
     
      };
        await controller.CreateHoliday(holiday);
        res.send('Create Holiday Sccuessfully')
    }
    catch(err){
        console.log(err)
      logger.error('Retrun', err);
      res.send([])
    }
   })

   router.patch('/api/holiday', async (req, res) => {
   
    try{
      const holiday = { 
        hdid: req.body.hdid,
        comid: req.body.comid,
        startdate: req.body.startdate,
        enddate: req.body.enddate,
        writedate: req.body.writedate,
      };
        await controller.UpdateHoliday (holiday);
        res.send('Update Sccuessfully')
    }
    catch(err){
      logger.error('Retrun', err);
      res.send([])
    }
   })
 

  export default router