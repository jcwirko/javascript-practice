const http = require('http');

const server = http.createServer((req, res) => {
    const url = req.url;

    if (url === '/') {
        res.setHeader('Content-Type', 'text/html');
        res.write(`
             <html>
                <head>
                    <title>Assignment 1</title>
                </head>
                <body>
                       <form action="/create-user" method="POST">
                            <input type="text" name="username"/>
                            <button>Send</button>
                        </form>
                </body>
             </html>
        `);
        res.end();
    }

    if (url === '/users') {
        res.setHeader('Content-Type', 'text/html');
        res.write(`
             <html>
                <head>
                    <title>Assignment 1</title>
                </head>
                <body>
                       <ul>
                           <li> USER 1  </li>
                           <li> USER 2  </li>
                        </ul>
                </body>
             </html>
        `);
        res.end();
    }

    if (url === '/create-user') {
        const body = [];

        req.on('data', chunk => {
            body.push(chunk);
            console.log(chunk);
        });

        req.on('end', () => {
           const parsedBody = Buffer.concat(body).toString();
           console.log(parsedBody.split('=')[1]);
        });

        res.statusCode = 302;
        res.setHeader('Location', '/');
        res.end();
    }
});

server.listen(3000);