
function phaser_game(){
	loadpage("./index.html");
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
	loadpage("./html/option.html");
}

function load(){
	loadpage("./html/load.html");
}
