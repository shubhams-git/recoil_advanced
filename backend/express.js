const cors = require('cors')
const express = require('express')
const app = express();
const PORT = 3000

app.use(cors())
app.use(express.json())

app.get('/notifications',(req,res)=>{
    console.log(`Received Req`)
    return res.json({
        network: 40,
        jobs: 60,
        messages: 30,
        notifications: 95
    })
})

app.listen(PORT, ()=>{
    console.log(`App listening on port: ${PORT}`)
})