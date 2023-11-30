import logger from "../config/logger.config.js";
import carRepo from "../repositories/car.repo.js";

export default {

  getAllCars(){
    return carRepo.getAllCars(); 
  },


  CreateCar(car){
    return carRepo.CreateCar(car);
  }
}

