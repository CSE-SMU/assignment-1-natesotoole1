// JavaScript Document

$(document).ready(function() {
	$('button').click(function(){
		if($(this).hasClass("active")){
			document.getElementById("active").style.display = "none";
			document.getElementById("inactive").style.display = "block";
			$(this).toggleClass("active");
		}
		else{	
			document.getElementById("active").style.display = "block";
			document.getElementById("inactive").style.display = "none";
			$(this).toggleClass("active");
		}
		
	});
});