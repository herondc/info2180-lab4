 window.onload = mouseover;
  function mouseover(){
  	var border = document.querySelectorAll('div.boundary');
  	for (var i =0; i <5; i++) {
	border[i].setAttribute('onmouseover','hitwalls()');
			}
	}

function hitwalls(){
	var border = document.querySelectorAll('div.boundary');
	for (var i =0; i <5; i++) {
		border[i].setAttribute('style','background-color:red');
	}
  } 