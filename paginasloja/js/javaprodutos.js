
function ang1()
{	
	var image = document.getElementById("ang1").src;
	document.getElementById("angselect").src= image;
	document.getElementById("ang1").style.borderColor = 'limegreen';
	document.getElementById("ang2").style.borderColor = 'silver';
	document.getElementById("ang3").style.borderColor = 'silver';
	document.getElementById("ang4").style.borderColor = 'silver';
}

function ang2()
{	
	var image = document.getElementById("ang2").src;
	document.getElementById("angselect").src= image;
	document.getElementById("ang1").style.borderColor = 'silver';
	document.getElementById("ang2").style.borderColor = 'limegreen';
	document.getElementById("ang3").style.borderColor = 'silver';
	document.getElementById("ang4").style.borderColor = 'silver';	
}

function ang3()
{	
	var image = document.getElementById("ang3").src;
	document.getElementById("angselect").src= image;
	document.getElementById("ang1").style.borderColor = 'silver';
	document.getElementById("ang2").style.borderColor = 'silver';
	document.getElementById("ang3").style.borderColor = 'limegreen';
	document.getElementById("ang4").style.borderColor = 'silver';	
}

function ang4()
{	
	var image = document.getElementById("ang4").src;
	document.getElementById("angselect").src= image;
	document.getElementById("ang1").style.borderColor = 'silver';
	document.getElementById("ang2").style.borderColor = 'silver';
	document.getElementById("ang3").style.borderColor = 'silver';
	document.getElementById("ang4").style.borderColor = 'limegreen';	
}







function filtros()
{
	if(document.getElementById("select3").selected = true)
	{
	}
}





function fundo1()
{
	document.body.style.background = "url('imagens/fundo 1.png')";
	document.getElementById("btnmudar1").style.opacity = 0.9;
	document.getElementById("btnmudar2").style.opacity = 0.4;
	document.getElementById("btnmudar3").style.opacity = 0.4;
	document.getElementById("statusbar").style.backgroundColor = 'yellow';
}

function fundo2()
{
	document.body.style.background = "url('imagens/fundo 2.png')";
	document.getElementById("btnmudar1").style.opacity = 0.4;
	document.getElementById("btnmudar2").style.opacity = 0.9;
	document.getElementById("btnmudar3").style.opacity = 0.4;
	document.getElementById("statusbar").style.backgroundColor = '#c0c0c0';
}

function fundo3()
{
	document.body.style.background = "url('imagens/fundo 3.png')";
	document.getElementById("btnmudar1").style.opacity = 0.4;
	document.getElementById("btnmudar2").style.opacity = 0.4;
	document.getElementById("btnmudar3").style.opacity = 0.9;
	document.getElementById("statusbar").style.backgroundColor = 'cyan';	
}

