pauseTags(['video', 'audio'])


function pauseTags() {
  Array.from(arguments).forEach(arg => {
    document.querySelectorAll(arg).forEach(element => {
      if (typeof element.pause === 'function') {
        element.pause()
      }
    })
  })
}

