document.addEventListener("DOMContentLoaded", function () {
	let jogos = JSON.parse(localStorage.getItem("jogos")) || [];
	let container = document.getElementById("games-list");
	let noGamesMessage = document.getElementById("no-games-message");


	function renderizarJogos() {
		container.innerHTML = ""; // Limpar a lista antes de adicionar
		if (jogos.length === 0) {
			noGamesMessage.innerHTML = `<h3 class="text-center">Nenhum jogo cadastrado</h3>`;
		} else {
			noGamesMessage.innerHTML = '';
			jogos.forEach((jogo, index) => {
				let item = document.createElement("div");
				item.className = "col-lg-3 col-md-6 col-sm-12 p-2";
				item.innerHTML = `
					<div class="grid-item">
						<h5>Nome do Jogo</h5>
						<p>${jogo.nome}</p>
						<h6>Preço</h6>
						<p>R$ ${jogo.preco}</p>
						<h6>Ano de Lançamento</h6>
						<p>${jogo.ano}</p>
						<h6>Criador</h6>
						<p>${jogo.criador}</p>
						<button class="btn btn-warning btn-crud" onclick="editarJogo(${index})">Editar</button>
						<button class="btn btn-danger btn-crud" onclick="excluirJogo(${index})">Excluir</button>
					</div>
				`;
				container.appendChild(item);
			});
		}
	}

	// Edição
	window.editarJogo = function (index) {
		const jogo = jogos[index];
		document.getElementById("editNome").value = jogo.nome;
		document.getElementById("editPreco").value = jogo.preco;
		document.getElementById("editAno").value = jogo.ano;
		document.getElementById("editCriador").value = jogo.criador;

		// Salvar as alterações
		document.getElementById("saveChangesButton").onclick = function () {
			jogos[index] = {
				nome: document.getElementById("editNome").value,
				preco: parseFloat(document.getElementById("editPreco").value),
				ano: document.getElementById("editAno").value,
				criador: document.getElementById("editCriador").value
			};
			localStorage.setItem("jogos", JSON.stringify(jogos));
			renderizarJogos();
			$('#editGameModal').modal('hide'); // Fechar o modal
		};

		$('#editGameModal').modal('show'); // Abrir o modal
	};


	// Exclusão
	window.excluirJogo = function (index) {
		if (confirm("Tem certeza de que deseja excluir este jogo?")) {
			// Remove o jogo do array
			jogos.splice(index, 1);
			// Atualiza o localStorage
			localStorage.setItem("jogos", JSON.stringify(jogos));
			renderizarJogos();
		}
	};

	renderizarJogos();
});