import db from "../models/index.js";

const Company_infra = db.company_infra;

export default {
    getAllCompany_infra() {
    const resp = Company_infra.findAll()
  
    return resp;
  },
  getByIDCompany_infra(id) {
    const resp = Company_infra.findByPk(id)
    return resp;
  },
  CreateCompany_infra(company){
    //const sql = "update users set fullname=:fullname, phone=:phone,  where id= :id";
    const resp = Company_infra.create(company)
    return resp;
  },
  UpdateCompany_infra(conpany){
    
    //const sql = "update users set fullname=:fullname, phone=:phone,  where id= :id";
    const resp = Company_infra.update(conpany,
      { where: {ciid: conpany.ciid} })
    return resp;
  },
};
