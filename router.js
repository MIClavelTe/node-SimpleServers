var profile = require('./profile.js');
var render = require('./render.js');

function userRoute(req, res) {
    var username = req.url.replace('/', "");
    if (username.length > 0) {
      res.setHeader('Content-Type', 'text/plain');
      render.view('header', {}, res);

      var student = new profile(username)
      student.on('end', function(profileJSON) {
        var values = {
          avatarUrl: profileJSON.gravatar_url,
          username: profileJSON.profile_name,
          badges: profileJSON.badges.length,
          points: profileJSON.points.total
        }
        // res.write(values.username + '\n');
        // res.end(`${values.username} has ${values.badges} badge(s), ${values.points} points`);
        render.view('profile', values, res);
        render.view('footer', {}, res);
        res.end();

      });

      student.on('error', function(error) { 
        render.view('error', {error}, res);
        render.view('search', {}, res);
        render.view('footer', {}, res);
        res.end();
      });
    }
}

function homeRoute(req, res) {
    if (req.url == "/") {
      res.setHeader('Content-Type', 'text/plain');
      render.view('header', {}, res);
      render.view('search', {}, res);
      render.view('footer', {}, res);
      res.end();
    }  
  }

  module.exports.user = userRoute;
  module.exports.home = homeRoute;
  