const {
    fetch,
    fetchAll
} = require('../../lib/postgres')

const STUDENTS = `
    SELECT
        *
    FROM
        students 
`
const STUDENT_ONE = `
    SELECT
        *
    FROM
        students
    WHERE
        id = $1
`
const PAID_STUDENTS = `
    SELECT
        *
    FROM
        students
    WHERE
        checked = true
`
const NOT_PAID_STUDENTS = `
    SELECT
        *
    FROM
        students
    WHERE
        checked = false
`
const NEW_STUDENT = `
    INSERT INTO students(name, surename, father_name, phone_number, passport_seria_number, passport_jshir, passport_location, birth_date, gender, region, city, street, home_number, bio_img, finished_study, country, university, study_type, study_lang, study_level, facultet) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19, $20, $21)
`

const STUDENTS_STATISTICS = `
    SELECT * FROM students WHERE study_level = $1, country = $2, university = $3, facultet = $4
`

const CHECK_PAYMENT = `UPDATE students set checked = $1 WHERE id = $2`

const allStudents = () => fetchAll(STUDENTS)
const studentStatistics = (study_level, country, university, facultet) => fetchAll(STUDENTS_STATISTICS, study_level, country, university, facultet)
const studentsOne = (id) => fetchAll(STUDENT_ONE, id)
const newStudent = (name, surename, father_name, phone_number, passport_seria_number, passport_jshir, passport_location, birth_date, gender, region, city, street, home_number, bio_img, finished_study, country, university, study_type, study_lang, study_level, facultet) => fetchAll(NEW_STUDENT, name, surename, father_name, phone_number, passport_seria_number, passport_jshir, passport_location, birth_date, gender, region, city, street, home_number, bio_img, finished_study, country, university, study_type, study_lang, study_level, facultet)
const checkPayment = (checked, id) => fetchAll(CHECK_PAYMENT, checked, id)
const paidStudents = () => fetchAll(PAID_STUDENTS)
const notPaidStudents = () => fetchAll(NOT_PAID_STUDENTS)

module.exports = {
    allStudents,
    studentsOne,
    newStudent,
    checkPayment,
    paidStudents,
    notPaidStudents,
    studentStatistics
}