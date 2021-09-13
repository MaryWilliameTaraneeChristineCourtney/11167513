// JavaScript Document
function doSubmit() {
	if (validateText() == false) {
		alert("You Lack Something.");
		return;
	}
	if (validateCheckbox() == false) {
		alert("You Lack Something.");
		return;
	}
	if (validateTextArea() == false) {
		alert("You Lack Something.");
		return;
	}
	if (validateSelect() == false) {
		alert("You Lack Something.");
		return;
	}
	alert("Thanks for the Feedback! ^__^")
	return;
}

function validateText() {
	if (document.contact.name.value.length == 0)
		return false;
	if (document.contact.email1.value.length == 0)
		return false;
	if (document.contact.email2b.value.length == 0)
		return false;
	
	return true;
}
function validateCheckbox() {
	if (document.contact.interest1.checked)
		return true;
	else if (document.contact.interest2.checked)
		return true;
	else if (document.contact.interest3.checked)
		return true;
	
	return false;
}
function validateTextArea() {
	if (document.contact.comment.value.length == 0)
		return false;

	return true;
}
function validateSelect() {
	if (document.contact.continent.selectedIndex == 0)
		return false;
	if (document.contact.email2a.selectedIndex == 0)
		return false;
	if (document.contact.email3.value.length == 0)
		return false;
	
	return true;
}

function doCancel() {
	document.contact.name.value = ""
	document.contact.email1.value = ""
	document.contact.email2a.selectedIndex = 0;
	document.contact.email3.selectedIndex = 0;
	document.contact.email4.value = ""
	document.contact.comment.value = ""
	document.contact.continent.selectedIndex = 0;
	
	document.contact.interest1.checked = false;
	document.contact.interest2.checked = false;
	document.contact.interest3.checked = false;
	return;
}

function hide1(elem, elemcountry, elemafrica, elemamerica, elemasia, elemeurope){
	
	var sub = elem.value.toLowerCase(); 
	sub = sub.replace(/ /g, "");
			
	for (i = 0; i < document.getElementsByClassName('africa').length; i++){ 
			document.getElementsByClassName('africa')[i].style.display = 'none';
		}
	for (i = 0; i < document.getElementsByClassName('america').length; i++){ 
			document.getElementsByClassName('america')[i].style.display = 'none';
		}
	for (i = 0; i < document.getElementsByClassName('asia').length; i++){ 
			document.getElementsByClassName('asia')[i].style.display = 'none';
		}
	for (i = 0; i < document.getElementsByClassName('europe').length; i++){ 
			document.getElementsByClassName('europe')[i].style.display = 'none';
		}		
			
	if(elemafrica != "africa"){
		elemafrica = elem.value.toLowerCase(); 
		elemafrica = sub.replace(/Africa/g, "africa");
		document.getElementById(elemafrica).style.display = 'inline';
	}
	else if(elemamerica != "america"){
		elemamerica = elem.value.toLowerCase(); 
		elemamerica = sub.replace(/America/g, "america");
		document.getElementById(elemamerica).style.display = 'inline';
	}
	else if(elemasia != "asia"){
		elemasia = elem.value.toLowerCase(); 
		elemasia = sub.replace(/Asia/g, "asia");
		document.getElementById(elemasia).style.display = 'inline';
	}
	else if(elemeurope != "europe"){
		elemeurope = elem.value.toLowerCase(); 
		elemeurope = sub.replace(/Europe/g, "europe");
		document.getElementById(elemeurope).style.display = 'inline';
	}
	else{
		for (i = 0; i < document.getElementsByClassName('subRegion').length; i++){ 
		document.getElementsByClassName('subRegion')[i].style.display = 'none';
		}
		document.getElementById(sub).style.display = 'inline';
	}
	
}
function hide2(elem){
	if (document.contact.email2a.selectedIndex == 6){
		document.contact.email2b.style.display = 'inline';
	} else {
		document.contact.email2b.style.display = 'none';
	}
}