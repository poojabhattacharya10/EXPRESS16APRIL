const mongoose = require('mongoose')
const Schema = mongoose.Schema // db structure is schema


const StudentSchema = new Schema({
    rollNo : { type : String , require : true  },
    firstName : { type : String , require : true  },
    lastName : { type : String , require : true  }, 
    fatherName : { type : String , require : true  },
    address : { type : String , require : true  }
    
})

module.exports = mongoose.model('Student' , StudentSchema)