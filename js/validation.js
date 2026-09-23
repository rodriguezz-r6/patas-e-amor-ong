// ==========================================================================
// 1. MÁSCARAS DE ENTRADA (CPF, Telefone e CEP)
// ==========================================================================
 export const mascaraCPF = (valor) => {
  return valor
    .replace(/\D/g, '')
    .replace(/(\d{3})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d{1,2})$/, '$1-$2');
};

export const mascaraTelefone = (valor) => {
  return valor
    .replace(/\D/g, '')
    .replace(/^(\d{2})(\d)/g, '($1) $2')
    .replace(/(\d{5})(\d)/, '$1-$2');
};

export const mascaraCEP = (valor) => {
  return valor
    .replace(/\D/g, '')
    .replace(/^(\d{5})(\d)/, '$1-$2');
};
