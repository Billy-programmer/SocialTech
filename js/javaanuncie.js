
function nomeproduto()
{
	
	var name = document.getElementById("onome").value;
	
	if (document.getElementById("onome").value == "")
	{
		document.getElementById("onome").placeholder = "digite um nome";
	}else{
	
	document.getElementById("nameproduto").style.opacity = "1";
	document.getElementById("nameproduto").innerHTML = name;
	document.getElementById("onome").style.color = 'green';	
	document.getElementById("onome").placeholder = name;	
	}
}

function mandarvalor()
{

	var preco = document.getElementById("valor").value;
	document.getElementById("precoExibido").innerHTML = "R$" + preco;
	document.getElementById("valor").style.color = 'green';	
	
}



function venda()
{
	if (document.getElementById("valor").value == "" || document.getElementById("onome").value == "")
	{
		window.alert("Preencha todos os dados para anunciar!");
	}else
	{
	window.alert("Seu anuncio foi postado com sucesso!");
	document.getElementById("btnvenda").onclick = f5;
	}
}

var f5 = function () 
{
	window.alert("Anúncio já postado, atualize a página para postar outra coisa.");
}



//cordaborda

function tipo1()
{
	document.getElementById("fotoproduto").style.borderColor='skyblue';
	document.getElementById("nameproduto").style.backgroundColor = 'skyblue';
}

function tipo2()
{
	document.getElementById("fotoproduto").style.borderColor='orange';
	document.getElementById("nameproduto").style.backgroundColor = 'orange';
}

function tipo3()
{
	document.getElementById("fotoproduto").style.borderColor='yellow';
	document.getElementById("nameproduto").style.backgroundColor = 'yellow';
}

function tipo4()
{
	document.getElementById("fotoproduto").style.borderColor='cyan';
	document.getElementById("nameproduto").style.backgroundColor = 'cyan';
}

function tipo5()
{
	document.getElementById("fotoproduto").style.borderColor='limegreen';
	document.getElementById("nameproduto").style.backgroundColor = 'limegreen';
}

function tipo6()
{
	document.getElementById("fotoproduto").style.borderColor='brown';
	document.getElementById("nameproduto").style.backgroundColor = 'brown';
}
