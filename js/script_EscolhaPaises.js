$(document).ready(function () {

    var cloneOriginalCard = $(".card-Pais").clone(); //guarda a original card


    $.ajax({    // traz dados atraves de GET do ajax do API
        method: "GET",
        url: "https://restcountries.com/v3.1/all"
    }).done(function (dados) {
        console.log(dados);

        /* Faz um loop de todos os dados (obj) pesquisados do API REST Countries */
        for (var i = 0; i < dados.length; i++) {
            console.log(dados[i].name.common);

            /* APOS o LOOP faz se clonagem de cada Card dos Paises e atribui cada valor */
            var cloneCard = cloneOriginalCard.clone();

            $(".nome-Pais", cloneCard).text(dados[i].name.common);
            $("#imagem-Paises", cloneCard).attr("src", dados[i].flags[0]);

            $(".populacao-pais", cloneCard).text(dados[i].population);
            $(".regiao-pais", cloneCard).text(dados[i].region);
            $(".capital-pais", cloneCard).text(dados[i].capital[0]);

            /*queremos um array de linguas e se não tiver nenhuma entao o array será vazio -> || {}
            e queremo tudo isto em uma string então usa-se join que também adiciona um valor (", ")(a virgula) entre os valores de array*/
            $(".idiomas-pais", cloneCard).text(Object.values(dados[i].languages || {}).join(", "));

            //preciso ver melhor esta parte pedi ajuda ao sir CHATGPT
            $(".moedas-pais", cloneCard).text(Object.values(dados[i].currencies || {}).map(curr => curr.name).join(", "));

            //falta a localização mas talvez tira-se

            $(".lista-Paises").append(cloneCard);



            //fazer favoritos */
            var objetoPais = {
                "nome": dados[i].name.common,
                "bandeira": dados[i].flags[0],
                "populacao": dados[i].population,
                "regiao": dados[i].region,
                "capital": dados[i].capital,
                "idiomas": Object.values(dados[i].languages || {}).join(', '),

                "moedas": Object.values(dados[i].currencies || {}).map(curr => curr.name).join(', '),
            };


            var stringObjetoPais = JSON.stringify(objetoPais);

            $(".btn-favoritos", cloneCard).attr("onclick", "addFavoritos(" + stringObjetoPais + ")");
            $(".lista-filmes").append(cloneCard);

        }
    });
});


function addFavoritos(pais) {
    console.log("Adicionado aos favoritos:", pais);
}

