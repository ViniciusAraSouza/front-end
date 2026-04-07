function pagina() {
    const input = document.getElementById("tarefaInput");
    const botao = document.getElementById("btnAdicionar");
    const lista = document.getElementById("listaTarefas");

    botao.addEventListener("click", ()=>{
        const novaTarefa = document.createElement("li");
        const texto = input.value.trim();
        
        if(texto == ""){
            alert("Digite algo!");
            return;
        }

        novaTarefa.textContent = texto; //Acinona texto ao elemento da lista
        novaTarefa.classList.add('destaque');//Adicione a classe "destaque" ao li.
        novaTarefa.setAttribute("data-tarefa", texto.toLowerCase());//Adicioina tributo personalizado 
        novaTarefa.style.color = "#333"//Muda a cor

        lista.appendChild(novaTarefa);//adiciona elemento

        novaTarefa.addEventListener("click", () => {
            const tarefa = novaTarefa.getAttribute("data-tarefa");
            console.log("Removendo:", tarefa);
            novaTarefa.classList.remove("destque");//Remove a classe html destaque
            novaTarefa.classList.add("removido");//Acrescenta a classe html removido
            novaTarefa.innerHTML += "(removida)";//Acrescenta o texto (removido) ao texto da tarefa
            setTimeout(()=>{lista.removeChild(novaTarefa);}, 1000)
      
      
      const container = document.querySelector(".container");

// Criar elementos
const titulo = document.createElement("h2");
titulo.textContent = "Lista de Tarefas";

const input = document.createElement("input");
input.type = "text";
input.id = "tarefaInput";
input.placeholder = "Digite uma tarefa";

const botao = document.createElement("button");
botao.id = "btnAdicionar";
botao.textContent = "Adicionar";

const lista = document.createElement("ul");
lista.id = "listaTarefas";

// Adicionar na div
container.appendChild(titulo);
container.appendChild(input);
container.appendChild(botao);
container.appendChild(lista);

// Evento do botão
botao.addEventListener("click", () => {
    const texto = input.value;

    if (texto !== "") {
        const li = document.createElement("li");
        li.textContent = texto;

        lista.appendChild(li);
        input.value = "";
    }
});  })
    })
    
    
}  