function animaIconeMenu(x) {
    //Animação do icone
    x.classList.toggle("change");

    //Rotina para abrir e fechar o menu lateral se baseando na opacidade da barra do meio
    let barra2 = document.getElementById("barra2");

    if (barra2.style.opacity == 0 || barra2.style.opacity == 1)
    {
        document.getElementById("navegaMenu").style.width = "250px";
        document.getElementById("cabecalho").style.marginLeft = "250px";
        document.getElementById("iconeMenu").style.marginLeft = "150px";
        document.getElementById("corpo").style.marginLeft = "250px";
        barra2.style.opacity = 0.0000001;
    }

    else if (barra2.style.opacity != 0)
    {
        document.getElementById("navegaMenu").style.width = "0";
        document.getElementById("cabecalho").style.marginLeft = "0";
        document.getElementById("iconeMenu").style.marginLeft = "0";
        document.getElementById("corpo").style.marginLeft = "0";
        barra2.style.opacity = 1;
    }
}


//Função para abrir os subtópicos (ex: estrutura condicional --> caso, se)
function abreEstruturasLinks() {
    const botaoMenu = document.getElementsByClassName("botaoMenu");
    let i;

    for(i=0; i<botaoMenu.length; i++)
    {
        botaoMenu[i].addEventListener("click", function() {
            this.classList.toggle("active");
            const estruturasLinks = this.nextElementSibling;

            if (estruturasLinks.style.maxHeight) 
            {
             estruturasLinks.style.maxHeight = null;
            }

            else
            {
             estruturasLinks.style.maxHeight = estruturasLinks.scrollHeight + "px";
            }
        });
    }
}


//Função pra abrir a descrição das atividades
function abreAtividades() {
    const botaoAtividades = document.getElementsByClassName("botaoAtividades");
    let i;

    for(i=0; i<botaoAtividades.length; i++)
    {
        botaoAtividades[i].addEventListener("click", function() {
            this.classList.toggle("active");
            const atividadeConteudo = this.nextElementSibling;

            if (atividadeConteudo.style.maxHeight) 
            {
                atividadeConteudo.style.maxHeight = null;
            }

            else
            {
                atividadeConteudo.style.maxHeight = atividadeConteudo.scrollHeight + "px";
            }
        });
    }
}