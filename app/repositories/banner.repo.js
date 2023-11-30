import db from "../models/index.js";

const Banner = db.banner;

export default {
    getAllBanner() {
    const resp = Banner.findAll()
  
    return resp;
  },
  getByIDBanner(id) {
    const resp = Banner.findByPk(id)
    return resp;
  },
  CreateBanner(banner){
    //const sql = "update users set fullname=:fullname, phone=:phone,  where id= :id";
    const resp = Banner.create(banner)
    return resp;
  },
  UpdateBanner(banner){
    
    //const sql = "update users set fullname=:fullname, phone=:phone,  where id= :id";
    const resp = Banner.update(banner,
      { where: {bnid: banner.bnid} })
    return resp;
  },
};
