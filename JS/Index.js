// Hàm require có tác dụng là import một module vào tệp bạn đang xử lý
const { response } = require('express')
const express = require('express')
const path = require('path')

const app = express()

app.use(express.static('public'))

app.listen(3000,()=>{
    console.log("App listening on port 3000")
})

app.get("/about",(require, response)=>{
    response.send("The About Page")
})

app.get("/Home",(require, response)=>{
    response.send("The Home Page")
})
 
// Để phàn hồi lại client một file html trong ExpressJS, bạn sử dụng sendFile api
app.get('/hello', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'index.html')) 
})