const btnChanges = [...document.querySelectorAll('.product__quantity-control')]

btnChanges.forEach(element => {
	element.addEventListener('click', () => {
		if (element.classList.contains('product__quantity-control_dec') === true) {
			console.log(';jgf')
		}
	})
})
