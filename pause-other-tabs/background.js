let currentStat = 'play'
let currentTabID = 0
let tabsPaused = []

chrome.tabs.onActivated.addListener(tab => {
  currentTabID = tab.tabId
  currentStat = 'play'
  chrome.action.setIcon({
    path: './icon/pause/64.png'
  })
})

chrome.action.onClicked.addListener(async () => {
  currentTabID = (await chrome.tabs.query({
    active: true,
    lastFocusedWindow: true
  }))[0].id

  switch (currentStat) {
    case 'play':
      (await chrome.tabs.query({}))
        .filter(tab => tab.audible && tab.id !== currentTabID)
        .forEach(tab => {
          tabsPaused.push(tab)
          chrome.scripting.executeScript({
            target: {
              tabId: tab.id,
              allFrames: true
            },
            files: ['./injections/pause-all-media.js']
          })
        })
      currentStat = 'pause'
      chrome.action.setIcon({
        path: './icon/play/64.png'
      })
      break

    case 'pause':
      tabsPaused.forEach(tab => {
        chrome.scripting.executeScript({
          target: {
            tabId: tab.id,
            allFrames: true
          },
          files: ['./injections/play-all-media.js']
        })
      })
      chrome.action.setIcon({
        path: './icon/pause/64.png'
      })
      tabsPaused = []
      currentStat = 'play'
      break
  }
})
