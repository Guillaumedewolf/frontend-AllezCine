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
