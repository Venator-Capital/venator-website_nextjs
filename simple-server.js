const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
  console.log(`Request: ${req.url}`);
  
  if (req.url === '/') {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end(`
      <!DOCTYPE html>
      <html>
        <head>
          <title>Venator Capital</title>
          <style>
            body { font-family: Arial, sans-serif; margin: 0; padding: 20px; }
            .container { max-width: 800px; margin: 0 auto; text-align: center; }
            h1 { color: #333; }
            .status { background: #4CAF50; color: white; padding: 10px; border-radius: 5px; }
          </style>
        </head>
        <body>
          <div class="container">
            <h1>Venator Capital</h1>
            <div class="status">✅ Server is working on port 3000!</div>
            <p>Simple HTTP server is running. Next.js has compilation issues that need to be resolved.</p>
            <h2>Issue Summary:</h2>
            <ul style="text-align: left;">
              <li>Next.js development server starts but doesn't respond to HTTP requests</li>
              <li>Compilation process appears to hang indefinitely</li>
              <li>This affects both development and production builds</li>
            </ul>
            <h2>Recommended Solutions:</h2>
            <ul style="text-align: left;">
              <li>1. Use a different development environment</li>
              <li>2. Try running in a Docker container</li>
              <li>3. Check system resources (CPU/Memory)</li>
              <li>4. Consider using Vite or another framework</li>
            </ul>
          </div>
        </body>
      </html>
    `);
  } else {
    res.writeHead(404);
    res.end('Not found');
  }
});

server.listen(3000, () => {
  console.log('Simple server running at http://localhost:3000');
});