

function num() {
	var y1 = document.getElementById('x').value;
	var z1 = document.getElementById('y').value;
	var y2 = parseInt(y1);
	var z2 = parseInt(z1);
	// console.log(typeof y2,z2);
	for (let i = y2;i<=z2; i++) {
		var x = i**2;
		document.write(x+"<br>");
	}
}


	