function adicionarParada() {
    const paradasContainer = document.getElementById('paradas');
    const novaParada = document.createElement('div');
    novaParada.classList.add('parada-container');

    const inputParada = document.createElement('input');
    inputParada.type = 'text';
    inputParada.name = 'parada[]';
    inputParada.placeholder = 'Digite um ponto de parada';

    const btnRemover = document.createElement('button');
    btnRemover.type = 'button';
    btnRemover.classList.add('btn-remove');
    btnRemover.textContent = '-';
    btnRemover.addEventListener('click', function() {
        removerParada(this);
    });

    novaParada.appendChild(inputParada);
    novaParada.appendChild(btnRemover);

    paradasContainer.appendChild(novaParada);
}

function removerParada(element) {
    const paradasContainer = document.getElementById('paradas');
    const paradaRemovida = element.parentNode;
    paradasContainer.removeChild(paradaRemovida);
}

function adicionarHorario() {
    const horariosContainer = document.getElementById('horarios');
    const novoHorario = document.createElement('div');
    novoHorario.classList.add('horario-container');

    const inputHorario = document.createElement('input');
    inputHorario.type = 'text';
    inputHorario.name = 'horario[]';
    inputHorario.placeholder = 'Digite um horário';
    inputHorario.required = true;

    const btnRemover = document.createElement('button');
    btnRemover.type = 'button';
    btnRemover.classList.add('btn-remove');
    btnRemover.textContent = '-';
    btnRemover.addEventListener('click', function() {
        removerHorario(this);
    });

    novoHorario.appendChild(inputHorario);
    novoHorario.appendChild(btnRemover);

    horariosContainer.appendChild(novoHorario);
}

function removerHorario(element) {
    const horariosContainer = document.getElementById('horarios');
    const horarioRemovido = element.parentNode;
    horariosContainer.removeChild(horarioRemovido);
}