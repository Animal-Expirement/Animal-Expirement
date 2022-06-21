function phaser_game(){
    
    name= prompt("User name");
	
	sessionStorage.setItem("username", name);
    loadpage("../Animal-Expirement/html/phasergame3.html");
	
}
function puntuaciones(){
	loadpage("../Animal-Expirement/html/puntuacions.html");
}

function exit (){
	if (name != ""){
		alert("Leaving " + name + "'s game");
	}
	name = "";
	loadpage("../Animal-Expirement/index.html")
}

function options(){
	loadpage("../Animal-Expirement/html/option.html");
}

function load(){
	loadpage("../html/load.html");
}
