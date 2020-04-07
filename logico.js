/*Função que recebe nome e data de nascimento e com isso descobre o signo e o exibe junto com a descrição do mesmo*/
function descubra()
		{
/*Declaração de variáveis*/
			var data, dia, mes, signo, nome,ano, descricao ;
/*atribuição de valores para as variáveis*/
			data = document.getElementById("iDdata").value;
			nome = document.getElementById("iDnome").value;
			dia = data.slice(8,10);
			mes = data.slice(5,7);
			ano = data.slice(0,4);

/*Estrutura de casos e de decisões que define qual é o signo do usuário*/
			switch(parseInt(mes)){
				case 1:

					if(dia <= 20){
						signo = "Capricórnio";
						descricao = "Trabalhador, tímido e educado, o capricórnio pode passar uma imagem de fechado e até mesmo antipático, mas é que ele eprecisa confiar em quem está ao seu lado para se abrir totalmente. Com paciência, ele se mostra um amigo leal e um companheiro fiel.";
					}
					else{
						signo = "Aquário";
						descricao="Independente, o aquariano preza muito por sua liberdade. Gosta de viajar, sair e conhecer pessoas novas. Tem uma mente aberta e gosta de tudo o que é inovador e moderno, desde roupas e tecnologia, até mesmo atitudes comportamentais.";
					}
				break;
				case 2:
					if(dia <= 19){
						signo = "Aquário";
						descricao="Independente, o aquariano preza muito por sua liberdade. Gosta de viajar, sair e conhecer pessoas novas. Tem uma mente aberta e gosta de tudo o que é inovador e moderno, desde roupas e tecnologia, até mesmo atitudes comportamentais.";
					}
					else{
						signo = "Peixes";
						descricao="Este é o signo mais romântico do zodíaco. Sonhador e carinhoso, ele está sempre preocupado com o bem estar dos outros. Sensível e carinhoso, acredita em contos de fadas e acha que todos merecem um final feliz.";
					}
				break;

				case 3:
					if(dia <= 20){
						signo = "Peixes";
						descricao="Este é o signo mais romântico do zodíaco. Sonhador e carinhoso, ele está sempre preocupado com o bem estar dos outros. Sensível e carinhoso, acredita em contos de fadas e acha que todos merecem um final feliz.";
					}
					else{
						signo = "Áries";
						descricao="Impulsivo, o ariano não pensa muito sobre seus atos. É aquele que primeiro age, depois reflete. Agitado, precisa de muita atividade para gastar a energia, senão pode ficar agressivo e explosivo.";
				}
				break;

				case 4:

					if(dia <= 20){
						signo = "Áries";
						descricao="Impulsivo, o ariano não pensa muito sobre seus atos. É aquele que primeiro age, depois reflete. Agitado, precisa de muita atividade para gastar a energia, senão pode ficar agressivo e explosivo.";
					}
					else{
						signo = "Touro";
						descricao ="Teimoso, o taurino é determinado e protetor. Precisa de segurança e estabilidade para ser feliz, e conquista isso com muito trabalho e concentração. Carinhoso, o taurino pode ser ciumento com quem ama.";
					}
				break;
				case 5:
		
					if(dia <= 20){
						signo = "Touro";
						descricao ="Teimoso, o taurino é determinado e protetor. Precisa de segurança e estabilidade para ser feliz, e conquista isso com muito trabalho e concentração. Carinhoso, o taurino pode ser ciumento com quem ama.";
					}
					else{
						signo = "Gêmeos";
						descricao = "Espontâneo e um pouco instável, o geminiano é uma verdadeira caixinha de surpresas. Como é volátil, muitas vezes nem mesmo o geminiano se entende, mas o importante é que ele está sempre de bom humor e em busca de aventuras.";
					}
				break;
				case 6:
		
					if(dia <= 20)
					{
						signo = "Gêmeos";
						descricao = "Espontâneo e um pouco instável, o geminiano é uma verdadeira caixinha de surpresas. Como é volátil, muitas vezes nem mesmo o geminiano se entende, mas o importante é que ele está sempre de bom humor e em busca de aventuras.";
					}
					else{
						signo = "Câncer";
						descricao = "Família é a palavra-chave para o canceriano. Tranquilo e emotivo, gosta de ficar em casa, fazer programas com quem ama e curtir momentos com os parentes. Curioso, faz amizade com facilidade, mas pode ser um pouco sensível.";
					}
				break;
				case 7:
		
					if(dia <= 21)
					{
						signo = "Câncer";
						descricao = "Família é a palavra-chave para o canceriano. Tranquilo e emotivo, gosta de ficar em casa, fazer programas com quem ama e curtir momentos com os parentes. Curioso, faz amizade com facilidade, mas pode ser um pouco sensível.";
					}
					else{
						signo = "Leão";
						descricao= "Este é signo que veio para brilhar. O leonino gosta de chamar a atenção e ser o centro do mundo, mas também é muito amável e leal. Simpático e comunicativo, o nativo de leão pode ser um pouco ciumento e inseguro.";
					}
				break;
				case 8:
				
					if(dia <= 22){
						signo = "Leão";
						descricao="Este é signo que veio para brilhar. O leonino gosta de chamar a atenção e ser o centro do mundo, mas também é muito amável e leal. Simpático e comunicativo, o nativo de leão pode ser um pouco ciumento e inseguro.";
					}
					else{
						signo = "Virgem";
						descricao="Perspicaz e inteligente, o virginiano está acostumado com o sucesso, por isso se cobra muito, assim como aos demais. Por isso, pode ser um pouco rígido e magoar quem ama. Tímido, prefere programas tranquilos a grandes eventos.";
					}
				break;
				case 9:
				
					if(dia <= 22){
						signo = "Virgem";
						descricao="Perspicaz e inteligente, o virginiano está acostumado com o sucesso, por isso se cobra muito, assim como aos demais. Por isso, pode ser um pouco rígido e magoar quem ama. Tímido, prefere programas tranquilos a grandes eventos.";
					}
					else{
						signo = "Libras";
						descricao="O libriano gosta do que é belo e harmonioso. Não gosta de conflitos e por isso tenta ser imparcial em debates e brigas. Indeciso, pode demorar muito para escolher coisas simples, como o que comer ou vestir. Bom gosto define este signo.";
					}
				break;
				case 10:
				
					if(dia <= 22){
						signo = "Libras";
						descricao="O libriano gosta do que é belo e harmonioso. Não gosta de conflitos e por isso tenta ser imparcial em debates e brigas. Indeciso, pode demorar muito para escolher coisas simples, como o que comer ou vestir. Bom gosto define este signo.";
					}
					else{
						signo = "Escorpião";
						descricao="Determinado, o escorpiano vai até o fim para conquistar os seus objetivos. Sensual e romântico, gosta de estar em relacionamentos, mas pode ser desconfiado enquanto não se sentir seguro com a pessoa.";
					}
				break;
				case 11:
				
					if(dia <= 21){
						signo = "Escorpião";
						descricao="Determinado, o escorpiano vai até o fim para conquistar os seus objetivos. Sensual e romântico, gosta de estar em relacionamentos, mas pode ser desconfiado enquanto não se sentir seguro com a pessoa.";
					}
					else{
						signo = "Sargitário";
						descricao="Um signo de bem com a vida, que está sempre em busca de ação e que vive rodeado de amigos. Este é o signo de sagitário, que é sonhador e adora conhecer pessoas e lugares novos.";
					}
				break;
				case 12:
					
					if(dia <= 21){
						signo = "Sargitário";
						descricao="Um signo de bem com a vida, que está sempre em busca de ação e que vive rodeado de amigos. Este é o signo de sagitário, que é sonhador e adora conhecer pessoas e lugares novos.";
					}
					else{
						signo = "Capricórnio";
						descricao="Trabalhador, tímido e educado, o capricórnio pode passar uma imagem de fechado e até mesmo antipático, mas é que ele eprecisa confiar em quem está ao seu lado para se abrir totalmente. Com paciência, ele se mostra um amigo leal e um companheiro fiel.";
					}
				break;
			}
/*Travas feitas com estruturas de decisões que impedem o usuário de visualizar o resultado caso tenha digitado o dia, mês ou ano incorreto ou caso tenha deixado o campo nome vazio*/
			if(dia>=1 && dia<=31 && mes>=1 && mes<=31){
				if(ano>=1 && ano<=2019){
							if(nome!=""){
								document.getElementById("label3").innerHTML="Olá, "+nome+"!<br>Seu nascimento:"+dia+" / "+mes+" / "+ano+"<br><br>Seu signo: "+signo+"<br>"+descricao;

							
							}
							else{
								alert("O campo nome não está preenchido corretamente");
							}
				}
				else{
					alert("O ano selecionado ainda não existe");

				}
			}
			else{
				alert("O campo data não está preenchido corretamente");
			}	

}
/*Função que consegue inibir qualquer caracter especial e qualquer número no campo nome*/
function validar(dom,tipo){
	switch(tipo){
		case'num':var regex=/[A-Za-z]/g;break;
		case'text':var regex=/[^a-zà-ú\ \s]/gi;break;
	}
	dom.value=dom.value.replace(regex,'');
}