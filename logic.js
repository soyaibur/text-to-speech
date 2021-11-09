// All Connections laid bellow here.................

const play = document.getElementById('play-btn')
const textInput = document.getElementById('text')
const pauseBtn = document.getElementById('pause-btn')
const stopBtn = document.getElementById('stop-btn')
const speed = document.getElementById('speed')


// Globle variable lay here..........
let utterance




// All Events lay bellow here...............
play.addEventListener('click',()=>{
    playSpeech(textInput.value);
})
pauseBtn.addEventListener('click',()=>{
    pause();
})

stopBtn.addEventListener('click',()=>{
    stop()
})




// All function lay bellow here..............
function playSpeech(text){
    utterance =  new SpeechSynthesisUtterance(text)
    utterance.rate=speed.value || 1
    utterance.addEventListener('end',()=>{
        textInput.disabled= false
    })
    textInput.disabled = true
    speechSynthesis.speak(utterance);
}

function pause(){
    speechSynthesis.pause()
}

function stop(){
    textInput.value=""
    speechSynthesis.cancel();
    
}




//All code will be deleted here.............

function printOut(text){
    const div = document.createElement('div')
    div.innerHTML = text
    document.body.appendChild(div)
}
// addEventListener('click',()=>{
//     alert("this is working")
// })