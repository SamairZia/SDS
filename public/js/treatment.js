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
