// 1.
// class Cars {
//   constructor(options) {
//     this.model = options.model
//     this.color = options.color
//     this.wheels = options.wheels
//   }
//   start() {
//     console.log('Машина заведена');
//   }
// }

// class Lexus extends Cars {
//   constructor(options) {
//     super(options)
//     this.lights = options.lights
//   }
// }

// const lexus = new Lexus({
//   model: 'Lexus',
//   color: 'black',
//   wheels: 4,
//   lights: true,
// })
// lexus.start()
// console.log(lexus);


// class Mers extends Cars {
//   constructor(options) {
//     super(options)
//     this.seats = options.seats
//   }
// }
// const mers = new Mers({
//   model: 'Mers',
//   color: 'White',
//   wheels: 4,
//   seats: 5
// })
// mers.start()
// console.log(mers);


// class BMW extends Cars {
//   constructor(options) {
//     super(options)
//     this.doors = options.doors
//   }
// }
// const bmw = new BMW({
//   model: 'BMW',
//   color: 'Green',
//   wheels: 4,
//   doors: 4
// })
// bmw.start()
// console.log(bmw);



// 2.
// const svetofor = String(prompt('Смотри на сфетофор!')).trim().toLowerCase()

// class Component {
//   constructor(selector) {
//     this.$element = document.querySelector(selector)
//   }
//   hide() {
//     this.$element.style.display = 'none'
//   }
//   show() {
//     this.$element.style.display = 'flex'
//   }
// }

// class Block extends Component {
//   constructor(options) {
//     super(options.selector);
//     this.$element.style.width = this.$element.style.height = options.size + 'px'
//     this.$element.style.background = options.bgColor
//     this.$element.style.borderRadius = options.radius + 'px'
//     this.$element.innerText = options.text
//     this.$element.style.justifyContent = "center"
//     this.$element.style.alignItems = "center"
//     this.$element.style.fontSize = '25px'
//   }
// }

// const circle1 = new Block({
//   selector: '.box_1',
//   size: 150,
//   bgColor: 'red',
//   radius: 90,
//   text: "STOP",
// })
// const circle2 = new Block({
//   selector: '.box_2',
//   size: 150,
//   bgColor: 'yellow',
//   radius: 90,
//   text: "BE READY"
// })
// const circle3 = new Block({
//   selector: '.box_3',
//   size: 150,
//   bgColor: 'green',
//   radius: 90,
//   text: "GO"
// })

// let object = {
//   red: 'красный',
//   yellow: 'желтый',
//   green: 'зеленый'
// }
// switch (svetofor) {
//   case object.red:
//     alert('STOP!')
//     circle1.show()
//     circle2.hide()
//     circle3.hide()
//     break;
//   case object.yellow:
//     alert('BE READY!')
//     circle1.hide()
//     circle2.show()
//     circle3.hide()
//     break;
//   case object.green:
//     alert('GO!')
//     circle1.hide()
//     circle2.hide()
//     circle3.show()
//     break;
//   default:
//     alert('ВВЕДИ ЦВЕТ ИЛИ ПРАВИЛЬНО!')
//     circle1.hide()
//     circle2.hide()
//     circle3.hide()
//     break;
// }

// if (svetofor.trim().toLowerCase() === object.red) {
//   document.querySelector('.box_1')
//   alert('STOP!')
//   circle1.show()
//   circle2.hide()
//   circle3.hide()
// } else if (svetofor.trim().toLowerCase() === object.yellow) {
//   document.querySelector('.box_2')
//   alert('BE READY!')
//   circle1.hide()
//   circle2.show()
//   circle3.hide()
// } else if (svetofor.trim().toLowerCase() === object.green) {
//   document.querySelector('.box_3')
//   alert('GO!')
//   circle1.hide()
//   circle2.hide()
//   circle3.show()
// } else {
//   alert('ВВЕДИ ЦВЕТ ИЛИ ПРАВИЛЬНО!')
//   circle1.hide()
//   circle2.hide()
//   circle3.hide()
// }