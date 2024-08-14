function dispTime(){
    time = new Date()
    document.getElementById("time").innerHTML = time
}

setInterval(dispTime, 1000)