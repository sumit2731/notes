const fs = require("fs");

const requestHandler = (req,res) => {
    const url = req.url;
    const method= req.method;
    if (url === '/') {
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title>My First Page</title></head>');
        res.write('<body><form action="/message" method="post"><input type="text" name="message"><button type="submit">send</button></form></body>');
        res.write("</html>");
        return res.end();
    }
    if (url === '/message' && method === 'POST') {
        const body = [];
        req.on('data', (chunk) => {
            body.push(chunk);
        });
        return req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            console.log(parsedBody);
            const message = parsedBody.split('=')[1];
            fs.writeFile("message.txt", message, (err) => {
                res.statusCode = 302;
                res.setHeader('LOCATION', '/sood');
                return res.end();
            });
        });

    }

    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>My First Page</title></head>');
    res.write('<body><h1>Hello from my nodejs Server</h1></body>');
    res.write("</html>");
    res.end();
};

module.exports = requestHandler;

// module.exports = {
//     handler: requestHandler,
//     someText: 'somestring'
// };

// module.exports.handler = requestHandler;
// module.exports.someText = 'SomeString';

// exports.handler = requestHandler;
// exports.someText = 'SomeString';
