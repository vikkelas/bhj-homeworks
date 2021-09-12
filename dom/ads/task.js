const activeClass = [...document.querySelectorAll('.rotator__case')]
let index = 0
let intervalChange = activeClass[(index = 0)].getAttribute('data-speed')

let timer = setTimeout(function changeClass() {
	activeClass[index].classList.remove('rotator__case_active')
	if (index >= 0 && index < activeClass.length - 1) {
		let activeItem = activeClass[index + 1]
		changeItem(activeItem)
		index++
	} else if (index == activeClass.length - 1) {
		index = 0
		let activeItem = activeClass[index]
		changeItem(activeItem)
	}
	timer = setTimeout(changeClass, intervalChange)
}, intervalChange)

function changeItem(item) {
	item.classList.add('rotator__case_active')
	item.style.color = item.getAttribute('data-color')
	intervalChange = activeClass[index].getAttribute('data-speed')
}
