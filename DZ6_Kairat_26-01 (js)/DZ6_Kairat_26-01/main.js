const input = document.querySelector('#input')
const button = document.querySelector('#add_string')
const innerText = document.querySelector('#inner_text')

// const create = () => {
//   const word = input.value
//   innerText.innerHTML = word.split('').reverse().join('')
// }

const create = () => {
  const word = input.value
  innerText.innerHTML = word.split('').reverse().join('')
}
button.onclick = () => create()

window.onkeydown = (event) => {
  if (event.keyCode === 13) {
    create()
  }
}
