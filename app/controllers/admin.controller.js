import logger from "../config/logger.config.js";
import adminRepo from "../repositories/admin.repo.js";

export default {

  getAllAdmin(){
    return adminRepo.getAllAdmin(); 
  },


  CreateAdmin(admin){
    return adminRepo.CreateAdmin(admin);
  }
}

