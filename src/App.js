const Blockchain = require('./Blockchain')

const blockchain = new Blockchain(6)

blockchain.addNewBlock({ firstData: 123 })
console.log('Hash bloco 1: ' + blockchain.blocks[1].hash)

// blockchain.addNewBlock({ firstData: 321 })
// console.log('Hash bloco 2: ' + blockchain.blocks[2].hash)

console.log(blockchain.isValid()) //true





