
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
    { titre : "batmanmovie", annee:2017, genre: "comedie"},
    { titre : "hostel", annee:2005, genre: "thriller"},
    { titre : "inception", annee:2010, genre: "scifi"},
    { titre : "intouchable", annee:2011, genre: "comedie"},
    { titre : "lepatientanglais", annee:1996, genre: "dramatique"},
    { titre : "lesdeuxtours", annee:2002, genre: "aventure"},
    { titre : "seven", annee:1995, genre: "thriller"},
    { titre : "shutterisland", annee:2010, genre: "thriller"},
    { titre : "starwarsempire", annee:1980, genre: "scifi"},
    { titre : "survivestyle5", annee:2004, genre: "comedie"},
    { titre : "swissarmyman", annee:2016, genre: "comedie"},
    { titre : "thefall", annee:2006, genre: "dramatique"},
    { titre : "whatwedointheshadows", annee:2014, genre: "comedie"},
    { titre : "zoolander", annee:2001, genre: "comedie"},
    { titre : "", annee:20, genre: ""},
    { titre : "", annee:20, genre: ""},
    { titre : "", annee:20, genre: ""},
    { titre : "", annee:20, genre: ""},
    { titre : "", annee:20, genre: ""},
    { titre : "", annee:20, genre: ""},
    { titre : "", annee:20, genre: ""},
    { titre : "", annee:20, genre: ""},
    { titre : "", annee:20, genre: ""},
    { titre : "", annee:20, genre: ""},
   ];
