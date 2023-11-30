import authJwt from"../middleware/authJwt.js";
import controller  from "../controllers/operating_time.controller.js";
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

  router.get('/api/operating-time', [authJwt.verifyToken], async (req,res) => {
    try{
      const resp = await controller.getAllOperating_time()
      res.send(resp);
    }
    catch(err){
      logger.error('Exception occured while try to get all users',err);
      res.send([]);
    }
  });
  router.get('/api/operating-time/:id', [authJwt.verifyToken], async (req,res) => {
    try{
      const id = req.params.id
      const resp = await controller.getByIDOperating_time(id)
      res.send(resp);
    }
    catch(err){
      logger.error('Exception occured while try to get all users',err);
      res.send([]);
    }
  });

  router.post('/api/operating-time',[authJwt.verifyToken], async (req, res) => {
   
    try{
      const operating_time = {
        comid: req.body.comid,
        allday_open: req.body.allday_open,
        weekday_open: req.body.weekday_open,
        weekday_open_time: req.body.weekday_open_time,
        weekday_rest_time: req.body.weekday_rest_time,
        weekend_open: req.body.weekend_open,
        weekend_open_time: req.body.weekend_open_time,
        weekend_rest_time: req.body.weekend_rest_time,
        holiday_open: req.body.holiday_open,
        modifydate: req.body.modifydate,
        writedate: req.body.writedate,
       
      };
        await controller.CreateOperating_time(operating_time);
        res.send('Create Sccuessfully')
    }
    catch(err){
        console.log(err)
      logger.error('Retrun', err);
      res.send([])
    }
   })

   router.patch('/api/operating-time', async (req, res) => {
   
    try{
      const operating_time = { 
        otid: req.body.otid,
        comid: req.body.comid,
        allday_open: req.body.allday_open,
        weekday_open: req.body.weekday_open,
        weekday_open_time: req.body.weekday_open_time,
        weekday_rest_time: req.body.weekday_rest_time,
        weekend_open: req.body.weekend_open,
        weekend_open_time: req.body.weekend_open_time,
        weekend_rest_time: req.body.weekend_rest_time,
        holiday_open: req.body.holiday_open,
        modifydate: req.body.modifydate,
        writedate: req.body.writedate,
      };
        await controller.UpdateOperating_time(operating_time);
        res.send('Update Sccuessfully')
    }
    catch(err){
      logger.error('Retrun', err);
      res.send([])
    }
   })
 

  export default router