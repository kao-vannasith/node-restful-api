import db from "../models/index.js";
import logger from "../config/logger.config.js";

const Car = db.cars;

export default {
  getAllCars() {
   
    const resp = Car.findAll()
  
    return resp;
  },
  CreateCar(car){
    
    //const sql = "update users set fullname=:fullname, phone=:phone,  where id= :id";
    const resp = Car.create(car)
    return resp;
  }
};
