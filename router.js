var profile = require('./profile.js');

function userRoute(req, res) {
    var username = req.url.replace('/', "");
    if (username.length > 0) {
      res.setHeader('Content-Type', 'text/plain');

      var student = new profile(username)
      student.on('end', function(profileJSON) {
        var values = {
          avatarUrl: profileJSON.gravatar_url,
          username: profileJSON.profile_name,
          badges: profileJSON.badges.length,
          points: profileJSON.points.total
        }
        res.write(values.username + '\n');
        res.end(`${values.username} has ${values.badges} badge(s), ${values.points} points`);

      });

      // student.on('error', function(error) { 
      // });
    }
}

function homeRoute(req, res) {
    if (req.url == "/") {
      res.setHeader('Content-Type', 'text/plain');
      res.write('Header\n');
      res.end('End\n');
    }  
  }

  module.exports.user = userRoute;
  module.exports.home = homeRoute;
  