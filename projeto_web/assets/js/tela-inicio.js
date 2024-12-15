function validarFormulario() {
	// Limpar mensagens de erro anteriores
	document.getElementById('nomeError').innerText = '';
	document.getElementById('precoError').innerText = '';
	document.getElementById('anoError').innerText = '';
	document.getElementById('criadorError').innerText = '';

	var nome = document.getElementById('itemNome').value;
	var preco = document.getElementById('itemPreco').value;
	var ano = document.getElementById('itemAno').value;
	var criador = document.getElementById('itemCriador').value;

	var valid = true;

	var nomeInput = document.getElementById('itemNome');
	if (nome.trim() === '') {
		document.getElementById('nomeError').innerText = 'O nome do jogo é obrigatório.';
		nomeInput.classList.add('is-invalid');
		valid = false;
	} else {
		nomeInput.classList.remove('is-invalid');
	}

	var precoInput = document.getElementById('itemPreco');
	if (preco.trim() === '' || preco.trim() === '0') {
		document.getElementById('precoError').innerText = 'O preço é obrigatório e não deve ser nulo.';
		precoInput.classList.add('is-invalid');
		valid = false;
	} else {
		precoInput.classList.remove('is-invalid');
	}

	var anoInput = document.getElementById('itemAno');
	if (ano === '') {
		document.getElementById('anoError').innerText = 'O ano de lançamento é obrigatório.';
		anoInput.classList.add('is-invalid');
		valid = false;
	} else {
		anoInput.classList.remove('is-invalid');
	}

	var criadorInput = document.getElementById('itemCriador');
	if (criador.trim() === '') {
		document.getElementById('criadorError').innerText = 'O nome do criador é obrigatório.';
		criadorInput.classList.add('is-invalid');
		valid = false;
	} else {
		criadorInput.classList.remove('is-invalid');
	}

	if (valid) {
		// Salvar no localStorage
		let jogos = JSON.parse(localStorage.getItem("jogos")) || [];
		jogos.push({ nome, preco, ano, criador });
		localStorage.setItem("jogos", JSON.stringify(jogos));

		// Redirecionar para a página de jogos cadastrados
		window.location.href = "./jogos-cadastrados.html";
	}

	// Impedir o envio do formulário se houver erros
	return valid;
}
