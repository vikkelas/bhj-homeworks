const btnChanges = [...document.querySelectorAll('.product__quantity-control')]
const btnAddBasket = [...document.querySelectorAll('.product__add')]
const basket = document.querySelector('.cart__products')

btnChanges.forEach(element => {
	element.addEventListener('click', () => {
		let amountProduct = element
			.closest('.product__quantity-controls')
			.querySelector('.product__quantity-value')
		if (
			element.classList.contains('product__quantity-control_dec') === true &&
			amountProduct.innerHTML > 1
		) {
			--amountProduct.innerHTML
		} else if (
			element.classList.contains('product__quantity-control_inc') === true
		) {
			++amountProduct.innerHTML
		}
	})
})

btnAddBasket.forEach(element => {
	element.addEventListener('click', () => {
		let idItem = element.closest('.product')
		addBasket(idItem.getAttribute('data-id'))
	})
})

function addBasket(id) {
	let idItemBasket = basket.querySelector('.cart__product')
	if (idItemBasket.getAttribute('data-id') === id) {
	} else {
	}
}
