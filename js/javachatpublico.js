
function joaoonline()
{
	document.getElementById("jOnline").src = "imagens/online.png";
}

function useroffline()
{
	document.getElementById("userOff").style.position = "absolute";
	document.getElementById("userOff").style.left = "-9999px";
	document.getElementById("legenduser").style.position = "absolute";
	document.getElementById("legenduser").style.left = "-9999px";
}

var deletar = function ()
{
	document.getElementById("mensagens").value = "";
	document.getElementById("mensagens").placeholder = "";
	document.getElementById("mensagens").focus();
}

var emoji = function ()
{
	document.getElementById("emojis").style.left = "558px";
	document.getElementById("fecharemoji").style.left = "778.3px";
}

function fecharemoji() 
{
	document.getElementById("emojis").style.left = "-9999px";
	document.getElementById("fecharemoji").style.left = "-9999px";
	document.getElementById("mensagens").focus();
}

function nome()
{
	var onome = document.getElementById("name").value;
	document.getElementById("nomeusuario").innerHTML =  "@" +onome;
	document.getElementById("meunome").innerHTML =  "@" +onome;
	document.getElementById("name").value = "";
}

function perfilvip()
{	
	
	if(document.getElementById("name").value == "@dedo")
	{
		document.getElementById("imgperfil").src = "imagens/perfildedo.png";
		document.getElementById("minhaimg").src = "imagens/perfildedo.png";
		document.getElementById("nomeusuario").innerHTML = "@Dedo Supremo";
		document.getElementById("name").value = "";
		document.getElementById("nomeusuario").style.textShadow = "2px 2px 1px yellow,4px 4px 4px blue, 6px 6px 6px red";
		document.getElementById("meunome").innerHTML = "Dedo Supremo";
		document.getElementById("meunome").style.textShadow = "2px 2px 1px yellow,4px 4px 4px blue, 6px 6px 6px red";
	}
		
		if(document.getElementById("name").value == "@stark")
	{
		document.getElementById("imgperfil").src = "imagens/perfilstark.png";
		document.getElementById("minhaimg").src = "imagens/perfilstark.png";
		document.getElementById("nomeusuario").innerHTML = "Iron Man";
		document.getElementById("name").value = "";
		document.getElementById("nomeusuario").style.textShadow = "2px 2px 1px silver,4px 4px 4px yellow, 6px 6px 6px red";
		document.getElementById("meunome").innerHTML = "Iron Man";
		document.getElementById("meunome").style.textShadow = "2px 2px 1px silver,4px 4px 4px yellow, 6px 6px 6px red";
		document.getElementById("meunome").style.color = 'red';
	}	
	
		if(document.getElementById("name").value == "@L")
	{
		document.getElementById("imgperfil").src = "imagens/perfilL.png";
		document.getElementById("minhaimg").src = "imagens/perfilL.png";
		document.getElementById("nomeusuario").innerHTML = "L";
		document.getElementById("name").value = "";
		document.getElementById("nomeusuario").style.textShadow = "2px 2px 1px white,4px 4px 4px silver, 6px 6px 6px black";
		document.getElementById("meunome").innerHTML = "L";
		document.getElementById("meunome").style.textShadow = "2px 2px 1px white,4px 4px 4px silver, 6px 6px 6px black";
		
	}	
		
		if(document.getElementById("name").value == "@deadpool")
	{
		document.getElementById("imgperfil").src = "imagens/perfildeadpool.png";
		document.getElementById("minhaimg").src = "imagens/perfildeadpool.png";
		document.getElementById("nomeusuario").innerHTML = "DeadPool";
		document.getElementById("name").value = "";
		document.getElementById("nomeusuario").style.textShadow = "2px 2px 1px red,4px 4px 4px pink, 6px 6px 6px black";
		document.getElementById("meunome").innerHTML = "DeadPool";
		document.getElementById("meunome").style.textShadow = "2px 2px 1px red,4px 4px 4px pink, 6px 6px 6px black";
	}	
	
		if(document.getElementById("name").value == "@nerd")
	{
		document.getElementById("imgperfil").src = "imagens/perfilnerd.png";
		document.getElementById("minhaimg").src = "imagens/perfilnerd.png";
		document.getElementById("nomeusuario").innerHTML = "Nerd Espacial";
		document.getElementById("name").value = "";
		document.getElementById("nomeusuario").style.textShadow = "2px 2px 1px cyan,4px 4px 4px green, 6px 6px 6px skyblue";
		document.getElementById("meunome").innerHTML = "Nerd Espacial";
		document.getElementById("meunome").style.textShadow = "2px 2px 1px cyan,4px 4px 4px green, 6px 6px 6px skyblue";
	}	

	if(document.getElementById("name").value == "@panic")
	{
		document.getElementById("imgperfil").src = "imagens/perfilpanic.png";
		document.getElementById("minhaimg").src = "imagens/perfilpanic.png";
		document.getElementById("nomeusuario").innerHTML = "Pânico";
		document.getElementById("name").value = "";
		document.getElementById("nomeusuario").style.textShadow = "2px 2px 1px red,4px 4px 4px gray, 6px 6px 6px black";
		document.getElementById("meunome").innerHTML = "Pânico";
		document.getElementById("meunome").style.textShadow = "2px 2px 1px red,4px 4px 4px gray, 6px 6px 6px black";
	}	
	
	if(document.getElementById("name").value == "@mikey")
	{
		document.getElementById("imgperfil").src = "imagens/perfilmikey.png";
		document.getElementById("minhaimg").src = "imagens/perfilmikey.png";
		document.getElementById("nomeusuario").innerHTML = "Mikey Mouse";
		document.getElementById("name").value = "";
		document.getElementById("nomeusuario").style.textShadow = "2px 2px 1px red,4px 4px 4px white, 6px 6px 6px black";
		document.getElementById("meunome").innerHTML = "Mikey Mouse";
		document.getElementById("meunome").style.textShadow = "2px 2px 1px red,4px 4px 4px white, 6px 6px 6px black";
	}	
	
	if(document.getElementById("name").value == "@monster")
	{
		document.getElementById("imgperfil").src = "imagens/perfilmonster.png";
		document.getElementById("minhaimg").src = "imagens/perfilmonster.png";
		document.getElementById("nomeusuario").innerHTML = "The Monster";
		document.getElementById("name").value = "";
		document.getElementById("nomeusuario").style.textShadow = "2px 2px 1px #8B4513,4px 4px 4px #CD853F, 6px 6px 6px orange";
		document.getElementById("meunome").innerHTML = "The Monster";
		document.getElementById("meunome").style.textShadow = "2px 2px 1px #8B4513,4px 4px 4px #CD853F, 6px 6px 6px orange";
	}	
	
	if(document.getElementById("name").value == "@mario")
	{
		document.getElementById("imgperfil").src = "imagens/perfilmario.png";
		document.getElementById("minhaimg").src = "imagens/perfilmario.png";
		document.getElementById("nomeusuario").innerHTML = "Encanador";
		document.getElementById("name").value = "";
		document.getElementById("nomeusuario").style.textShadow = "2px 2px 1px red,4px 4px 4px blue, 6px 6px 6px green";
		document.getElementById("meunome").innerHTML = "Encanador";
		document.getElementById("meunome").style.textShadow = "2px 2px 1px red,4px 4px 4px blue, 6px 6px 6px green";
	}	
	
		if(document.getElementById("name").value == "@selfie")
	{
		document.getElementById("imgperfil").src = "imagens/perfilselfie.png";
		document.getElementById("nomeusuario").innerHTML = "Tirando Selfie";
		document.getElementById("minhaimg").src = "imagens/perfilselfie.png";
		document.getElementById("name").value = "";
		document.getElementById("nomeusuario").style.textShadow = "2px 2px 1px red,4px 4px 4px blue, 6px 6px 6px green";
		document.getElementById("meunome").innerHTML = "Tirando Selfie";
		document.getElementById("meunome").style.textShadow = "2px 2px 1px red,4px 4px 4px blue, 6px 6px 6px green";
	}	
	
	if(document.getElementById("name").value == "@superman")
	{
		document.getElementById("imgperfil").src = "imagens/perfilsuperman.png";
		document.getElementById("nomeusuario").innerHTML = "Homem de Aço";
		document.getElementById("minhaimg").src = "imagens/perfilsuperman.png";
		document.getElementById("name").value = "";
		document.getElementById("nomeusuario").style.textShadow = "2px 2px 1px red,4px 4px 4px blue, 6px 6px 6px yellow";
		document.getElementById("meunome").innerHTML = "Homem de Aço";
		document.getElementById("meunome").style.textShadow = "2px 2px 1px red,4px 4px 4px blue, 6px 6px 6px yellow";
	}	
	
		if(document.getElementById("name").value == "@batman")
	{
		document.getElementById("imgperfil").src = "imagens/perfilbat.png";
		document.getElementById("nomeusuario").innerHTML = "Cavaleiro das Trevas";
		document.getElementById("minhaimg").src = "imagens/perfilbat.png";
		document.getElementById("name").value = "";
		document.getElementById("nomeusuario").style.textShadow = "2px 2px 1px lightgray,4px 4px 4px gray, 6px 6px 6px black";
		document.getElementById("meunome").innerHTML = "Cavaleiro das Trevas";
		document.getElementById("meunome").style.textShadow = "2px 2px 1px lightgray,4px 4px 4px gray, 6px 6px 6px black";
	}

		if(document.getElementById("name").value == "@avatar")
	{
		document.getElementById("imgperfil").src = "imagens/perfilavatar.png";
		document.getElementById("nomeusuario").innerHTML = "O último mestre do AR";
		document.getElementById("minhaimg").src = "imagens/perfilavatar.png";
		document.getElementById("name").value = "";
		document.getElementById("nomeusuario").style.textShadow = "2px 2px 1px lightgray,4px 4px 4px gray, 6px 6px 6px black";
		document.getElementById("meunome").innerHTML = "O último mestre do AR";
		document.getElementById("meunome").style.textShadow = "2px 2px 1px lightgray,4px 4px 4px gray, 6px 6px 6px black";
	}	

		if(document.getElementById("name").value == "@sherlock")
	{
		document.getElementById("imgperfil").src = "imagens/perfilsherlock.png";
		document.getElementById("nomeusuario").innerHTML = "Xerock Romis";
		document.getElementById("minhaimg").src = "imagens/perfilsherlock.png";
		document.getElementById("name").value = "";
		document.getElementById("nomeusuario").style.textShadow = "2px 2px 1px lightgray,4px 4px 4px gray, 6px 6px 6px black";
		document.getElementById("meunome").innerHTML = "Xerock Romis";
		document.getElementById("meunome").style.textShadow = "2px 2px 1px lightgray,4px 4px 4px gray, 6px 6px 6px black";
	}

		if(document.getElementById("name").value == "@goku")
	{
		document.getElementById("imgperfil").src = "imagens/perfilgoku.png";
		document.getElementById("nomeusuario").innerHTML = "Kakaroto";
		document.getElementById("minhaimg").src = "imagens/perfilgoku.png";
		document.getElementById("name").value = "";
		document.getElementById("nomeusuario").style.textShadow = "2px 2px 1px lightgray,4px 4px 4px gray, 6px 6px 6px black";
		document.getElementById("meunome").innerHTML = "Kakaroto";
		document.getElementById("meunome").style.textShadow = "2px 2px 1px lightgray,4px 4px 4px gray, 6px 6px 6px black";
	}

		if(document.getElementById("name").value == "@joker")
	{
		document.getElementById("imgperfil").src = "imagens/perfiljoker.png";
		document.getElementById("nomeusuario").innerHTML = "Coringa";
		document.getElementById("minhaimg").src = "imagens/perfiljoker.png";
		document.getElementById("name").value = "";
		document.getElementById("nomeusuario").style.textShadow = "2px 2px 1px lightgray,4px 4px 4px gray, 6px 6px 6px black";
		document.getElementById("meunome").innerHTML = "Coringa";
		document.getElementById("meunome").style.textShadow = "2px 2px 1px lightgray,4px 4px 4px gray, 6px 6px 6px black";
	}

		if(document.getElementById("name").value == "@vingança")
	{
		document.getElementById("imgperfil").src = "imagens/perfilV.png";
		document.getElementById("nomeusuario").innerHTML = "V de Vingança";
		document.getElementById("minhaimg").src = "imagens/perfilV.png";
		document.getElementById("name").value = "";
		document.getElementById("nomeusuario").style.textShadow = "2px 2px 1px lightgray,4px 4px 4px gray, 6px 6px 6px black";
		document.getElementById("meunome").innerHTML = "V de Vingança";
		document.getElementById("meunome").style.textShadow = "2px 2px 1px lightgray,4px 4px 4px gray, 6px 6px 6px black";
	}

		if(document.getElementById("name").value == "@jedi")
	{
		document.getElementById("imgperfil").src = "imagens/perfiljedi.png";
		document.getElementById("nomeusuario").innerHTML = "Controlador da Força";
		document.getElementById("minhaimg").src = "imagens/perfiljedi.png";
		document.getElementById("name").value = "";
		document.getElementById("nomeusuario").style.textShadow = "2px 2px 1px lightgray,4px 4px 4px gray, 6px 6px 6px black";
		document.getElementById("meunome").innerHTML = "Controlador da Força";
		document.getElementById("meunome").style.textShadow = "2px 2px 1px lightgray,4px 4px 4px gray, 6px 6px 6px black";
	}	
	
}

function sexo()
{
	if(document.getElementById("masculino").checked)
	{
		document.getElementById("imgperfil").src = "imagens/perfilh.png";
		document.getElementById("minhaimg").src = "imagens/perfilh.png";
		document.getElementById("nomeusuario").style.color='blue';
		document.getElementById("chat").style.backgroundColor = 'CadetBlue';
	}
	
	if(document.getElementById("feminino").checked)
	{
		document.getElementById("imgperfil").src = "imagens/perfilm.png";
		document.getElementById("minhaimg").src = "imagens/perfilm.png";
		document.getElementById("nomeusuario").style.color='IndianRed';
		document.getElementById("chat").style.backgroundColor = 'IndianRed';

	}
	
	function enviarimagem()
	{
		var imagem = document.getElementById("aimg").value;
		document.getElementById("imgperfil").src = imagem;
	}
	

	
}

function alterarperfil()
{	
	document.getElementById("btnemoji").style.opacity = 1;
	document.getElementById("btnemoji").style.cursor = "pointer";
	document.getElementById("btnemoji").onclick = emoji;
	
	document.getElementById("btnenvio").style.cursor = "pointer";
	document.getElementById("btndeletar").style.cursor = "pointer";
	document.getElementById("btndeletar").onclick = deletar;
	document.getElementById("btnenvio").onclick = enviar;
	document.getElementById("mensagens").readOnly = false;
	document.getElementById("mensagens").style.backgroundColor = 'cyan';
	document.getElementById("mensagens").placeholder = "Digite a mensagem aqui";
	document.getElementById("euonline").style.opacity = 1;
	document.getElementById("legendvoce").style.opacity = 1;
	var seunome = getElementById("nomeusuario").innerHTML;
		document.getElementById("meunome").innerHTML = seunome;
	var img = getElementById("imgperfil").src;
	
}	

var enviar = function ()
{		
		
		document.getElementById("mensagens").placeholder = "Mensagem enviada";
		document.getElementById("mensagens").focus();

	
		if(document.getElementById("mensagens").value == "")
		{
		document.getElementById("resposta1").innerHTML = "|Desculpe , não entendi a sua mensagem :x|";
		}

		if(document.getElementById("mensagens").value == "/codigosvip")
		{
		document.getElementById("resposta1").innerHTML = "@avatar - @batman - @superman - @joker - @dedo - @sherlock - @selfie - @mikey - @mario - @goku - @jedi - @nerd - @panic - @monster - @vinganca - @L - @stark - @deadpool";
		}
		
		if(document.getElementById("mensagens").value == "oi")
		{
		document.getElementById("resposta1").innerHTML = "Olá, como vai você? ";
		}
	
		if(document.getElementById("mensagens").value == "vou bem, e voce?")
		{
		document.getElementById("resposta1").innerHTML = "Também, obrigado por perguntar :)";
		}
		
		if(document.getElementById("mensagens").value == "como vao as crianças?")
		{
		document.getElementById("resposta1").innerHTML = "Morreram!";
		}
		
		if(document.getElementById("mensagens").value == "cade o joao?")
		{
		document.getElementById("resposta1").innerHTML = "No pé de feijão ;)";
		}
		
		if(document.getElementById("mensagens").value == "isso foi uma piada")
		{
		document.getElementById("resposta1").innerHTML = "Você é zoeiro mesmo ein! Você manja da zoeira, eu to humilhado com a sua ZOEIRA!!!";
		}
		
		if(document.getElementById("mensagens").value == "irineu")
		{
		document.getElementById("resposta1").innerHTML = "Você não sabe nem eu!";
		}
		
		if(document.getElementById("mensagens").value == "voce morreria pra salvar sua vida?")
		{
		document.getElementById("resposta1").innerHTML = "Eu não sei!";
		}
		
		if(document.getElementById("mensagens").value == "o que nois somos?")
		{
		document.getElementById("resposta1").innerHTML = "Nois somos rolezeiras!";
		}
		
		if(document.getElementById("mensagens").value == "kakaka")
		{
		document.getElementById("resposta1").innerHTML = "Muito engraçado! KAKAKAKAKAKAKA";
		}
		
		if(document.getElementById("mensagens").value == "voce tem namorado?")
		{
		document.getElementById("resposta1").innerHTML = "Não, e nem pretendo :(";
		}
		
		if(document.getElementById("mensagens").value == "quer namorar comigo?")
		{
		document.getElementById("resposta1").innerHTML = "Não obrigado, sou muito ocupada.";
		}
		
		if(document.getElementById("mensagens").value == "quem é voce?")
		{
		document.getElementById("resposta1").innerHTML = "Sou uma IA criada para responder suas perguntas.";
		}
		
		if(document.getElementById("mensagens").value == "quem sou eu?")
		{
			var meunome = document.getElementById("meunome").innerHTML;
		document.getElementById("resposta1").innerHTML = "Você é o " + meunome;
		}

		if(document.getElementById("mensagens").value == "obrigado")
		{
		document.getElementById("resposta1").innerHTML = "De nada, é sempre um prazer ajudar ;)";
		}
		
		if(document.getElementById("mensagens").value == "cade a tampa?")
		{
		document.getElementById("resposta1").innerHTML = "Que tampa?";
		}
		
		if(document.getElementById("mensagens").value == "/data")
		{
		document.getElementById("resposta1").innerHTML = Date();
		}	

		
	var mensagem = document.getElementById("mensagens").value;
	document.getElementById("voce").innerHTML = mensagem;
	document.getElementById("voce").style.opacity = 1;
	document.getElementById("mensagens").value="";
	document.getElementById("resposta1").style.opacity = 1;
	document.getElementById("img2").style.opacity = 1;	
			
	//fim primeriamensagem
	
	document.getElementById("btnenvio").onclick = function()
	{		
		document.getElementById("mensagens").focus();

	
		if(document.getElementById("mensagens").value == "")
		{
		document.getElementById("resposta").innerHTML = "|Desculpe , não entendi a sua mensagem :x|";
		}
		
		if(document.getElementById("mensagens").value == "oi")
		{
		document.getElementById("resposta").innerHTML = "Olá, como vai você? ";
		}
	
		if(document.getElementById("mensagens").value == "/codigosvip")
		{
		document.getElementById("resposta").innerHTML = "@avatar - @batman - @superman - @joker - @dedo - @sherlock - @selfie - @mikey - @mario - @goku - @jedi - @nerd - @panic - @monster - @vinganca - @L - @stark - @deadpool";
		}
	
		if(document.getElementById("mensagens").value == "vou bem, e voce?")
		{
		document.getElementById("resposta").innerHTML = "Também, obrigado por perguntar :)";
		}
		
		if(document.getElementById("mensagens").value == "como vao as crianças?")
		{
		document.getElementById("resposta").innerHTML = "Morreram!";
		}
		
		if(document.getElementById("mensagens").value == "cade o joao?")
		{
		document.getElementById("resposta").innerHTML = "No pé de feijão ;)";
		}
		
		if(document.getElementById("mensagens").value == "isso foi uma piada")
		{
		document.getElementById("resposta").innerHTML = "Você é zoeiro mesmo ein! Você manja da zoeira, eu to humilhado com a sua ZOEIRA!!!";
		}
		
		if(document.getElementById("mensagens").value == "irineu")
		{
		document.getElementById("resposta").innerHTML = "Você não sabe nem eu!";
		}
		
		if(document.getElementById("mensagens").value == "voce morreria pra salvar sua vida?")
		{
		document.getElementById("resposta").innerHTML = "Eu não sei!";
		}
		
		if(document.getElementById("mensagens").value == "o que nois somos?")
		{
		document.getElementById("resposta").innerHTML = "Nois somos rolezeiras!";
		}
		
		if(document.getElementById("mensagens").value == "kakaka")
		{
		document.getElementById("resposta").innerHTML = "Muito engraçado! KAKAKAKAKAKAKA";
		}
		
		if(document.getElementById("mensagens").value == "voce tem namorada?")
		{
		document.getElementById("resposta").innerHTML = "Não, e nem pretendo :(";
		}
		
		if(document.getElementById("mensagens").value == "quer namorar comigo?")
		{
		document.getElementById("resposta").innerHTML = "Não obrigado, sou muito ocupada.";
		}
		
		if(document.getElementById("mensagens").value == "quem é voce?")
		{
		document.getElementById("resposta").innerHTML = "Sou uma IA criada para responder suas perguntas.";
		}
		
		if(document.getElementById("mensagens").value == "quem sou eu?")
		{
			var meunome = document.getElementById("meunome").innerHTML;
		document.getElementById("resposta").innerHTML = "Você é o " + meunome;
		}
		
		if(document.getElementById("mensagens").value == "obrigado")
		{
		document.getElementById("resposta").innerHTML = "De nada, é sempre um prazer ajudar ;)";
		}
		
		if(document.getElementById("mensagens").value == "cade a tampa?")
		{
		document.getElementById("resposta").innerHTML = "Que tampa?";
		}	
		
		if(document.getElementById("mensagens").value == "/data")
		{
		document.getElementById("resposta").innerHTML = Date();
		}	
		
	var mensagem = document.getElementById("mensagens").value;
	document.getElementById("voce2").innerHTML = mensagem;
	document.getElementById("mensagens").value="";
	document.getElementById("resposta").style.opacity = 1;
	document.getElementById("img3").style.opacity = 1;	
	
	document.getElementById("voce2").style.opacity = 1;	
	
		//fim da segunda mensagem

		
		document.getElementById("btnenvio").onclick = function()
		{		
		
		document.getElementById("mensagens").placeholder = "Mensagem enviada";
		document.getElementById("mensagens").focus();

		
		
			var valorbaixo = document.getElementById("resposta").innerHTML;
			document.getElementById("resposta1").innerHTML = valorbaixo;
		
			document.getElementById("some").style.opacity= 0;
			document.getElementById("some").style.marginTop = "-25px";
			document.getElementById("img1").style.opacity = 0;	

			
			var valorbaixo = document.getElementById("voce2").innerHTML;
			document.getElementById("voce").innerHTML = valorbaixo;
			
			var mensagem = document.getElementById("mensagens").value;
			document.getElementById("voce2").innerHTML = mensagem;
	
		if(document.getElementById("mensagens").value == "")
		{
		document.getElementById("resposta").innerHTML = "|Desculpe , não entendi a sua mensagem :x|";
		}
		
		if(document.getElementById("mensagens").value == "oi")
		{
		document.getElementById("resposta").innerHTML = "Olá, como vai você? ";
		}
	
		if(document.getElementById("mensagens").value == "vou bem, e voce?")
		{
		document.getElementById("resposta").innerHTML = "Também, obrigado por perguntar :)";
		}
		
		if(document.getElementById("mensagens").value == "/codigosvip")
		{
		document.getElementById("resposta").innerHTML = "@avatar - @batman - @superman - @joker - @dedo - @sherlock - @selfie - @mikey - @mario - @goku - @jedi - @nerd - @panic - @monster - @vinganca - @L - @stark - @deadpool";
		}
		
		if(document.getElementById("mensagens").value == "como vao as crianças?")
		{
		document.getElementById("resposta").innerHTML = "Morreram!";
		}
		
		if(document.getElementById("mensagens").value == "cade o joao?")
		{
		document.getElementById("resposta").innerHTML = "No pé de feijão ;)";
		}
		
		if(document.getElementById("mensagens").value == "isso foi uma piada")
		{
		document.getElementById("resposta").innerHTML = "Você é zoeiro mesmo ein! Você manja da zoeira, eu to humilhado com a sua ZOEIRA!!!";
		}
		
		if(document.getElementById("mensagens").value == "irineu")
		{
		document.getElementById("resposta").innerHTML = "Você não sabe nem eu!";
		}
		
		if(document.getElementById("mensagens").value == "voce morreria pra salvar sua vida?")
		{
		document.getElementById("resposta").innerHTML = "Eu não sei!";
		}
		
		if(document.getElementById("mensagens").value == "o que nois somos?")
		{
		document.getElementById("resposta").innerHTML = "Nois somos rolezeiras!";
		}
		
		if(document.getElementById("mensagens").value == "kakaka")
		{
		document.getElementById("resposta").innerHTML = "Muito engraçado! KAKAKAKAKAKAKA";
		}
		
		if(document.getElementById("mensagens").value == "voce tem namorada?")
		{
		document.getElementById("resposta").innerHTML = "Não, e nem pretendo :(";
		}
		
		if(document.getElementById("mensagens").value == "quer namorar comigo?")
		{
		document.getElementById("resposta").innerHTML = "Não obrigado, sou muito ocupada.";
		}
		
		if(document.getElementById("mensagens").value == "quem é voce?")
		{
		document.getElementById("resposta").innerHTML = "Sou uma IA criada para responder suas perguntas.";
		}
		
		if(document.getElementById("mensagens").value == "obrigado")
		{
		document.getElementById("resposta").innerHTML = "De nada, é sempre um prazer ajudar ;)";
		}
		
		if(document.getElementById("mensagens").value == "quem sou eu?")
		{
			var meunome = document.getElementById("meunome").innerHTML;
		document.getElementById("resposta").innerHTML = "Você é o " + meunome;
		}

		if(document.getElementById("mensagens").value == "cade a tampa?")
		{
		document.getElementById("resposta").innerHTML = "Que tampa?";
		}
		
		if(document.getElementById("mensagens").value == "/data")
		{
		document.getElementById("resposta").innerHTML = Date();
		}	

		document.getElementById("mensagens").value="";
		document.getElementById("resposta2").style.opacity = 1;
	
			
		document.getElementById("voce2").style.height = "30px";
		document.getElementById("voce2").style.marginBottom = "5px";
		document.getElementById("voce2").style.opacity = 1;	

		//codigo

	
		}
	
	}

	
	
}
