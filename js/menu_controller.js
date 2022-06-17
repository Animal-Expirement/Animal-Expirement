function phaser_game(){
    
    /*name = prompt("User name");
	
	sessionStorage.setItem("username", name);*/
    loadpage("../html/phaser.html");
	
}
function puntuaciones(){
	loadpage("");
}

function exit (){
	if (name != ""){
		alert("Leaving " + name + "'s game");
	}
	name = "";
	loadpage("./Index_Menu.html")
}

function options(){
	loadpage("./html/option.html");
}

function load(){
	loadpage("./html/load.html");
}
