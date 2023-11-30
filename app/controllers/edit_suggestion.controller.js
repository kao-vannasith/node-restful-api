import edit_suggestionRepo from "../repositories/edit_suggestion.repo.js";

export default {

    getAllEdit_suggestion(){
    return edit_suggestionRepo.getAllEdit_suggestion();
  },
  getByIDEdit_suggestion(id){
    return edit_suggestionRepo.getByIDEdit_suggestion(id) 
  },

  UpdateEdit_suggestion(suggestion){
    return edit_suggestionRepo.UpdateEdit_suggestion(suggestion);
  },

  CreateEdit_suggestion(suggestion){
    return edit_suggestionRepo.CreateEdit_suggestion(suggestion)
  }
}

