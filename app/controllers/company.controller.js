import companyRepo from "../repositories/company.repo.js";

export default {

    getAllCompany(page, size, comp_name){
    return companyRepo.getAllCompany(page, size, comp_name);
  },
  getByIDCompany(id){
    return companyRepo.getByIDCompany(id) 
  },

  CreateCompany(company){
    return companyRepo.CreateCompany(company);
  },

  UpdateCompany(company){
    return companyRepo.UpdateCompany(company)
  }
}

