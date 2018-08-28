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
	if(pRegNoApp == ""){
		document.getElementById('pRegNoApp').style.backgroundColor = "#FEECEC";
        document.getElementById('pRegNoApp').style.border = "1px solid red";
        document.getElementById('regNoAppError').innerHTML = "Required field";
        document.getElementById('pRegNoApp').focus();
		return false;		
	}
	if(appointmentNo == ""){
		document.getElementById('appointmentNo').style.backgroundColor = "#FEECEC";
        document.getElementById('appointmentNo').style.border = "1px solid red";
        document.getElementById('appNoError').innerHTML = "Required field";
        document.getElementById('appointmentNo').focus();
		return false;
	}
	if(patientName == ""){
		document.getElementById('patientName').style.backgroundColor = "#FEECEC";
        document.getElementById('patientName').style.border = "1px solid red";
        document.getElementById('pNameAppError').innerHTML = "Required field";
        document.getElementById('patientName').focus();
		return false;		
	}
	if(appTime == ""){
		document.getElementById('appTime').style.backgroundColor = "#FEECEC";
        document.getElementById('appTime').style.border = "1px solid red";
        document.getElementById('timeAppError').innerHTML = "Required field";
        document.getElementById('appTime').focus();
		return false;
	}
	if(date == ""){
		document.getElementById('appointmentDate').style.backgroundColor = "#FEECEC";
        document.getElementById('appointmentDate').style.border = "1px solid red";
        document.getElementById('dateAppError').innerHTML = "Required field";
        document.getElementById('appointmentDate').focus();
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
				formSubmitAddAppointment.reset(); //Reset Form after submitting
				document.getElementById("appointmentDate").valueAsDate = new Date(); //setting date in date field
			}
		};
		return true;
	}
	
   //moved code at the bottom
}

//setting date in date field
document.getElementById("appointmentDate").valueAsDate = new Date();


//onfocusout function for reseting form fields
function pRegNoAppDefault() {
    document.getElementById('pRegNoApp').style.backgroundColor = "white";
    document.getElementById('pRegNoApp').style.border = "1px solid #CECECE";
    document.getElementById('regNoAppError').innerHTML = ""
}
function appointmentDateDefault() {
    document.getElementById('appointmentDate').style.backgroundColor = "white";
    document.getElementById('appointmentDate').style.border = "1px solid #CECECE";
    document.getElementById('dateAppError').innerHTML = ""
}
function appTimeDefault() {
    document.getElementById('appTime').style.backgroundColor = "white";
    document.getElementById('appTime').style.border = "1px solid #CECECE";
    document.getElementById('timeAppError').innerHTML = ""
}


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
		//alert("App number triggered");
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