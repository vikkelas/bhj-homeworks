const block = [...document.querySelectorAll('.reveal')]

window.onscroll = function () {
	block.forEach(element => {
		if (window.innerHeight >= element.getBoundingClientRect().bottom) {
			element.classList.add('reveal_active')
		} else {
			element.classList.remove('reveal_active')
		}
	})
}
