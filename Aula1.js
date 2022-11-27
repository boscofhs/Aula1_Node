var http = required('http');
http.createServer(function (req, res){

        res.write('Brasil 2 x 0 Sérvia');
        res.end('Bom Dia!');

}).listen(3000);
