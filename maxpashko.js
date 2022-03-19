const positions = [
  {
    price: 23.87,
    amount: 321,
  },
  {
    price: 28.83,
    amount: 29,
  },
  {
    price: 22.93,
    amount: 492,
  },
  {
    price: 19.92,
    amount: 49,
  },
  {
    price: 29.93,
    amount: 293,
  }
]

let increment = 0
let decrement = 0

positions.map(({ price, amount }) => {
  increment += price * amount
  decrement += amount
})

console.log(increment / decrement)
