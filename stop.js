
// js start for windowload
window.onload = function() {
  // minute and second are access of inserting values for externally
    let minuts =document.querySelector('#mint');
    let second =document.querySelector('#sec');

    // Access button for start, stop and reset
    let startbutton = document.querySelector('#start');
    let stopbutton = document.querySelector('#stop');
    let resetbutton = document.querySelector('#reset');

    let interval;
    let mint=00;
    let sec=00;

    // Onclick event add to start button
    startbutton.onclick = function() {
        interval = setInterval(startTime, 1000);
    }

    // Onclick event add to stop button
    stopbutton.onclick = function() {
        clearInterval(interval);
    }

    // reset button function create for second and minute
    resetbutton.onclick = function() {
        clearInterval(interval);
        mint="00";
        sec="00";
        minuts.innerHTML=mint;
        second.innerHTML=sec;

    }

    // Start time function for start button
    function startTime () {
      // Second updates
         sec++; 
        //  If second is less than 9 this code will executed
        if(sec <= 9){
            second.innerHTML = "0" + sec;
          }
          
          if (sec > 9){
            second.innerHTML = sec;
          }
         
          // minute plus after every 59 seconds
          if (sec > 59) {
            mint++;
            minuts.innerHTML = "0" + mint;
            sec = 0;
            second.innerHTML = "0" + 0;
          }
          if (mint > 9){
            minuts.innerHTML = mint;
          }
        }
    }   
        
    


