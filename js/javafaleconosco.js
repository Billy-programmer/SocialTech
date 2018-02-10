

function emailenviado()
{
	if(document.getElementById("email").value == "")
	{
		document.getElementById("erroemail").style.opacity = "1";
	}else{
	document.getElementById("email").style.backgroundColor = 'yellow';
	document.getElementById("email").style.color = 'gray';
	document.getElementById("email").readOnly = true;
	document.getElementById("btn2").onclick= enviarmsg;
	document.getElementById("msg").placeholder = "";
	document.getElementById("erroemail").style.opacity = "0";
	document.getElementById("msg").focus();
	}
}


function erro()
{
		document.getElementById("msg").placeholder = "Insira um email!";
}

 var enviarmsg = function ()
{
	document.getElementById("msg").value = "";
	window.alert("Sua mensagem foi enviada com sucesso! Entraremos em contato em breve.");
	document.getElementById("msg").placeholder = "Mensagem enviada!";

}


function limite()
{	
		document.getElementById("limitemsg").style.opacity = "1";
}
















