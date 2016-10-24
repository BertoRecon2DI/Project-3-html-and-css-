
/*function calc(call) {
	document.getElementById("output")
		.value += call;

}*/









}
function calculate() {
	'use strict';
	var call;
	if(degree =="C") {


		call = document.getElementById("C").value * 9 / 5 + 32;
		document.getElementById("F").value = Math.round(call);
	}
	else{
		call = (document.getElementById("F").value - 32) * 5/9;
		document.getElementById("C").value = Math.round(call)
	}

	catch (err) {
		console.log(err);
	}



}



<!--label{color:limegreen}
    strong {color:limegreen}
    h1{color: gold }
    body{

    }-->













/*window.onload = init;
	var ShapeType = "";

	//The "onclick" method will pass in the type (sphere, cylinder, cone, etc.)
	function setForm(type) {
		shapeType = type;
	}

	// Function called when the window has been loaded.
	// Function needs to add an event listener to the form.
	function init() {
		'use strict';
		document.getElementById('shapeForm').onsubmit = calculate;
	} // End of init() function.

	// Function called when the form is submitted.
	// Function performs the calculation and returns false.
	function calculate() {
		'use strict';

		// For storing the volume and area:
		var volume;
		var area;

		// Get a reference to the form elements:
		var radius = document.getElementById('radius');
		if (shapeType == "cylinder" || shapeType == "cone") {
			var height = document.getElementById('height');
		}

		// Make sure there is a reference and the value is positive:
		if (radius && (radius.value > 0)) {

			if (shapeType = "sphere") {
				// Perform the calculations:
				//V = 4/3 pi r^3
				volume = (4/3) * Math.PI * Math.pow(radius.value, 3);
				//A = 4 pi r^2
				area = 4 * Math.PI * Math.pow(radius.value, 2);
			}
			else {
				//Cone and Cylinder require height
				if (height && (height.value > 0)) {
					if (shapeType == "cone") {
						// Perform the calculations:
						//V = 1/3 pi r^2 h
						volume = (1/3) * Math.PI * Math.pow(radius.value, 2) * height.value;
						//A = pi r (r + sqrt(r^2 + h^2))
						area = Math.PI * radius.value * (
									parseFloat(radius.value) + (
											Math.sqrt(
												Math.pow(radius.value, 2) + Math.pow(height.value, 2)
											)
										)
							);
					}
*/



















