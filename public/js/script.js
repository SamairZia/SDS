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