var input = document.querySelector('#input')
var createButton = document.querySelector('#create_button')
var todoList = document.querySelector('#todo_list')

const createTodo = () => {
  if (input.value.trim() === '') {
    input.value = ''
    return alert('Нельзя вводить пустоту или пробелы')
  }
  var div = document.createElement('div')
  var text = document.createElement('h3')
  var divButtons = document.createElement('div')
  var remove = document.createElement('button')
  var edit = document.createElement('button')

  div.setAttribute('class', 'block_text')
  divButtons.setAttribute('class', 'div_buttons')
  remove.setAttribute('class', 'remove')
  edit.setAttribute('class', 'edit')

  remove.innerText = 'DELETE'
  remove.onclick = () => div.remove()

  edit.innerText = 'EDIT'
  edit.onclick = () => {
    var editedText = prompt(`EDITED: ${text.innerText}`).trim()
    editedText === '' ? alert('Нельзя вводить пустоту или пробелы') : text.innerText = editedText
  }

  text.innerText = input.value
  divButtons.append(remove, edit)
  div.append(text, divButtons)
  todoList.prepend(div)
  input.value = ''
}

createButton.onclick = () => createTodo()
window.onkeydown = (event) => {
  if (event.keyCode === 13) {
    createTodo()
  }
}