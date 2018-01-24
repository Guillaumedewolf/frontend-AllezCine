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
    { titre : "hostel",                    titreImg : "hostel",               annee:2005, genre: "thriller",   video:"https://www.youtube.com/embed/cVBdQiUHhZI", resumer:""},
    { titre : "inception",                 titreImg : "inception",            annee:2010, genre: "scifi" ,     video:"https://www.youtube.com/embed/CPTIgILtna8", resumer:""},
    { titre : "intouchables",              titreImg : "intouchables",         annee:2011, genre: "comedie",    video:"https://www.youtube.com/embed/cXu2MhWYUuE", resumer:""},
    { titre : "le patient anglais",        titreImg : "lepatientanglais",     annee:1996, genre: "dramatique", video:"https://www.youtube.com/embed/FguRZAv_LS4", resumer:""},
    { titre : "les deux tours",            titreImg : "lesdeuxtours",         annee:2002, genre: "aventure",   video:"https://www.youtube.com/embed/c9blKqmyeV4", resumer:""},
    { titre : "seven",                     titreImg : "seven",                annee:1995, genre: "thriller",   video:"https://www.youtube.com/embed/znmZoVkCjpI", resumer:""},
    { titre : "shutter island",            titreImg : "shutterisland",        annee:2010, genre: "thriller",   video:"https://www.youtube.com/embed/inAFW2CluQ4", resumer:""},
    { titre : "star wars empire",          titreImg : "starwarsempire",       annee:1980, genre: "scifi",      video:"https://www.youtube.com/embed/Z7B0vfamFTE", resumer:""},
    { titre : "survive style 5",           titreImg : "survivestyle5",        annee:2004, genre: "comedie",    video:"https://www.youtube.com/embed/LEH7nDkiPEk", resumer:""},
    { titre : "swiss army man",            titreImg : "swissarmyman",         annee:2016, genre: "comedie",    video:"https://www.youtube.com/embed/yrK1f4TsQfM", resumer:"Hank, un homme désespéré errant dans la nature, découvre un mystérieux cadavre. Ils vont tous les deux embarquer dans un voyage épique afin de retrouver leur foyer. Lorsque Hank réalise que ce corps abandonné est la clé de sa survie, le suicidaire d'autrefois est forcé de convaincre un cadavre que la vie vaut la peine d'être vécu. "},
    { titre : "the fall",                  titreImg : "thefall",              annee:2006, genre: "dramatique", video:"https://www.youtube.com/embed/IwsYyRc9j4g", resumer:""},
    { titre : "what we doint he shadows",  titreImg : "whatwedointheshadows", annee:2014, genre: "comedie",    video:"https://www.youtube.com/embed/IAZEWtyhpes", resumer:""},
    { titre : "zoolander",                 titreImg : "zoolander",            annee:2001, genre: "comedie",    video:"https://www.youtube.com/embed/MaEeSJZYkpY", resumer:""},
    // { titre : "", titreImg  : "", annee:20, genre: "" , video:"https://www.youtube.com/embed/", resumer:""},
  	// { titre : "", titreImg  : "", annee:20, genre: "" , video:"https://www.youtube.com/embed/", resumer:""},
    // { titre : "", titreImg  : "", annee:20, genre: "" , video:"https://www.youtube.com/embed/", resumer:""},
    // { titre : "", titreImg  : "", annee:20, genre: "" , video:"https://www.youtube.com/embed/", resumer:""},
 	// { titre : "", titreImg  : "", annee:20, genre: "" , video:"https://www.youtube.com/embed/", resumer:""},
    // { titre : "", titreImg  : "", annee:20, genre: "" , video:"https://www.youtube.com/embed/", resumer:""},
    // { titre : "", titreImg  : "", annee:20, genre: "" , video:"https://www.youtube.com/embed/", resumer:""},
  	// { titre : "", titreImg  : "", annee:20, genre: "" , video:"https://www.youtube.com/embed/", resumer:""},
    // { titre : "", titreImg  : "", annee:20, genre: "" , video:"https://www.youtube.com/embed/", resumer:""},
    // { titre : "", titreImg  : "", annee:20, genre: "" , video:"https://www.youtube.com/embed/", resumer:""},
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
 			moviesEcritureGenre += '<div class="movieAffiche col-xs-4 col-sm-3 col-md-2" value='+i+' data-toggle="modal" data-target="#modalFilm"><img src="assets/images/' + films[i].titreImg + '-' + films[i].annee+ '-' + films[i].genre + '.jpg" alt=""><div class ="movieTitre">'+films[i].titre+'</div><div class ="movieAnnée">'+films[i].annee+'</div></div>'
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
 			moviesEcritureGenre += '<div class="movieAffiche col-xs-4 col-sm-3 col-md-2" value='+i+' data-toggle="modal" data-target="#modalFilm"><img src="assets/images/' + films[i].titreImg + '-' + films[i].annee+ '-' + films[i].genre + '.jpg" alt=""><div class ="movieTitre">'+films[i].titre+'</div><div class ="movieAnnée">'+films[i].annee+'</div></div>'
 			}
 			else {
 			moviesEcritureGenreCacher += '<div class="movieAffiche col-xs-4 col-sm-3 col-md-2" value='+i+' data-toggle="modal" data-target="#modalFilm"><img src="assets/images/' + films[i].titreImg + '-' + films[i].annee+ '-' + films[i].genre + '.jpg" alt=""><div class ="movieTitre">'+films[i].titre+'</div><div class ="movieAnnée">'+films[i].annee+'</div></div>'
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

if(valeur=="suivant" && films.length >= shopTabIndice+8){
 	shopTabIndice+=8}
 else if (valeur=="precedent" && shopTabIndice-8>=0 )
 	{shopTabIndice-=8}
var shopNombreFilm = 0
 //ecrire les nouveau film
 	for(i=shopTabIndice;shopNombreFilm<8;i++){
 			if(i>=films.length){break}
 			if(4 > shopNombreFilm){
 			shopEcritureHaut += '<div class="movieAfficheShop col-md-3" value='+i+'><img src="assets/images/' + films[i].titreImg + '-' + films[i].annee+ '-' + films[i].genre + '.jpg" alt=""><div class ="movieTitre">'+films[i].titre+'</div><div class ="movieAnnée">'+films[i].annee+'</div></div>'
 			shopNombreFilm++
 			}
 			else if(8 > shopNombreFilm){
 			shopEcritureBas += '<div class="movieAfficheShop col-md-3" value='+i+'><img src="assets/images/' + films[i].titreImg + '-' + films[i].annee+ '-' + films[i].genre + '.jpg" alt=""><div class ="movieTitre">'+films[i].titre+'</div><div class ="movieAnnée">'+films[i].annee+'</div></div>'
 			shopNombreFilm++
 			}

 	}

 	$("#shopMoviesHaut").html(shopEcritureHaut)
 	$("#shopMoviesBas").html(shopEcritureBas)

 }
  shopMovies()


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









