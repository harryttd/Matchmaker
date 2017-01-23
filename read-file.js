const jsonfile = require('jsonfile');
const file = './db.json';
jsonfile.readFile(file, (err, obj) => {
  if (err) throw err;
  obj.boys[0].matches = [];
  jsonfile.writeFile(file, obj, {spaces: 2}, function (e) {
    console.error(e);
  });
});
