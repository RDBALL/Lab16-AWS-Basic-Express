const express = require('express')
const app = express() 
const PORT = process.env.PORT || 8081 

app.get('/', (req, res) => {
    res.send('Server is up and running')
});

app.get('/hello', (req, res) => {
    res.json({message: 'Hello, you found my test route for my basic server'})
});

app.listen(PORT, () => {
  console.log('Server is running...')
})