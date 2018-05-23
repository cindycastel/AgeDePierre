class Joueur{


	constructor(nom, couleur) {
	    this.nom = nom;
	    this.couleur = couleur;
	    this.estPremierJoueur = false ; 
	    this.tribu = 5 ;
	    this.nourriture = 12 ; 
	    this.bois = 0 ; 
	    this.brique = 0 ; 
	    this.pierre = 0 ; 
	    this.or = 0 ; 
	    this.score = 0  
	}

	showJoueur(){
		console.log("Joueur: "+ this.nom 
			+ " \n Couleur : " + this.couleur 
			+ "\n tribu : " + this.tribu
			+ "\n nourriture : " + this.nourriture
			+ "\n score : " + this.score
			+ "\n est Premier joueur : " + this.estPremierJoueur)
	}

	estPremier(yesNo){
		this.estPremierJoueur = yesNo
	}
}