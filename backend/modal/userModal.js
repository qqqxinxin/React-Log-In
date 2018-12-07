const mongoose = require('mongoose');
const uniqueValidator = require ('mongoose-unique-validator');
const UserSchema = mongoose.Schema ({

  email: {
    type: String,
    required: true,
    unique:true
  },

  password: {
    type: String,
    required: true,
    
  }, 

  first_name: {
    type: String,
    required: true,
    
  }, 

  last_name: {
    type: String,
    required: true,
    
  }
});

UserSchema.plugin (uniqueValidator,{message:'is already taken'});
module.exports = mongoose.model('User', UserSchema);