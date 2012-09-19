var fs = require('fs'),
    path = require('path');

var chkdir = path.join(__dirname, '.');

  try {
    var files = fs.readdirSync(chkdir);
    console.log(files);
  } catch (e) {
    console.log(e);
    console.log(chkdir);
  }

