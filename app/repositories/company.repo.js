import db from "../models/index.js";
import pagination from "../config/pagination.js"
const Op = db.Sequelize.Op;
const Company = db.company;

export default {
    async getAllCompany(page, size, comp_name) {
      var condition = comp_name ? { comp_name: { [Op.like]: `%${comp_name}%` } } : null;
      const { limit, offset } =  pagination.getPagination(page, size);

      const data = await Company.findAndCountAll({ where: condition, limit, offset })
      
      const resp =  pagination.getPagingData(data, page, limit);
      return resp;
    
    
  },
  getByIDCompany(id) {
    const resp = Company.findByPk(id)
    return resp;
  },
  CreateCompany(company){
    //const sql = "update users set fullname=:fullname, phone=:phone,  where id= :id";
    const resp = Company.create(company)
    return resp;
  },
  UpdateCompany(company){
    
    //const sql = "update users set fullname=:fullname, phone=:phone,  where id= :id";
    const resp = Company.update(company,
      { where: {comid: company.comid} })
    return resp;
  },
};
