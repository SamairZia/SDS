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

//function when click on dashboard ref
refDashboard.onclick = function(){
    dashboard.style.display = "block";
    patient.style.display = "none";
    appointment.style.display = "none";
    treatment.style.display = "none";
}

//function when click on appointment ref
refAppointment.onclick = function(){
    appointment.style.display = "block";    
    dashboard.style.display = "none";
    patient.style.display = "none";
    treatment.style.display = "none";
}

//function when click on patient ref
refPatient.onclick = function(){
    patient.style.display = "block";
    dashboard.style.display = "none";
    appointment.style.display = "none";
    treatment.style.display = "none";
}

//function when click on treatment ref
refTreatment.onclick = function(){
    treatment.style.display = "block";    
    appointment.style.display = "none";    
    dashboard.style.display = "none";
    patient.style.display = "none";
}

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
    else {
        var data = {"name": x ,"email": y , "pass": z};
        var dataString = JSON.stringify(data);
        //localStorage.setItem("testing" , dataString);
        xmlhttp = new XMLHttpRequest();
        
        xmlhttp.open("POST" , "/logn" , true);
        xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xmlhttp.send(dataString);
        document.getElementById("errorLogin").innerHTML = ""        
        return true;
    }
}

// Add patients Modal stuff
var formSubmitAddPatient = document.getElementById('add-patient');
var submitAddPatient = document.getElementById('btnSubmitAddPatient');
var successAddPatient = document.getElementById('successModal');
var closeModalAddPatient = document.getElementById('myModal');


formSubmitAddPatient.onsubmit = function(e) {
    var name = document.getElementById('name').value;
    var pname = document.getElementById('pname').value;
    var houseAddress = document.getElementById('houseaddress').value;
    var mstatus = document.getElementById('mstatus').value;
    var occupation = document.getElementById('occupation').value;
    var tel = document.getElementById('telNo').value;
    var age = document.getElementById('age').value;
    var sex = document.getElementById('sex').value;
    var regNo = document.getElementById('regNo').value;

    e.preventDefault();
    if(name == "" || pname == "" || houseAddress == "" || occupation == "" || tel == "" || age == "" || regNo == ""){
        alert("Please fill out all the fields.");
        return false;
    }
    else {
        var infoPatient = {"name" : name , "pname": pname , "houseAddress": houseAddress, "mstatus":mstatus, "occupation": occupation, "tel": tel, "age": age, "sex": sex, "regNo": regNo};
        var infoPatientString = JSON.stringify(infoPatient);

        var xhttp = new XMLHttpRequest();

        xhttp.open("POST" , "/patients/add" , true);
        xhttp.send(infoPatientString);
        xhttp.onreadystatechange = function(){
            if (this.readyState == 4 && this.status == 200){
                alert("Submitted");
            }
        };

        // successAddPatient.style.display = "block";
        // closeModalAddPatient.style.display = "none";
        name = "";
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
     e.preventDefault();
     if(appointmentNo == "" || pRegNoApp == "" || patientName == "" || appTime == ""){
        alert("Please fill out all the fields.")
     }
     else {
         alert("Done!")
     }
 }

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
    }
    else {
    alert("Done!")        
    }
}