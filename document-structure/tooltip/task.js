const promptLink = [...document.querySelectorAll('.has-tooltip')]
let itemPromp = document.createElement('div')
itemPromp.setAttribute('class', 'tooltip')

promptLink.forEach(element => {
	element.addEventListener('click', e => {
		let clickBtn = e.target
		let position = clickBtn.getBoundingClientRect()
		itemPromp.style.left = position.left + 'px'
		itemPromp.style.top = position.top + 20 + 'px'
		clickBtn.appendChild(itemPromp)
		clickBtn.children[0].innerHTML = clickBtn.getAttribute('title')
		let activeItem = [...document.querySelectorAll('.tooltip')]
		let active = [...document.querySelectorAll('.tooltip_active')]
		if ((active.length = 0)) {
			clickBtn.children[0].classList.add('tooltip_active')
		} else {
			activeItem.forEach(element => {
				element.classList.remove('tooltip_active')
				clickBtn.children[0].classList.add('tooltip_active')
			})
		}
		e.preventDefault()
	})
})
