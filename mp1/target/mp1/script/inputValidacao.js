const mensagemErroNomeLinha = document.getElementById('mensagemErroNomeLinha');
const mensagemErroRegiao = document.getElementById('mensagemErroRegiao');
const mensagemErroParadas = document.getElementById('mensagemErroParadas');
const mensagemErroHorario = document.getElementById('mensagemErroHorario');

// Adicione um ouvinte de evento para o formulário no evento 'submit'
document.querySelector('form').addEventListener('submit', function(event) {
    // Impede o envio do formulário para que possamos fazer a validação
    event.preventDefault();

    // Obtém os valores dos campos
    const nomeLinha = document.getElementById('nomeLinha').value;
    const regiao = document.getElementById('regiao').value;
    const pontoDeParada = document.getElementById('pontoParada').value;
    const horario = document.getElementById('horario').value;

    // Realiza as validações
    const nomeLinhaValido = validarNomeLinha(nomeLinha);
    const regiaoValida = validarRegiao(regiao);
    const pontoDeParadaValido = validarPontoDeParada(pontoDeParada);
    const horariosValidos = validarHorarios(horario);

    // Exibe as mensagens de erro conforme necessário
    if (!nomeLinhaValido) {
        mensagemErroNomeLinha.textContent = 'Formato inválido! Use o formato correto, por exemplo: 301 - Nome da Linha ou 10 - Nome Linha.';
    } else if (!regiaoValida) {
        mensagemErroRegiao.textContent = 'Formato inválido! Informe uma das regiões: Sul, Norte, Leste, Oeste.';
    } else if (!pontoDeParadaValido) {
        mensagemErroParadas.textContent = 'Formato inválido para o ponto de parada. Use apenas letras.';
    } else if (!horariosValidos) {
        mensagemErroHorario.textContent = 'Formato inválido! Utilize o formato HH:mm.';
    } 
    else {
        // Se todos os campos são válidos, limpe a mensagem de erro
        mensagemErroNomeLinha.textContent = '';
        mensagemErroRegiao.textContent = '';
        mensagemErroParadas.textContent = '';
        mensagemErroHorario.textContent = '';
        // Submeta o formulário
        this.submit();
    }
});

// Ouvintes de evento para os campos individuais para limpar a mensagem de erro ao digitar
document.getElementById('nomeLinha').addEventListener('input', function() {
    mensagemErroNomeLinha.textContent = '';
});

document.getElementById('regiao').addEventListener('input', function() {
    mensagemErroRegiao.textContent = '';
});

document.getElementById('horario').addEventListener('input', function() {
    mensagemErroHorario.textContent = '';
});

document.getElementById('pontoParada').addEventListener('input', function() {
    mensagemErroParadas.textContent = '';
});

// Funções que verificam os inputs
function validarNomeLinha(nomeLinha) {
    return /\d{2,3}\s-\s.+/.test(nomeLinha);
}

function validarRegiao(regiao) {
    return ['Sul', 'Norte', 'Leste', 'Oeste'].includes(regiao);
}

function validarPontoDeParada(pontoDeParada) {
    // Precisa aceitar letras (incluindo acentuadas) e espaços
    return /^[a-zA-ZÀ-ÖØ-öø-ÿ\s]+$/.test(pontoDeParada);
}

function validarHorarios(horarios) {
    // Aceita apenas horários existentes, então 33:99 não passa por exemplo
    return /^([01]?[0-9]|2[0-3]):[0-5][0-9]$/.test(horarios);
}