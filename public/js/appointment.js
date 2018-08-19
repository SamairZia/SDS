//Chunk from AddAppointmnet stuff
//this is to get recent appointment number
//use it after add appointment window loads
var first = document.getElementById('pRegNoApp');
first.onfocusout = function() {loadAppNo()};
//   = first.value;

function loadAppNo() { 
	console.log('sssss')
	//  sec = pRegNoApp;
	var xhtp = new XMLHttpRequest();
	var pRegNoApp = document.getElementById('pRegNoApp').value;
	xhtp.open("GET", "appointment/getAppNo/" +pRegNoApp);
	xhtp.onload = function(){
		alert("App number triggered");
		console.log(xhtp.responseText);
		var myObj = JSON.parse(xhtp.responseText);
		document.getElementById('appointmentNo').value = myObj.appNo;
		//  document.getElementById('patientName').value = myObj.patientName;         
	}; 

	var getPatientName = new XMLHttpRequest();
	getPatientName.open("GET", "patient/getPatientName/" +pRegNoApp);
	getPatientName.onload = function(){
		var myObj = JSON.parse(getPatientName.responseText);
		document.getElementById('patientName').value = myObj.patientName;
	};
	xhtp.send();
	getPatientName.send();
}

 //this is to get the patient name
 //use it when focus is moved from Patient name