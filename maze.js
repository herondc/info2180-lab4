window.onload = mouseover;
  var result = true; 
 var current = false
 function mouseover(){
 	var finish = document.getElementById('end');
 	finish.setAttribute('onmouseover','end()');
 var start = document.getElementById('start');
 	start.setAttribute('onclick','begin()');
  
 	start.setAttribute('onmouseover','action()');
 	start.setAttribute('onmouseout','stayinmaze()');
 var border = document.querySelectorAll('div.boundary');
  	
  	for (var i =0; i <5; i++) {
  		border[i].setAttribute('onmouseover','hitwalls()');
  	}
  }
  
 function action() {
 	current = true;
 }
 function hitwalls(){
  	result = false;
  	if (current) {
 		var border = document.querySelectorAll('div.boundary');
 		document.getElementById('status').innerHTML ='You lose - Click S to refresh game';
 		for (var i =0; i <5; i++) {
 			border[i].setAttribute('style','background-color:red');
 		}
  	}
  }
  
  function end() {
  	if(result && current) {
      	document.getElementById('status').innerHTML ='You win - Click S to play again';
      } else {
          document.getElementById('status').innerHTML ='You lose - Click S to try again';
      }
  }
  function begin() {
  	result = true;
  	document.getElementById('status').innerHTML ='Complete the maze';
  	var border =document.querySelectorAll('div.boundary');
 	
  	for (var i =0; i <=4; i++) {
  		border[i].setAttribute('style','background-color: lightgrey');
  	}
 }
 
 function stayinmaze() {
 
 	var leavemaze =document.getElementById('maze').offsetLeft;
 	var mouse =event.clientX;
 
 	if(mouse < leavemaze) {
 		result = false;
 		document.getElementById('status').innerHTML ='You lose - Click S to try again';
 		var border = document.querySelectorAll('div.boundary');
 		for (var i =0; i <5; i++) {
 		border[i].setAttribute('style','background-color:red');
 		}
 		return false;
 	}
 	else {
 		return true;
 	}
  } 