var http=require('http')
var fs=require('fs')
var url=require('url')
http.createServer(function(req,res)
{

    var q=url.parse(req.url,true)
      //console.log( q.pathname)

    if(q.pathname==='/')
    {
        fs.readFile('index.html',function(err,data)
        {
            res.writeHead(200,{'Content-type':'text/html'})
            res.write(data)
            res.end()
        })
    }
    else if(q.pathname==='/signup')
    {
        fs.readFile('form.html',function(err,data)
        {
            res.writeHead(200,{'Content-type':'text/html'})
            res.write(data)
            res.end()
        })
        
    }
    else if(q.pathname==='/signupaction')
    {
            console.log(q.query)
            res.write('<h1>'+q.query.name+'</h1>')
            res.end()
        
    }
    else{
        res.writeHead(404,{'Content-type':'text/html'})
        res.write('error 404')
        res.end()
    }
}).listen(7000,()=>console.log('server started'))