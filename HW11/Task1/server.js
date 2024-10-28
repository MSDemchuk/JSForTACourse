const http = require('http');

const server = http.createServer((req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    if (req.url === '/getVoteTime' && req.method === 'GET') {
        const currentDate = new Date().toString();
        const responseText = `Your vote is accepted: ${currentDate}`;

        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end(responseText);
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Not Found');
    }
});

server.listen(8000, () => {
    console.log('Server is running on http://localhost:8000');
});