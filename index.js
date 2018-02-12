const express = require('express')
const URStateData = require('../ur-state-receiver')
const app = express()
const urStateDataInst = new URStateData(30003, '192.168.1.106')

var myURstate = {}

urStateDataInst.on('data', (data) => (myURstate = data))

urStateDataInst.on('error', (exception) => console.log(exception))

urStateDataInst.on('drain', () => console.log('drain'))

urStateDataInst.on('timeout', () => console.log('timeout'))

urStateDataInst.on('close', () => console.log('close'))

app.get('/state', (req, res) => res.send(myURstate))

app.use(express.static('public'))

app.listen(80, () => console.log('UR state is on port 80!'))
