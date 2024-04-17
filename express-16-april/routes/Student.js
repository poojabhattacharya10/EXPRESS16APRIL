const express = require('express')
const router = express.Router()

const StudentController = require('../controller/Student')

router.use(express.json())

router.post('/student/create' , (req,res) => {
    StudentController.createStudent(req,res)
})

router.get('/students' , (req,res) => {
    StudentController.getStudents(req,res)
})


router.get('/student/:rollNo' , (req,res) => {
    StudentController.getStudent(req,res)
})

router.put('/student/:rollNo' , (req,res) => {
    StudentController.updateStudent(req,res)
})

router.delete('/student/:rollNo' , (req,res) => {
    StudentController.deleteStudent(req,res)
})

module.exports = router