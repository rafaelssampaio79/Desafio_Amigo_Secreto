//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigos = []; // Array para armazenar os nomes

function adicionarAmigo() {
    const input = document.getElementById("amigo");
    const nome = input.value.trim();
    if (nome !== "") {
        amigos.push(nome);
        atualizarLista();
        input.value = ""; // Limpa o campo após adicionar
        input.focus(); // Mantém o foco no campo de entrada
    } else {
        alert("Por favor, digite um nome válido.");
    }
}

document.getElementById("amigo").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        event.preventDefault(); // Evita o comportamento padrão
        adicionarAmigo();
    }
});

function atualizarLista() {
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; // Limpa a lista antes de atualizar
    amigos.forEach((amigo) => {
        const item = document.createElement("li");
        item.textContent = amigo;
        lista.appendChild(item);
    });
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert("Adicione pelo menos um nome antes de sortear.");
        return;
    }
    const sorteado = amigos[Math.floor(Math.random() * amigos.length)];
    document.getElementById("listaAmigos").innerHTML = ""; // Limpa a lista de nomes
    document.getElementById("resultado").innerHTML = `<li>O amigo secreto sorteado é: <strong>${sorteado}</strong></li>`;
    amigos = []; // Esvazia o array após o sorteio
}