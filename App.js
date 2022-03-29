// устанавлюємо модулі
const http = require('http');
const url = require('url');

// створюємо сервер
http.createServer(function (req, res) {
    let urlParts = url.parse(req.url); // отримуємо дані url запиту
    // console.log(urlParts);
    console.log('==========================');
    console.log(urlParts.pathname); // отримуєм частину шляху запиту
    console.log('==========================');
    if (req.method == 'GET') {
        // в залкжності від шляху запиту вирішуємо яку ф-ю запиту виконати
        switch (urlParts.pathname) {
            case "/":
                homepage(req, res);
                break;
            case "/about":
                about(req, res);
                break;
            default:
                page404(req,res);
                break;
        }
    }
    else if (req.method == 'POST') {
        switch (urlParts.pathname) {
            case "/about":
                about2(req, res);
                break;
            default:
                page404(req,res);
                break;
        }
    }
    else {
        page404(req,res);
    }

}).listen(3000);
console.log("Server running at http://localhost:3000/");

// функції запиту
function homepage(req, res) {
    res.end("homepage");
}
function about(req, res) {
    res.end("about");
}
function about2(req, res) {
    res.end("about post");
}
function page404(req, res) {
    res.end("404");
}