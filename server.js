const express = require('express')
const app = express()
const port = 3000

app.post('/status', (req, res) => {

    console.log("/status request body: ", req.body)

    res.send('ok')
})


app.post('/pay', (req, res) => {

    console.log("/pay request body: ", req.body);

    res.send('ok')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})