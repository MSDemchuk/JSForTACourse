const http = require('http');
const personal = require('./personalmodule');

const server = http.createServer((req, res) => {
    const currentDate = new Date();
    const greetingMessage = personal.getGreeting();

    const responseContent = `
        <html>
            <head>
                <meta charset="UTF-8">
                <title>Personalized Greeting</title>
            </head>
            <body>
                <p>Date of request: ${currentDate}</p>
                <p>${greetingMessage}</p>
            </body>
        </html>
    `;

    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(responseContent);
});

server.listen(8000, () => {
    console.log('Server is running on http://localhost:8000');
});