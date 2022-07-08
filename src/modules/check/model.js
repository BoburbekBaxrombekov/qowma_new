const {
    fetch,
    fetchAll
} = require('../../lib/postgres')

const ADD_IMG = `
    INSERT INTO checking(img_path, user_id) VALUES ($1, $2)
`
const ALL_IMG = `
    SELECT * FROM checking
`

const addImg = (img_path, user_id) => fetchAll(ADD_IMG, img_path, user_id)
const allImg = () => fetchAll(ALL_IMG)
module.exports = {
    addImg,
    allImg
}