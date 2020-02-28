const express = require('express')
const { calibrate, stopMotor, deploy } = require('./step')
const app = express()

app.use(express.json())

app.get('/status', (req, res) => {
    res.send('OK')
})

app.post('/calibrate', async (req, res) => {
    const { steps, direction } = req.body
    await calibrate({ steps, direction })
    res.end()
})

app.get('/stop', async (req, res) => {
    try {
        await stopMotor()
        res.send('Stopped')
    } catch (error) {
        res.send('Motor is not moving. Cannot stop.')
    }
})

app.get('/deploy', async (req, res) => {
    await deploy()
    res.send('Deployed!')
})

app.listen(80, () => {
    console.log('Server started')
})