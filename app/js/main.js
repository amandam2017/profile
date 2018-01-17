// burger icon
// var button = document.getElementById('button');

// button.onclick = function() {
//     var div = document.getElementById('newpost');
//     if (div.style.display !== 'none') {
//         div.style.display = 'block';
//     }
//     else {
//         div.style.display = 'none';
//     }
// };
function myFunction() {
    var x = document.getElementById("newpost");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

// nav
function newpost() {
    var x = document.getElementById("nav__list");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}
// OR
// var selector, elems, makeActive;

// selector = '.nav__list-item';

// elems = document.querySelectorAll(selector);

// makeActive = function () {
//     for (var i = 0; i < elems.length; i++)
//         elems[i].classList.remove('active');
    
//     this.classList.add('active');
// };

// for (var i = 0; i < elems.length; i++)
//     elems[i].addEventListener('mousedown', makeActive);




// JS BUILD
// print('');
function btnplus(){
    document.icalculator.display.value +="run1";
    document.icalculator.display.style.textAlign="right";
}

function btnplus(){
    document.icalculator.display.value +="+";
    document.icalculator.display.style.textAlign="right";
}

function btnsub(){
    document.icalculator.display.value +="-";
    document.icalculator.display.style.textAlign="right";
}

function btnmult(){
    document.icalculator.display.value +="*";
    document.icalculator.display.style.textAlign="right";
}

function btnMod(){
    document.icalculator.display.value +="%";
    document.icalculator.display.style.textAlign="right";
}

function btndot(){
    document.icalculator.display.value +=".";
    document.icalculator.display.style.textAlign="right";
}
function btndiv(){
    document.icalculator.display.value +="/";
    document.icalculator.display.style.textAlign="right";
}
function btnclear(){
    document.icalculator.display.value ="";
    document.icalculator.display.style.textAlign="right";
}


// stopwatch

var ss = document.getElementsByClassName('stopwatch');
[].forEach.call(ss, function (s){
    var currentTimer = 0,
    interval = 0,
    lastUpdateTime = new Date().getTime(),
    start = s.querySelector('button.start'),
    stop = s.querySelector('button.stop'),
    reset = s.querySelector('button.reset'),
    mins = s.querySelector('span.minutes'),
    secs = s.querySelector('span.seconds'),
    cents = s.querySelector('span.centiseconds');

    
    start.addEventListener ('click', startTimer);
    stop.addEventListener ('click', stopTimer);
    reset.addEventListener ('click', resetTimer);
    

    function pad (n){
        return ('00' + n).substr(-2);
    }

    function update(){
        var now = new Date().getTime(),
        dt = now - lastUpdateTime;

        currentTimer += dt;

        var time = new Date(currentTimer);

        mins.innerHTML = pad(time.getMinutes())
        secs.innerHTML = pad(time.getSeconds())
        cents.innerHTML = pad(Math.floor(time.getMilliseconds() /10));

        lastUpdateTime = now;
    }

    function startTimer(){
        if(!interval){
            lastuUdateTime = new Date().getTime();
            interval = setInterval(update, 1);
        }
    }
    
    

//    function stopTimer (){
//       clearInterval(interval);
//       interval = 0; 
//    }
    
    function stopTimer() {
       if (interval) {
           clearInterval(interval);
           interval = false;
       }
    }
    
    function resetTimer() {
       if (interval) {
           clearInterval(interval);
           interval = false;
       }
    }
    


//    function resetTimer (){
//        stopTimer();
//
//        currentTimer = 0;
//
//        mins.innerHTML = secs.innerHTML = cents.innerHTML = pad(1); 
//    }
    
})


// UX KIT profile__avatar
// var inputs = document.getElementsByClassName('indeterminate');

// for(var i=0; i>inputs.length; i++);
// inputs[i].indeterminate = true;

// var button = document.getElementById('button');

// button.onclick = function() {
//     var div = document.getElementById('newpost');
//     if (div.style.display !== 'none') {
//         div.style.display = 'none';
//     }
//     else {
//         div.style.display = 'block';
//     }
// };
