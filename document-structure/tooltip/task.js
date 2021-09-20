let tips = document.querySelectorAll('.has-tooltip')
let body = document.getElementsByTagName('body')
let element = document.createElement('div')
element.classList.add('tooltip')
let prevTop
let prevLeft

for (let tip of tips) {
	let textTip = tip.getAttribute('title')
	tip.onclick = () => {
		let coordinats = tip.getBoundingClientRect()
		let top = coordinats.bottom + 2
		let left = Math.floor(coordinats.left)

		if (prevTop && top === prevTop && left === prevLeft) {
			element.classList.toggle('tooltip_active')
			return false
		}
		prevTop = top
		prevLeft = left
		element.textContent = textTip
		element.setAttribute('style', `left:${left}px;  top:${top}px;`)
		element.classList.add('tooltip_active')
		document.body.append(element)
		return false
	}
}
