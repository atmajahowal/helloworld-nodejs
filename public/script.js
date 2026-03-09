function checkBackend(){

fetch("/api/status")
.then(response => response.json())
.then(data => {

document.getElementById("statusMessage").innerText = data.status;

});

}