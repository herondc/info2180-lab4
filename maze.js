window.onload = mouseover;

var result = true;

function mouseover(){
 	var win =document.getElementById('end');
  	var border = document.querySelectorAll('div.boundary');
  	for (var i =0; i <5; i++) {
  		border[i].setAttribute('onmouseover','hitwalls()');
  		}
  		win.setAttribute('onmouseover','end()');
  	}
function hitwalls(){
	result = false;
	var border = document.querySelectorAll('div.boundary');
	for (var i =0; i <5; i++) {
			border[i].setAttribute('style','background-color:red');
				}
					}
 
function end() {
     if(result) {
     	alert("You win! :)");
    } else {
         alert("Sorry, you lost. :(");
    }
  } 