let timerdisplay = document.querySelector(".timerdisplay")
let stopbutton = document.getElementById("stopbutton")
let startbutton = document.getElementById("startbutton")
let resetbutton = document.getElementById("resetbutton")
let lapbutton = document.getElementById("lapbutton")
let lapsContainer = document.getElementById("laps")
let lapCount = 0
let milliseconds = 0
let seconds = 0
let minutes = 0

let timerid = null

lapbutton.addEventListener("click", function () {
    if (timerid !== null) {
        lapCount++
        const lapTime = `${minutes < 10 ? "0" + minutes : minutes} : ${seconds < 10 ? "0" + seconds : seconds} : ${milliseconds < 10 ? "0" + milliseconds : milliseconds}`
        const lapElement = document.createElement("div")
        lapElement.textContent = `Lap ${lapCount} — ${lapTime}`
        lapElement.className = "lap"
        lapsContainer.appendChild(lapElement)
    }
})

resetbutton.addEventListener("click", function(){
    clearInterval(timerid)
    timerdisplay.innerHTML = `00 : 00 : 00`
    milliseconds = seconds = minutes = 0
    lapsContainer.innerHTML = ""
    lapCount = 0
})


startbutton.addEventListener("click", function(){
    if(timerid !== null){
        clearInterval(timerid)
    }
    timerid = setInterval(startTimer, 10)
})

stopbutton.addEventListener("click", function(){
    clearInterval(timerid)
})

resetbutton.addEventListener("click", function(){
    clearInterval(timerid)
    timerdisplay.innerHTML = `00 : 00 : 00`
    milliseconds = seconds = minutes = 0
})

function startTimer(){
    milliseconds++
    if(milliseconds == 100){
        milliseconds = 0
        seconds++
        if(seconds == 60){
            seconds = 0
minutes++
        }
    }

    let millisecondsstring = milliseconds < 10 ? `0${milliseconds}` : milliseconds
    
    let secondsstring = seconds < 10 ? `0${seconds}` : seconds
    
    let minutesstring = minutes < 10 ? `0${minutes}` : minutes
    

    timerdisplay.innerHTML = `${minutesstring} : ${secondsstring} : ${millisecondsstring}`

}