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
// function newpost() {
//     var x = document.getElementById("nav__list");
//     if (x.style.display === "none") {
//         x.style.display = "block";
//     } else {
//         x.style.display = "none";
//     }
// }
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


//functionality for contact button

var btn = document.getElementById('mybutton');
var modal = document.getElementById('mymodal');
var btnc = document.getElementById('btnclose');

btn.onclick = function() {
    modal.style.display = "block";
}

btnclose.onclick = function() {
    mymodal.style.display = "none";
}


var btn = document.getElementById('contact');
var modal = document.getElementById('mymodal');
var btnc = document.getElementById('btnclose');

btn.onclick = function() {
    modal.style.display = "block";
}

btnclose.onclick = function() {
    mymodal.style.display = "none";
}