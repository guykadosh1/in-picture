'use strict'

const gQuests = createQuests(5)
var currQuest

function createQuests() {
  const quest1 = {
    id: 1,
    opts: ['Batman & Superman', 'Wonder Woman & Aquaman', 'Supergirl & Yossi'],
    correctOptIndex: 0,
  }
  const quest2 = {
    id: 2,
    opts: ['Iron Man', 'Deadpool', 'Black Widow'],
    correctOptIndex: 1,
  }
  const quest3 = {
    id: 3,
    opts: ['Wanda & Vision', 'Mama & Papa', 'Spiderman & Iron Man'],
    correctOptIndex: 2,
  }
  const quest4 = {
    id: 4,
    opts: ['Scarlet Witch', 'Starlord', 'Groot'],
    correctOptIndex: 2,
  }
  const quest5 = {
    id: 5,
    opts: ['Hulk', 'Hawkeye', 'Robin'],
    correctOptIndex: 0,
  }
  const quest6 = {
    id: 6,
    opts: ['Eren Yeger', 'Buzz Lightyear', 'Woody'],
    correctOptIndex: 1,
  }
  return [quest1, quest2, quest3, quest4, quest5, quest6]
}

function initGame() {
  currQuest = 0
  renderQuest()
}

function renderQuest() {
  // Render image by id
  var elImg = document.querySelector('.question-img')
  elImg.src = `/img/${gQuests[currQuest].id}.jpg`

  // Render options
  var strHTML = ''
  for (var i = 0; i < gQuests[currQuest].opts.length; i++) {
    strHTML += `<button class="answer" onclick="checkAnswer(${i})">
    ${gQuests[currQuest].opts[i]}</button>`
  }

  var elAnswers = document.querySelector('.answers')
  elAnswers.innerHTML = strHTML
}

function checkAnswer(idx) {
  // Modal shows wrong or vistory pop up message
  const elModal = document.querySelector('.modal')

  if (gQuests[currQuest].correctOptIndex === idx) {
    currQuest++

    // Checks if was the last question
    if (currQuest === gQuests.length) {
      const elModalTxt = elModal.querySelector('p')
      const elRestartBtn = document.querySelector('.restart-btn')

      // Render victory message
      elModalTxt.innerText = 'Victorious! 🏆'
      elModalTxt.classList.add('victory')

      // Show restart button
      elModal.style.display = 'block'
      elRestartBtn.style.display = 'block'

      return
    }

    // render next question
    renderQuest()
  } else {
    // Render wrong answer on screen
    elModal.style.display = 'block'
    setTimeout(() => (elModal.style.display = 'none'), 500)
  }
}

function restartGame() {
  const elModal = document.querySelector('.modal')
  const elModalTxt = elModal.querySelector('p')
  const elRestartBtn = document.querySelector('.restart-btn')

  // restart modal and hide bottun
  elModalTxt.innerText = 'Wrong answer!'
  elModalTxt.classList.remove('victory')
  elModal.style.display = 'none'
  elRestartBtn.style.display = 'none'
  initGame()
}
