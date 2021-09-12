const btnChat = document.querySelector('.chat-widget__side')
const chatWindow = document.querySelector('.chat-widget')
const messageWindow = document.getElementById('chat-widget__input')
const messages = document.querySelector('.chat-widget__messages')
let arrMessagesUser = []
let index = null
let arrMessagesBot = [
	'Привет',
	'Как дела?',
	'Сейчас мы не можем вам ответить',
	'Добрый вечер я диспетчер',
	'Это виннипух на связи',
]

btnChat.addEventListener('click', () =>
	chatWindow.classList.add('chat-widget_active')
)

messageWindow.addEventListener('keydown', function (e) {
	if (e.keyCode === 13) {
		arrMessagesUser.push({
			massege: messageWindow.value,
			time: new Date(),
		})
		messageWindow.value = ''
		index++

		sendMessage()
		sendMessageBot()
	}
})

function sendMessage() {
	messages.innerHTML += `<div class="message message_client">
	<div class="message__time"></div>
	<div class="message__text"></div>
</div>`
	const text = [...document.querySelectorAll('.message__text')]
	const timeMessage = [...document.querySelectorAll('.message__time')]
	text[index - 1].textContent = arrMessagesUser[index - 1].massege
	timeMessage[index - 1].textContent =
		arrMessagesUser[index - 1].time.getHours() +
		':' +
		arrMessagesUser[index - 1].time.getMinutes()
}

function sendMessageBot() {
	let time = new Date()
	messages.innerHTML += `<div class="message">
	<div class="message__time"></div>
	<div class="message__text"></div>
</div>`
	const text = [...document.querySelectorAll('.message__text')]
	const timeMessage = [...document.querySelectorAll('.message__time')]
	text[index].textContent =
		arrMessagesBot[Math.floor(Math.random() * arrMessagesBot.length)]
	timeMessage[index].textContent = time.getHours() + ':' + time.getMinutes()
}
