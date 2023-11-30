import authJwt from"../middleware/authJwt.js";
import controller  from "../controllers/edit_suggestion.controller.js";
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

  router.get('/api/suggestion', [authJwt.verifyToken], async (req,res) => {
    try{
      const resp = await controller.getAllEdit_suggestion()
      res.send(resp);
    }
    catch(err){
      logger.error('Exception occured while try to get all users',err);
      res.send([]);
    }
  });
  router.get('/api/suggestion/:id', [authJwt.verifyToken], async (req,res) => {
    try{
      const id = req.params.id
      const resp = await controller.getByIDEdit_suggestion(id)
      res.send(resp);
    }
    catch(err){
      logger.error('Exception occured while try to get all users',err);
      res.send([]);
    }
  });

  router.post('/api/suggestion',[authJwt.verifyToken], async (req, res) => {
   
    try{
      const suggestion = {
        comid: req.body.comid,
        type: req.body.type,
        status: req.body.status,
        closure: req.body.closure,
        product: req.body.product,
        price: req.body.price,
        allday_open: req.body.allday_open,
        weekday_open: req.body.weekday_open,
        weekday_open_time: req.body.weekday_open_time,
        weekday_rest_time: req.body.weekday_rest_time,
        weekend_open: req.body.weekend_open,
        weekend_open_time: req.body.weekend_open_time,
        weekend_rest_time: req.body.weekend_rest_time,
        holiday_open: req.body.holiday_open,
        service: req.body.service,
        phone: req.body.phone,
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
        addr1: req.body.addr1,
        addr2: req.body.addr2,
        zipcode: req.body.zipcode,
        writedate: req.body.writedate,
       
      };
        await controller.CreateEdit_suggestion(suggestion);
        res.send('Create Sccuessfully')
    }
    catch(err){
        console.log(err)
      logger.error('Retrun', err);
      res.send([])
    }
   })

   router.patch('/api/suggestion', async (req, res) => {
   
    try{
      const suggestion = { 
        esid: req.body.esid,
        comid: req.body.comid,
        type: req.body.type,
        status: req.body.status,
        closure: req.body.closure,
        product: req.body.product,
        price: req.body.price,
        allday_open: req.body.allday_open,
        weekday_open: req.body.weekday_open,
        weekday_open_time: req.body.weekday_open_time,
        weekday_rest_time: req.body.weekday_rest_time,
        weekend_open: req.body.weekend_open,
        weekend_open_time: req.body.weekend_open_time,
        weekend_rest_time: req.body.weekend_rest_time,
        holiday_open: req.body.holiday_open,
        service: req.body.service,
        phone: req.body.phone,
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
        addr1: req.body.addr1,
        addr2: req.body.addr2,
        zipcode: req.body.zipcode,
        writedate: req.body.writedate,
      };
        await controller.UpdateEdit_suggestion(suggestion);
        res.send('Update Sccuessfully')
    }
    catch(err){
      logger.error('Retrun', err);
      res.send([])
    }
   })
 

  export default router