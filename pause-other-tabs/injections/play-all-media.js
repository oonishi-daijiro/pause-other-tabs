playTags('video', 'audio')


function playTags(...tags) {
  Array.from(tags).forEach(arg => {
    document.querySelectorAll(arg).forEach(element => {
      if (typeof element.pause === 'function') {
        element.play()
      }
    })
  })
}
