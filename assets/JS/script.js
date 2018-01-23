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

// les variables
var moviesEcritureGenre = ""
var moviesEcritureGenreCacher = ""
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
    { titre : "Batman Movie", titreImg : "batmanmovie", annee:2017, genre: "comedie"},
    { titre : "hostel", titreImg : "hostel", annee:2005, genre: "thriller"},
    { titre : "inception", titreImg : "inception", annee:2010, genre: "scifi"},
    { titre : "intouchables", titreImg : "intouchables", annee:2011, genre: "comedie"},
    { titre : "le patient anglais", titreImg : "lepatientanglais", annee:1996, genre: "dramatique"},
    { titre : "les deux tours", titreImg : "lesdeuxtours", annee:2002, genre: "aventure"},
    { titre : "seven", titreImg : "seven", annee:1995, genre: "thriller"},
    { titre : "shutter island", titreImg : "shutterisland", annee:2010, genre: "thriller"},
    { titre : "star wars empire", titreImg : "starwarsempire", annee:1980, genre: "scifi"},
    { titre : "survive style 5", titreImg : "survivestyle5", annee:2004, genre: "comedie"},
    { titre : "swiss army man", titreImg : "swissarmyman", annee:2016, genre: "comedie"},
    { titre : "the fall",  titreImg : "thefall", annee:2006, genre: "dramatique"},
    { titre : "what we doint he shadows",  titreImg : "whatwedointheshadows", annee:2014, genre: "comedie"},
    { titre : "zoolander", titreImg : "zoolander", annee:2001, genre: "comedie"},
    // { titre : "", titreImg  : "", annee:20, genre: ""},
  	// { titre : "", titreImg  : "", annee:20, genre: ""},
    // { titre : "", titreImg  : "", annee:20, genre: ""},
    // { titre : "", titreImg  : "", annee:20, genre: ""},
   	// { titre : "", titreImg  : "", annee:20, genre: ""},
    // { titre : "", titreImg  : "", annee:20, genre: ""},
    // { titre : "", titreImg  : "", annee:20, genre: ""},
   	// { titre : "", titreImg  : "", annee:20, genre: ""},
    // { titre : "", titreImg  : "", annee:20, genre: ""},
    // { titre : "", titreImg  : "", annee:20, genre: ""},
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
 			moviesEcritureGenre += '<div class="movieAffiche col-md-2" value='+i+'><img src="assets/images/' + films[i].titreImg + '-' + films[i].annee+ '-' + films[i].genre + '.jpg" alt=""><div class ="movieTitre">'+films[i].titre+'</div><div class ="movieAnnée">'+films[i].annee+'</div></div>'
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
 moviesEcritureGenre = ""
 moviesEcritureGenreCacher = ""
 var filmsMax = 0
 //ecrire les nouveau film
 	for(i=0;i<films.length;i++){
 			if(i < 12){
 			moviesEcritureGenre += '<div class="movieAffiche col-md-2" value='+i+'><img src="assets/images/' + films[i].titreImg + '-' + films[i].annee+ '-' + films[i].genre + '.jpg" alt=""><div class ="movieTitre">'+films[i].titre+'</div><div class ="movieAnnée">'+films[i].annee+'</div></div>'
 			}
 			else {
 			moviesEcritureGenreCacher += '<div class="movieAffiche col-md-2"><img src="assets/images/' + films[i].titreImg + '-' + films[i].annee+ '-' + films[i].genre + '.jpg" alt=""><div class ="movieTitre">'+films[i].titre+'</div><div class ="movieAnnée">'+films[i].annee+'</div></div>'
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
	var ecrirePopup = '<div id="titrePop">'+films[valeur].titre+'</div><div id="anneePop">'+films[valeur].annee+'</div><div id="genrePop">'+films[valeur].genre+'</div>'
	$("#popupFilm").html(ecrirePopup)
	$("#popupFilm").css("display","block")
}
