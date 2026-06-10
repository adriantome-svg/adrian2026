const form = document.getElementById("form-simulador");
const resultado = document.getElementById("resultado");

// Calcula a porcentagem preservada
function calcularPercentual(areaTotal, areaPreservada) {
    return (areaPreservada / areaTotal) * 100;
}

// Define a classificação
function classificarSustentabilidade(percentual) {
    if (percentual >= 20) {
        return {
            mensagem: "Excelente equilíbrio ambiental 🌿",
            cor: "green"
        };
    } else if (percentual >= 10) {
        return {
            mensagem: "Boa preservação 🌱",
            cor: "orange"
        };
    } else {
        return {
            mensagem: "Atenção: área de preservação reduzida ⚠️",
            cor: "red"
        };
    }
}

// Mostra o resultado na tela
function exibirResultado(nome, percentual, classificacao) {
    resultado.innerHTML = `
        <h3>Resultado de ${nome}</h3>
        <p>Área preservada: ${percentual.toFixed(1)}%</p>
        <p style="color:${classificacao.cor}; font-weight:bold;">
            ${classificacao.mensagem}
        </p>
    `;

    resultado.classList.remove("escondido");
}

// Evento do formulário
form.addEventListener("submit", function(evento) {
    evento.preventDefault();

    const nome = document.getElementById("nome").value;
    const areaTotal = Number(document.getElementById("area-total").value);
    const areaPreservada = Number(document.getElementById("area-preservada").value);

    const percentual = calcularPercentual(areaTotal, areaPreservada);
    const classificacao = classificarSustentabilidade(percentual);

    exibirResultado(nome, percentual, classificacao);
});