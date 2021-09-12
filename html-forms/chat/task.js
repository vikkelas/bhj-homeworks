const btnChat = document.querySelector('.chat-widget__side')
const chatWindow = document.querySelector('.chat-widget')
const messageWindow = document.getElementById('chat-widget__input')
const messages = document.querySelector('.chat-widget__messages')
const scrollBox = document.querySelector('.chat-widget__messages-container')
let arrMessagesUser = []
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

messageWindow.addEventListener('keydown', e => {
	if (e.keyCode === 13 && messageWindow.value !== '') {
		arrMessagesUser.push(messageWindow.value)
		messageWindow.value = ''
		sendMessage()
		sendMessageBot()
	}
})

function sendMessage() {
	messages.innerHTML += `<div class="message message_client">
	<div class="message__time">${new Date().toTimeString().slice(0, 5)}</div>
	<div class="message__text">${arrMessagesUser[arrMessagesUser.length - 1]}</div>
</div>`
}

function sendMessageBot() {
	messages.innerHTML += `<div class="message">
	<div class="message__time">${new Date().toTimeString().slice(0, 5)}</div>
	<div class="message__text">${
		arrMessagesBot[Math.floor(Math.random() * arrMessagesBot.length)]
	}</div>
</div>`
}
