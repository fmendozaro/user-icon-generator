let http = require('http');
let fs = require('fs');
let genders = ['men', 'women'];

http.createServer(function (req, res) {
    let rndNumber = Math.floor(Math.random() * 100);
    let rndGender = genders[Math.floor(Math.random() * 2)];
    let baseUrl = './icons/'+rndGender+'/'+rndNumber+'.jpg';
    let img = fs.readFileSync(baseUrl);
    res.writeHead(200, {'Content-Type': 'image/jpeg'});
    res.end(img, 'binary');
}).listen(8080);

console.log('Server running at http://localhost:8080/');