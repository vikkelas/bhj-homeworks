const promptLink = [...document.querySelectorAll('.has-tooltip')]
let itemPromp = document.createElement('div')
itemPromp.setAttribute('class', 'tooltip')
itemPromp.style.left = 0
itemPromp.style.top = 0

document.body.addEventListener('click', e => {
	let clickBtn = e.target
	clickBtn.appendChild(itemPromp)
	clickBtn.children[0].innerHTML = clickBtn.getAttribute('title')
	clickBtn.children[0].classList.add('tooltip_active')
	console.log(clickBtn.children[0].innerHTML)
	e.preventDefault()
})
