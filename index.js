const express = require('express')

const app = express()
const port = process.env.PORT || 3000


app.use(express.static('public'))

app.get('/', (req, res) => res.send('Hello World!'))
app.get('/hello', (req, res) => res.send('Hello'))

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`)) 


