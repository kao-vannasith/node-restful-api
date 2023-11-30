import db from "../models/index.js";

const Company_payment = db.company_payment;

export default {
    getAllCompany_payment() {
    const resp = Company_payment.findAll()
  
    return resp;
  },
  getByIDCompany_payment(id) {
    const resp = Company_payment.findByPk(id)
    return resp;
  },
  CreateCompany_payment(company){
    //const sql = "update users set fullname=:fullname, phone=:phone,  where id= :id";
    const resp = Company_payment.create(company)
    return resp;
  },
  UpdateCompany_payment(conpany){
    
    //const sql = "update users set fullname=:fullname, phone=:phone,  where id= :id";
    const resp = Company_payment.update(conpany,
      { where: {cpid: conpany.cpid} })
    return resp;
  },
};
