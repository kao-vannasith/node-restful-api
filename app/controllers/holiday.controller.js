
import companyRepo from "../repositories/holiday.repo.js";

export default {

  getAllHoliday(){
    return companyRepo.getAllHoliday();
  },

  getByIDHoliday(id){
    return companyRepo.getByIDHoliday(id)
  },

  CreateHoliday(conpany){
    return companyRepo.CreateHoliday(conpany);
  },

  UpdateHoliday(company){
    return companyRepo.UpdateHoliday(company)
  }
}

