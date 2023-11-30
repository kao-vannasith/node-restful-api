
import companyRepo from "../repositories/company_infra.repo.js";

export default {

    getAllCompany_infra(){
    return companyRepo.getAllCompany_infra();
  },
  getByIDCompany_infra(id){
    return companyRepo.getByIDCompany_infra(id) 
  },

  CreateCompany_infra(conpany){
    return companyRepo.CreateCompany_infra(conpany);
  },

  UpdateCompany_infra(company){
    return companyRepo.UpdateCompany_infra(company)
  }
}

