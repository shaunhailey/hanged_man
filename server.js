const words = fs.readFileSync('/usr/share/dict/words', 'utf-8').toLowerCase().split('\n')
const express = require('express')
const app = express()
const mustacheExpress = require('mustache-express')
const bodyParser = require('body-parser')
const session = require('express-session')

app.use(express.static('public'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(
  session({
    genid: function(req) {
      return genuuid()
    },
    secret: 'keyboard cat'
  })
)

app.engine('mst', mustacheExpress())
app.set('views', './views')
app.set('view engine', 'mst')

app.get('/', function(req, res) {
  const wordUp = 
  const templateData = {
    uncompleted: todoList.filter(todo => !todo.completed),
    completed: todoList.filter(todo => todo.completed)
  }
  res.render('index', templateData)
})
