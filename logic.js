// All Connections laid bellow here.................

const playBtn = document.getElementById('play-btn')
const textInput = document.getElementById('text')
const pauseBtn = document.getElementById('pause-btn')
const stopBtn = document.getElementById('stop-btn')
const speed = document.getElementById('speed')


// Globle variable and function lay here..........
let currentVarIndex
let utterance =  new SpeechSynthesisUtterance()
    
    utterance.addEventListener('boundary',(e)=>{
       currentVarIndex = e.charIndex
    })
    utterance.addEventListener('end',()=>{
        textInput.disabled= false
    })
    




// All Events Listening lay bellow here...............

playBtn.addEventListener('click',()=>{
    playSpeech(textInput.value);
})
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
pauseBtn.addEventListener('click',()=>{
    pauseText();
})
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

stopBtn.addEventListener('click',()=>{
    stopSpeech()
})
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
speed.addEventListener('input',()=>{
    stopSpeech()
    playSpeech(utterance.text.substring(currentVarIndex))
})




// All function lay bellow here..............

function playSpeech(text){
    if(speechSynthesis.paused && speechSynthesis.speaking){
        return speechSynthesis.resume()
    }
    utterance.text = text;
    utterance.rate=speed.value || 1
    textInput.disabled = true
    speechSynthesis.speak(utterance);
}
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
function pauseText(){
if (speechSynthesis.speaking) speechSynthesis.pause()
}
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
function stopSpeech(){
    speechSynthesis.resume()
    textInput.value = ""
    speechSynthesis.cancel()
    
}

