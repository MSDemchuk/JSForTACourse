const http = require('http');
const os = require('os');
const path = require('path');

const server = http.createServer((req, res) => {
    const username = os.userInfo().username;
    const osType = os.type();
    const uptimeMinutes = (os.uptime() / 60).toFixed(2);
    const currentDir = process.cwd();
    const fileName = path.basename(__filename);

    const responseContent = `
        <html>
            <head><title>System Info</title></head>
            <body>
                <h1>System Information</h1>
                <p><strong>Current User:</strong> ${username}</p>
                <p><strong>Operating System:</strong> ${osType}</p>
                <p><strong>System Uptime (Minutes):</strong> ${uptimeMinutes}</p>
                <p><strong>Current Working Directory:</strong> ${currentDir}</p>
                <p><strong>Server File Name:</strong> ${fileName}</p>
            </body>
        </html>
    `;

    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(responseContent);
});

server.listen(5000, () => {
    console.log('Server is listening on port 5000');
});
