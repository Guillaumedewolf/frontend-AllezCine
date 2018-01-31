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
