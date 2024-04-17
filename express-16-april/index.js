const express= require('express') // module by mongo
const app = express()

const student = require('./routes/Student')

app.use(student)

const connect = require('./connection') // module by us
connect()

// app.get('/' , (req,res) => {
//     res.end('<h1> Home Page ... </h1>')
// })


app.listen(3000 , (err) => {
    if(err){
        console.log(err);
    }
    else{
        console.log('Server is running at 3000');
    }
})