const express = require('express')
const router = require('./router/app.router')
const app = express()
const PORT = 3000

app.set('view engine', 'ejs')
app.set('views',__dirname + '/views')
app.use(express.static(__dirname + '/public'))

router(app)

app.listen( PORT, () => console.log( `http://127.0.0.1:${PORT}/`) )