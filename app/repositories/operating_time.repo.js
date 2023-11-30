import db from "../models/index.js";

const Operating_time = db.operating_time;

export default {
    getAllOperating_time() {
    const resp = Operating_time.findAll()
  
    return resp;
  },
  getByIDOperating_time(id) {
    const resp = Operating_time.findByPk(id)
    return resp;
  },
  CreateOperating_time(operating_time){
    //const sql = "update users set fullname=:fullname, phone=:phone,  where id= :id";
    const resp = Operating_time.create(operating_time)
    return resp;
  },
  UpdateOperating_time(operating_time){
    
    //const sql = "update users set fullname=:fullname, phone=:phone,  where id= :id";
    const resp = Operating_time.update(operating_time,
      { where: {otid: operating_time.otid} })
    return resp;
  },
};
