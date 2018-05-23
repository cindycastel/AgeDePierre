var i = 0
let tableauJoueur = []

function nouveauInput(){
	var tableauCouleur = ['Vert', 'Jaune', 'Rouge','Bleu']
	
	i = i+1

	if (i < 5) {
		var contenu = " <label> Joueur " + i + " :</label>";
	   	contenu += " <input class='player' type='text' name='tbNom"+i+"' />";
	    contenu = contenu + "<select  class='couleur' id='selectColor"+i+"' onchange='choixSelectCouleur("+i+")'>"
		for(var j= 0; j < tableauCouleur.length; j++){
	  		contenu = contenu + "  <option value='"+tableauCouleur[j]+"'>"+ tableauCouleur[j] +"</option> "

	   	}

	    contenu = contenu + "</select> <br/> "

	    addElement('nouveau_input', 'tbName' , 'name-' + i, contenu);
	    //document.getElementById('nouveau_input').innerHTML = contenu  ;
	}

	if (i == 4 ){
		 document.getElementById("add").style.display = 'none';
	}

	
}


window.onload = function() { 
	nouveauInput()
	document.getElementsByName('tbNom1')[0].value = "Cindy"
	nouveauInput()
  	document.getElementsByName('tbNom2')[0].value = "Elise"
};


 function addElement(parentId, elementTag, elementId, html) {
        // Adds an element to the document
        var p = document.getElementById(parentId);
        var newElement = document.createElement(elementTag);
        newElement.setAttribute('id', elementId);
        newElement.innerHTML = html;
        p.appendChild(newElement);
    }


 function choixSelectCouleur(i){
	//console.log(i)
	var selectElmt = document.getElementById("selectColor"+i);
	var valeurSelectionnee = selectElmt.options[selectElmt.selectedIndex].value;
	var textSelectionne = selectElmt.options[selectElmt.selectedIndex].text;

	
}

function goPlay(){

 	let nom = 	document.getElementsByClassName('player') ; 
 	let couleur = 	document.getElementsByClassName('couleur') ; 
 	for(i=0 ; i< nom.length ; i++){
 		var nomSaisie = nom[i].value ;
 		//console.log(nomSaisie + "/" + couleur[i].value);
 		let j = new Joueur(nomSaisie , couleur[i].value);
 		tableauJoueur.push(j) ; 
 		
 	} ; 
	

tableauJoueur[0].estPremier(true) ; 
	for(i=0 ; i< tableauJoueur.length ; i++){
 		
 		console.log( tableauJoueur[i]);
 		tableauJoueur[i].showJoueur() ; 
 	} ; 


let myGame = new Game(tableauJoueur) ;
myGame.renderBoard() ;
		
		
}








