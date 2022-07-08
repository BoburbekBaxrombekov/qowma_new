const md5 = require('md5')
const multer = require('multer')
const path = require('path')

const { Router } = require('express')
const Students = require('./students/students')
const StudentsOne = require('./students/students_one')
const Login = require('./login/login')
const Check = require('./check/check')
const router = new Router()

const storage = multer.diskStorage({
    destination: function (req,file,cb) {
        cb(null, './public/image');
    },
    filename: function (req,file,cb) {
        cb(null, `${md5(Date.now())}${path.extname(file.originalname)}`);
    }
});
const upload = multer({storage: storage});

router
    .get('/students/all', Students.GET)
    .get('/students/paid', Students.GET_PAID)
    .get('/students/notpaid', Students.NOT_PAID)
    .get('/students/getone/:id', StudentsOne.GET)
    .post('/students/add', upload.single('bio_img'), Students.POST)
    .post('/students/statistics', Students.SCAN)
    .post('/login', Login.POST)
    .post('/uploads', upload.single('check_img'), Check.POST)
    .get('/uploads', Check.GET)
    .put('/students/checked/:id', Students.EDIT)

    


module.exports = router