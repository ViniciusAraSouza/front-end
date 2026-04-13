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
});