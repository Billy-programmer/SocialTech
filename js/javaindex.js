

//like e deslike
function like1()
{
	document.getElementById("like1").src = "imagens/gostei.png"
	document.getElementById("like1").style.opacity = 1;
	document.getElementById("deslike1").src = "imagens/deslike.png"
	document.getElementById("deslike1").style.opacity = 0.7;	
} 

function deslike1()
{
	document.getElementById("deslike1").src = "imagens/desgostei.png"
	document.getElementById("deslike1").style.opacity = 1;
	document.getElementById("like1").src = "imagens/like.png"
	document.getElementById("like1").style.opacity = 0.7;	
} 

