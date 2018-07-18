function userRoute(req, res) {
    var username = req.url.replace('/', "");
    if (username.length > 0) {
      res.setHeader('Content-Type', 'text/plain');
      res.write('Header\n');
      res.write(username + '\n');
      res.end('End\n');
    }
}

function homeRoute(req, res) {
    if (req.url == "/") {
      res.setHeader('Content-Type', 'text/plain');
      res.write('Header\n');
      res.end('End\n');
    }  
  }