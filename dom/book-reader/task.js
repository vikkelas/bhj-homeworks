const book = document.getElementById('book')
const btnFs = [...document.querySelectorAll('.font-size')]
const btnCt = [...document.querySelectorAll('.book__control_color a')]
const btnBg = [...document.querySelectorAll('.book__control_background a')]
let indexFs = null
let indexCt = null
let indexBg = null

btnFs.forEach(element => {
	element.addEventListener('click', changeItem)
})

btnCt.forEach(element => {
	element.addEventListener('click', changeColorText)
})

btnBg.forEach(element => {
	element.addEventListener('click', changeColorBg)
})

function changeItem(event) {
	btnFs.forEach(element => {
		element.classList.remove('font-size_active')
	})
	this.classList.add('font-size_active')
	book.classList.remove('book_fs-' + indexFs)
	book.classList.add('book_fs-' + this.dataset.size)
	indexFs = this.dataset.size
	event.preventDefault()
}

function changeColorText(event) {
	btnCt.forEach(element => {
		element.classList.remove('color_active')
	})
	this.classList.add('color_active')
	book.classList.remove('book_color-' + indexCt)
	book.classList.add('book_color-' + this.dataset.textColor)
	indexCt = this.dataset.textColor
	event.preventDefault()
}

function changeColorBg(event) {
	btnCt.forEach(element => {
		element.classList.remove('color_active')
	})
	this.classList.add('color_active')
	book.classList.remove('book_bg-' + indexBg)
	book.classList.add('book_bg-' + this.dataset.bgColor)
	indexBg = this.dataset.bgColor
	event.preventDefault()
}
