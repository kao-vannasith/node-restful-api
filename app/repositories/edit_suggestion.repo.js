import db from "../models/index.js";
import logger from "../config/logger.config.js";

const Edit_suggestion = db.edit_suggestion;

export default {
    getAllEdit_suggestion() {
    const resp = Edit_suggestion.findAll()
  
    return resp;
  },
  getByIDEdit_suggestion(id) {
    const resp = Edit_suggestion.findByPk(id)
    return resp;
  },
  CreateEdit_suggestion(suggestion){
    //const sql = "update users set fullname=:fullname, phone=:phone,  where id= :id";
    const resp = Edit_suggestion.create(suggestion)
    return resp;
  },
  UpdateEdit_suggestion(suggestion){
    
    //const sql = "update users set fullname=:fullname, phone=:phone,  where id= :id";
    const resp = Edit_suggestion .update(suggestion,
      { where: {esid: suggestion.esid} })
    return resp;
  },
};
