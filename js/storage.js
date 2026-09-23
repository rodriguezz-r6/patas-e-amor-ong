// ==========================================================================
// GERENCIAMENTO DO LOCALSTORAGE
// ==========================================================================

const CHAVE_STORAGE = 'ong_patas_amor_voluntarios';

// Salva um novo voluntário na lista do localStorage
export function salvarVoluntario(voluntario) {
  const lista = buscarVoluntarios();
  lista.push(voluntario);
  localStorage.setItem(CHAVE_STORAGE, JSON.stringify(lista));
}

// Busca todos os voluntários salvos
export function buscarVoluntarios() {
  const dados = localStorage.getItem(CHAVE_STORAGE);
  return dados ? JSON.parse(dados) : [];
}