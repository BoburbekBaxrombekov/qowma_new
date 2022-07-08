const {allStudents, newStudent, checkPayment, paidStudents, notPaidStudents, studentStatistics} = require('./model')

module.exports = {
    GET: async(req, res) => {
        try{
            const students = await allStudents()
            res.send(students)
        } catch(err) {
            console.log(err.message)
        }
    },
    SCAN: async(req, res) => {
        try{
            const {study_level, country, university, facultet} = req.body
            const students = await studentStatistics(study_level, country, university, facultet)
            res.send(students.length)
        } catch(err) {
            console.log(err.message)
        }
    },
    POST: async(req, res) => {
        try {
            const { 
                name, surename, father_name, phone_number, passport_seria_number, passport_jshir, passport_location, birth_date, gender, region, city, street, home_number, finished_study, country, university, study_type, study_lang, study_level, facultet
            } = req.body
            const bio_img = req.file.filename
            await newStudent(
                name, surename, father_name, phone_number, passport_seria_number, passport_jshir, passport_location, birth_date, gender, region, city, street, home_number, bio_img, finished_study, country, university, study_type, study_lang, study_level, facultet
                )
            res.send("ok")
        } catch(err) {
            console.log(err.message)
        }
    },
    EDIT: async(req, res) => {
        try {
            const { 
                checked
            } = req.body
            const {
                id
            } = req.params
            await checkPayment(checked, id)
            res.send("ok")
        } catch(err) {
            console.log(err.message)
        }
    },
    GET_PAID: async(req, res) => {
        try {
            const students = await paidStudents()
            res.send(students)
        } catch(err) {
            console.log(err.message)
        }
    },
    NOT_PAID: async(req, res) => {
        try {
            const students = await notPaidStudents()
            res.send(students)
        } catch(err) {
            console.log(err.message)
        }
    }
}