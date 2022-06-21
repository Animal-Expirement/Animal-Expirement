function phaser_game(){
    
    name= prompt("User name");
	
	sessionStorage.setItem("username", name);
    loadpage(".././html/phasergame3.html");
	
}
function puntuaciones(){
	loadpage("../html/puntuacions.html");
}

function exit (){
	if (name != ""){
		alert("Leaving " + name + "'s game");
	}
	name = "";
	loadpage("../index.html")
}

function options(){
	loadpage("../html/option.html");
}

function load(){
	loadpage("../html/load.html");
}
