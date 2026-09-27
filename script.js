// ===== Teste Funcional: Validação de Formulário =====
function validarFormulario() {
  const nome = document.getElementById("nome").value.trim();
  const email = document.getElementById("email").value.trim();
  const idade = document.getElementById("idade").value.trim();
  const msg = document.getElementById("mensagem");

  const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (nome === "") {
    msg.textContent = "⚠ O campo Nome é obrigatório!";
    msg.className = "erro";
    return;
  }

  if (email === "") {
    msg.textContent = "⚠ O campo E-mail é obrigatório!";
    msg.className = "erro";
    return;
  }

  if (!regexEmail.test(email)) {
    msg.textContent = "⚠ Formato de e-mail inválido!";
    msg.className = "erro";
    return;
  }

  if (idade === "") {
    msg.textContent = "⚠ O campo Idade é obrigatório!";
    msg.className = "erro";
    return;
  }

  if (isNaN(idade) || Number(idade) <= 0) {
    msg.textContent = "⚠ Idade inválida! Digite apenas números.";
    msg.className = "erro";
    return;
  }

  msg.textContent = "✅ Formulário enviado com sucesso!";
  msg.className = "sucesso";
}

// ===== Teste de Unidade: Função de Multiplicação =====
function multiplicar(a, b) {
  return a * b;
}

function testarMultiplicacao() {
  console.assert(multiplicar(2, 3) === 6, "Teste 1 falhou!");
  console.assert(multiplicar(-2, 5) === -10, "Teste 2 falhou!");
  console.assert(multiplicar(0, 10) === 0, "Teste 3 falhou!");
  console.assert(multiplicar(7, 7) === 49, "Teste 4 falhou!");
  console.log("✅ Todos os testes de multiplicação passaram!");
}

testarMultiplicacao();
