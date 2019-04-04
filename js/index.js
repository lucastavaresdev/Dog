chamadaAjax('https://dog.ceo/api/breeds/list/all', RacaCaes)

function RacaCaes(data) {
    let linha
    let listaRacas = Object.keys(data.message);

    for (i = 0; i < listaRacas.length; i++) {
        let nomeRaca = eval("data.message." + listaRacas[i])

        if (nomeRaca.length !== 0) {
            for (j = 0; j < nomeRaca.length; j++) {
                let racadoAnimal = `<option value="${listaRacas[i]}-${nomeRaca[j]}">${listaRacas[i]}: ${nomeRaca[j]}</option>`;
                linha += racadoAnimal
            }
        } else {
            let racadoAnimal = `<option value="${listaRacas[i]}">${listaRacas[i]}</option>`;
            linha += racadoAnimal
        }
    }
    document.getElementById('racaCaes').innerHTML = linha

    document.getElementById("racaCaes").selectedIndex = parseInt(localStorage.pet)
    document.getElementById("input-font").selectedIndex = parseInt(localStorage.fonte)
    document.getElementById("cores").selectedIndex = parseInt(localStorage.cor)
    document.getElementById('inputnomedopet').value = localStorage.nomedoPet

}


document.querySelector('select').addEventListener('change', function () {
    valorSelect = this.value
    chamadaAjax(`https://dog.ceo/api/breed/${valorSelect}/images/random`, geraImagem)
});

function geraImagem(data) {
    let el = document.querySelector('img');
    if (el !== null) {
        el.parentNode.removeChild(el);
    }
    
    var img = document.createElement("img");
    img.src = data.message;
    img.style.width = "250px";
    img.style.height = "250px";
    document.getElementById('fotoPet').appendChild(img);
}

var changeFont = function (font) {
    document.getElementById("nomedopet").style.fontFamily = font.value;
}

var changeColor = function (cor) {
    document.getElementById("nomedopet").style.color = cor.value;
}



document.getElementById('inputnomedopet').addEventListener('change', function () {
    var valor = document.getElementById('inputnomedopet').value;
    document.getElementById('nomedopet').innerText = valor
});


(function salvarLocalStorage() {
    document.getElementById('btn_salvar').addEventListener('click', function () {
        if (typeof (Storage) !== "undefined") {

            var dataHora = new Date();
            let racapet = document.getElementById("racaCaes").selectedIndex;
            let nomedoPet = document.getElementById('inputnomedopet').value;
            let fonte = document.getElementById("input-font").selectedIndex;
            let cor = document.getElementById("cores").selectedIndex;
            
            localStorage.setItem('pet', racapet);
            localStorage.setItem('nomedoPet', nomedoPet);
            localStorage.setItem('fonte', fonte);
            localStorage.setItem('cor', cor);
            localStorage.setItem('datahora', dataHora);
        } else {
            alert('não suporta localStorage')
        }
    })
})();

(function dataHora() {
    
})();