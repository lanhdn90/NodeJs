// Hàm require có tác dụng là import một module vào tệp bạn đang xử lý
const http = require('http')

// Đoạn code này giúp chúng ta khởi tạo một server.
// Hàm này có tham số là một hàm số với hai tham số: request và response
const server = http.createServer((req,res)=>{
    if(req.url === '/about'){
        res.end('The about page')
    }else if(req.url === '/contact'){
        res.end('The contact page')
    }else if(req.url ==='/'){
        res.end('The Home page')
    }else{
        res.writeHead(404)
        res.end('Page not found')
    }
})
server.listen(3000)