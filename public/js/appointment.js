//  add appointment stuff 
var formSubmitAddAppointment = document.getElementById('add-appointment');

formSubmitAddAppointment.onsubmit = function(e) {
	var appointmentNo = document.getElementById('appointmentNo').value;
	var pRegNoApp = document.getElementById('pRegNoApp').value;
	var patientName = document.getElementById('patientName').value;
	var appTime = document.getElementById('appTime').value;
	var comments = document.getElementById('comments').value;
	var date = document.getElementById('appointmentDate').value;
	e.preventDefault();
	if(appointmentNo == "" || pRegNoApp == "" || patientName == "" || appTime == ""){
	   alert("Please fill out all the fields.")
	   return false;
	}
	else {
		var infoAppointment = { 
			appointmentNo : appointmentNo,
			pRegNoApp : pRegNoApp,
			patientName : patientName,
			appTime : appTime,
			comments : comments,
			date : date
		};
		var xhttpAppointment = new XMLHttpRequest();

		xhttpAppointment.open("POST" , "/main/appointment/add" , true);
		xhttpAppointment.setRequestHeader("Content-type", "application/json");     
		xhttpAppointment.send(JSON.stringify(infoAppointment));
		xhttpAppointment.onreadystatechange = function(){
			if (this.readyState == 4 && this.status == 200){
				alert("Submitted");
			}
			else
			{
				alert('something wronmg')
			}
		};
		return true;
	}
	
   //moved code at the bottom
}

//Setting curremt date in Add Apointment modal
//  var myDate =  new Date().toISOString().substr(0,10);
//  document.getElementById('me').value = myDate;

//setting date in date field
document.getElementById("appointmentDate").valueAsDate = new Date();


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