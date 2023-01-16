setInterval("clock()",1000);

function clock() {
  var now = new Date();
  hours = now.getHours();
  minutes = now.getMinutes();
  seconds = now.getSeconds();

  if (hours > 12) {
    hours -= 12;
    ampm = "오후 ";
  } else {
    ampm = "오전 ";
  }
  if (hours < 10) {
    hours = "0" + hours;
  }
  if (minutes < 10) {
    minutes = "0" + minutes;
  }
  if (seconds < 10) {
    seconds = "0" + seconds;
  }
  document.getElementById("clock").innerHTML = ampm + hours + "시 " + minutes + "분 " + seconds + "초";
}

var n = 90;

function rotate(obj) {
  obj.style.transform = "rotate("+n+"deg)";
  n += 90;
  n %= 360;
}

var width = 1;

function wheel(e, obj) {
  if(e.wheelDelta <= -120) {
    width--;
    if(width < 1) {
      width = 1;
    }
  }
  else if(e.wheelDelta >= 120) {
     width++;
  }
  obj.style.zoom = width + "0%";
}

function add() {
  var ret = prompt("일정을 입력하세요");
  if(ret == null || ret == "")
    return;
  var li = document.createElement("li");
  li.innerHTML = ret;
  document.getElementById("plan").appendChild(li);
}

function remove() {
  var obj = document.getElementById("plan");
  while (obj.firstChild) {
    obj.removeChild(obj.firstChild);
  }
}

var leaguephoto = ["image/play/league1.jpg",
                  "image/play/league2.jpg",
                  "image/play/league3.jpg",
                  "image/play/league4.jpg",
                  "image/play/league5.jpg",
                  "image/play/league6.jpg",
                  "image/play/league7.jpg",
                  "image/play/league8.jpg",
                  "image/play/league9.jpg",
                  "image/play/league10.jpg",
                  "image/play/league11.jpg"];

var leagueimgs = new Array();
for(var i=0; i<leaguephoto.length; i++) {
  leagueimgs[i] = new Image();
  leagueimgs[i].src = leaguephoto[i];
}

var leaguenext = 1;
function leaguechange(img) {
  img.src = leagueimgs[leaguenext].src;
  leaguenext++;
  leaguenext %= leagueimgs.length;
}

function leaguevideo1() {
  var obj = document.getElementById("video1");
  obj.innerHTML = '<iframe class="play_VOD" src="https://www.youtube.com/embed/5gwkW7nn_Ac" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
}
function leaguevideo2() {
  var obj = document.getElementById("video2");
  obj.innerHTML = '<iframe class="play_VOD" src="https://www.youtube.com/embed/AQf8gNSrWZU" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
}

var contendersphoto = ["image/play/contenders1.jpg",
                      "image/play/contenders2.jpg",
                      "image/play/contenders3.jpg",
                      "image/play/contenders4.jpg",
                      "image/play/contenders5.jpg",
                      "image/play/contenders6.jpg",
                      "image/play/contenders7.jpg",
                      "image/play/contenders8.jpg",
                      "image/play/contenders9.jpg",
                      "image/play/contenders10.jpg",
                      "image/play/contenders11.jpg"];

var contendersimgs = new Array();
for(var i=0; i<contendersphoto.length; i++) {
  contendersimgs[i] = new Image();
  contendersimgs[i].src = contendersphoto[i];
}

var contendersnext = 1;
function contenderschange(img) {
  img.src = contendersimgs[contendersnext].src;
  contendersnext++;
  contendersnext %= contendersimgs.length;
}

function contendersvideo1() {
  var obj = document.getElementById("video3");
  obj.innerHTML = '<iframe class="play_VOD" src="https://www.youtube.com/embed/JWgXCLVj4B4" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
}
function contendersvideo2() {
  var obj = document.getElementById("video4");
  obj.innerHTML = '<iframe class="play_VOD" src="https://www.youtube.com/embed/vG13wWIVTwQ" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
}

function worldcupvideo() {
  var obj = document.getElementById("video5");
  obj.innerHTML = '<iframe class="play_VOD2" src="https://www.youtube.com/embed/ZGQzlrseWos" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
}

function summit(a) {
  var name = prompt("선수의 번호와 닉네임을 입력해주세요. ex) 1. Name");
  localStorage.setItem(a, name);
  document.getElementById(a).innerHTML = name;
}

function excelsior() {
  if(document.getElementById("excelsior").style.display == "none") {
    document.getElementById("excelsior").style.display = "block";
  }
  else {
    document.getElementById("excelsior").style.display = "none";
  }
  document.getElementById("spitfire").style.display = "none";
  document.getElementById("uprising").style.display = "none";
  document.getElementById("reign").style.display = "none";
  document.getElementById("justice").style.display = "none";
  document.getElementById("defiant").style.display = "none";
  document.getElementById("eternal").style.display = "none";
  document.getElementById("mayhem").style.display = "none";
  document.getElementById("fusion").style.display = "none";
  document.getElementById("outlaws").style.display = "none";
}
function spitfire() {
  if(document.getElementById("spitfire").style.display == "none") {
    document.getElementById("spitfire").style.display = "block";
  }
  else {
    document.getElementById("spitfire").style.display = "none";
  }
  document.getElementById("excelsior").style.display = "none";
  document.getElementById("uprising").style.display = "none";
  document.getElementById("reign").style.display = "none";
  document.getElementById("justice").style.display = "none";
  document.getElementById("defiant").style.display = "none";
  document.getElementById("eternal").style.display = "none";
  document.getElementById("mayhem").style.display = "none";
  document.getElementById("fusion").style.display = "none";
  document.getElementById("outlaws").style.display = "none";
}
function uprising() {
  if(document.getElementById("uprising").style.display == "none") {
    document.getElementById("uprising").style.display = "block";
  }
  else {
    document.getElementById("uprising").style.display = "none";
  }
  document.getElementById("spitfire").style.display = "none";
  document.getElementById("excelsior").style.display = "none";
  document.getElementById("reign").style.display = "none";
  document.getElementById("justice").style.display = "none";
  document.getElementById("defiant").style.display = "none";
  document.getElementById("eternal").style.display = "none";
  document.getElementById("mayhem").style.display = "none";
  document.getElementById("fusion").style.display = "none";
  document.getElementById("outlaws").style.display = "none";
}
function reign() {
  if(document.getElementById("reign").style.display == "none") {
    document.getElementById("reign").style.display = "block";
  }
  else {
    document.getElementById("reign").style.display = "none";
  }
  document.getElementById("spitfire").style.display = "none";
  document.getElementById("uprising").style.display = "none";
  document.getElementById("excelsior").style.display = "none";
  document.getElementById("justice").style.display = "none";
  document.getElementById("defiant").style.display = "none";
  document.getElementById("eternal").style.display = "none";
  document.getElementById("mayhem").style.display = "none";
  document.getElementById("fusion").style.display = "none";
  document.getElementById("outlaws").style.display = "none";
}
function justice() {
  if(document.getElementById("justice").style.display == "none") {
    document.getElementById("justice").style.display = "block";
  }
  else {
    document.getElementById("justice").style.display = "none";
  }
  document.getElementById("spitfire").style.display = "none";
  document.getElementById("uprising").style.display = "none";
  document.getElementById("reign").style.display = "none";
  document.getElementById("excelsior").style.display = "none";
  document.getElementById("defiant").style.display = "none";
  document.getElementById("eternal").style.display = "none";
  document.getElementById("mayhem").style.display = "none";
  document.getElementById("fusion").style.display = "none";
  document.getElementById("outlaws").style.display = "none";
}
function defiant() {
  if(document.getElementById("defiant").style.display == "none") {
    document.getElementById("defiant").style.display = "block";
  }
  else {
    document.getElementById("defiant").style.display = "none";
  }
  document.getElementById("spitfire").style.display = "none";
  document.getElementById("uprising").style.display = "none";
  document.getElementById("reign").style.display = "none";
  document.getElementById("justice").style.display = "none";
  document.getElementById("excelsior").style.display = "none";
  document.getElementById("eternal").style.display = "none";
  document.getElementById("mayhem").style.display = "none";
  document.getElementById("fusion").style.display = "none";
  document.getElementById("outlaws").style.display = "none";
}
function eternal() {
  if(document.getElementById("eternal").style.display == "none") {
    document.getElementById("eternal").style.display = "block";
  }
  else {
    document.getElementById("eternal").style.display = "none";
  }
  document.getElementById("spitfire").style.display = "none";
  document.getElementById("uprising").style.display = "none";
  document.getElementById("reign").style.display = "none";
  document.getElementById("justice").style.display = "none";
  document.getElementById("defiant").style.display = "none";
  document.getElementById("excelsior").style.display = "none";
  document.getElementById("mayhem").style.display = "none";
  document.getElementById("fusion").style.display = "none";
  document.getElementById("outlaws").style.display = "none";
}
function mayhem() {
  if(document.getElementById("mayhem").style.display == "none") {
    document.getElementById("mayhem").style.display = "block";
  }
  else {
    document.getElementById("mayhem").style.display = "none";
  }
  document.getElementById("spitfire").style.display = "none";
  document.getElementById("uprising").style.display = "none";
  document.getElementById("reign").style.display = "none";
  document.getElementById("justice").style.display = "none";
  document.getElementById("defiant").style.display = "none";
  document.getElementById("eternal").style.display = "none";
  document.getElementById("excelsior").style.display = "none";
  document.getElementById("fusion").style.display = "none";
  document.getElementById("outlaws").style.display = "none";
}
function fusion() {
  if(document.getElementById("fusion").style.display == "none") {
    document.getElementById("fusion").style.display = "block";
  }
  else {
    document.getElementById("fusion").style.display = "none";
  }
  document.getElementById("spitfire").style.display = "none";
  document.getElementById("uprising").style.display = "none";
  document.getElementById("reign").style.display = "none";
  document.getElementById("justice").style.display = "none";
  document.getElementById("defiant").style.display = "none";
  document.getElementById("eternal").style.display = "none";
  document.getElementById("mayhem").style.display = "none";
  document.getElementById("excelsior").style.display = "none";
  document.getElementById("outlaws").style.display = "none";
}
function outlaws() {
  if(document.getElementById("outlaws").style.display == "none") {
    document.getElementById("outlaws").style.display = "block";
  }
  else {
    document.getElementById("outlaws").style.display = "none";
  }
  document.getElementById("spitfire").style.display = "none";
  document.getElementById("uprising").style.display = "none";
  document.getElementById("reign").style.display = "none";
  document.getElementById("justice").style.display = "none";
  document.getElementById("defiant").style.display = "none";
  document.getElementById("eternal").style.display = "none";
  document.getElementById("mayhem").style.display = "none";
  document.getElementById("fusion").style.display = "none";
  document.getElementById("excelsior").style.display = "none";
}
function gladiators() {
  if(document.getElementById("gladiators").style.display == "none") {
    document.getElementById("gladiators").style.display = "block";
  }
  else {
    document.getElementById("gladiators").style.display = "none";
  }
  document.getElementById("valiant").style.display = "none";
  document.getElementById("charge").style.display = "none";
  document.getElementById("fuel").style.display = "none";
  document.getElementById("titans").style.display = "none";
  document.getElementById("dragons").style.display = "none";
  document.getElementById("shock").style.display = "none";
  document.getElementById("dynasty").style.display = "none";
  document.getElementById("hunters").style.display = "none";
  document.getElementById("spark").style.display = "none";
}
function valiant() {
  if(document.getElementById("valiant").style.display == "none") {
    document.getElementById("valiant").style.display = "block";
  }
  else {
    document.getElementById("valiant").style.display = "none";
  }
  document.getElementById("gladiators").style.display = "none";
  document.getElementById("charge").style.display = "none";
  document.getElementById("fuel").style.display = "none";
  document.getElementById("titans").style.display = "none";
  document.getElementById("dragons").style.display = "none";
  document.getElementById("shock").style.display = "none";
  document.getElementById("dynasty").style.display = "none";
  document.getElementById("hunters").style.display = "none";
  document.getElementById("spark").style.display = "none";
}
function charge() {
  if(document.getElementById("charge").style.display == "none") {
    document.getElementById("charge").style.display = "block";
  }
  else {
    document.getElementById("charge").style.display = "none";
  }
  document.getElementById("valiant").style.display = "none";
  document.getElementById("gladiators").style.display = "none";
  document.getElementById("fuel").style.display = "none";
  document.getElementById("titans").style.display = "none";
  document.getElementById("dragons").style.display = "none";
  document.getElementById("shock").style.display = "none";
  document.getElementById("dynasty").style.display = "none";
  document.getElementById("hunters").style.display = "none";
  document.getElementById("spark").style.display = "none";
}
function fuel() {
  if(document.getElementById("fuel").style.display == "none") {
    document.getElementById("fuel").style.display = "block";
  }
  else {
    document.getElementById("fuel").style.display = "none";
  }
  document.getElementById("valiant").style.display = "none";
  document.getElementById("charge").style.display = "none";
  document.getElementById("gladiators").style.display = "none";
  document.getElementById("titans").style.display = "none";
  document.getElementById("dragons").style.display = "none";
  document.getElementById("shock").style.display = "none";
  document.getElementById("dynasty").style.display = "none";
  document.getElementById("hunters").style.display = "none";
  document.getElementById("spark").style.display = "none";
}
function titans() {
  if(document.getElementById("titans").style.display == "none") {
    document.getElementById("titans").style.display = "block";
  }
  else {
    document.getElementById("titans").style.display = "none";
  }
  document.getElementById("valiant").style.display = "none";
  document.getElementById("charge").style.display = "none";
  document.getElementById("fuel").style.display = "none";
  document.getElementById("gladiators").style.display = "none";
  document.getElementById("dragons").style.display = "none";
  document.getElementById("shock").style.display = "none";
  document.getElementById("dynasty").style.display = "none";
  document.getElementById("hunters").style.display = "none";
  document.getElementById("spark").style.display = "none";
}
function dragons() {
  if(document.getElementById("dragons").style.display == "none") {
    document.getElementById("dragons").style.display = "block";
  }
  else {
    document.getElementById("dragons").style.display = "none";
  }
  document.getElementById("valiant").style.display = "none";
  document.getElementById("charge").style.display = "none";
  document.getElementById("fuel").style.display = "none";
  document.getElementById("titans").style.display = "none";
  document.getElementById("gladiators").style.display = "none";
  document.getElementById("shock").style.display = "none";
  document.getElementById("dynasty").style.display = "none";
  document.getElementById("hunters").style.display = "none";
  document.getElementById("spark").style.display = "none";
}
function shock() {
  if(document.getElementById("shock").style.display == "none") {
    document.getElementById("shock").style.display = "block";
  }
  else {
    document.getElementById("shock").style.display = "none";
  }
  document.getElementById("valiant").style.display = "none";
  document.getElementById("charge").style.display = "none";
  document.getElementById("fuel").style.display = "none";
  document.getElementById("titans").style.display = "none";
  document.getElementById("dragons").style.display = "none";
  document.getElementById("gladiators").style.display = "none";
  document.getElementById("dynasty").style.display = "none";
  document.getElementById("hunters").style.display = "none";
  document.getElementById("spark").style.display = "none";
}
function dynasty() {
  if(document.getElementById("dynasty").style.display == "none") {
    document.getElementById("dynasty").style.display = "block";
  }
  else {
    document.getElementById("dynasty").style.display = "none";
  }
  document.getElementById("valiant").style.display = "none";
  document.getElementById("charge").style.display = "none";
  document.getElementById("fuel").style.display = "none";
  document.getElementById("titans").style.display = "none";
  document.getElementById("dragons").style.display = "none";
  document.getElementById("shock").style.display = "none";
  document.getElementById("gladiators").style.display = "none";
  document.getElementById("hunters").style.display = "none";
  document.getElementById("spark").style.display = "none";
}
function hunters() {
  if(document.getElementById("hunters").style.display == "none") {
    document.getElementById("hunters").style.display = "block";
  }
  else {
    document.getElementById("hunters").style.display = "none";
  }
  document.getElementById("valiant").style.display = "none";
  document.getElementById("charge").style.display = "none";
  document.getElementById("fuel").style.display = "none";
  document.getElementById("titans").style.display = "none";
  document.getElementById("dragons").style.display = "none";
  document.getElementById("shock").style.display = "none";
  document.getElementById("dynasty").style.display = "none";
  document.getElementById("gladiators").style.display = "none";
  document.getElementById("spark").style.display = "none";
}
function spark() {
  if(document.getElementById("spark").style.display == "none") {
    document.getElementById("spark").style.display = "block";
  }
  else {
    document.getElementById("spark").style.display = "none";
  }
  document.getElementById("valiant").style.display = "none";
  document.getElementById("charge").style.display = "none";
  document.getElementById("fuel").style.display = "none";
  document.getElementById("titans").style.display = "none";
  document.getElementById("dragons").style.display = "none";
  document.getElementById("shock").style.display = "none";
  document.getElementById("dynasty").style.display = "none";
  document.getElementById("hunters").style.display = "none";
  document.getElementById("gladiators").style.display = "none";
}
