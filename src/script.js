// ANDREA / TABLE: waiting to play
function round1_andrea_1(round) {
  let globaltimeRound8 = 0
  let elem = document.getElementById('questionstack')
  let elem1 = document.getElementById('aside-round1-ron')
  let elem2 = document.getElementById('player-left')
  let elem3 = document.getElementById('overlay')
  let elem4 = document.getElementById('player-right')
  let elem5 = document.getElementById('player-top')
  let elem6 = document.getElementById('cardstack-ani')
  elem1.style.display = 'none'
  elem2.classList.remove('playing')
  elem3.classList.remove('show')
  elem4.classList.remove('playing')
  elem5.classList.add('playing')
  elem6.classList.remove('pulsate', 'card-1')
  hideNotification('notifi-round3-4')
  let t0 = setTimeout(function () {
    elem3.style.display = 'none'
  }, globaltimeRound8 + 20)
  let t1 = setTimeout(function () {
    showNotification('notifi-round4-1')
  }, globaltimeRound8 + 500)
  globaltimeRound8 += 500
  let t2 = setTimeout(function () {
    showNextNotification('notifi-round4-1', 'notifi-round4-2')
    elem.classList.add('pulsate')
  }, globaltimeRound8 + 2000)
  globaltimeRound8 += 2000
  let t3 = setTimeout(function () {
    showNextNotification('notifi-round4-2', 'notifi-round4-3')
    elem.classList.remove('pulsate')
  }, globaltimeRound8 + 3000)
  globaltimeRound8 += 3000
  let t4 = setTimeout(function () {
    hideNotification('notifi-round4-3')
    clearTimeout(t0)
    clearTimeout(t1)
    clearTimeout(t2)
    clearTimeout(t3)
  }, globaltimeRound8 + 3000)
  globaltimeRound8 += 3000
  let rt1 = setTimeout(function () {
    clearTimeout(t4)
    round1_andrea_2(round)
  }, globaltimeRound8 + 500)
  globaltimeRound8 += 500
}

// ANDREA / OVERLAY: played card (question)
function round1_andrea_2(round) {
  let globaltimeRound = 0
  let elem1 = document.getElementById('overlay')
  let elem2 = document.getElementById('aside-round1-andrea')
  let elem3 = document.getElementById('round1-andrea-step1')
  let elem4 = document.getElementById('aside-round1-ron-2')
  elem1.style.display = 'block'
  elem2.style.display = 'block'
  elem3.style.display = 'block'
  elem4.style.display = 'none'
  let t1 = setTimeout(function () {
    elem1.classList.add('show')
  }, globaltimeRound + 20)
  globaltimeRound += 20
  let t2 = setTimeout(function () {
    showNotification('over-andrea-notifi1')
  }, globaltimeRound + 700)
  globaltimeRound += 700
  let t4 = setTimeout(function () {
    clearTimeout(t1)
    clearTimeout(t2)
    round1_andrea_3(round)
  }, globaltimeRound + 1500)
  globaltimeRound += 1500
}

// ANDREA / TABLE: picking up 1 coin card
function round1_andrea_3(round) {
  let globaltimeRound6 = 0
  let elem0 = document.getElementById('aside-round1-andrea')
  let elem1 = document.getElementById('round1-andrea-step1')
  let elem3 = document.getElementById('overlay')
  let elem4 = document.getElementById('player-top')
  let elem5 = document.getElementById('player-left')
  let elem6 = document.getElementById('questionstack')
  elem0.style.display = 'none'
  elem1.style.display = 'none'
  elem3.classList.remove('show')
  elem4.classList.add('playing')
  elem5.classList.remove('playing')
  elem6.classList.remove('pulsate')
  hideNotification('over-andrea-notifi1')
  let t1 = setTimeout(function () {
    elem3.style.display = 'none'
  }, globaltimeRound6 + 20)
  globaltimeRound6 += 20
  let t2 = setTimeout(function () {
    showNotification('notifi-round4-4')
  }, globaltimeRound6 + 300)
  globaltimeRound6 += 300
  let t3 = setTimeout(function () {
    let elem = document.getElementById('cardstack-ani')
    elem.classList.remove('card-3')
    elem.classList.add('pulsate', 'card-1')
  }, globaltimeRound6 + 600)
  globaltimeRound6 += 600
  let t4 = setTimeout(function () {
    //stop round? console.log('stop') :
    round1_andrea_4(round)
  }, globaltimeRound6 + 1200)
  globaltimeRound6 += 1200
}

// ANDREA / OVERLAY: show picked up coin card
function round1_andrea_4(round) {
  let globaltimeRound = 0
  let elem1 = document.getElementById('overlay')
  let elem2 = document.getElementById('aside-round1-andrea-2')
  let elem3 = document.getElementById('round1-andrea-step2')
  let elem4 = document.getElementById('aside-round1-andrea')
  elem1.style.display = 'block'
  elem2.style.display = 'block'
  elem3.style.display = 'block'
  elem4.style.display = 'none'
  let t1 = setTimeout(function () {
    elem1.classList.add('show')
  }, globaltimeRound + 20)
  globaltimeRound += 20
  let t2 = setTimeout(function () {
    clearTimeout(t1)
    let elem = document.getElementById('player-top')
    elem.classList.add('round2')
    let elem5 = document.getElementById('aside-round1-andrea')
    elem5.classList.add('round2')
    let elem6 = document.getElementById('aside-round1-andrea-2')
    elem6.classList.add('round2')
    round ? round1_natalia_1() : round1_natalia_1_1()
  }, globaltimeRound + 3000)
  globaltimeRound += 3000
}

// NATALIA / TABLE: waiting to play
function round1_natalia_1_1() {
  let globaltimeRound8 = 0
  let elem = document.getElementById('questionstack')
  let elem2 = document.getElementById('player-left')
  let elem3 = document.getElementById('overlay')
  let elem4 = document.getElementById('player-top')
  let elem5 = document.getElementById('player-left')
  let elem6 = document.getElementById('cardstack-ani')
  elem2.classList.remove('playing')
  elem3.classList.remove('show')
  elem4.classList.remove('playing')
  elem5.classList.add('playing')
  elem6.classList.remove('pulsate', 'card-1')
  hideNotification('notifi-round4-4')
  let t0 = setTimeout(function () {
    elem3.style.display = 'none'
  }, globaltimeRound8 + 20)
  let t1 = setTimeout(function () {
    showNotification('notifi-round5-1')
  }, globaltimeRound8 + 500)
  globaltimeRound8 += 500
  let t2 = setTimeout(function () {
    showNextNotification('notifi-round5-1', 'notifi-round5-2')
    elem.classList.add('pulsate')
  }, globaltimeRound8 + 2000)
  globaltimeRound8 += 2000
  let t3 = setTimeout(function () {
    showNextNotification('notifi-round5-2', 'notifi-round5-3')
    elem.classList.remove('pulsate')
  }, globaltimeRound8 + 3000)
  globaltimeRound8 += 3000
  let t4 = setTimeout(function () {
    hideNotification('notifi-round5-3')
    clearTimeout(t0)
    clearTimeout(t1)
    clearTimeout(t2)
    clearTimeout(t3)
  }, globaltimeRound8 + 3000)
  globaltimeRound8 += 3000
  let rt1 = setTimeout(function () {
    clearTimeout(t4)
    round1_natalia_1_2()
  }, globaltimeRound8 + 500)
  globaltimeRound8 += 500
}

// NATALIA / OVERLAY: played card (question)
function round1_natalia_1_2() {
  let globaltimeRound = 0
  let elem1 = document.getElementById('overlay')
  let elem2 = document.getElementById('aside-round1-natalia-2')
  let elem3 = document.getElementById('round1-natalia-step1-2')
  let elem4 = document.getElementById('aside-round1-andrea')
  let elem5 = document.getElementById('aside-round1-andrea-2')
  elem1.style.display = 'block'
  elem2.style.display = 'block'
  elem3.style.display = 'block'
  elem4.style.display = 'none'
  elem5.style.display = 'none'
  let t1 = setTimeout(function () {
    elem1.classList.add('show')
  }, globaltimeRound + 20)
  globaltimeRound += 20
  let t2 = setTimeout(function () {
    showNotification('over-natalia-notifi1-2')
  }, globaltimeRound + 2500)
  globaltimeRound += 2500
  let t4 = setTimeout(function () {
    clearTimeout(t1)
    clearTimeout(t2)
    round1_natalia_1_3()
  }, globaltimeRound + 500)
  globaltimeRound += 500
}

// NATALIA / TABLE: picking up 1 coin card
function round1_natalia_1_3() {
  let globaltimeRound6 = 0
  let elem0 = document.getElementById('aside-round1-natalia-2')
  let elem1 = document.getElementById('round1-natalia-step1-2')
  let elem3 = document.getElementById('overlay')
  let elem4 = document.getElementById('player-left')
  let elem5 = document.getElementById('player-top')
  let elem6 = document.getElementById('questionstack')
  elem0.style.display = 'none'
  elem1.style.display = 'none'
  elem3.classList.remove('show')
  elem4.classList.add('playing')
  elem5.classList.remove('playing')
  elem6.classList.remove('pulsate')
  hideNotification('over-natalia-notifi1-2')
  let t1 = setTimeout(function () {
    elem3.style.display = 'none'
  }, globaltimeRound6 + 20)
  globaltimeRound6 += 20
  let t2 = setTimeout(function () {
    showNotification('notifi-round5-4')
  }, globaltimeRound6 + 300)
  globaltimeRound6 += 300
  let t3 = setTimeout(function () {
    let elem = document.getElementById('cardstack-ani')
    elem.classList.add('pulsate', 'card-1')
  }, globaltimeRound6 + 600)
  globaltimeRound6 += 600
  let t4 = setTimeout(function () {
    round1_natalia_1_4()
  }, globaltimeRound6 + 1200)
  globaltimeRound6 += 1200
}

// NATALIA / OVERLAY: show picked up coin card
function round1_natalia_1_4() {
  let globaltimeRound = 0
  let elem1 = document.getElementById('overlay')
  let elem2 = document.getElementById('aside-round1-natalia-2-2')
  let elem3 = document.getElementById('round1-natalia-step2-2')
  let elem4 = document.getElementById('aside-round1-natalia-2')
  elem1.style.display = 'block'
  elem2.style.display = 'block'
  elem3.style.display = 'block'
  elem4.style.display = 'none'
  let t1 = setTimeout(function () {
    elem1.classList.add('show')
  }, globaltimeRound + 20)
  globaltimeRound += 20
  let t2 = setTimeout(function () {
    clearTimeout(t1)
    let elem = document.getElementById('player-left')
    elem.classList.add('round2')
    round1_me_1()
  }, globaltimeRound + 3000)
  globaltimeRound += 3000
}

// ME / TABLE: waiting to play
function round1_me_1(round) {
  let globaltimeRound4 = 0
  let elem0 = document.getElementById('aside-round1-natalia')
  let elem1 = document.getElementById('round1-natalia-step1')
  let elem2 = document.getElementById('round1-natalia-step2')
  let elem3 = document.getElementById('overlay')
  let elem4 = document.getElementById('player-left')
  let elem5 = document.getElementById('player-bottom')
  let elem = document.getElementById('questionstack')
  let elem7 = document.getElementById('overlay')
  let elem10 = document.getElementById('cardstack-ani')
  elem0.style.display = 'none'
  elem1.style.display = 'none'
  elem2.style.display = 'none'
  elem3.classList.remove('show')
  elem4.classList.remove('playing')
  elem5.classList.add('playing')
  elem.classList.remove('pulsate')
  elem7.classList.remove('show')
  elem10.classList.remove('pulsate', 'card-1')
  hideNotification('notifi-round5-4')
  let t1 = setTimeout(function () {
    elem3.style.display = 'none'
  }, globaltimeRound4 + 20)
  globaltimeRound4 += 20
  let t2 = setTimeout(function () {
    showNotification('notifi-round2-1')
  }, globaltimeRound4 + 700)
  globaltimeRound4 += 700
  let t3 = setTimeout(function () {
    let elem = document.getElementById('questionstack')
    elem.classList.add('pulsate')
    elem.addEventListener('click', function () {
      round ? round1_me_2() : round1_me_2(round)
      round1_me_2(round)
    })
  }, globaltimeRound4 + 300)
  globaltimeRound4 += 300
}

// ME / OVERLAY: hand, select card to play
function round1_me_2(round) {
  let globaltimeRound5 = 0
  let contentshow = round ? 'round1-me-step2' : 'round1-me-step1'
  let contenthide = round ? 'round1-me-step1' : 'round1-me-step2'
  let newcard = round ? 'new-on-hand2' : 'new-on-hand1'
  let elem1 = document.getElementById('overlay')
  let elem2 = document.getElementById('aside-round1-me')
  let elem3 = document.getElementById(contentshow)
  let elem4 = document.getElementById(contenthide)
  let elem5 = document.getElementById(newcard)
  elem1.style.display = 'block'
  elem2.style.display = 'block'
  elem3.style.display = 'block'
  elem4.style.display = 'none'
  let t1 = setTimeout(function () {
    elem1.classList.add('show')
    elem5.classList.add('slidein')
  }, globaltimeRound5 + 20)
  globaltimeRound5 += 20
  let t2 = setTimeout(function () {
    let msgid = round ? 'over-me-notifi1-2x' : 'over-me-notifi1'
    showNotification(msgid)
  }, globaltimeRound5 + 300)
  globaltimeRound5 += 300
}

// ME / TABLE: picking up 1 coin card
function round1_me_3_2() {
  let globaltimeRound6 = 0
  let elem0 = document.getElementById('aside-round1-natalia')
  let elem1 = document.getElementById('round1-natalia-step1')
  let elem2 = document.getElementById('round1-natalia-step2')
  let elem3 = document.getElementById('overlay')
  let elem4 = document.getElementById('player-left')
  let elem5 = document.getElementById('player-bottom')
  let elem6 = document.getElementById('questionstack')
  elem0.style.display = 'none'
  elem1.style.display = 'none'
  elem2.style.display = 'none'
  elem3.classList.remove('show')
  elem4.classList.remove('playing')
  elem5.classList.add('playing')
  elem6.classList.remove('pulsate')
  hideNotification('notifi-round2-1')
  let t1 = setTimeout(function () {
    elem3.style.display = 'none'
  }, globaltimeRound6 + 20)
  globaltimeRound6 += 20
  let t2 = setTimeout(function () {
    showNotification('notifi-round2-2-2')
  }, globaltimeRound6 + 300)
  globaltimeRound6 += 300
  let t3 = setTimeout(function () {
    let elem = document.getElementById('cardstack-ani')
    elem.classList.add('pulsate', 'card-1')
  }, globaltimeRound6 + 600)
  globaltimeRound6 += 600
  let t4 = setTimeout(function () {
    round1_me_4_2()
  }, globaltimeRound6 + 1200)
  globaltimeRound6 += 1200
}

// ME / TABLE: picking up 3 coin cards
function round1_me_3() {
  let globaltimeRound6 = 0
  let elem0 = document.getElementById('aside-round1-natalia')
  let elem1 = document.getElementById('round1-natalia-step1')
  let elem2 = document.getElementById('round1-natalia-step2')
  let elem3 = document.getElementById('overlay')
  let elem4 = document.getElementById('player-left')
  let elem5 = document.getElementById('player-bottom')
  let elem6 = document.getElementById('questionstack')
  elem0.style.display = 'none'
  elem1.style.display = 'none'
  elem2.style.display = 'none'
  elem3.classList.remove('show')
  elem4.classList.remove('playing')
  elem5.classList.add('playing')
  elem6.classList.remove('pulsate')
  hideNotification('notifi-round2-1')
  let t1 = setTimeout(function () {
    elem3.style.display = 'none'
  }, globaltimeRound6 + 20)
  globaltimeRound6 += 20
  let t2 = setTimeout(function () {
    showNotification('notifi-round2-2')
  }, globaltimeRound6 + 300)
  globaltimeRound6 += 300
  let t3 = setTimeout(function () {
    let elem = document.getElementById('cardstack-ani')
    elem.classList.add('pulsate', 'card-3')
  }, globaltimeRound6 + 600)
  globaltimeRound6 += 600
  let t4 = setTimeout(function () {
    round1_me_4()
  }, globaltimeRound6 + 1200)
  globaltimeRound6 += 1200
}

// ME / OVERLAY: viewing 1 new coincard
function round1_me_4_2() {
  let globaltimeRound7 = 0
  let elem1 = document.getElementById('overlay')
  let elem2 = document.getElementById('aside-round2-me-2')
  let elem3 = document.getElementById('aside-round1-me')
  elem1.style.display = 'block'
  elem2.style.display = 'block'
  elem3.style.display = 'none'
  let t1 = setTimeout(function () {
    elem1.classList.add('show')
  }, globaltimeRound7 + 20)
  globaltimeRound7 += 20
  let t2 = setTimeout(function () {
    showNotification('over-me-notifi-2-1')
  }, globaltimeRound7 + 300)
  globaltimeRound7 += 300
  let t3 = setTimeout(function () {
    let elem = document.getElementById('player-bottom')
    elem.classList.add('round3')
    round1_ron_1()
  }, globaltimeRound7 + 3000)
  globaltimeRound7 += 3000
}

// ME / OVERLAY: viewing 3 new coincards
function round1_me_4(round) {
  let globaltimeRound7 = 0
  let elem1 = document.getElementById('overlay')
  let elem2 = document.getElementById('aside-round2-me')
  let elem3 = document.getElementById('aside-round1-me')
  elem1.style.display = 'block'
  elem2.style.display = 'block'
  elem3.style.display = 'none'
  let t1 = setTimeout(function () {
    elem1.classList.add('show')
  }, globaltimeRound7 + 20)
  globaltimeRound7 += 20
  let t2 = setTimeout(function () {
    showNotification('over-me-notifi-2-1-3cards')
  }, globaltimeRound7 + 300)
  globaltimeRound7 += 300
  let t3 = setTimeout(function () {
    let elem = document.getElementById('player-bottom')
    elem.classList.add('round2')
    round1_ron_1_1()
  }, globaltimeRound7 + 3000)
  globaltimeRound7 += 3000
}

// RON / TABLE: waiting to play (wallet)
function round1_ron_1_1() {
  console.log(8)
  let globaltimeRound8 = 0
  let elem = document.getElementById('questionstack')
  let elem1 = document.getElementById('aside-round2-me-2')
  let elem2 = document.getElementById('player-left')
  let elem3 = document.getElementById('overlay')
  let elem4 = document.getElementById('player-bottom')
  let elem5 = document.getElementById('player-right')
  let elem6 = document.getElementById('cardstack-ani')
  elem1.style.display = 'none'
  elem2.classList.remove('playing')
  elem3.classList.remove('show')
  elem4.classList.remove('playing')
  elem5.classList.add('playing')
  elem6.classList.remove('pulsate')
  hideNotification('notifi-round2-2')
  let t0 = setTimeout(function () {
    elem3.style.display = 'none'
  }, globaltimeRound8 + 20)
  let t1 = setTimeout(function () {
    console.log(1)
    showNotification('notifi-round3-1')
  }, globaltimeRound8 + 500)
  globaltimeRound8 += 500
  let t2 = setTimeout(function () {
    showNextNotification('notifi-round3-1', 'notifi-round3-2')
    elem.classList.add('pulsate')
  }, globaltimeRound8 + 2000)
  globaltimeRound8 += 2000
  let t3 = setTimeout(function () {
    showNextNotification('notifi-round3-2', 'notifi-round3-3')
    elem.classList.remove('pulsate')
  }, globaltimeRound8 + 3000)
  globaltimeRound8 += 3000
  let t4 = setTimeout(function () {
    hideNotification('notifi-round3-3')
    clearTimeout(t0)
    clearTimeout(t1)
    clearTimeout(t2)
    clearTimeout(t3)
  }, globaltimeRound8 + 3000)
  globaltimeRound8 += 3000
  let rt1 = setTimeout(function () {
    clearTimeout(t4)
    round1_ron_2_2()
  }, globaltimeRound8 + 500)
  globaltimeRound8 += 500
}

// RON / OVERLAY: played card (wallet)
function round1_ron_2_2() {
  let globaltimeRound = 0
  let elem1 = document.getElementById('overlay')
  let elem2 = document.getElementById('aside-round1-ron')
  let elem3 = document.getElementById('round1-ron-step1-2')
  let elem4 = document.getElementById('aside-round2-me')
  elem1.style.display = 'block'
  elem2.style.display = 'block'
  elem3.style.display = 'block'
  elem4.style.display = 'none'
  let t1 = setTimeout(function () {
    elem1.classList.add('show')
  }, globaltimeRound + 20)
  globaltimeRound += 20
  let t2 = setTimeout(function () {
    showNotification('over-ron-notifi1-2')
  }, globaltimeRound + 300)
  globaltimeRound += 300
  let t3 = setTimeout(function () {
    showNextNotification('over-ron-notifi1-2', 'over-ron-notifi2-2')
  }, globaltimeRound + 1500)
  globaltimeRound += 1500
  let t4 = setTimeout(function () {
    showNotification('over-ron-notifi3-2')
  }, globaltimeRound + 800)
  globaltimeRound += 800
  let t5 = setTimeout(function () {
    showNotification('over-notifi4-2')
    document.getElementById('over-notifi4-2').classList.add('pulsate')
  }, globaltimeRound + 1000)
  globaltimeRound += 1000
  let t6 = setTimeout(function () {
    clearTimeout(t1)
    clearTimeout(t2)
    clearTimeout(t3)
    clearTimeout(t4)
    clearTimeout(t5)
  }, globaltimeRound + 2000)
  globaltimeRound += 2000
}

// RON -> ME / OVERLAY: select card for wallet
function round1_ron_2_3() {
  let elem1 = document.getElementById('round1-ron-step1-2')
  let elem2 = document.getElementById('round1-ron-step1-3')
  let elem3 = document.getElementById('overlay')
  elem1.style.display = 'none'
  elem2.style.display = 'block'
  elem3.style.display = 'block'
  let t1 = setTimeout(function () {
    elem3.classList.add('show')
  }, 20)
}

// RON -> ME / OVERLAY: confirm card for wallet
function round1_ron_2_4() {
  let elem = document.getElementById('walletcontainer')
  elem.classList.add('confirmed')
  let t1 = setTimeout(function () {
    round1_ron_2_5()
  }, 500)
}

// RON / TABLE: add wallet
function round1_ron_2_5() {
  let globaltimeRound8 = 0
  let elem1 = document.getElementById('questionstack')
  let elem2 = document.getElementById('player-left')
  let elem3 = document.getElementById('overlay')
  let elem4 = document.getElementById('player-bottom')
  let elem5 = document.getElementById('player-right')
  let elem6 = document.getElementById('cardstack-ani')
  elem1.classList.remove('pulsate')
  elem2.classList.remove('playing')
  elem3.classList.remove('show')
  elem4.classList.remove('playing')
  elem5.classList.add('playing')
  elem6.classList.remove('pulsate')
  hideNotification('notifi-round2-2')
  let t0 = setTimeout(function () {
    elem3.style.display = 'none'
  }, globaltimeRound8 + 20)
  let t4 = setTimeout(function () {
    let elem = document.getElementById('ron-wallet-ani')
    elem.classList.add('show')
    let elem7 = document.getElementById('player-right')
    elem7.classList.add('round2')
  }, globaltimeRound8 + 500)
  globaltimeRound8 += 500
  let rt1 = setTimeout(function () {
    round1_andrea_1(true)
  }, globaltimeRound8 + 2500)
  globaltimeRound8 += 2500
}

// NATALIA / TABLE:  waiting to play (keys)
function round1_natalia_1() {
  let globaltimeRound1 = 0
  let elem = document.getElementById('questionstack')
  let elem2 = document.getElementById('player-left')
  let elem3 = document.getElementById('overlay')
  let elem4 = document.getElementById('player-top')
  let elem5 = document.getElementById('player-left')
  let elem6 = document.getElementById('cardstack-ani')
  elem2.classList.remove('playing')
  elem3.classList.remove('show')
  elem4.classList.remove('playing')
  elem5.classList.add('playing')
  elem6.classList.remove('pulsate', 'card-1')
  hideNotification('notifi-round4-4')
  let t0 = setTimeout(function () {
    elem3.style.display = 'none'
  }, globaltimeRound1 + 20)
  globaltimeRound1 += 20
  let t1 = setTimeout(function () {
    showNotification('notifi-round1-1')
  }, globaltimeRound1 + 500)
  globaltimeRound1 += 500
  let t2 = setTimeout(function () {
    showNextNotification('notifi-round1-1', 'notifi-round1-2')
    elem.classList.add('pulsate')
  }, globaltimeRound1 + 2000)
  globaltimeRound1 += 2000
  let t3 = setTimeout(function () {
    showNextNotification('notifi-round1-2', 'notifi-round1-3')
    elem.classList.remove('pulsate')
  }, globaltimeRound1 + 3000)
  globaltimeRound1 += 3000
  let t4 = setTimeout(function () {
    hideNotification('notifi-round1-3')
    clearTimeout(t1)
    clearTimeout(t2)
    clearTimeout(t3)
  }, globaltimeRound1 + 3000)
  globaltimeRound1 += 3000
  let rt1 = setTimeout(function () {
    clearTimeout(t4)
    round1_natalia_2()
  }, globaltimeRound1 + 500)
  globaltimeRound1 += 500
}

// NATALIA / OVERLAY: played card (keys), go to portfolio button
function round1_natalia_2() {
  let globaltimeRound2 = 0
  let elem1 = document.getElementById('overlay')
  let elem2 = document.getElementById('aside-round1-natalia')
  let elem3 = document.getElementById('round1-natalia-step1')
  elem1.style.display = 'block'
  elem2.style.display = 'block'
  elem3.style.display = 'block'
  let t1 = setTimeout(function () {
    elem1.classList.add('show')
  }, globaltimeRound2 + 20)
  globaltimeRound2 += 20
  let t2 = setTimeout(function () {
    showNextNotification('over-notifi1', 'over-notifi2')
  }, globaltimeRound2 + 2500)
  globaltimeRound2 += 2500
  let t3 = setTimeout(function () {
    showNotification('over-notifi3')
    showNotification('over-notifi4')
    document.getElementById('over-notifi4').classList.add('pulsate')
  }, globaltimeRound2 + 1500)
  globaltimeRound2 += 1500
}

// NATALIA -> ME / OVERLAY: select cards to give up from portfolio
function round1_natalia_3() {
  let elem0 = document.getElementById('aside-round1-natalia')
  let elem1 = document.getElementById('round1-natalia-step1')
  let elem2 = document.getElementById('round1-natalia-step2')
  let elem3 = document.getElementById('overlay')
  elem0.style.display = 'block'
  elem1.style.display = 'none'
  elem2.style.display = 'block'
  elem3.style.display = 'block'
  let t1 = setTimeout(function () {
    elem3.classList.add('show')
  }, 20)
}

// RON / TABLE: waiting to play
function round1_ron_1() {
  console.log(7)
  let globaltimeRound8 = 0
  let elem = document.getElementById('questionstack')
  let elem2 = document.getElementById('player-left')
  let elem3 = document.getElementById('overlay')
  let elem4 = document.getElementById('player-bottom')
  let elem5 = document.getElementById('player-right')
  let elem6 = document.getElementById('cardstack-ani')
  elem2.classList.remove('playing')
  elem3.classList.remove('show')
  elem4.classList.remove('playing')
  elem5.classList.add('playing')
  elem6.classList.remove('pulsate')
  hideNotification('notifi-round2-2-2')
  let t0 = setTimeout(function () {
    elem3.style.display = 'none'
  }, globaltimeRound8 + 20)
  let t1 = setTimeout(function () {
    showNotification('notifi-round3-1')
  }, globaltimeRound8 + 500)
  globaltimeRound8 += 500
  let t2 = setTimeout(function () {
    showNextNotification('notifi-round3-1', 'notifi-round3-2')
    elem.classList.add('pulsate')
  }, globaltimeRound8 + 2000)
  globaltimeRound8 += 2000
  let t3 = setTimeout(function () {
    showNextNotification('notifi-round3-2', 'notifi-round3-3')
    elem.classList.remove('pulsate')
  }, globaltimeRound8 + 3000)
  globaltimeRound8 += 3000
  let t4 = setTimeout(function () {
    hideNotification('notifi-round3-3')
    clearTimeout(t0)
    clearTimeout(t1)
    clearTimeout(t2)
    clearTimeout(t3)
  }, globaltimeRound8 + 3000)
  globaltimeRound8 += 3000
  let rt1 = setTimeout(function () {
    clearTimeout(t4)
    round1_ron_2()
  }, globaltimeRound8 + 500)
  globaltimeRound8 += 500
}

// RON / OVERLAY:  played card (question)
function round1_ron_2() {
  let globaltimeRound = 0
  let elem1 = document.getElementById('overlay')
  let elem2 = document.getElementById('aside-round1-ron')
  let elem3 = document.getElementById('round1-ron-step1')
  let elem4 = document.getElementById('aside-round2-me')
  let elem5 = document.getElementById('aside-round2-me-2')
  let elem6 = document.getElementById('round1-ron-step1-3')
  elem1.style.display = 'block'
  elem2.style.display = 'block'
  elem3.style.display = 'block'
  elem4.style.display = 'none'
  elem5.style.display = 'none'
  elem6.style.display = 'none'
  let t1 = setTimeout(function () {
    elem1.classList.add('show')
  }, globaltimeRound + 20)
  globaltimeRound += 20
  let t2 = setTimeout(function () {
    showNotification('over-ron-notifi1')
  }, globaltimeRound + 2500)
  globaltimeRound += 2500
  let t4 = setTimeout(function () {
    clearTimeout(t1)
    clearTimeout(t2)
    round1_ron_3()
  }, globaltimeRound + 2000)
  globaltimeRound += 2000
}

// RON / TABLE: picking up 1 coin card
function round1_ron_3() {
  let globaltimeRound6 = 0
  let elem0 = document.getElementById('aside-round1-ron')
  let elem1 = document.getElementById('round1-ron-step1')
  let elem3 = document.getElementById('overlay')
  let elem4 = document.getElementById('player-right')
  let elem5 = document.getElementById('player-left')
  let elem6 = document.getElementById('questionstack')
  elem0.style.display = 'none'
  elem1.style.display = 'none'
  elem3.classList.remove('show')
  elem4.classList.add('playing')
  elem5.classList.remove('playing')
  elem6.classList.remove('pulsate')
  hideNotification('over-ron-notifi1')
  let t1 = setTimeout(function () {
    elem3.style.display = 'none'
  }, globaltimeRound6 + 20)
  globaltimeRound6 += 20
  let t2 = setTimeout(function () {
    showNotification('notifi-round3-4')
  }, globaltimeRound6 + 300)
  globaltimeRound6 += 300
  let t3 = setTimeout(function () {
    let elem = document.getElementById('cardstack-ani')
    elem.classList.add('pulsate', 'card-1')
  }, globaltimeRound6 + 600)
  globaltimeRound6 += 600
  let t4 = setTimeout(function () {
    round1_ron_4()
  }, globaltimeRound6 + 1200)
  globaltimeRound6 += 1200
}

// RON / OVERLAY: show picked up coin card
function round1_ron_4() {
  let globaltimeRound = 0
  let elem1 = document.getElementById('overlay')
  let elem2 = document.getElementById('aside-round1-ron-2')
  let elem3 = document.getElementById('round1-ron-step2')
  let elem4 = document.getElementById('aside-round1-ron')
  elem1.style.display = 'block'
  elem2.style.display = 'block'
  elem3.style.display = 'block'
  elem4.style.display = 'none'
  let t1 = setTimeout(function () {
    elem1.classList.add('show')
  }, globaltimeRound + 20)
  globaltimeRound += 20
  let t2 = setTimeout(function () {
    clearTimeout(t1)
    //round1_andrea_1();
  }, globaltimeRound + 3000)
  globaltimeRound += 3000
}

function showNotification(id) {
  console.log(id)
  let elem = document.getElementById(id)
  elem.style.display = 'inline-block'
  let t1 = setTimeout(function () {
    console.log(2)
    elem.classList.add('show')
  }, 20)
}

function hideNotification(id) {
  let elem = document.getElementById(id)
  elem.classList.remove('show')
  let t1 = setTimeout(function () {
    elem.style.display = 'none'
  }, 20)
}

function showNextNotification(idNow, idNext) {
  hideNotification(idNow)
  let t1 = setTimeout(function () {
    showNotification(idNext)
  }, 300)
}

function show_selectd_card(id) {
  let elem = document.getElementById(id)
  elem.style.opacity = 1
}

function show_select_wallet() {
  let elem = document.getElementById('walletcontainer')
  elem.classList.add('selected')
  showNextNotification('select-not1-ron2', 'select-not2-ron2')
}

function toggle_dropdown() {
  let elem = document.getElementById('dropdown')
  if (elem.classList.contains('show')) {
    elem.classList.remove('show')
  } else {
    elem.classList.add('show')
  }
}

function show_portfolio(ext) {
  let elem0 = document.getElementById('aside-round1-natalia-2-2')
  let elem1 = document.getElementById('aside-round1-me')
  let elem2 = document.getElementById('portfolio-viewer-' + ext)
  elem0.style.display = 'none'
  elem1.style.display = 'none'
  elem2.style.display = 'block'
}

function toggle_pulsate(elem) {
  if (elem.classList.contains('pulsate')) {
    elem.classList.remove('pulsate')
  } else {
    elem.classList.add('pulsate')
  }
}

round1_andrea_1()
//round1_natalia_3()
