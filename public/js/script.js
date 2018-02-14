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

// function validateForm() {
//     var x = document.getElementById('userName').value;
//     var y = document.getElementById('userEmail').value;
//     var z = document.getElementById('userPass').value;
//     // var x = document.forms["loginform"]["uname"].value;
//     if (x == "" || y == "" || z == "") {
//         alert("All fileds must be filled out.");
//         return false;
//     }
//     else {
//         var data = {"name": x ,"email": y , "pass": z};
//         var dataString = JSON.stringify(data);
//         localStorage.setItem("testing" , dataString);

//         var retrive = localStorage.getItem("testing");
//         var text = JSON.parse(retrive);
//         document.getElementById('temp').innerHTML = text.name;
//         return true;
//     }
// }


// window.onload = function(){
//     onSubmitEventHandler();
// }