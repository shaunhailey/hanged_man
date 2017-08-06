let hearButton = document.querySelectorAll('button')
hearButton.forEach(button => {
  button.addEventListener('click', event => {
    var button = document.getElementByClassName('letters')
    button.addEventListener('click', hideshow, false)

    function hideshow() {
      document.getElementByClassName('letters').style.display = 'block'
      this.style.display = 'none'
    }
  })
})
