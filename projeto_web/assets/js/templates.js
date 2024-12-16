fetch('../footer.html')
	.then(res => res.text())
	.then(data => document.getElementById('footer-template').innerHTML = data)
	.catch(console.error);

fetch('../nav.html')
	.then(res => res.text())
	.then(data => document.getElementById('nav-template').innerHTML = data)
	.catch(console.error);