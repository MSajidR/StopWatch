var hour = document.getElementById('hour')
var min = document.getElementById('min')
var sec = document.getElementById('sec')




var timerColor = document.getElementsByClassName('timer')

var startBtn = document.getElementById('startBtn')
var resetBtn = document.getElementById('resetBtn')


var timerStart = null;
var h = 0;
var m = 0;
var s = 0;



function updateTime(){
    if (s < 10){
    sec.innerText = "0" + s;
    } else {
    sec.innerText = s;}
    
    if( m < 10) {
     min.innerText = "0" + m;
    }
    else {
     min.innerText = m;
    }
    
    if (h < 10){
     h.innerText = "0" + h
    }
    else {
    h.innerText = h;
    }


}
    





function startTimer(){

    startBtn.innerText = "Pause";
    startBtn.onclick = pauseTimer;
    startBtn.className = "btn btn-danger button5"
    hour.className ="timer-start"
    min.className = "timer-start"
    sec.className = "timer-start"
    resetBtn.className = "btn btn-dark button5"

    timerr = setInterval(function (){
        if(s >= 59){
            
        s = -1;
    
        if(m >= 59) {
        m = -1;
    
        }
        
        m++;	
    
    
    }
    
    
    
    s++; 
    updateTime();	
    
    }, 1000)
    
    
    }
    
    
    
    
    
    function pauseTimer(){
        startBtn.innerText = "Start";
        startBtn.onclick = startTimer;
        startBtn.className="btn btn-success button5"
        resetBtn.className = "btn btn-secondary button5"
        hour.className="timer-stop"
        min.className = "timer-stop"
        sec.className = "timer-stop"
            clearInterval(timerr);  
     }
    
    function resetTimer(){
        clearInterval(timerr);
        h = 0; 
        m = 0;
        s = 0;
    startBtn.innerText = "Start"
    startBtn.onclick = startTimer;
    startBtn.className= "btn btn-success button5"
    resetBtn.className = "btn btn-secondary button5"   
    hour.className="timer"
    min.className = "timer"
    sec.className = "timer"
    updateTime ();
    
    }
    


    




