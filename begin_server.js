var http=require('http')
http.createServer(function(req,res){
    if(req.url==='/'){
     res.write('hello')
     res.end()
 }
 else if(req.url==='/login')
 {
    res.write('hello1')
    res.end()

 }
}


).listen(7001)
