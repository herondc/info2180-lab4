window.onload = mouseover;

function mouseover(){
	var border =document.getElementsByClassName('boundary'); 	 
 		boundary1.setAttribute('onmouseover','hitwall(this)');
 	}

 
function hitwall(boundary){
	boundary.setAttribute('style','background-color:red');
} 
