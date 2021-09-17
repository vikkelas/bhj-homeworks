const btnChanges = [...document.querySelectorAll('.product__quantity-control')]
const btnAddBasket = [...document.getElementsByClassName('product__add')]
const basket = document.querySelector('.cart__products')
const titlPage = document.querySelector('.cart')

// add basket
btnAddBasket.forEach(element => {
	element.addEventListener('click', () => {
		let basketItem = [...basket.children]
		let itemId = element.closest('.product')
		let itemImg = itemId.children[1].getAttribute('src')
		let itemAmount = +itemId.querySelector('.product__quantity-value').innerHTML
		let searchItem = basketItem.findIndex(
			index => index.dataset.id === itemId.dataset.id
		)
		if (searchItem === -1) {
			basket.innerHTML += `<div class="cart__product" data-id=${itemId.dataset.id}>
		<img class="cart__product-image" src=${itemImg}>
		<div class="cart__product-count">${itemAmount}</div>
		<div class="cart__delet">&times;</div>
  </div>`
		} else {
			let basketAmount =
				+basketItem[searchItem].children[1].innerHTML + itemAmount
			basketItem[searchItem].children[1].innerHTML = basketAmount
		}
	})
})

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
