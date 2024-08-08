// 1-Pegar o elemento de botão para ser adicionado o evento de clique nele.
const btn = document.getElementById('btn');
console.log(btn);

// 2-Pegar o elemento de id do conselho.
const textoConselho = document.getElementById('conselho');
console.log(textoConselho);

// 4-Após conseguirmos os elementos do html, é necessário a criação da função responsável por pegar os dados da API
async function obterConselho() {
  // 5-Importante que durante a chamada a api seja feito o tratamento dos erros usando o try-catch.
  try {
    const url = "https://api.adviceslip.com/advice";

    const resposta = await fetch(url);
    const json = await resposta.json();
    console.log(json);

    if (!resposta.ok) {
      throw new Error("Ocorreu um erro ao tentar buscar as informações da API");
    }

    // 6-Atualizar o conteúdo do id e descrição do conselho que colocamos em uma variável usando o innerText
     textoConselho.innerText = `"${json.slip.advice}"`;

  } catch (error) {
    console.error("Erro ao tentar buscar as informações da API", error);
  }
}

// 7-Chamar a função criada
// 8-Atribuir a função que criamos para ser executada no evento do clique do botão
btn.addEventListener('click', () =>{
  obterConselho()
});
