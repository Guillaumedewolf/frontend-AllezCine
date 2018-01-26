// page menu scroll
$(document).ready(function(){
  // Initialize Tooltip
  $('[data-toggle="tooltip"]').tooltip();

  // Add smooth scrolling to all links in navbar + footer link
  $(".navbar a, footer a[href='#myPage']").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {

      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (900) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 900, function(){

        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
})

// navbar color change
    $(document).ready(function(){
      $(window).scroll(function() { // check if scroll event happened
        if ($(document).scrollTop() > 50) { // check if user scrolled more than 50 from top of the browser window
          $(".navbar-fixed-top").css("background-color", "black"); // if yes, then change the color of class "navbar-fixed-top" to white (#f8f8f8)
        } else {
          $(".navbar-fixed-top").css("background-color", "transparent"); // if not, change it back to transparent
        }
      });
    });

// les variables
var stopVideoYT
//afficher plus de film boutton

$( "#filmBoutton" ).click(function() {
  $( "#moviesCacher" ).toggle();
  if($("#moviesCacher").css("display") == "none"){
	$("#filmBoutton").html("PLUS DE FILM")
	}
	else{
	$("#filmBoutton").html("MOINS DE FILM")
	}
});

//affucher plus de serie boutton

$( "#serieBoutton" ).click(function() {
  $( "#seriesCacher" ).toggle();
  if($("#seriesCacher").css("display") == "none"){
	$("#serieBoutton").html("PLUS DE SERIES")
	}
	else{
	$("#serieBoutton").html("MOINS DE SERIES")
	}
});





// catégorie film


// tableau  des films

var films = [
    { titre : "Batman Movie",              titreImg : "batmanmovie",          annee:2017, genre: "comedie",    video:"https://www.youtube.com/embed/9mznUFqFy74", resumer:"Il en rêvait depuis La Grande Aventure Lego : Batman est enfin le héros de son propre film ! Mais la situation a bien changé à Gotham – et s'il veut sauver la ville des griffes du Joker, il lui faudra arrêter de jouer au justicier masqué et découvrir le travail d'équipe ! Peut-être pourra-t-il alors se décoincer un peu… "},
    { titre : "hostel",                    titreImg : "hostel",               annee:2005, genre: "thriller",   video:"https://www.youtube.com/embed/cVBdQiUHhZI", resumer:"Deux étudiants américains, Paxton et Josh, ont décidé de découvrir l'Europe avec un maximum d'aventures et de sensations fortes. Avec Oli, un Islandais qu'ils ont rencontré en chemin, ils se retrouvent dans une petite ville de Slovaquie dans ce qu'on leur a décrit comme le nirvana des vacances de débauche : une propriété très spéciale, pleine de filles aussi belles que faciles...Natalya et Svetlana sont effectivement très cools... un peu trop, même. Paxton et Josh vont vite se rendre compte qu'ils sont tombés dans un piège. Ce voyage-là va les conduire au bout de l'horreur... "},
    { titre : "inception",                 titreImg : "inception",            annee:2010, genre: "scifi" ,     video:"https://www.youtube.com/embed/CPTIgILtna8", resumer:"Dom Cobb est un voleur expérimenté – le meilleur qui soit dans l’art périlleux de l’extraction : sa spécialité consiste à s’approprier les secrets les plus précieux d’un individu, enfouis au plus profond de son subconscient, pendant qu’il rêve et que son esprit est particulièrement vulnérable. Très recherché pour ses talents dans l’univers trouble de l’espionnage industriel, Cobb est aussi devenu un fugitif traqué dans le monde entier qui a perdu tout ce qui lui est cher. Mais une ultime mission pourrait lui permettre de retrouver sa vie d’avant – à condition qu’il puisse accomplir l’impossible : l’inception. Au lieu de subtiliser un rêve, Cobb et son équipe doivent faire l’inverse : implanter une idée dans l’esprit d’un individu. S’ils y parviennent, il pourrait s’agir du crime parfait. Et pourtant, aussi méthodiques et doués soient-ils, rien n’aurait pu préparer Cobb et ses partenaires à un ennemi redoutable qui semble avoir systématiquement un coup d’avance sur eux. Un ennemi dont seul Cobb aurait pu soupçonner l’existence. "},
    { titre : "intouchables",              titreImg : "intouchables",         annee:2011, genre: "comedie",    video:"https://www.youtube.com/embed/cXu2MhWYUuE", resumer:"A la suite d’un accident de parapente, Philippe, riche aristocrate, engage comme aide à domicile Driss, un jeune de banlieue tout juste sorti de prison. Bref la personne la moins adaptée pour le job. Ensemble ils vont faire cohabiter Vivaldi et Earth Wind and Fire, le verbe et la vanne, les costumes et les bas de survêtement... Deux univers vont se télescoper, s’apprivoiser, pour donner naissance à une amitié aussi dingue, drôle et forte qu’inattendue, une relation unique qui fera des étincelles et qui les rendra... Intouchables. "},
    { titre : "le patient anglais",        titreImg : "lepatientanglais",     annee:1996, genre: "dramatique", video:"https://www.youtube.com/embed/FguRZAv_LS4", resumer:"En 1945, quatre personnes dechirées par la guerre se réfugient dans un monastère abandonné de Toscane pour se guérir de leurs maux. Peu à peu le passé va resurgir et la présence d'un homme mystérieux et méconnaissable, le patient anglais, va bouleverser le destin de ceux qui croisent son chemin. "},
    { titre : "les deux tours",            titreImg : "lesdeuxtours",         annee:2002, genre: "aventure",   video:"https://www.youtube.com/embed/c9blKqmyeV4", resumer:"Après la mort de Boromir et la disparition de Gandalf, la Communauté s'est scindée en trois. Perdus dans les collines d'Emyn Muil, Frodon et Sam découvrent qu'ils sont suivis par Gollum, une créature versatile corrompue par l'Anneau. Celui-ci promet de conduire les Hobbits jusqu'à la Porte Noire du Mordor. A travers la Terre du Milieu, Aragorn, Legolas et Gimli font route vers le Rohan, le royaume assiégé de Theoden. Cet ancien grand roi, manipulé par l'espion de Saroumane, le sinistre Langue de Serpent, est désormais tombé sous la coupe du malfaisant Magicien. Eowyn, la nièce du Roi, reconnaît en Aragorn un meneur d'hommes. Entretemps, les Hobbits Merry et Pippin, prisonniers des Uruk-hai, se sont échappés et ont découvert dans la mystérieuse Forêt de Fangorn un allié inattendu : Sylvebarbe, gardien des arbres, représentant d'un ancien peuple végétal dont Saroumane a décimé la forêt... "},
    { titre : "seven",                     titreImg : "seven",                annee:1995, genre: "thriller",   video:"https://www.youtube.com/embed/znmZoVkCjpI", resumer:"Pour conclure sa carrière, l'inspecteur Somerset, vieux flic blasé, tombe à sept jours de la retraite sur un criminel peu ordinaire. John Doe, c'est ainsi que se fait appeler l'assassin, a decidé de nettoyer la societé des maux qui la rongent en commettant sept meurtres basés sur les sept pechés capitaux: la gourmandise, l'avarice, la paresse, l'orgueil, la luxure, l'envie et la colère. "},
    { titre : "shutter island",            titreImg : "shutterisland",        annee:2010, genre: "thriller",   video:"https://www.youtube.com/embed/inAFW2CluQ4", resumer:"En 1954, le marshal Teddy Daniels et son coéquipier Chuck Aule sont envoyés enquêter sur l'île de Shutter Island, dans un hôpital psychiatrique où sont internés de dangereux criminels. L'une des patientes, Rachel Solando, a inexplicablement disparu. Comment la meurtrière a-t-elle pu sortir d'une cellule fermée de l'extérieur ? Le seul indice retrouvé dans la pièce est une feuille de papier sur laquelle on peut lire une suite de chiffres et de lettres sans signification apparente. Oeuvre cohérente d'une malade, ou cryptogramme ? "},
    { titre : "star wars empire",          titreImg : "starwarsempire",       annee:1980, genre: "scifi",      video:"https://www.youtube.com/embed/Z7B0vfamFTE", resumer:"Malgré la destruction de l'Etoile Noire, l'Empire maintient son emprise sur la galaxie, et poursuit sans relâche sa lutte contre l'Alliance rebelle. Basés sur la planète glacée de Hoth, les rebelles essuient un assaut des troupes impériales. Parvenus à s'échapper, la princesse Leia, Han Solo, Chewbacca et C-3P0 se dirigent vers Bespin, la cité des nuages gouvernée par Lando Calrissian, ancien compagnon de Han. Suivant les instructions d'Obi-Wan Kenobi, Luke Skywalker se rend quant à lui vers le système de Dagobah, planète marécageuse où il doit recevoir l'enseignement du dernier maître Jedi, Yoda. Apprenant l'arrestation de ses compagnons par les stormtroopers de Dark Vador après la trahison de Lando, Luke décide d'interrompre son entraînement pour porter secours à ses amis et affronter le sombre seigneur Sith... "},
    { titre : "survive style 5",           titreImg : "survivestyle5",        annee:2004, genre: "comedie",    video:"https://www.youtube.com/embed/LEH7nDkiPEk", resumer:"Un mari et sa femme mourante, un hypnotiseur à succès, une publicitaire, un homme convaincu d'être un oiseau, un gang de trois voleurs et un tueur à gages. Les vies de ces différents personnages, qui a priori n'ont pas grand chose en commun, vont se retrouver étroitement liées, s'entremêler et s'acheminer inexorablement vers une fin des plus surprenantes. "},
    { titre : "swiss army man",            titreImg : "swissarmyman",         annee:2016, genre: "comedie",    video:"https://www.youtube.com/embed/yrK1f4TsQfM", resumer:"Hank, un homme désespéré errant dans la nature, découvre un mystérieux cadavre. Ils vont tous les deux embarquer dans un voyage épique afin de retrouver leur foyer. Lorsque Hank réalise que ce corps abandonné est la clé de sa survie, le suicidaire d'autrefois est forcé de convaincre un cadavre que la vie vaut la peine d'être vécu. "},
    { titre : "the fall",                  titreImg : "thefall",              annee:2006, genre: "dramatique", video:"https://www.youtube.com/embed/IwsYyRc9j4g", resumer:"Los Angeles, années 1920. Alexandria, cinq ans, est hospitalisée à la suite d'une chute. Elle se lie d'amitié avec Roy, cascadeur à Hollywood, lui aussi victime d'un accident. Le jeune homme se lance dans le récit d'une histoire épique avec le gouverneur Odieux et les 5 fantastiques déterminés à le combattre. Très vite, la frontière entre la réalité et ce monde éblouissant de magie et de mythes commence à disparaître quand la petite Alexandra réalise qu'il existe un véritable enjeu... "},
    { titre : "what we doint he shadows",  titreImg : "whatwedointheshadows", annee:2014, genre: "comedie",    video:"https://www.youtube.com/embed/IAZEWtyhpes", resumer:"« Version Français Originale écrite et dirigée par Nicolas Charlet & Bruno Lavaine » Comment fait-on quand on est vampires depuis des siècles et qu’on doit discrètement vivre en coloc en 2015 dans la banlieue de Limoges ? C’est ce que nous propose de découvrir une équipe de documentaire, en partageant l’intimité d’une bande de potes suceurs de sang ! Geoffroy, Miguel, Aymeric et Bernard nous ouvrent les portes de leur cœur et celle de leur quotidien un tout petit peu complexe. Comment organiser les tours de vaisselles sur 5 siècles ? Comment rentrer en boîte de nuit en redingote et chemise à jabot ? La vie éternelle, est-ce vraiment si cool ? Doit-on forcément traiter son esclave comme un esclave ? Un humain peut-il aussi être un ami et pas un diner ? Comment éteindre un pote vampire qui a pris feu sans extincteur ? Comment dévorer une fille sans lui faire passer une trop mauvaise soirée quand même ? Comment se retenir de casser la figure à JC, apprenti vampire super sympa mais super pas discret ?Autant de questions auxquelles ils n’ont pas forcément les bonnes réponses !"},
    { titre : "zoolander",                 titreImg : "zoolander",            annee:2001, genre: "comedie",    video:"https://www.youtube.com/embed/MaEeSJZYkpY", resumer:"Derek Zoolander, un célèbre mannequin, est à l'apogée de sa carrière. Couronné trois fois de suite Top model de l'année, il est sur le point de recevoir son quatrième trophée lorsque ce titre lui est ravi par un jeune et ambitieux challenger : Hansel. Effondrée, l'idole des podiums décide d'abandonner l'univers futile de la mode pour se ressourcer au sein de sa famille en Pennsylvanie. C'est alors que Maury Ballstein, son agent, et Jacobim Mugatu, un styliste déjanté, proposent à Zoolander de devenir la star de la nouvelle ligne de vêtements Derelicte. Zoolander accepte, mais il est loin de s'imaginer que le diabolique Mugatu, secondé de la troublante Katinka, s'apprête à lui effectuer un lavage de cerveau. Ainsi lobotomisé, Derek pourrait exécuter plus facilement ses ordres, à savoir assassiner le président de la Malaisie. "},
    { titre : "Les Tuches 3", 			   titreImg : "lestuches3", 		  annee:2018, genre: "comedie" ,   video:"https://www.youtube.com/embed/4839KJuXfGc", resumer:"Jeff Tuche, se réjouit de l’arrivée du TGV dans son cher village. Malheureusement, le train à grande vitesse ne fait que passer, sans s’arrêter à Bouzolles. Déçu, il tente de joindre le président de la République pour que son village ne reste pas isolé du reste du territoire. Sans réponse de l’Élysée, Jeff ne voit plus qu’une seule solution pour se faire entendre : se présenter à l’élection présidentielle... Profitant de circonstances politiques imprévisibles, Jeff Tuche et toute sa famille vont s’installer à l’Élysée pour une mission à haut risque : gouverner la France. "},
  	{ titre : "La Ch’tite famille", 	   titreImg : "lachtitefamille", 	  annee:2018, genre: "comedie" ,   video:"https://www.youtube.com/embed/q84jghyDEds", resumer:"Valentin D. et Constance Brandt, un couple d’architectes designers en vogue préparent le vernissage de leur rétrospective au Palais de Tokyo. Mais ce que personne ne sait, c’est que pour s’intégrer au monde du design et du luxe parisien, Valentin a menti sur ses origines prolétaires et ch'tis. "},
    { titre : "Prisoners", 				   titreImg : "prisoners", 			  annee:2013, genre: "thriller" ,  video:"https://www.youtube.com/embed/O_yB9xS36Hw", resumer:"Dans la banlieue de Boston, deux fillettes de 6 ans, Anna et Joy, ont disparu. Le détective Loki privilégie la thèse du kidnapping suite au témoignage de Keller, le père d’Anna. Le suspect numéro 1 est rapidement arrêté mais est relâché quelques jours plus tard faute de preuve, entrainant la fureur de Keller. Aveuglé par sa douleur, le père dévasté se lance alors dans une course contre la montre pour retrouver les enfants disparus. De son côté, Loki essaie de trouver des indices pour arrêter le coupable avant que Keller ne commette l’irréparable… Les jours passent et les chances de retrouver les fillettes s’amenuisent…"},
    { titre : "Gone Girl", 			   	   titreImg : "gonegirl", 			  annee:2014, genre: "thriller" ,  video:"https://www.youtube.com/embed/6AxCPzcP4wQ", resumer:"À l’occasion de son cinquième anniversaire de mariage, Nick Dunne signale la disparition de sa femme, Amy. Sous la pression de la police et l’affolement des médias, l’image du couple modèle commence à s’effriter. Très vite, les mensonges de Nick et son étrange comportement amènent tout le monde à se poser la même question : a-t-il tué sa femme ? "},
 	{ titre : "Lion", 					   titreImg : "lion", 				  annee:2017, genre: "dramatique", video:"https://www.youtube.com/embed/skz6h3UVQ0U", resumer:"Une incroyable histoire vraie :  à 5 ans, Saroo se retrouve seul dans un train traversant l’Inde qui l’emmène malgré lui à des milliers de kilomètres de sa famille. Perdu, le petit garçon doit apprendre à survivre seul dans l’immense ville de Calcutta."},
    { titre : "Interstellar", 			   titreImg : "interstellar", 		  annee:2014, genre: "dramatique", video:"https://www.youtube.com/embed/0rDczIsHJn4", resumer:"Le film raconte les aventures d’un groupe d’explorateurs qui utilisent une faille récemment découverte dans l’espace-temps afin de repousser les limites humaines et partir à la conquête des distances astronomiques dans un voyage interstellaire."},
    { titre : "Adèle Blanc-Sec", 		   titreImg : "adeleblanc-sec",       annee:2010, genre: "aventure" ,  video:"https://www.youtube.com/embed/d0389lPZdGU", resumer:"En cette année 1912, Adèle Blanc-Sec, jeune journaliste intrépide, est prête à tout pour arriver à ses fins, y compris débarquer en Égypte et se retrouver aux prises avec des momies en tout genre. Au même moment à Paris, c'est la panique... "},
  	{ titre : "Ferdinand",                 titreImg : "ferdinand", 			  annee:2017, genre: "aventure" ,  video:"https://www.youtube.com/embed/F08GrWxQkBw", resumer:"Ferdinand est un taureau au grand cœur. Victime de son imposante apparence, il se retrouve malencontreusement capturé et arraché à son village d’origine. Bien déterminé à retrouver sa famille et ses racines, il se lance alors dans une incroyable aventure à travers l’Espagne, accompagné de la plus déjantée des équipes ! "},
    { titre : "Geostorm", 				   titreImg : "geostorm",			  annee:2017, genre: "scifi" , 	   video:"https://www.youtube.com/embed/QWaOHVtjUoc", resumer:"Grâce à une coopération sans précédent entre États, un réseau de satellites contrôle désormais le climat et protège les populations. Jusqu'à ce que le dispositif se dérègle… S'agit-il d'un complot ou d'une faille dans le système ? S'engage alors une véritable course contre la montre… "},
    { titre : "Seven Sisters", 			   titreImg : "sevensisters", 	   	  annee:2017, genre: "scifi" , 	   video:"https://www.youtube.com/embed/qkhp9dcR2gY", resumer:"2073. La Terre est surpeuplée. Le gouvernement décide d’instaurer une politique d’enfant unique, appliquée de main de fer par le Bureau d’Allocation des Naissances, sous l’égide de Nicolette Cayman.  "},
   ];


//afficher les film comedie

 $("#comedie").click(function(){
 	genreMovies("comedie")
 })
//afficher les film thriller
 $("#thriller").click(function(){
 	genreMovies("thriller")
 })
 //afficher les film sciences fiction
 $("#scifi").click(function(){
 	genreMovies("scifi")
 })
 //afficher les film dramatique
 $("#dramatique").click(function(){
 	genreMovies("dramatique")
 })

 //fonction afficher les film du genre (-de 12 films)
 function genreMovies(genre){
 //supprimer les anciens film
 $("#moviesJS").html("")
 moviesEcritureGenre = ""
 //ecrire les nouveau film
 	for(i=0;i<films.length;i++){
 		if (films[i].genre == genre){
 			moviesEcritureGenre += '<div class="movieAffiche col-xs-6 col-sm-3 col-md-2" value='+i+' data-toggle="modal" data-target="#modalFilm"><img src="assets/images/' + films[i].titreImg + '-' + films[i].annee+ '-' + films[i].genre + '.jpg" alt=""><div class ="movieTitre">'+films[i].titre+'</div><div class ="movieAnnée">'+films[i].annee+'</div></div>'
 		}
 	}
 	moviesEcritureGenre = '<div class="tabMovies">' + moviesEcritureGenre + '</div>'
 	$("#moviesJS").html(moviesEcritureGenre)

 }






//afficher tous les films (+ de 12 film)
$("#all").click(function(){
	allMovies()
})

function allMovies(){
 //supprimer les anciens film
 $("#moviesJS").html("")
 var moviesEcritureGenre = ""
 var moviesEcritureGenreCacher = ""
 var filmsMax = 0
 //ecrire les nouveau film
 	for(i=0;i<films.length;i++){
 			if(i < 12){
 			moviesEcritureGenre += '<div class="movieAffiche col-xs-6 col-sm-3 col-md-2" value='+i+' data-toggle="modal" data-target="#modalFilm"><img src="assets/images/' + films[i].titreImg + '-' + films[i].annee+ '-' + films[i].genre + '.jpg" alt=""><div class ="movieTitre">'+films[i].titre+'</div><div class ="movieAnnée">'+films[i].annee+'</div></div>'
 			}
 			else {
 			moviesEcritureGenreCacher += '<div class="movieAffiche col-xs-6 col-sm-3 col-md-2" value='+i+' data-toggle="modal" data-target="#modalFilm"><img src="assets/images/' + films[i].titreImg + '-' + films[i].annee+ '-' + films[i].genre + '.jpg" alt=""><div class ="movieTitre">'+films[i].titre+'</div><div class ="movieAnnée">'+films[i].annee+'</div></div>'
 			}

 	}
 	moviesEcritureGenre = '<div class="tabMovies">' + moviesEcritureGenre + '</div><div class="tabMovies" id="moviesCacher" >' + moviesEcritureGenreCacher + '</div>'
 	$("#moviesJS").html(moviesEcritureGenre)

 }




allMovies()




 // popup film


 $(".movieAffiche").click(function(){
	popup($(this).attr('value'))
})



//fonction popup

function popup(valeur){
	var ecrirePopup = films[valeur].titre
	//ecriture titre
	$("#titreFilm").html(ecrirePopup)
	//ecriture info
	ecrirePopup = '<iframe class="embed-responsive-item"  src="'+films[valeur].video+'?rel=0&autoplay=1" frameborder="0" allowfullscreen></iframe>'
	$("#bandeAnnonceFilm").html(ecrirePopup)
	ecrirePopup = '<img src="assets/images/' + films[valeur].titreImg + '-' + films[valeur].annee+ '-' + films[valeur].genre + '.jpg" alt="">'
	$("#imgFilm").html(ecrirePopup)
	ecrirePopup = films[valeur].annee
	$("#anneeFilm").html(ecrirePopup)
	ecrirePopup = films[valeur].genre
	$("#genreFilm").html(ecrirePopup)
	ecrirePopup = films[valeur].resumer
	$("#resumerFilm").html(ecrirePopup)




	stopVideoYT = setInterval(function(){ stopVideo() }, 200);



}

function stopVideo(){
	if($("#modalFilm").css("display")=="none"){
		$("#bandeAnnonceFilm").html("")
		clearInterval(stopVideoYT)

	}}






var shopTabIndice = 0
// shop movie
$("#shopSuivant").click(function(){
	shopMovies("suivant")
	shopMoviesVideo(shopTabIndice)
})

$("#shopPrecedent").click(function(){
	shopMovies("precedent")
	shopMoviesVideo(shopTabIndice)
})

function shopMovies(valeur){
 //supprimer les anciens film
 $("shopMoviesHaut").html("")
 $("shopMoviesBas").html("")
var shopEcritureHaut = ""
var shopEcritureBas = ""

if(valeur=="suivant" && films.length > shopTabIndice+8){
 	shopTabIndice+=8}
 else if (valeur=="precedent" && shopTabIndice-8>=0 )
 	{shopTabIndice-=8}
var shopNombreFilm = 0
 //ecrire les nouveau film
 	for(i=shopTabIndice;shopNombreFilm<8;i++){
 			if(i>=films.length){break}
 			if(4 > shopNombreFilm){
 			shopEcritureHaut += '<div class="movieAfficheShop col-xs-6 col-sm-3 col-md-3" value='+i+'><img src="assets/images/' + films[i].titreImg + '-' + films[i].annee+ '-' + films[i].genre + '.jpg" alt=""><div class ="movieTitre">'+films[i].titre+'</div><div class ="movieAnnée">'+films[i].annee+'</div></div>'
 			shopNombreFilm++
 			}
 			else if(8 > shopNombreFilm){
 			shopEcritureBas += '<div class="movieAfficheShop col-xs-6 col-sm-3 col-md-3" value='+i+'><img src="assets/images/' + films[i].titreImg + '-' + films[i].annee+ '-' + films[i].genre + '.jpg" alt=""><div class ="movieTitre">'+films[i].titre+'</div><div class ="movieAnnée">'+films[i].annee+'</div></div>'
 			shopNombreFilm++
 			}

 	}

 	$("#shopMoviesHaut").html(shopEcritureHaut)
 	$("#shopMoviesBas").html(shopEcritureBas)

 }
  shopMovies()

// Video Shop
 $(".movieAfficheShop").click(function(){
	shopMoviesVideo($(this).attr('value'))

})
 function shopMoviesVideo(valeur){
 	$("#bandeAnnonceShop").html("")
 	var ecrireShop = '<iframe class="embed-responsive-item" src="'+films[valeur].video+'" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>'
 	$("#bandeAnnonceShop").html(ecrireShop)
 	ecrireShop = films[valeur].titre
	$("#titreShop").html(ecrireShop)
 	ecrireShop = films[valeur].annee
	$("#anneeShop").html(ecrireShop)
	ecrireShop = films[valeur].genre
	$("#genreShop").html(ecrireShop)
	ecrireShop = films[valeur].resumer
	$("#resumerShop").html(ecrireShop)
 }


shopMoviesVideo(0)


// random affiche footer


function randomImg (){

		var tabImg = ["random"]

		for(i=0;tabImg.length<7;i++){
			nombreRandom = Math.round(Math.random()*films.length -1)
			if(nombreRandom === -1){nombreRandom=0}
			var verification = 0
			for(j=0;j<tabImg.length;j++){
				if(nombreRandom == tabImg[j]){verification++}
				
			}

				if(verification == 0){tabImg.push(nombreRandom)}
		}
		console.log(tabImg)
		var ecritureRandom = ""
		for(i = 1; i < 7; i++) {
			ecritureRandom+= '<img class="col-md-4" src="assets/images/' + films[tabImg[i]].titreImg + '-' + films[tabImg[i]].annee+ '-' + films[tabImg[i]].genre + '.jpg" alt="">'

		}

		$("#afficheFilmRandom").html(ecritureRandom)
}


randomImg()
