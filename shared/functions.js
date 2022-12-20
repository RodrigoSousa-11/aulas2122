
var fs = require('fs');

function lerMenu(ficheiro_menu) {
    return new Promise(function (resolve, reject) {
    fs.readFile(ficheiro_menu, 'utf8', function (err, data) {
    if (err) reject(err);
    if (data ==
    "" || data == null) { resolve([]); return;
    obj = JSON.parse(data);
    resolve(obj);
    }
    });
    });
    }

    //---------------------------------------------------------

    function gravarMenu(ficheiro_menu, data) {
fs.writeFile(ficheiro_menu, JSON.stringify(data), (err) => {
if (err != null) console.log(err);
console.log("Successfully Written to File.");
});
}

