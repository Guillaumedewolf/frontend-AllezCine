
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
    { titre : "", annee:20, genre: ""},
    { titre : "", annee:20, genre: ""},
    { titre : "", annee:20, genre: ""},
    { titre : "", annee:20, genre: ""},
   ];
