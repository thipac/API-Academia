const Express = require('express')
const cors = require('cors')
const bd = require('./src/data/sqlite-bd.js')
const port = 3050
const app = Express()
const staffController = require('./src/controllers/staff-controllers')

app.use(Express.json())
app.use(cors())

staffController(app, bd)

app.listen(port, () => {
    console.log(`Porta que está sendo executada: http://localhost:${port}`)
  })