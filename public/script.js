function getMessage(){

fetch("/api")
.then(res => res.json())
.then(data => {
 document.getElementById("message").innerText = data.message;
});

}