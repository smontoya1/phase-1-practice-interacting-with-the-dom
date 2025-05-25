// start timer

const counterElement = document.querySelector('#counter')
let countTimer = 0
let isRunning = true
let start

document.addEventListener('DOMContentLoaded', function(){
    start = setInterval(function timer () {
        countTimer++
        counterElement.innerText = countTimer
    }, 1000)
    }
)

// add plus and minus button functionality

const minus = document.querySelector('#minus')
const plus = document.querySelector('#plus')

document.addEventListener('DOMContentLoaded', function() {
    minus.addEventListener('click', function() {
        counterElement.innerText = countTimer--
    })
})

document.addEventListener('DOMContentLoaded', function() {
    plus.addEventListener('click', function() {
        counterElement.innerText = countTimer++
    })
})

// record like

const heart = document.querySelector('#heart')
const likes = document.querySelector('.likes')

let clickCount = 0 // init countClick
let lastTimerCount

document.addEventListener('DOMContentLoaded', function() {
    heart.addEventListener('click', function() {
        let currentTimer = countTimer.toString()  
        const newElement = document.createElement('li')
        newElement.id = `newLikes${currentTimer}`
        if (currentTimer !== lastTimerCount) {
            // 1. reset clickCount
            clickCount = 1 
            // 2. create <ul id="newLikes"> </u>
            likes.append(newElement)
            // 3. create text in new element
            newElement.innerText = `${currentTimer} has been liked ${clickCount} times` // inner text
            // 4. set lastTimerCount to currentTimer
            lastTimerCount = currentTimer
            console.log('last timer count =' + lastTimerCount)
        } else {
            // 1. increment clickCount
            clickCount++
            // 2. grab last newLikes id
            const grabLastElement = document.querySelector(`#newLikes${lastTimerCount}`)
            // 3. update last newLikes text
            grabLastElement.innerText = `${currentTimer} has been liked ${clickCount} times` // inner text
        }
        
    })
})

// pause the counter

const pause = document.querySelector('#pause')

document.addEventListener('DOMContentLoaded', function() {
    pause.addEventListener('click', function() {
        if (isRunning) {
            clearInterval(start)
            isRunning = false
            pause.innerText = 'Resume'
        } else {
            start = setInterval(function timer () {
                countTimer++
                counterElement.innerText = countTimer
            }, 1000)
            isRunning = true
            pause.innerText = 'Pause'
        }
        
    })
})

// add comments

const submit = document.querySelector('#submit')
const commentInput = document.querySelector('#comment-input')

document.addEventListener('DOMContentLoaded', function() {
    submit.addEventListener('click', function(e) {
        e.preventDefault()
        const list = document.querySelector('#list')
        const newElement = document.createElement('ul')
        const newComment = list.append(newElement)
        newElement.innerText = commentInput.value
    })
})