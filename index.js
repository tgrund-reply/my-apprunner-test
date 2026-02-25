const http = require('http');

const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(`
        <h1>AWS App Runner Test</h1>
        <p>Service läuft erfolgreich!</p>
        <p>Port: ${port}</p>
        <p>Zeit: ${new Date().toISOString()}</p>
    `);
});

server.listen(port, () => {
    console.log(`Server läuft auf Port ${port}`);
});
