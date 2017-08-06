var fs = require('fs')
const words = fs.readFileSync('/usr/share/dict/words', 'utf8').split('\n')
const express = require('express')
const app = express()
const mustacheExpress = require('mustache-express')
const bodyParser = require('body-parser')
const session = require('express-session')

app.use(express.static('public'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
// app.use(
//   session({
//     genid: function(req) {
//       return genuuid()
//     },
//     secret: 'keyboard cat'
// //   })
// )

app.engine('mst', mustacheExpress())
app.set('views', './views')
app.set('view engine', 'mst')

app.get('/', function(req, res) {
  //the below "var word" is confirmed working, providing a random word
  var word = words[Math.floor(Math.random() * words.length)]
  //wordMasked is splitting word into letters
  //note: experiementing with transparent text in CSS, check console for text
  var wordMasked = word.split('')

  // let hearButton = document.querySelectorAll('button')
  // hearButton.forEach(button => {
  //   button.addEventListener('click', event => {
  //     var button = document.getElementByClassName('letters')
  //     button.addEventListener('click', hideshow, false)
  //
  //     function hideshow() {
  //       document.getElementByClassName('letters').style.display = 'block'
  //       this.style.display = 'none'
  //     }
  //   })
  // })
  res.render('index', { wordMasked: wordMasked })
})

app.listen(3000, () => {
  console.log('Magic is happening on port 3000')
})

// let hearButton = document.querySelectorAll('button')
// hearButton.forEach(button => {
//   button.addEventListener('click', event => {
//     var button = document.getElementByClassName('letters')
//     button.addEventListener('click', hideshow, false)
//
//     function hideshow() {
//       document.getElementByClassName('letters').style.display = 'block'
//       this.style.display = 'none'
//
//       res.render('index', { wordMasked: wordMasked })
//     }
//   })
// })
// const  = req.session. || []
// const templateData = {
//   uncompleted: todoList.filter(todo => !todo.completed),
//   completed: todoList.filter(todo => todo.completed)
// }
