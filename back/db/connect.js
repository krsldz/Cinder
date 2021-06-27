const mongoose = require('mongoose')
const { dbConnectionURL, options } = require('./config')

function connect() {
  mongoose.connect(dbConnectionURL, options, (err) => {
    if (err) console.log('ERROR WITH DB')

    console.log('Connect to DB')
  })
}

function disconnect() {
  mongoose.disconnect()
}

module.exports = { connect, disconnect }
