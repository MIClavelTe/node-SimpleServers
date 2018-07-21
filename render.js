var fs = require('fs');

function view(template, values, response) {
    var fileContents = fs.readFileSync('Views/' + template + '.html');
    response.write(fileContents);
}

module.exports.view = view;