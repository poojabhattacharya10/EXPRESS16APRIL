const Student = require("../models/Student");

const createStudent = async (req,res)=> {
    try{
        console.log(req.body , 'req.body');
        let student = new Student(req.body)
        student = await student.save()
        res.end('<h1> create method </h1>') 
        
    }
    catch(err){
        console.log(err.message , ' : msg ....');
    }
    // console.log(req.body , 'req.body');
    // res.end('<h1> create method </h1>')
}


const getStudents = async (req,res)=> {
    try{
        let students = await Student.find({})
        console.log(students);
        res.json(students)
    }
    catch(err){
        console.log(err.message , ' : msg ....');
    }
    // console.log(req.body , 'req.body');
    // res.end('<h1> create method </h1>')
}


const getStudent = async (req,res)=> {
    try{

        let rollNo = req.params.rollNo
        console.log(rollNo , ' : rollNo');
        let student = await Student.findOne({rollNo : rollNo})
        console.log(student);
        res.json(student)
    }
    catch(err){
        console.log(err.message , ' : msg ....');
    }
    // console.log(req.body , 'req.body');
    // res.end('<h1> create method </h1>')
}


const updateStudent = async (req,res)=> {
    try{
        console.log(' in update function ... ');
        let rollNo = req.params.rollNo
        console.log(rollNo , ' : rollNo');
        let student = await Student.findOne({rollNo : rollNo})
        console.log(student , 'student');
        student.fatherName = 'NeelKanth'
        student = await student.save()
        res.end('<h1> data updated successfully ... </h1>')
    }
    catch(err){
        console.log(err.message , ' : msg ....');
    }
    // console.log(req.body , 'req.body');
    // res.end('<h1> create method </h1>')
}


const deleteStudent = async (req,res)=> {
    try{
        let rollNo = req.params.rollNo
        await Student.deleteOne({rollNo : rollNo})
        // student = await student.save()
        res.end('<h1> data deleted successfully ... </h1>')
    }
    catch(err){
        console.log(err.message , ' : msg ....');
    }
    // console.log(req.body , 'req.body');
    // res.end('<h1> create method </h1>')
}


module.exports = {
    createStudent,
    getStudents,
    getStudent,
    updateStudent,
    deleteStudent
}