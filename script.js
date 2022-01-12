// Array Tarefas que vai armazenar a lista de tarefas
var tarefas = []

//A função é executada quando a página é totalmente carregada
onload = function(){

    //Recupero a lista de tarefas
    let tarefaRecovery = JSON.parse(localStorage.getItem("listas"));

    //Recoloco a lista na tela
    let listasRecovery = document.getElementById("toDoList");
    listasRecovery.innerHTML = tarefaRecovery

    tarefas.push(tarefaRecovery);

}

// Função que cria a tarefa
addTarefas = function(){
   
    // Isolo o elemento HTML que contém a tarefa
    let campoTarefa = document.getElementById("listTarefa");

    let tarefa = campoTarefa.value

    // tarefa = '<li>'+tarefa+'</li>'
    tarefa = '<div class="atividade"><input type="checkbox"><label>'+tarefa+'</label></div>'

    // Deixo o campo que preencho o nome da tarefa em branco
    campoTarefa.value = ""

    // Adiciono o valor do input no array tarefa
    tarefas.push(tarefa);
    
    //Crio uma variável para poder alterar o HTML da lista
    let lista = document.getElementById("toDoList");

    //Utilizo o método join do array Tarefas para poder mostrar os itens do array sem a vírgula
    lista.innerHTML = tarefas.join("")

    //Salvo o array que contém a lista de tarefas
    //Utilizo o JSON para salvar meus dados junto com o localStorage
    localStorage.setItem("listas", JSON.stringify(tarefas.join("")));

    console.log(tarefas)
    
}

// Função que limpa as atividades

clearAll = function(){

    // Para limpar do localStorage
    localStorage.clear();

    // Para apagar da tela
    document.getElementById("toDoList").innerHTML="";

}