const url = 'https://netology-slow-rest.herokuapp.com/poll.php'
let title = document.getElementById('poll__title')
let answer = document.getElementById('poll__answers')
let xhr = new XMLHttpRequest()

xhr.open('GET', url)
xhr.responseType = 'json'
xhr.send()
xhr.addEventListener('loadend', () => {
	console.log(xhr.response)
	let data = xhr.response.data
	title.innerText = data.title
	for (let i = 0; i < data.answers.length; i++) {
		let creatAnswer = document.createElement('button')
		creatAnswer.classList.add('poll__answer')
		creatAnswer.innerHTML = data.answers[i]
		answer.appendChild(creatAnswer)
	}

	answer.addEventListener('click', () => {
		alert('Ваш голос учтен')
		// let idAnswer = data.answers.indexOf(e.target.innerHTML)
		// let idArr = xhr.response.id
	})
})
