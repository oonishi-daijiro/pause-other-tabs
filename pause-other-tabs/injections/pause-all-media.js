document.querySelectorAll('video').forEach(video => {
  video.pause()
})

console.log(getMultipleQueries(['video', 'audio']))

function getMultipleQueries(queryKeys) {
  const queries = []
  queryKeys.forEach(key => {
    queries.push(Array.from(document.querySelectorAll(key)))
  })
  console.log(queries)
  queries.flat(1)
  return queries
}
