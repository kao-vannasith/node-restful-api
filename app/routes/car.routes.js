import authJwt from"../middleware/authJwt.js";
import controller  from "../controllers/car.controller.js";
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

  router.get('/api/cars', [authJwt.verifyToken], async (req,res) => {
    try{
      const resp = await controller.getAllCars();
      res.send(resp);
    }
    catch(err){
      logger.error('Exception occured while try to get all users',err);
      res.send([]);
    }
  });

  router.post('/api/car', async (req, res) => {
   
    try{
      const car = {
        car_name: req.body.car_name,
        brand: req.body.brand,
        image: req.body.image,
        color: req.body.color,
        year: req.body.year,
        plate: req.body.plate,
        country: req.body.country,
        cc: req.body.cc,
        no: req.body.no,
       
      };
        await controller.CreateCar(car);
        res.send('Create Sccuessfully')
    }
    catch(err){
      logger.error('Retrun', err);
      res.send([])
    }
   })
 

  export default router