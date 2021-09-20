const url = 'https://netology-slow-rest.herokuapp.com/upload.php'
const form = document.getElementById('form')

form.addEventListener('submit', e => {
	const formData = new FormData(form)
	const xhr = new XMLHttpRequest()
	let progress = document.getElementById('progress')
	xhr.open('POST', url)
	xhr.upload.onprogress = e => {
		progress.setAttribute('value', e.loaded / e.total)
	}
	xhr.send(formData)
	e.preventDefault()
})
