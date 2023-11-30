import db from "../models/index.js";

const Holiday = db.holiday;

export default {
    getAllHoliday() {
    const resp = Holiday.findAll()
  
    return resp;
  },
  getByIDHoliday(id) {
    const resp = Holiday.findByPk(id)
    return resp;
  },
  CreateHoliday(holiday){
    //const sql = "update users set fullname=:fullname, phone=:phone,  where id= :id";
    const resp = Holiday.create(holiday)
    return resp;
  },
  UpdateHoliday(holiday){
    
    //const sql = "update users set fullname=:fullname, phone=:phone,  where id= :id";
    const resp = Holiday.update(holiday,
      { where: {hdid: holiday.hdid} })
    return resp;
  },
};
