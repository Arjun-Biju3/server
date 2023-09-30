var http=require('http')
var fs=require('fs')
http.createServer(function(req,res){
    if(req.url==='/'){
        fs.readFile('index.html',function(err,data){
        
            res.writeHead(200,{'Content-Type':'text/html'})
            res.write(data)
            res.end()
        })
 }
 else if(req.url==='/login')
 { 
    res.writeHead(200,{'Content-Type':'text/html'})
    res.write('hello1')
    res.end()

 }
 else{
    res.writeHead(404,{'Content-type':'text/html'})
    res.write('error')
    res.end()
 }
}


).listen(7001)
