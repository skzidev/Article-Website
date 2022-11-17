var signedin = (false);
var signedina = (false);
const admintest = () => {
    console.log("admintest invoked");
    var password = ("TemmieAdmin987");
    var errorMessage = document.getElementById('errorMsg');
    var attempt = document.getElementById('pwField').value;
    if (password == attempt){
    window.location.href='m.A52index.html';
    }
    else{
        errorMessage.style.display = 'block';
        console.log("login complete");
    }
};
function terminateMessage(){
var banner = document.getElementById("banner");
banner.style.display = "none";
}