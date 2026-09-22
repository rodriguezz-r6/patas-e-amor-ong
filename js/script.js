// ==========================================================================
// 1. MÁSCARAS DE ENTRADA (CPF, Telefone e CEP)
// ==========================================================================
const mascaraCPF = (valor) => {
  return valor
    .replace(/\D/g, '')
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

// ==========================================================================
// 2. INICIALIZAÇÃO DOS EVENTOS (DOM Loaded)
// ==========================================================================
document.addEventListener('DOMContentLoaded', () => {
  // A. Aplicação das máscaras nos inputs
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

  // B. Controle do Modal, Alerta e Envio do Formulário
  const form = document.getElementById('form-cadastro');
  const modal = document.querySelector('.modal-backdrop');
  const btnFechar = document.querySelector('.btn-fechar');
  const alertaSucesso = document.getElementById('alerta-sucesso');

  // Ao enviar o formulário válido, exibe o Alerta, o Modal e o Toast
if (form) {
  form.addEventListener('submit', function (event) {
    event.preventDefault(); // Impede o recarregamento da página

    // Exibe a mensagem de sucesso na tela
    if (alertaSucesso) {
      alertaSucesso.classList.remove('hidden');
    }

    // Exibe o popup Modal
    if (modal) {
      modal.classList.add('active');
    }

    // Dispara o Toast no canto da tela
    mostrarToast("Cadastro realizado com sucesso!");
  });
}

  // Ao clicar no botão Fechar, oculta o Modal
  if (btnFechar && modal) {
    btnFechar.addEventListener('click', function () {
      modal.classList.remove('active');
    });
  }

  // Oculta ao clicar no fundo escuro fora do Modal
  if (modal) {
    modal.addEventListener('click', function (event) {
      if (event.target === modal) {
        modal.classList.remove('active');
      }
    });
  }
});

// Função genérica para exibir Toast
function mostrarToast(mensagem) {
    const toast = document.getElementById("toast");
    toast.textContent = mensagem;
    toast.classList.add("show");

    // Esconde o toast automaticamente após 3 segundos
    setTimeout(() => {
        toast.classList.remove("show");
    }, 3000);
}
