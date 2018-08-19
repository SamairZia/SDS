// get div of dashboard
var dashboard =  document.getElementById('divDashboard');

// get div of appointment
var appointment =  document.getElementById('divAppointment');

// get div of patient
var patient = document.getElementById('divPatient');

// get div of treatment
var treatment =  document.getElementById('divTreatment');

//get a href of dashboard
var refDashboard = document.getElementById('aDashboard');

//get a href of appointment
var refAppointment = document.getElementById('aAppointment');

//get a href of patient
var refPatient = document.getElementById('aPatient');

//get a href of treatment
var refTreatment = document.getElementById('aTreatment');

n =  new Date();
y = n.getFullYear();
m = n.getMonth() + 1;
d = n.getDate();
document.getElementById('dashDate').innerHTML = m + "/" + d + "/" + y ;

// var go = document.getElementById('login');

// go.onclick =  function(){
//     onSubmitEventHandler();
// }
// login form onsubmit event function
// function onSubmitEventHandler(){
//     // document.getElementById('loginForm').onsubmit = function(){
//         //checking all values are filled or not
//         if (document.getElementById('userName').value == ""){
//             alert("enter username");
//             return false;
//         }
//         else {
//             alert("done");
//             return true;
//         }
//     }
// }  

function validateForm() {
    var x = document.getElementById('userName').value;
    var y = document.getElementById('userEmail').value;
    var z = document.getElementById('userPass').value;
    // var x = document.forms["loginform"]["uname"].value;
    if (x == "" || z == "") {
        alert("All fileds must be filled out.");
        document.getElementById("errorLogin").innerHTML = "All fields must be filled out!"
        return false;
    }
}

// Add patients Modal stuff
var formSubmitAddPatient = document.getElementById('add-patient');
var submitAddPatient = document.getElementById('btnSubmitAddPatient');
var successAddPatient = document.getElementById('successModal');
var closeModalAddPatient = document.getElementById('myModal');

formSubmitAddPatient.onsubmit = function(e) {
	var pdate			= document.getElementById('pdate').value;
	var name 			= document.getElementById('name').value;
    var pname 			= document.getElementById('pname').value;
    var houseAddress 	= document.getElementById('houseAddress').value;
    var workAddress 	= document.getElementById('workAddress').value;
    var mstatus 		= document.getElementById('mstatus').value;
    var occupation 		= document.getElementById('occupation').value;
    var tel 			= document.getElementById('telNo').value;
    var reference 		= document.getElementById('reference').value;
    var age 			= document.getElementById('age').value;
    var sex 			= document.getElementById('sex').value;
    var regNo 			= document.getElementById('regNo').value;
    
	//Getting ids of Patient Health Questionnaire
    // 1. Personal Habits
    var smoking 		= document.getElementById('smoking').checked;
    var tobacco 		= document.getElementById('tobacco').checked;
    var betelNuts 		= document.getElementById('betelNuts').checked;
    var alcohol 		= document.getElementById('alcohol').checked;
    
	//2. Medical Profile
    var diabetes 				= document.getElementById('diabetes').checked;
    var pepticUlcer 			= document.getElementById('pepticUlcer').checked;
    var hypertension 			= document.getElementById('hypertension').checked;
    var asthma 					= document.getElementById('asthma').checked;
    var tuberculosis 			= document.getElementById('tuberculosis').checked;
    var hepatitis 				= document.getElementById('hepatitis').checked;
    var thyroidDisorder 		= document.getElementById('thyroidDisorder').checked;
    var renalDisease 			= document.getElementById('renalDisease').checked;
    var skinDisease 			= document.getElementById('skinDisease').checked;
    var bleedingDisorder 		= document.getElementById('bleedingDisorder').checked;
    var ischemicHeartDisease 	= document.getElementById('ischemicHeartDisease').checked;
    var valvularHeartDisease 	= document.getElementById('valvularHeartDisease').checked;
    
	//Reason for Previous Hospitalization
    var reason 					= document.getElementById('reason').value;
    
	//3. Allergies
    var penicillin 				= document.getElementById('penicillin').checked;
    var anesthesia 				= document.getElementById('anesthesia').checked;
    var aspirin 				= document.getElementById('aspirin').checked;
    var latexProduct 			= document.getElementById('latexProduct').checked;
    
	//4. Family History
    var famdiabetes 			= document.getElementById('famdiabetes').checked;
    var famhypertension 		= document.getElementById('famhypertension').checked;
    var famischemicHeartDisease = document.getElementById('famischemicHeartDisease').checked;
    var fambleedingDisorder 	= document.getElementById('fambleedingDisorder').checked;
    
	//5. For females
    var pregnancy 				= document.getElementById('pregnancy').checked;
    var breastFeeding 			= document.getElementById('breastFeeding').checked;

    e.preventDefault();
    if(name == "" || pname == "" || houseAddress == "" || occupation == "" || tel == "" || age == "" || regNo == ""){
        alert("Please fill out all the fields.");
        return false;
    }
	else {
        var infoPatient = {
			date					: pdate,
			name 					: name,
			pname 					: pname,
            houseAddress		 	: houseAddress,
            workAddress 			: workAddress,
			mstatus 				: mstatus,
			occupation	 			: occupation,
            tel 					: tel,
            reference 				: reference,
			age 					: age,
			sex 					: sex,
            regNo 					: regNo,
            smoking 				: smoking,
            tobacco 				: tobacco,
            betelNuts 				: betelNuts,
            alcohol 				: alcohol,
            diabetes 				: diabetes,
            pepticUlcer 			: pepticUlcer,
            hypertension 			: hypertension,
            asthma 					: asthma,
            tuberculosis 			: tuberculosis,
            hepatitis 				: hepatitis,
            thyroidDisorder 		: thyroidDisorder,
            renalDisease 			: renalDisease,
            skinDisease 			: skinDisease,
            bleedingDisorder 		: bleedingDisorder,
            ischemicHeartDisease 	: ischemicHeartDisease,
            valvularHeartDisease 	: valvularHeartDisease,
            reason 					: reason,
            penicillin 				: penicillin,
            anesthesia 				: anesthesia,
            aspirin 				: aspirin,
            latexProduct 			: latexProduct,
            famdiabetes 			: famdiabetes,
            famhypertension 		: famhypertension,
            famischemicHeartDisease : famischemicHeartDisease,
            fambleedingDisorder 	: fambleedingDisorder,
            pregnancy 				: pregnancy,
            breastFeeding 			: breastFeeding
		}
        
        var xhttp = new XMLHttpRequest();

        xhttp.open("POST" , "/main/patients/add" , true);
        xhttp.setRequestHeader("Content-type", "application/json");     
        xhttp.send(JSON.stringify(infoPatient));
        xhttp.onreadystatechange = function(){
            if (this.readyState == 4 && this.status == 200){
                alert("Submitted");
                formSubmitAddPatient.reset(); //Reset Form after submitting
            }
        };
        return true;
    }	
}

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
         };
         return true;
     }
	 
	//moved code at the bottom
 }

 //Setting curremt date in Add Apointment modal
//  var myDate =  new Date().toISOString().substr(0,10);
//  document.getElementById('me').value = myDate;

 document.getElementById("appointmentDate").valueAsDate = new Date();

// Add treatment stuff
var formSubmitAddTreatment = document.getElementById('add-treatment');

formSubmitAddTreatment.onsubmit = function(e) {
    var pRegNoTreatment = document.getElementById('pRegNoTreatment').value;
    var pNameTreatment = document.getElementById('pNameTreatment').value;
    var pAppNoTreatment = document.getElementById('pAppNoTreatment').value;
    var treatmentDetails = document.getElementById('treatmentDetails').value;
    var cost = document.getElementById('cost').value;
    var paid = document.getElementById('paid').value;
    var balance = document.getElementById('balance').value;

    e.preventDefault();
    if(pRegNoTreatment == "" || pNameTreatment == "" || pAppNoTreatment == "" || treatmentDetails == "" || cost == "" || paid == "" || balance == "" ){
        alert("Please fill out all the fields.")
        return false;
    }
    else {
        var infoTreatment = {
            pRegNoTreatment : pRegNoTreatment,
            pNameTreatment : pNameTreatment,
            pAppNoTreatment : pAppNoTreatment,
            treatmentDetails : treatmentDetails,
            cost : cost,
            paid : paid,
            balance : balance
        };
        var xhttpTreatment = new XMLHttpRequest();

        xhttpTreatment.open("POST" , "/main/treatments/add" , true);
        xhttpTreatment.setRequestHeader("Content-type", "application/json");     
        xhttpTreatment.send(JSON.stringify(infoTreatment));
        xhttpTreatment.onreadystatechange = function(){
            if (this.readyState == 4 && this.status == 200){
                alert("Submitted");
            }
        };
        return true;
    }
}

//search patient button
var searchPatient = document.getElementById('searchPatient');
var searchResultPersonalHistory = document.getElementById('searchResultPersonalHistory');
var searchResultAppointment = document.getElementById('searchResultAppointment');
var searchResultTreatment = document.getElementById('searchResultTreatment');

//Working
searchPatient.onclick = function(e){
    searchResultPersonalHistory.innerHTML = "Something happend.";
    searchResultAppointment.innerHTML = "Appointment history updated.";
    searchResultTreatment.innerHTML = "Treatment history updated."
    // var ajeeb = '{ "name":"John", "age":30, "city":"New York"}'
    // var obj = JSON.parse( ajeeb );
    // // Now you can access the string using the dot notation
    // console.log( obj.name );

    // var xhttpSearch = new XMLHttpRequest();
    // fetch( '/patients/add', {
	// method: 'get'
    //     }).then( function( response ) {
    //         // Success
    //         alert('fetch func')
    //     }).catch( function( err ) {
    //         // Error
    //     });
    // xhttpSearch.open("POST" , "/patients/add");
    // xhttpSearch.send();    
    // xhttpSearch.onreadystatechange = function(){
    //     if (this.readyState == 4 && this.status == 200){
    //         var items = JSON.parse(xhttpSearch.infoPatient);
    //         alert("clicked")
    //         console.log(items);
    //     }
    // };
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
          
    function clickableFun(){
        var zzb = document.getElementById('ssBtn');
        alert('ddd')
    }