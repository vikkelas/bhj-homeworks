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
		clickBtn.children[0].classList.toggle('tooltip_active')
		e.preventDefault()
	})
})
