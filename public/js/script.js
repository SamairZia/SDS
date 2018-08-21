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
