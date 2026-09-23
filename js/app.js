import { mascaraCPF, mascaraTelefone, mascaraCEP } from './validation.js';
import { salvarVoluntario } from './storage.js';

const rotas = {
  '/': `
    <section class="inicio-container">
      <div class="boas-vindas">
        <h1>Transforme Vidas: Adote ou Apoie a Patas & Amor</h1>
        <p>Somos uma ONG dedicada ao resgate, reabilitação e acolhimento de animais abandonados em Carapicuíba e região. Conheça abaixo as nossas principais iniciativas e ações comunitárias:</p>
      </div>

      <!-- GRID DOS CARDS DE DESTAQUE NA HOME -->
      <div class="cards-grid">
        
        <article class="card-projeto">
          <h2>Vacinação</h2>
          <img src="assets/vacinao.webp" alt="Aplicação de vacina em cão resgatado" class="img-card">
          <p class="descricao-card">
            Nosso projeto de imunização realiza mutirões periódicos para vacinar cães e gatos resgatados contra raiva e zoonoses, garantindo proteção e promovendo a saúde pública em comunidades vulneráveis.
          </p>
        </article>

        <article class="card-projeto">
          <h2>Um Quilo, Uma Fome</h2>
          <img src="assets/racao.jpeg" alt="Arrecadação e doação de sacos de ração" class="img-card">
          <p class="descricao-card">
            Campanha contínua de arrecadação de alimentos focada em suprir a alimentação diária dos abrigos parceiros e de protetores independentes que cuidam de animais em situação de rua.
          </p>
        </article>

        <article class="card-projeto">
          <h2>Feira de Adoção</h2>
          <img src="assets/feira adocao.jpeg" alt="Evento de feira de adoção responsável de cães e gatos" class="img-card">
          <p class="descricao-card">
            Organizamos eventos periódicos para conectar nossos resgatados a novas famílias preparadas e amorosas.
          </p>
        </article>

      </div>
    </section>
  `,

  '/projetos': `
    <section class="inicio-container">
      <div class="boas-vindas">
        <h1>Projetos e Cuidados</h1>
        <p>Conheça em detalhes as frentes de trabalho da Patas & Amor para transformar a realidade dos animais em Carapicuíba e região.</p>
      </div>

      <!-- GRID DOS 5 CARDS DE PROJETOS -->
      <div class="cards-grid">
        
        <!-- CARD 1: FEIRA DE ADOÇÃO -->
        <article class="card-projeto">
          <h2>Feira de Adoção</h2>
          <img src="assets/feira adocao.jpeg" alt="Cãozinho e voluntários em feira de adoção responsável" class="img-card">
          <p class="descricao-card">
            Organizamos eventos periódicos para conectar cães e gatos resgatados a novas famílias responsáveis. Todos os animais disponibilizados passam por triagem veterinária, vacinação e vermifugação prévia.
          </p>
        </article>

        <!-- CARD 2: CASTRAÇÃO -->
        <article class="card-projeto">
          <h2>Mutirões de Castração</h2>
          <img src="assets/castracao.webp" alt="Procedimento e cuidados veterinários em mutirão de castração" class="img-card">
          <p class="descricao-card">
            A castração é a medida mais eficaz para o controle populacional e prevenção de doenças. Promovemos mutirões a preços populares e gratuitos para famílias de baixa renda e protetores independentes.
          </p>
        </article>

        <!-- CARD 3: VACINAÇÃO -->
        <article class="card-projeto">
          <h2>Vacinação e Imunização</h2>
          <img src="assets/vacinao.webp" alt="Profissional aplicando vacina preventiva em um animal resgatado" class="img-card">
          <p class="descricao-card">
            Garantimos a aplicação de vacinas essenciais (V10, Antirrábica e V4) em todos os animais sob nossos cuidados, prevenindo surtos de viroses e assegurando a saúde dos resgatados.
          </p>
        </article>

        <!-- CARD 4: APADRINHAMENTO -->
        <article class="card-projeto">
          <h2>Programa de Apadrinhamento</h2>
          <img src="assets/apadrinhamento.jpg" alt="Voluntário segurando cãozinho resgatado apadrinhado" class="img-card">
          <p class="descricao-card">
            Não pode adotar agora? Você pode apadrinhar! Com contribuições mensais a partir de R$ 5,00, você ajuda a custear alimentação, vacinas e cuidados veterinários de um animal específico ou do abrigo.
          </p>
        </article>

        <!-- CARD 5: RESGATES E REABILITAÇÃO -->
        <article class="card-projeto">
          <h2>Resgates e Reabilitação</h2>
          <img src="assets/racao.jpeg" alt="Animal resgatado recebendo alimentação e cuidados para reabilitação" class="img-card">
          <p class="descricao-card">
            Atuamos no resgate emergencial de animais doentes, feridos ou em situação de extremo abandono, oferecendo tratamento veterinário intensivo, abrigo temporário e reabilitação comportamental.
          </p>
        </article>

      </div>
    </section>
  `,

  '/cadastro': `
    <section class="form-container container">
      <h2>Quero Ajudar</h2>
      <p>Preencha os dados abaixo para se voluntariar ou se tornar um padrinhos/madrinha de nossos animais resgatados.</p>

      <div id="alerta-sucesso" class="hidden alert-success">Cadastro realizado com sucesso! Nossa equipe entrará em contato em breve.</div>

      <form id="form-cadastro">
        <fieldset>
          <legend>Dados Pessoais</legend>
          
          <label for="nome">Nome Completo:</label>
          <input type="text" id="nome" name="nome" required maxlength="100" placeholder="Ex: Maria da Silva">

          <label for="email">E-mail de Contato:</label>
          <input type="email" id="email" name="email" required placeholder="exemplo@email.com">

          <label for="cpf">CPF:</label>
          <input type="text" id="cpf" name="cpf" required maxlength="14" placeholder="000.000.000-00">

          <label for="telefone">Telefone / WhatsApp (para contato da equipe):</label>
          <input type="tel" id="telefone" name="telefone" required maxlength="15" placeholder="(11) 99999-9999">
        </fieldset>

        <fieldset>
          <legend>Endereço</legend>

          <label for="cep">CEP:</label>
          <input type="text" id="cep" name="cep" required maxlength="9" placeholder="00000-000">

          <label for="cidade">Cidade:</label>
          <input type="text" id="cidade" name="cidade" placeholder="Sua cidade">
        </fieldset>

        <fieldset>
          <legend>Como Você Quer Ajudar?</legend>

          <label for="modalidade">Selecione uma modalidade:</label>
          <select id="modalidade" name="modalidade" required>
            <option value="">Selecione...</option>
            <option value="apadrinhamento">Apadrinhar um Pet (a partir de R$ 5,00/mês)</option>
            <option value="lar_temporario">Ser Lar Temporário</option>
            <option value="feiras">Ajudar nas Feiras de Adoção</option>
            <option value="transporte">Transporte de Animais Resgatados</option>
            <option value="outros">Outras Formas de Voluntariado</option>
          </select>

          <p style="font-size: 0.9rem; color: #495057; margin-top: 8px; background-color: #e8f5e9; padding: 10px; border-radius: 6px; border-left: 4px solid #1b5e20;">
            💡 <strong>Nota sobre o Apadrinhamento:</strong> Ao escolher apadrinhar, nossa equipe utilizará seu WhatsApp cadastrado para enviar as orientações de contribuição (a partir de R$ 5,00) e apresentar os animais disponíveis para apadrinhamento.
          </p>

          <label for="mensagem" style="margin-top: 12px; display: block;">Mensagem / Preferência de Animal (Opcional):</label>
          <textarea id="mensagem" name="mensagem" rows="4" placeholder="Escreva aqui se deseja apadrinhar um cão/gato específico ou como pretende ajudar..."></textarea>
        </fieldset>

        <button type="submit" class="btn-primary">Enviar Cadastro</button>
      </form>
    </section>
  `
};

// Navegação SPA
function navegar(e) {
  e.preventDefault();
  const url = e.currentTarget.getAttribute('href');
  window.history.pushState({}, '', url);
  renderizar(url);
  window.scrollTo(0, 0);
}

function renderizar(url) {
  const app = document.getElementById('app');
  if (!app) return;

  app.innerHTML = rotas[url] || '<h2>404 - Página Não Encontrada</h2>';

  vincularLinks();

  if (url === '/cadastro') {
    inicializarCadastro();
  }
}

function vincularLinks() {
  document.querySelectorAll('.nav-link').forEach(link => {
    link.removeEventListener('click', navegar);
    link.addEventListener('click', navegar);
  });
}

function inicializarCadastro() {
  const inputCPF = document.getElementById('cpf');
  const inputTelefone = document.getElementById('telefone');
  const inputCEP = document.getElementById('cep');

  if (inputCPF) inputCPF.addEventListener('input', (e) => e.target.value = mascaraCPF(e.target.value));
  if (inputTelefone) inputTelefone.addEventListener('input', (e) => e.target.value = mascaraTelefone(e.target.value));
  if (inputCEP) inputCEP.addEventListener('input', (e) => e.target.value = mascaraCEP(e.target.value));

  const form = document.getElementById('form-cadastro');
  const modal = document.querySelector('.modal-backdrop');
  const alertaSucesso = document.getElementById('alerta-sucesso');

  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();

      const formData = new FormData(form);
      const voluntario = Object.fromEntries(formData.entries());

      salvarVoluntario(voluntario);

      if (alertaSucesso) alertaSucesso.classList.remove('hidden');
      if (modal) modal.classList.add('active');

      mostrarToast("Cadastro enviado com sucesso!");
      form.reset();
    });
  }
}

document.addEventListener('click', (e) => {
  const modal = document.querySelector('.modal-backdrop');
  if (!modal) return;

  if (e.target.classList.contains('btn-fechar') || e.target === modal) {
    modal.classList.remove('active');
  }
});

function mostrarToast(mensagem) {
  let toast = document.getElementById("toast");

  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'toast';
    toast.className = 'toast';
    document.body.appendChild(toast);
  }

  toast.textContent = mensagem;
  toast.classList.add("show");
  setTimeout(() => toast.classList.remove("show"), 3000);
}

window.addEventListener('popstate', () => renderizar(window.location.pathname));

document.addEventListener('DOMContentLoaded', () => {
  renderizar(window.location.pathname || '/');
});