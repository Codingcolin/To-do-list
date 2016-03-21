function greeting() {
	var userInput = document.getElementById('userInput').value
	var text = document.createTextNode(userInput)
	var newLi = document.createElement('li')
	newLi.appendChild(text)
	document.getElementById('toDoList').appendChild(newLi)

	console.log(newLi)
}
