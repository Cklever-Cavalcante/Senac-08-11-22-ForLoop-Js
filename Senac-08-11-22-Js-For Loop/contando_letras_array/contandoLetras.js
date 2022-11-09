
//                          CONTANDO PALAVRAS

//Não reconhece quando pula a linha (quando a tecla enter é clicada)



function contandoPalavras() {

    // recebe o valor do input text

    let palavras = document.getElementById("palavras").value;

    // Inicia o contador de palavras
    let contador = 0;

    // Divide as palavra em cada espaço vazio
    let espaco = palavras.split(' ');

    // Faz a repetição e incrementa o contador quando encontra caracteres e não espaços vazios

    for (let i = 0; i < espaco.length; i++) {
        if (espaco[i] != "") {
            contador += 1;
        }
    }

    // Mostra o resultado
    document.getElementById("resultado").innerHTML = contador;
    console.log(contador);
}




//------------------------------------------------------------------------------


//Reconhece quando pula a linha (quando a tecla enter é clicada)

/*
document.querySelector("#palavras").addEventListener("input",

    function contandoPalavras() {
        let res = [];
        let str = this.value.replace(/[\t\n\r\.\?\!]/gm, " ").split(" ");
        str.map((s) => {
            let trimStr = s.trim();
            if (trimStr.length > 0) {
                res.push(trimStr);
            }
        });
        document.querySelector("#resultado").innerText = res.length;
        console.log(res);
    });
    
    */




////////////////////////////////////////////////////////////////////////////////

//               CONTANDO CARACTERES

function contarLetras() {

    let letras = document.getElementById("letras").value;

    let contadorLetras1 = 0;

    let resultadoLetras = document.getElementById("resultadoLetras");

    for (let i = 0; i < letras.length; i++) {

        contadorLetras1++;

    }


    resultadoLetras.innerHTML = `Quantidade de Letras: ${contadorLetras1}`;

    console.log(contadorLetras1);
}

