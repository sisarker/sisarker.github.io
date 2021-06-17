
document.querySelector('#f1').addEventListener("click", showF1);

function showF1(){
	document.querySelector('#b').innerHTML = "Your tonsils can grow back if there was tissue left behind during the removal process.";
	document.querySelector('#image').src = "";
}

document.querySelector('#f2').addEventListener("click", showF2);

function showF2(){
document.querySelector('#b').innerHTML = "Humans cannot walk in a straight line without a visual point. When blindfolded, the person will gradually walk in a circle.";
document.querySelector('#image').src = "";
}

document.querySelector('#f3').addEventListener("click", showF3);

function showF3(){
document.querySelector('#b').innerHTML = "The eye makes movements 50 times every second.";
document.querySelector('#image').src = "";
}

document.querySelector('#f4').addEventListener("click", showF4);


function showF4(){
document.querySelector('#b').innerHTML = "Neptune was the first planet to be found through mathematical predictions rather than telescopic location.";
document.querySelector('#image').src = "images/neptune.jpg";
}

document.querySelector('#f5').addEventListener("click", showF5);

function showF5(){
document.querySelector('#b').innerHTML = "Originally, the Eiffel Tower was going to be erected in Barcelona, but the project was rejected because citizens thought it was an eyesore.";
document.querySelector('#image').src = "";
}