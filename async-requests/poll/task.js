const url = 'https://netology-slow-rest.herokuapp.com/poll.php'
let title = document.getElementById('poll__title')
let answer = document.getElementById('poll__answers')
let id

const firstReq = {
	type: 'GET',
	url: url,
	callback: addSurvey,
	headerType: 'Content-type',
	headerValue: 'application/x-www-form-urlencoded',
}

createRequest(firstReq)

function createRequest(options = {}) {
	let xhr = new XMLHttpRequest()
	xhr.open(options.type, options.url)
	xhr.setRequestHeader(options.headerType, options.headerValue)
	xhr.responseType = 'json'
	xhr.send(options.send)
	xhr.addEventListener('loadend', () => {
		options.callback(xhr.response)
	})
}

function addSurvey(index) {
	title.innerText = index.data.title
	let answers = [...index.data.answers]
	id = index.id
	for (let i = 0; i < answers.length; i++) {
		let button = document.createElement('button')
		button.classList.add('poll__answer')
		button.innerHTML = answers[i]
		answer.appendChild(button)
	}
}

answer.addEventListener('click', e => {
	alert('спасибо ваш голос учтен!')
	let clickAnswer = e.target.textContent
	let secondReq = {
		type: 'POST',
		url: url,
		callback: addSurvey,
		headerType: 'Content-type',
		headerValue: 'application/x-www-form-urlencoded',
		send: 'vote=' + id + '&' + 'answer=' + clickAnswer,
		callback: getStatistics,
	}
	createRequest(secondReq)
})

function getStatistics(index) {
	answer.innerHTML = ''
	const answerStatics = [...index.stat]
	answerStatics.forEach(element => {
		const statisticsBox = document.createElement('div')
		statisticsBox.textContent = element.answer + ': ' + element.votes
		answer.appendChild(statisticsBox)
	})
}
