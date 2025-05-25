// Array para armazenar produtos selecionados
let produtosSelecionados = [];

// Função para selecionar/deselecionar produtos
function selecionarProduto(elemento) {
  elemento.classList.toggle('selecionado');
  const nomeProduto = elemento.querySelector('p').textContent;
  
  if (elemento.classList.contains('selecionado')) {
    // Adiciona produto se não estiver na lista
    if (!produtosSelecionados.includes(nomeProduto)) {
      produtosSelecionados.push(nomeProduto);
    }
  } else {
    // Remove produto da lista
    produtosSelecionados = produtosSelecionados.filter(produto => produto !== nomeProduto);
  }
}

// Função para enviar formulário
function enviarFormulario(event) {
  event.preventDefault();
  
  // Salva dados do formulário e produtos selecionados no localStorage
  const nome = document.querySelector('input[placeholder="Nome Completo"]').value;
  const email = document.querySelector('input[placeholder="E-mail"]').value;
  
  localStorage.setItem('nomeUsuario', nome);
  localStorage.setItem('emailUsuario', email);
  localStorage.setItem('produtosSelecionados', JSON.stringify(produtosSelecionados));
  
  // Exibe mensagem de sucesso
  const mensagem = document.getElementById("mensagem");
  mensagem.textContent = "Cadastro realizado com sucesso!";
  
  // Redireciona para a página de compra após 1 segundo
  setTimeout(() => {
    window.location.href = "compra.html";
  }, 1000);
}
