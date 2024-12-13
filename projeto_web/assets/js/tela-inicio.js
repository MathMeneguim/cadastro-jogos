function validarFormulario() {
	let nome = document.getElementById("itemNome").value;
	let preco = document.getElementById("itemPreco").value;
	let ano = document.getElementById("itemAno").value;
	let criador = document.getElementById("itemCriador").value;

	let isValid = true;


	if (nome === "") {
		document.getElementById("nomeError").textContent = "O nome do item é obrigatório!";
		isValid = false;
	} else {
		document.getElementById("nomeError").textContent = "";
	}

	if (preco <= 0 || isNaN(preco)) {
		document.getElementById("precoError").textContent = "O preço deve ser um valor positivo!";
		isValid = false;
	} else {
		document.getElementById("precoError").textContent = "";
	}

	if (ano === "") {
		document.getElementById("anoError").textContent = "O ano de lançamento é obrigatório!";
		isValid = false;
	} else {
		document.getElementById("anoError").textContent = "";
	}

	if (criador === "") {
		document.getElementById("criadorError").textContent = "O nome do criador é obrigatório!";
		isValid = false;
	} else {
		document.getElementById("criadorError").textContent = "";
	}

	if (isValid) {
		// Salvar no localStorage
		let jogos = JSON.parse(localStorage.getItem("jogos")) || [];

		jogos.push({nome, preco, ano, criador });
		localStorage.setItem("jogos", JSON.stringify(jogos));

		window.location.href = "./jogos-cadastrados.html";
	}

	return false; // Impede o envio tradicional do formulário -> n entendi return false
}