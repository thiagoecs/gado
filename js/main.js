
var divi = document.getElementById("divi");
var newParagraph = document.createElement("p");
var newImage = document.createElement("img");
var som = document.createElement("audio");
var corpo = document.querySelector("body");
var refresh = document.createElement("button");
var somSource = document.createElement("source");

function gado() {
    var number = Math.floor(Math.random() * 101);
  if (number > 50) {
    divi.remove();
    somSource.src = "audio/gado.mp3";
    somSource.type = "audio/mpeg";
    som.currentTime=0;
    som.play();
    som.loop = true;
    som.appendChild(somSource);
    corpo.appendChild(som);
    newParagraph.innerHTML = number+"% Gado pra porra";
    corpo.appendChild(newParagraph);
    newImage.src = "img/rei_do_gado.jpg";
    corpo.appendChild(newImage);
    corpo.appendChild(refresh);
    refresh.onclick = gado;
    refresh.textContent = "tente de novo";
  } else {
    divi.remove();
    newImage.remove();
    som.remove();
    newParagraph.innerHTML = number+"% Tá safe";
    corpo.appendChild(newParagraph);
    corpo.appendChild(refresh);
    refresh.onclick = gado;
    refresh.textContent = "tente de novo";
  }
}
