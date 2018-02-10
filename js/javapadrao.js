function login()
{
	if(document.getElementById("email").value == "admin" && document.getElementById("senha").value == "123")
	{
		document.getElementById("btnentrar").onclick = function () 
		{
			document.getElementById("janelalogin").style.left = "-9999px";
			document.getElementById("janelalogon").style.left = "635px";
			document.getElementById("email").value = "";
			document.getElementById("senha").value = "";
			document.getElementById("anuncio1").style.left = "-9999px";
			document.getElementById("anuncio2").style.left = "-9999px";	
		}
	} else {  
				window.alert ( "Dados Incorretos!" );
			}
}

function menu()
{
	var abrirmenu = function ()
	{
		document.getElementById("menulogon").style.left = "1040px";
		document.getElementById("janelalogon").onclick = fecharmenu;
	}
	var fecharmenu = function ()
	{
		document.getElementById("menulogon").style.left = "-9999px";
		document.getElementById("janelalogon").onclick = abrirmenu;
		
	}
	
	document.getElementById("menulogon").style.left = "1040px";
	document.getElementById("janelalogon").onclick = fecharmenu;
	

}

	///////----- opções do menu -----\\\\\\\\

	function opsair()
	{
		document.getElementById("menulogon").style.left = "-9999px";
		document.getElementById("janelalogin").style.left = "640px";
		document.getElementById("janelalogon").style.left = "-9999px";
	}

function fundo1()
{
	document.body.style.backgroundColor = '#7FFFD4';
	document.getElementById("btnmudar1").style.opacity = 0.9;
	document.getElementById("btnmudar2").style.opacity = 0.4;
	document.getElementById("btnmudar3").style.opacity = 0.4;
	document.getElementById("statusbar").style.backgroundColor = 'rgba(127, 255, 212, 0.6)';
}

function fundo2()
{
	document.body.style.backgroundColor = '#B2DFEE';
	document.getElementById("btnmudar1").style.opacity = 0.4;
	document.getElementById("btnmudar2").style.opacity = 0.9;
	document.getElementById("btnmudar3").style.opacity = 0.4;
	document.getElementById("statusbar").style.backgroundColor = 'rgba(108, 166, 205, 0.6)';
}

function fundo3()
{
	document.body.style.backgroundColor = '#00868B';
	document.getElementById("btnmudar1").style.opacity = 0.4;
	document.getElementById("btnmudar2").style.opacity = 0.4;
	document.getElementById("btnmudar3").style.opacity = 0.9;
	document.getElementById("statusbar").style.backgroundColor = 'rgba(59, 96, 96, 0.6)';	
}

function resolucao() 
{
	window.alert ("Resolução recomendada : 1366 x 768 - Página : 100%");
}