//CRIANDO A FUNCIONALIDADE DO BOTÃO "BUSCAR" acionado com o evento "onclick"
function buscarCEP() {
  const campoInput = document.getElementById("campoImput").value; //pegando o valor do campo de pesquisa e atribuindo a uma variavel

  const ajax = new XMLHttpRequest(); //criando objeto de requisição assincrona
  ajax.open("GET", "https://viacep.com.br/ws/"+campoInput+"/json/"); //definindo o tipo de requisição e a api que será comunicada
  ajax.send(); //enviando requisição
  ajax.onload = function() { //formulando atividade a ser feita com a resposta da requisição
    //como a resposta da requisiçção virá em forma de texto...
    let objeto = JSON.parse(this.responseText); //conventendo resposta para um objeto
    //organizando resposta da requisição em objetos
    let logradouro = objeto.logradouro;
    let bairro = objeto.bairro;
    let cidade = objeto.localidade;
    let uf = objeto.uf;

    document.getElementById("resposta").innerHTML = 
    "Logradouro: "+logradouro+
    "<br> Bairro: "+bairro+
    "<br> Cidade: "+cidade+
    " - "+ uf;
  }
}

//ADCIONANDO UM OUVINTE DE EVENTO PARA O CAMPO DE IMPUT

let inputBox = document.getElementById("campoImput"); //pegando qualquer valor do campo
inputBox.addEventListener("keyup", function (event) {
  if (event.key === "Enter") {
    buscarCEP();
  }
})


