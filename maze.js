window.onload = mouseover;

var result = true;

function mouseover(){
 	var stop = document.getElementById('end');
 	stop.setAttribute('onmouseover','end()');
 	var go = document.getElementById('start');
 	go.setAttribute('onclick','start()');
  	var border = document.querySelectorAll('div.boundary');
  	for (var i =0; i <5; i++) {
  		border[i].setAttribute('onmouseover','hitwalls()');
  		}
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
     	document.getElementById('status').innerHTML ='You win';
    } else {
         document.getElementById('status').innerHTML ='YOU lose';
    }
  } 

  function start() {
 	result = true;
 	var border =document.querySelectorAll('div.boundary');
 	for (var i =0; i <=4; i++) {
 		border[i].setAttribute('style','background-color: lightgrey');
 	}
  } 