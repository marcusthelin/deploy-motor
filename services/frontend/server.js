const path = require('path');
const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');
const app = express();

const motorHost = process.env.MOTOR_HOST || '192.168.1.77';

app.use(express.static(path.resolve('./build')));

app.use(
    createProxyMiddleware('/api', {
        target: `http://${motorHost}`,
        pathRewrite: {
            '^/api': '',
        },
    })
);

app.get('/*', (req, res) => {
    res.sendFile(path.resolve('./build', 'index.html'));
});

app.listen(80, () => {
    console.log('Frontend server started!');
});
