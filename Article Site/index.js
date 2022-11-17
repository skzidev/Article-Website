if(window.location.href == Signin.html){
    const adForm = document.getElementById('signInForm');
    adForm.style.display = "none";
}


var uagent = navigator.userAgent.toLowerCase();
var acountname = ("Admin");
var result = (false)

if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)) {
window.location.href='m.index.html'
console.log(uagent)
}
function toast(){
// Get the snackbar DIV
var x = document.getElementById("snackbar");

// Add the "show" class to DIV
x.className = "show";

// After 3 seconds, remove the show class from DIV
setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
}
function animateBI(x) {
    x.classList.toggle("change");
  }
function terminateMessage(){
var banner = document.getElementById("banner");
var bannerText = document.getElementById("bannerP");
var br = document.getElementById('disB');
var bannerClose = document.getElementById("bannerCloseTag");
banner.style.display = "none";
br.style.display = "none";
bannerText.style.display = "none";
bannerClose.style.display = "none";
}
function complain(){
//
}
function accountlogout(){
var result = window.confirm("Do you want to log out of 'Admin?'");
if (result === true){
window.location.href='index.html';
}
else{
alert("Logout Cancelled");
}

}
function accountinfo(){
window.location.href='acontinfo.html';
}