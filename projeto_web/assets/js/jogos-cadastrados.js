document.addEventListener("DOMContentLoaded", function () {
	let jogos = JSON.parse(localStorage.getItem("jogos")) || [];
	let container = document.getElementById("games-list");
	let noGamesMessage = document.getElementById("no-games-message");
	let editGameModal = new bootstrap.Modal(document.getElementById('editGameModal'));

	// Função para trazer os jogos
	function renderizarJogos() {
		container.innerHTML = ""; // Limpa o conteúdo antes de adicionar os novos jogos
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

	window.editarJogo = function (index) {
		const jogo = jogos[index];
		document.getElementById("editNome").value = jogo.nome;
		document.getElementById("editPreco").value = jogo.preco;
		document.getElementById("editAno").value = jogo.ano;
		document.getElementById("editCriador").value = jogo.criador;

		document.getElementById("saveChangesButton").onclick = function () {

			let nome = document.getElementById("editNome").value.trim();
			let preco = document.getElementById("editPreco").value.trim();
			let ano = document.getElementById("editAno").value.trim();
			let criador = document.getElementById("editCriador").value.trim();

			if (nome === '' || preco === '' || ano === '' || criador === '') {
				alert("Todos os campos são obrigatórios!");
				return;
			} else if (preco === '0') {
				alert("O preço não pode ser nulo.")
				return
			}

			jogos[index] = {
				nome: nome,
				preco: parseFloat(preco),
				ano: ano,
				criador: criador
			};

			// Atualiza o localStorage
			localStorage.setItem("jogos", JSON.stringify(jogos));
			renderizarJogos(); // precisa voltar a renderizar a lista de jogos
			editGameModal.hide();
		};

		editGameModal.show();
	};

	window.excluirJogo = function (index) {
		if (confirm("Tem certeza de que deseja excluir este jogo?")) {
			// Remove
			jogos.splice(index, 1);
			localStorage.setItem("jogos", JSON.stringify(jogos));
			renderizarJogos();
		}
	};

	renderizarJogos();
});