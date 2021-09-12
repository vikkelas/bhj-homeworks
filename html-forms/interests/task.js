const checkBox = [...document.querySelectorAll('.interest__check')]

checkBox.forEach(element => {
	element.addEventListener('click', function () {
		if (this.closest('ul .interests') == null) {
			let item = [
				...this.closest('li').querySelector('ul').querySelectorAll('input'),
			]
			item.forEach(element => {
				element.checked = this.checked
			})
		}
	})
})
