function phaser_game(){
    
    name = prompt("User name");
	
	sessionStorage.setItem("username", name);
    loadpage("/index.html");
	
}
function puntuaciones(){
	loadpage("");
}

function exit (){
	if (name != ""){
		alert("Leaving " + name + "'s game");
	}
	name = "";
}

function options(){
	loadpage("/option.html");
}

function load(){
	loadpage("./html/load.html");
}
