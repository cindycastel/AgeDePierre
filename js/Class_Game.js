class Game{

	constructor(players){
		this.players = players ;
		this.nbTurn = 1 ; 

	}

	gameToString(){
		let ret = "Joueur :\n" ; 
		for(let i=0; i< this.players.length; i++){
			ret += this.players[i].showJoueur() ; 
		}
	}


	getRessources(){
		let contenu ;
		let table ;
		let total = "" ;   
		for( let a = 0 ; a < this.players.length ;a++){
		contenu = " <h2> Ressources de " + this.players[a].nom+ " ( " + this.players[a].couleur + " )</h2>";
		table  = " <table> <tr> <th> Ressources </th> <th> Dispo </th> </td> "
		table += "<tr> <td>  Tribu </td> <td> " + this.players[a].tribu+ "</td> </tr> "
		table += "<tr> <td>  Nourriture </td> <td> " + this.players[a].nourriture+ "</td> </tr> "
		table += "<tr> <td>  Bois </td> <td> " + this.players[a].bois+ "</td> </tr> "
		table += "<tr> <td>  Or </td> <td> " + this.players[a].or+ "</td> </tr> "
		table += "<tr> <td>  Pierre </td> <td> " + this.players[a].pierre+ "</td> </tr> "
		table += "<tr> <td>  Brique </td> <td> " + this.players[a].brique+ "</td> </tr> </table>"
		total = contenu + table ; 
		$('body').append(total) ;
	}
	  
	}

	renderBoard(){
		console.log(this.players) ;
		var p = document.createElement("p");
		p = this.getRessources() ; 
		
		$('body').html(" <h1> Ceci est le plateau </h1> "  ); 

		$('body').append("<h3> Le plateau commun </h3> ")
		this.createHutte()	; 
		this.createZoneWood() ; 
		this.createZoneGold() ; 
		this.createZoneFood() ; 
		this.createZoneBrick() ; 
		this.createZoneStone() ; 
		this.createZoneTools() ; 
		this.createZoneProperty(); 

		$('body').append("<h3> L'inventaire </h3> ")
		let lesRessources = this.getRessources() ; 

		$('.btn').click({player: 'rouge'}, this.changeColor) ; 
	}

	createHutte(){
		let tableau
		tableau =" <table> <tr> <th> La hutte de l'amour </th> </tr> "
		tableau += "<tr> <td>  <input  class='btn' type='button' value=' ' id='Emplacement1' /> </td> "
		tableau += "<td>  <input class='btn' type='button' value=' ' id='Emplacement2' /> </td> </tr>"
		tableau += "</table>"
		$('body').append( tableau);
	}

	createZoneWood(){
		let tableau
		tableau =" <table> <tr> <th> Bois </th> </tr> "
		tableau += "<tr> <td>  <input class='btn' type='button' value=' ' id='Emplacement1'/> </td> "
		tableau += "<td>  <input class='btn' type='button' value=' ' id='Emplacement2'/> </td> "
		tableau += "<td>  <input  class='btn' type='button' value=' ' id='Emplacement3'/> </td> </tr>"
		tableau += "<tr> <td>  <input class='btn' type='button' value=' ' id='Emplacement4'/> </td> "
		tableau += "<td>  <input class='btn' type='button' value=' ' id='Emplacement5'/> </td> "
		tableau += "<td>  <input  class='btn'type='button' value=' ' id='Emplacement6'/> </td> </tr>"
		tableau += "<tr> <td>  <input   class='btn' type='button' value=' ' id='Emplacement7'/> </td> </tr>"
		tableau += "</table>"
		$('body').append( tableau)


	}

	createZoneGold(){
		let tableau
		tableau =" <table> <tr> <th> Or </th> </tr> "
		tableau += "<tr> <td>  <input class='btn' type='button' value=' ' id='Emplacement1'/> </td> "
		tableau += "<td>  <input class='btn' type='button' value=' ' id='Emplacement2'/> </td> "
		tableau += "<td>  <input class='btn' type='button' value=' ' id='Emplacement3'/> </td> </tr>"
		tableau += "<tr> <td>  <input class='btn' type='button' value=' ' id='Emplacement4'/> </td> "
		tableau += "<td>  <input class='btn' type='button' value=' ' id='Emplacement5'/> </td> "
		tableau += "<td>  <input class='btn' type='button' value=' ' id='Emplacement6'/> </td> </tr>"
		tableau += "<tr> <td>  <input class='btn' type='button' value=' ' id='Emplacement7'/> </td> </tr>"
		tableau += "</table>"
		$('body').append( tableau)

	}

	createZoneBrick(){
		let tableau
		tableau =" <table> <tr> <th> Brique </th> </tr> "
		tableau += "<tr> <td>  <input class='btn' type='button' value=' ' id='Emplacement1'/> </td> "
		tableau += "<td>  <input class='btn' type='button' value=' ' id='Emplacement2'/> </td> "
		tableau += "<td>  <input class='btn' type='button' value=' ' id='Emplacement3'/> </td> </tr>"
		tableau += "<tr> <td>  <input class='btn' type='button' value=' ' id='Emplacement4'/> </td> "
		tableau += "<td>  <input class='btn' type='button' value=' ' id='Emplacement5'/> </td> "
		tableau += "<td>  <input class='btn' type='button' value=' ' id='Emplacement6'/> </td> </tr>"
		tableau += "<tr> <td>  <input class='btn' type='button' value=' ' id='Emplacement7'/> </td> </tr>"
		tableau += "</table>"
		$('body').append( tableau)

	}

	createZoneStone(){
		let tableau
		tableau =" <table> <tr> <th> Pierre </th> </tr> "
		tableau += "<tr> <td>  <input type='button' value=' ' id='Emplacement1'/> </td> "
		tableau += "<td>  <input class='btn' type='button' value=' ' id='Emplacement2'/> </td> "
		tableau += "<td>  <input class='btn' type='button' value=' ' id='Emplacement3'/> </td> </tr>"
		tableau += "<tr> <td>  <input class='btn' type='button' value=' ' id='Emplacement4'/> </td> "
		tableau += "<td>  <input class='btn' type='button' value=' ' id='Emplacement5'/> </td> "
		tableau += "<td>  <input class='btn' type='button' value=' ' id='Emplacement6'/> </td> </tr>"
		tableau += "<tr> <td>  <input class='btn' type='button' value=' ' id='Emplacement7'/> </td> </tr>"
		tableau += "</table>"
		$('body').append( tableau)

	}

	createZoneFood(){
		let tableau
		tableau =" <table> <tr> <th> Ferme  </th> </tr> "
		tableau += "<tr> <td>  <input type='button' value=' ' id='Emplacement1'/> </td> "
		tableau += "<td>  <input class='btn' type='button' value=' ' id='Emplacement2'/> </td> "
		tableau += "<td>  <input class='btn' type='button' value=' ' id='Emplacement3'/> </td> </tr>"
		tableau += "<tr> <td>  <input class='btn' type='button' value=' ' id='Emplacement4'/> </td> "
		tableau += "<td>  <input class='btn' type='button' value=' ' id='Emplacement5'/> </td> "
		tableau += "<td>  <input class='btn' type='button' value=' ' id='Emplacement6'/> </td> </tr>"
		tableau += "<tr> <td>  <input class='btn' type='button' value=' ' id='Emplacement7'/> </td> </tr>"
		tableau += "</table>"
		$('body').append( tableau)

	}

	createZoneTools(){
		let tableau
		tableau =" <table> <tr> <th> Outil  </th> </tr> "
		tableau += "<tr> <td>  <input class='btn' type='button' value=' ' id='Emplacement1'/> </td></tr> "	
		tableau += "</table>"
		$('body').append( tableau)
	} 


	createZoneProperty(){
		let tableau
		tableau =" <table> <tr> <th> Batiments  </th> </tr> "
		tableau += "<tr> <td>  <input class='btn' type='button' value=' ' id='Emplacement1'/> </td></tr> "	
		tableau += "</table>"
		$('body').append( tableau)
	} 


	 changeColor(event){
		$('.btn').click(function(){
  		var id = $(this).attr("id");
  		let couleur = event.player ; 
  		$(this).css('background-color', couleur);
  			alert(id);
});
	}






	
}