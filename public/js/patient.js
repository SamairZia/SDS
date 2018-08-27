// Add patients Modal stuff
var formSubmitAddPatient = document.getElementById('add-patient');
var submitAddPatient = document.getElementById('btnSubmitAddPatient');
var successAddPatient = document.getElementById('successModal');
var closeModalAddPatient = document.getElementById('myModal');

formSubmitAddPatient.onsubmit = function(event) {
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

    event.preventDefault();

    if(pdate == ""){
        document.getElementById('pdate').style.backgroundColor = "#FEECEC";
        document.getElementById('pdate').style.border = "1px solid red";
        document.getElementById('pdateError').innerHTML = "Required field";
        document.getElementById('pdate').focus();
        return false;
    }
    if(regNo == ""){
        document.getElementById('regNo').style.backgroundColor = "#FEECEC";
        document.getElementById('regNo').style.border = "1px solid red";
        document.getElementById('regNoError').innerHTML = "Required field";
        document.getElementById('regNo').focus();
        return false;
    }
    if(name == ""){
        document.getElementById('name').style.backgroundColor = "#FEECEC";
        document.getElementById('name').style.border = "1px solid red";
        document.getElementById('nameError').innerHTML = "Required field"
        document.getElementById('name').focus();
        return false;
    }
    if(tel == ""){
        document.getElementById('telNo').style.backgroundColor = "#FEECEC";
        document.getElementById('telNo').style.border = "1px solid red";
        document.getElementById('telError').innerHTML = "Required field";
        document.getElementById('telNo').focus();
        return false;
    }
    if(age == ""){
        document.getElementById('age').style.backgroundColor = "#FEECEC";
        document.getElementById('age').style.border = "1px solid red";
        document.getElementById('ageError').innerHTML = "Required field";
        document.getElementById('age').focus();
        return false;
    }
    if(sex.selectedIndex == 0){
        document.getElementById('sex').style.backgroundColor = "#FEECEC";
        document.getElementById('sex').style.border = "1px solid red";
        document.getElementById('sexError').innerHTML = "Required field";
        document.getElementById('sex').focus();
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

        xhttp.open("POST" , "patient/add" , true);
        xhttp.setRequestHeader("Content-type", "application/json");     
        xhttp.send(JSON.stringify(infoPatient));
        xhttp.onreadystatechange = function(){
            if (this.readyState == 4 && this.status == 200){
                alert("Submitted");
                formSubmitAddPatient.reset(); //Reset Form after submitting
                document.getElementById("pdate").valueAsDate = new Date(); //setting date afetr reset
            }
        };
        return true;
    }	

}

//setting date in date field when modal load
document.getElementById("pdate").valueAsDate = new Date();


//onfocusout function for reseting form fields
function regNoDefault() {
        document.getElementById('regNo').style.backgroundColor = "white";
        document.getElementById('regNo').style.border = "1px solid #CECECE";
        document.getElementById('regNoError').innerHTML = ""
}
function nameDefault() {
    document.getElementById('name').style.backgroundColor = "white";
    document.getElementById('name').style.border = "1px solid #CECECE";
    document.getElementById('nameError').innerHTML = ""
}
function tellDefault() {
    document.getElementById('telNo').style.backgroundColor = "white";
    document.getElementById('telNo').style.border = "1px solid #CECECE";
    document.getElementById('telError').innerHTML = ""
}
function ageDefault() {
    document.getElementById('age').style.backgroundColor = "white";
    document.getElementById('age').style.border = "1px solid #CECECE";
    document.getElementById('ageError').innerHTML = ""
}
function sexDefault() {
    document.getElementById('sex').style.backgroundColor = "white";
    document.getElementById('sex').style.border = "1px solid #CECECE";
    document.getElementById('sexError').innerHTML = ""
}
