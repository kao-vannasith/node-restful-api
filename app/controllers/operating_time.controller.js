
import companyRepo from "../repositories/operating_time.repo.js";

export default {

    getAllOperating_time(){
    return companyRepo.getAllOperating_time();
  },
  getByIDOperating_time(id){
    return companyRepo.getByIDOperating_time(id) 
  },

  CreateOperating_time(operating_time){
    return companyRepo.CreateOperating_time(operating_time);
  },

  UpdateOperating_time(operating_time){
    return companyRepo.UpdateOperating_time(operating_time)
  }
}

