const {findUser} = require('./model')

module.exports = {
    POST: async(req, res) => {
        try {
            const {
                name,
                phone_number
              } = req.body;
              const foundStudent = await findUser(name, phone_number)
              console.log(foundStudent.length);
              if (foundStudent.length != 0) {
                console.log(foundStudent);
                res.json(foundStudent)
              } else if (name == 'co_com_90@mail.ru' && phone_number == "parol123") {
                const token = {
                  token: 'tkti_admin777'
                }
                res.send(token.token)
              } else {
                res.sendStatus(404)
              }
        } catch(err) {
            console.log(err.message)
        }
    }
}