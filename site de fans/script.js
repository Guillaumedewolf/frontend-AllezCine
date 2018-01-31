// formulaire modal

$("#bouttonFormulaire").click(function(){
	var firstName = $("#firstName").val()
	var lastName = $("#lastName").val()
	var email = $("#email").val()
	var subject = $("#subject").val()
	var comments = $("#comments").val()


	$("#nameFormulaire").html(firstName +" "+ lastName)
	$("#emailFormulaire").html(email)
	$("#sujetFormulaire").html(subject)
	$("#contenuFormulaire").html(comments)


	$("#modalformulaire").modal("show")




}
	)


setTimeout(
  function()
  {
   $("#body").click(function rotate(){
	$("#pistol007").css("transform", "translate(0px)")
	$("#pistol007").removeClass("tir")
	var interval = setInterval(frame, 5)
	var rotation = 0
	function frame () {
	if(rotation== -45){
		 clearInterval(interval)
		 var interval2 = setInterval(frame2, 5)
		 var rotation2 =-45
		 function frame2(){
		 	if(rotation== 0){
		 		clearInterval(interval2)
		 	}
		 	else{
		 		rotation++
				$("#pistol007").css("transform", "rotate("+rotation+"deg)")
		 	}

		 }

	}
	else{
		rotation--
		$("#pistol007").css("transform", "rotate("+rotation+"deg)")
	}
}

})
  }, 13000);
 //debloquage scroll;
setTimeout(
  function()
  {$("body").css("overflow", "auto")},11920)
// shop goodies


var fraisPort = 10
var prixTotal = 0
var goodies=[
{nom:"film1",prix:10},
{nom:"film2",prix:11},
{nom:"film3",prix:12},
{nom:"film4",prix:13},
{nom:"film5",prix:14},
{nom:"film6",prix:15}
]

$(".article").click(function(){
	var info = $(this).attr('value')
	ajoutPanier(info)

})


function ajoutPanier (info){

	prixTotal+= goodies[info].prix

	if(prixTotal <= 15){
		fraisPort = 10
	}
	else if (prixTotal > 15 && prixTotal < 30){
		fraisPort = 7

	}

	else{
		fraisPort = 0
	}

	var prixAfficher = prixTotal + fraisPort
	$("#prixTotal").html("Prix Total de vos achats "+prixAfficher + "€")
	$("#fraisPort").html("frais de port "+fraisPort + "€")
}


