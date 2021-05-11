const { User } = require("../db"); // Sequelizer Models


module.exports = {

  createUser(user){
    return  console.log(user)
  },
  getOneDBRecipe(userId){
    
    return Recipe.findByPk(userId);

  }
}
