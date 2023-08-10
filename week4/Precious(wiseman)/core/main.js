







function results(){

	var additions = document.getElementsByClassName('b');
	var total = 0;
	for(var i = 0; i < additions.length; i++){
		var scores = Number(additions[i].value);
			total = total + scores;
	}
	document.getElementById('total').innerHTML = "Your score is " + total;
		var average = total / 5;
	document.getElementById('average').innerHTML = "Your average score is " + average;
		if (average >= 50) {
			document.getElementById('remark').innerHTML =  "Congratulations. You have been Promoted to a new class.";
		}else if (eng == '' && bio == '' && che == '' && mat == '' && phy == ''){
			console.log ('All fields are empty. Please fill in your scores and try again.');
			document.getElementById('remark').innerHTML = "";
		}else{
			document.getElementById('remark').innerHTML = "Failed. You are to repeat this class.";
		}
	
}

// English subject
function ens(){
	var eng = document.getElementById('en').value;
	if (eng  > 0 && eng < 40) {document.getElementById('enl').value = "F";}
	else if(eng >= 40 && eng < 45) {document.getElementById('enl').value = "E";}
	else if(eng >= 45 && eng < 50) {document.getElementById('enl').value = "D";}
	else if(eng >= 50 && eng < 60) {document.getElementById('enl').value = "C";}
	else if(eng >= 60 && eng <= 69) {document.getElementById('enl').value = "B";}
	else if(eng >= 70 && eng <= 100) {document.getElementById('enl').value = "A";}
	else{
		alert('Invalid Number');
	}
	
}

// Mathematics function codes
function mas(){
	var mat = document.getElementById('ma').value;
	if (mat < 40) {document.getElementById("mal").value = "F"}
	else if(mat >= 40 && mat < 45) {document.getElementById('mal').value = "E";}
	else if(mat >= 45 && mat < 50) {document.getElementById('mal').value = "D";}
	else if(mat >= 50 && mat < 60) {document.getElementById('mal').value = "C";}
	else if(mat >= 60 && mat <= 69) {document.getElementById('mal').value = "B";}
	else if(mat >= 70 && mat <= 100) {document.getElementById('mal').value = "A";}
	else{
		alert('Invalid Number');
	}
	
}

// Physics function code
function phs(){
	var phy = document.getElementById('ph').value;
	if (phy < 40) {document.getElementById("phl").value = "F"}
	else if(phy >= 40 && phy < 45) {document.getElementById('phl').value = "E";}
	else if(phy >= 45 && phy < 50) {document.getElementById('ephl').value = "D";}
	else if(phy >= 50 && phy < 60) {document.getElementById('phl').value = "C";}
	else if(phy >= 60 && phy <= 69) {document.getElementById('phl').value = "B";}
	else if(phy >= 70 && phy <= 100) {document.getElementById('phl').value = "A";}
	else{
		alert('Invalid Number');
	}
	
}

// Chemistry function code
function chs(){
	var che = document.getElementById('ch').value;
	if (che < 40) {document.getElementById('chl').value = "F"}
	else if(che >= 40 && che < 45) {document.getElementById('chl').value = "E";}
	else if(che >= 45 && che < 50) {document.getElementById('chl').value = "D";}
	else if(che >= 50 && che < 60) {document.getElementById('chl').value = "C";}
	else if(che >= 60 && che <= 69) {document.getElementById('chl').value = "B";}
	else if(che >= 70 && che <= 100) {document.getElementById('chl').value = "A";}
	else{
		alert('Invalid Number');
	}
}

// Biology function code
function bis(){
	var bio = document.getElementById('bi').value;
	if (bio < 40) {document.getElementById('bil').value = "F"}
	else if(bio >= 40 && bio < 45) {document.getElementById('bil').value = "E";}
	else if(bio >= 45 && bio < 50) {document.getElementById('bil').value = "D";}
	else if(bio >= 50 && bio < 60) {document.getElementById('bil').value = "C";}
	else if(bio >= 60 && bio <= 69) {document.getElementById('bil').value = "B";}
	else if(bio >= 70 && bio <= 100) {document.getElementById('bil').value = "A";}
	else{
		alert('Invalid Number');
	}
}


