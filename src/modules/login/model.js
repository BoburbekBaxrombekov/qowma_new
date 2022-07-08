const {
    fetch,
    fetchAll
} = require('../../lib/postgres')

const FIND = `
    SELECT
        *
    FROM
        students
    WHERE
        name = $1 
    AND
        phone_number = $2
`

const findUser = (name, phone_number) => fetchAll(FIND, name, phone_number)
module.exports = {
    findUser
}