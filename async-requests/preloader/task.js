const url = 'https://netology-slow-rest.herokuapp.com'
const animation = document.getElementById('loader')
const box = document.getElementById('items')
const boxElement = document.querySelector('.item')
let xhr = new XMLHttpRequest()

xhr.open('GET', url)
xhr.responseType = 'json'
xhr.send()
xhr.addEventListener('loadend', () => {
	animation.classList.remove('loader_active')
	let valuteObj = xhr.response.response.Valute
	for (let key in valuteObj) {
		let index = valuteObj[key]
		let cloneBoxElement = boxElement.cloneNode()
		cloneBoxElement.innerHTML = `
   <div class="item__code">${index.CharCode}</div>
   <div class="item__value">${index.Value}</div>
   <div class="item__currency">руб.</div>`
		box.appendChild(cloneBoxElement)
	}
})
