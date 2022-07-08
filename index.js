const express = require('express')
const app = express()
const cors = require("cors")
const bodyParser = require('body-parser')
const PORT = process.env.PORT || 3001

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/getfiles', express.static('public/image'));

const router = require("./src/modules/router")


app.use(router)


app.listen(PORT, console.log(`server is running on port ${PORT}`))