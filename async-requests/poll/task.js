const url = 'https://netology-slow-rest.herokuapp.com/poll.php'
const title = document.getElementById('poll__title')
const answer = document.getElementById('poll__answers')
let xhr = new XMLHttpRequest()

xhr.open('GET', url)
xhr.responseType = 'json'
xhr.send()
xhr.addEventListener('loadend', () => {
	let data = xhr.response.data
	title.innerText = data.title
	data.answers.forEach(element => {
		answer.appendChild(btn)
	})
})
