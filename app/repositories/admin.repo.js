import db from "../models/index.js";
import logger from "../config/logger.config.js";

const Admin = db.admin;

export default {
  getAllAdmin() {
   
    const resp = Admin.findAll()
  
    return resp;
  },
  CreateAdmin(admin){
   
    const resp = Admin.create(admin)
    return resp;
  }
};
