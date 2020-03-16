const message = [
  "Juan", 
  "Ana",
  "Nicol",
  "Marra"
]

const randomMsg = () => {
  const message = message[Math.floor(Math.random() * message.length)]
  console.log(message)
}

module.exports = { randomMsg }