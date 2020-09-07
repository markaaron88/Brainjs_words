const brain = require('brain.js')
//Bring in json data
const data = require('./data.json')

//Long short term memory
const network = new brain.recurrent.LSTM()

//map our json file

const jsonData = data.map(item => ({
  input: item.text,
  output: item.category
}))

network.train(jsonData, {
  iterations: 2000
})

const output = network.run('I hate everything')

console.log(`Category: ${output}`)
