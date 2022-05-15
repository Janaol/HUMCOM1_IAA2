

function openCity(evt, cityName) {
var i, tabcontent, tablinks;
tabcontent = document.getElementsByClassName("tabcontent");
for (i = 0; i < tabcontent.length; i++) {
tabcontent[i].style.display = "none";
}
tablinks = document.getElementsByClassName("tablinks");
for (i = 0; i < tablinks.length; i++) {
tablinks[i].className = tablinks[i].className.replace(" active", "");
}
document.getElementById(cityName).style.display = "block";
evt.currentTarget.className += " active";
}


let stars = document.getElementById('stars');
let moon = document.getElementById('moon');
let mountains_behind = document.getElementById('mountains_behind');
let text = document.getElementById('text');
let btn = document.getElementById('btn');
let mountains_front = document.getElementById('mountains_front');
let header = document.querySelector('header');

window.addEventListener('scroll', function(){
let value = window.scrollY;
stars.style.left = value * 1 + 'px';
moon.style.top = value * 1.05 + 'px';
mountains_behind.style.top = value * 0.5 + 'px';
mountains_front.style.top = value * 0 + 'px';
text.style.marginRight = value * 3 + 'px';
btn.style.marginTop = value * 1.5 + 'px';
header.style.top = value * 0.5 + 'px';
})
  