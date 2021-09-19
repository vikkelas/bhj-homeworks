const windowElement = document.getElementById('task__input')
const arrayMessage = document.getElementById('tasks__list')
const btnAdd = document.getElementById('tasks__add')

windowElement.addEventListener('keydown', e => {
	if (e.key === 13 && windowElement.trim() !== '') {
		addElement()
		e.preventDefault()
	}
})

btnAdd.addEventListener('click', function (e) {
	if (windowElement.value.trim() !== '') {
		addElement()
	}
	e.preventDefault()
})

arrayMessage.addEventListener('click', e => {
	e.target.closest('div .task').remove()
})

function addElement() {
	arrayMessage.innerHTML += `
   <div class="task">
      <div class="task__title">${windowElement.value.trim()}</div>
      <a href="#" class="task__remove">&times;</a>
   </div>`
	windowElement.value = ''
}
