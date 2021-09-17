const windowElement = document.getElementById('task__input')
const arrayMessage = document.getElementById('tasks__list')
const btnAdd = document.getElementById('tasks__add')

windowElement.addEventListener('keydown', e => {
	if (e.keyCode === 13 && windowElement.value !== '') {
		addElement()
	}
})

btnAdd.addEventListener('click', function () {
	if (windowElement.value !== '') {
		addElement()
	}
})

arrayMessage.addEventListener('click', e => {
	e.target.closest('div .task').remove()
})

function addElement() {
	arrayMessage.innerHTML += `
   <div class="task">
      <div class="task__title">${windowElement.value}</div>
      <a href="#" class="task__remove">&times;</a>
   </div>`
	windowElement.value = ''
}
