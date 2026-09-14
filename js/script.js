// Máscaras de Entrada (CPF, Telefone e CEP)

const mascaraCPF = (valor) => {
    return valor
        .replace(/\D/g, '') // Remove tudo o que não é dígito
        .replace(/(\d{3})(\d)/, '$1.$2')
        .replace(/(\d{3})(\d)/, '$1.$2')
        .replace(/(\d{3})(\d{1,2})$/, '$1-$2');
};

const mascaraTelefone = (valor) => {
    return valor
        .replace(/\D/g, '')
        .replace(/^(\d{2})(\d)/g, '($1) $2')
        .replace(/(\d{5})(\d)/, '$1-$2');
};

const mascaraCEP = (valor) => {
    return valor
        .replace(/\D/g, '')
        .replace(/^(\d{5})(\d)/, '$1-$2');
};

// Aplicação dos eventos nos campos do formulário
document.addEventListener('DOMContentLoaded', () => {
    const inputCPF = document.getElementById('cpf');
    const inputTelefone = document.getElementById('telefone');
    const inputCEP = document.getElementById('cep');

    if (inputCPF) {
        inputCPF.addEventListener('input', (e) => {
            e.target.value = mascaraCPF(e.target.value);
        });
    }

    if (inputTelefone) {
        inputTelefone.addEventListener('input', (e) => {
            e.target.value = mascaraTelefone(e.target.value);
        });
    }

    if (inputCEP) {
        inputCEP.addEventListener('input', (e) => {
            e.target.value = mascaraCEP(e.target.value);
        });
    }
});