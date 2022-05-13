const express = require("express")
const mongoose = require("mongoose")
const exhbs = require("express-handlebars")
const todoRoutes = require('./routes/todoRoutes')

const app = express()
const PORT = 3000


const hbs = exhbs.create({
      defaultLayout: 'main',
      extname: 'hbs'
})

app.engine('hbs', hbs.engine)
app.set('view engine', 'hbs')
app.set('views', 'views')


app.use(todoRoutes)

//mongo bağlantısını ekle



