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
		let imgItem = idItem.children[1].getAttribute('src')
		let amountProduct = idItem.querySelector(
			'.product__quantity-value'
		).innerHTML
		addBasket(idItem.getAttribute('data-id'), imgItem, amountProduct)
	})
})

function addBasket(id, img, amount) {
	let basketItem = [...basket.querySelectorAll('.cart__product')]
	if (basket.children.length == 0) {
		basket.innerHTML += `<div class="cart__product" data-id=${id}>
			<img class="cart__product-image" src=${img}>
			<div class="cart__product-count">${amount}</div>
	  </div>`
	} else {
		consol.log(
			basketItem.findIndex(function (item, id) {
				item.getAttribute('data-id') === id
			})
		)
	}
}
