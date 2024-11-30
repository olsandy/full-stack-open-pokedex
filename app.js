const express = require('express')
const app = express()

// get the port from env variable
const PORT = process.env.PORT || 5000

app.use(express.static('dist'))

app.get('/version', (req, res) => {
  res.send('11.17.1') // todo: remove or modify for compatibility with tags
})

app.get('/health', (req, res) => {
  res.send('ok')
})
// eslint-disable-next-line no-constant-condition
if (true) throw 'simulating build error...  '
app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`server started on port ${PORT}`)
})
