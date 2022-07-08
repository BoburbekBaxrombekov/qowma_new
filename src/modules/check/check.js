const {
  addImg, allImg
} = require('./model')

module.exports = {
  GET: async (req, res) => {
    try {
      const images = await allImg()
      res.send(images)
    } catch (err) {
      console.log(err.message)
    }
  },
  POST: async (req, res) => {
    try {
      const {
        user_id
      } = req.body;
      const check_img = req.file.filename
      await addImg(check_img, user_id)
      res.send('ok')
    } catch (err) {
      console.log(err.message)
    }
  }
}