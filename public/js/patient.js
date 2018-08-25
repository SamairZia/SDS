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

        xhttp.open("POST" , "patients/add" , true);
        xhttp.setRequestHeader("Content-type", "application/json");     
        xhttp.send(JSON.stringify(infoPatient));
        xhttp.onreadystatechange = function(){
            if (this.readyState == 4 && this.status == 200){
                alert("Submitted");
                formSubmitAddPatient.reset(); //Reset Form after submitting
            }
            else {
                alert('Something Wrong')
            }
        };
        return true;
    }	
}

//setting date in date field
document.getElementById("pdate").valueAsDate = new Date();
