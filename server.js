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
  var wordMasked = word.split('')
  //placeHolder is giving the number of letters in wordMasked
  var wordNumber = wordMasked.length

  const alphabet = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z'
  ]

  // function wordSplitter(word) {
  //   for (var i = 0; i < word.length; i++) {
  //     var letterMatrix = word.charAt(i)
  //   }
  // }
  res.render('index', { wordMasked: wordMasked })
  // res.render('index', word)
  //  res.render('index', alphabet)
})

app.listen(3000, () => {
  console.log('Magic is happening on port 3000')
})

// hearButton.forEach(button => {
//   button.addEventListener('click', event => {
//     console.log(event.target)

// const  = req.session. || []
// const templateData = {
//   uncompleted: todoList.filter(todo => !todo.completed),
//   completed: todoList.filter(todo => todo.completed)
// }
