// Add Patient Modal stuff
// Get the modal
var modal = document.getElementById('myModal');

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("closePatient")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
// window.onclick = function(event) {
//     if (event.target == modal) {
//         modal.style.display = "none";
//     }
// }
// ******* Add Patient Modal stuff ends *******
var btnAddAppointment = document.getElementById("btnAddAppointment");

var modalAppointment = document.getElementById("modalAppointment");

var span = document.getElementsByClassName("closeAppointment")[0];

btnAddAppointment.onclick = function() {
    modalAppointment.style.display = "block";
}

span.onclick = function() {
    modalAppointment.style.display = "none";
}

// Success Modal stuff for Add Patient Appointment
// Get the modal
var successModal = document.getElementById('successModal');

// Get the <span> element that closes the modal
var spancloseSuccessModal = document.getElementsByClassName("closeSuccessModal")[0];

// When the user clicks on <span> (x), close the modal
spancloseSuccessModal.onclick = function() {
    successModal.style.display = "none";
}
