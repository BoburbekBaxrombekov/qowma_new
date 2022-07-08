const {studentsOne} = require('./model')

module.exports = {
    GET: async(req, res) => {
        try{
            const id = JSON.parse(req.params.id)
            console.log(id);
            const students = await studentsOne(id)
            res.send(students)
        } catch(err) {
            console.log(err.message)
        }
    }
}