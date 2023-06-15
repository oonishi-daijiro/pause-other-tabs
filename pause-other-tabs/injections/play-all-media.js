playTags(['video', 'audio'])


function playTags() {
  Array.from(arguments).forEach(arg => {
    document.querySelectorAll(arg).forEach(element => {
      if (typeof element.pause === 'function') {
        element.play()
      }
    })
  })
}
