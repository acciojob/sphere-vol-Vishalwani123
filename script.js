function volume_sphere() {
    //Write your code here
	let rad = document.getElementById("radius").value;

	rad = parseFloat(rad);
	
	if (isNaN(rad) || rad < 0) {
        return false; 
    }
	let vol = (4 / 3) * Math.PI * Math.pow(rad, 3);

	vol = vol.toFixed(4);
	
	document.getElementById("volume").value = vol;

	return false;
} 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
