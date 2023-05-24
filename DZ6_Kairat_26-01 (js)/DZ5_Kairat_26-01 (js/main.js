const input = document.querySelector('#input')
const createButton = document.querySelector('#create_button')
const todoList = document.querySelector('#todo_list')

const createTodo = () => {
  if (input.value.trim() === '') {
    input.value = ''
    return alert('Нельзя вводить пустоту или пробелы')
  }
  const div = document.createElement('div')
  const text = document.createElement('h3')
  const divButtons = document.createElement('div')
  const remove = document.createElement('button')
  const edit = document.createElement('button')

  div.setAttribute('class', 'block_text')
  divButtons.setAttribute('class', 'div_buttons')
  remove.setAttribute('class', 'remove')
  edit.setAttribute('class', 'edit')

  remove.innerText = 'DELETE'
  remove.onclick = () => div.remove()

  edit.innerText = 'EDIT'
  edit.onclick = () => {
    const editedText = prompt(`EDITED: ${text.innerText}`).trim()
    editedText === '' ? alert('Нельзя вводить пустоту или пробелы') : text.innerText = editedText
  }

  text.innerText = input.value
  div.append(text, divButtons)
  divButtons.append(remove, edit)
  todoList.prepend(div)
  input.value = ''
}

createButton.onclick = () => createTodo()
window.onkeydown = (event) => {
  if (event.keyCode === 13) {
    createTodo()
  }
}