
import companyRepo from "../repositories/company_payment.repo.js";

export default {

    getAllCompany_payment(){
    return companyRepo.getAllCompany_payment();
  },
  getByIDCompany_payment(id){
    return companyRepo.getByIDCompany_payment(id) 
  },

  CreateCompany_payment(conpany){
    return companyRepo.CreateCompany_payment(conpany);
  },

  UpdateCompany_payment(company){
    return companyRepo.UpdateCompany_payment(company)
  }
}

