pauseTags('video', 'audio')


function pauseTags(...tags) {
  Array.from(tags).forEach(arg => {
    document.querySelectorAll(arg).forEach(element => {
      if (typeof element.pause === 'function') {
        element.pause()
      }
    })
  })
}
