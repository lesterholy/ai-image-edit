// Gemini API 代理服务器 - 解决 CORS 问题
// 使用方法: node proxy-server.js

const http = require('http');
const https = require('https');
const url = require('url');

const PORT = 3001;
const GOOGLE_API_BASE = 'generativelanguage.googleapis.com';

const server = http.createServer((req, res) => {
    // 设置 CORS 头
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization, x-goog-api-key');
    res.setHeader('Access-Control-Max-Age', '86400');

    // 处理 OPTIONS 预检请求
    if (req.method === 'OPTIONS') {
        res.writeHead(204);
        res.end();
        return;
    }

    // 解析请求 URL
    const parsedUrl = url.parse(req.url, true);
    const path = parsedUrl.path;

    console.log(`[${new Date().toISOString()}] ${req.method} ${path}`);

    // 转发请求到 Google API
    const options = {
        hostname: GOOGLE_API_BASE,
        path: path,
        method: req.method,
        headers: {
            'Content-Type': req.headers['content-type'] || 'application/json',
        }
    };

    const proxyReq = https.request(options, (proxyRes) => {
        // 转发响应头
        res.writeHead(proxyRes.statusCode, proxyRes.headers);

        // 转发响应体
        proxyRes.pipe(res);
    });

    // 处理错误
    proxyReq.on('error', (err) => {
        console.error('代理请求错误:', err);
        res.writeHead(500, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ error: { message: '代理服务器错误: ' + err.message } }));
    });

    // 转发请求体
    if (req.method !== 'GET' && req.method !== 'HEAD') {
        req.pipe(proxyReq);
    } else {
        proxyReq.end();
    }
});

server.listen(PORT, () => {
    console.log(`\n✅ Gemini API 代理服务器已启动`);
    console.log(`📡 监听地址: http://localhost:${PORT}`);
    console.log(`🔗 目标 API: https://${GOOGLE_API_BASE}`);
    console.log(`\n配置说明:`);
    console.log(`  Base URL: http://localhost:${PORT}`);
    console.log(`  API Key: 你的 Google API Key (AIzaSy...)`);
    console.log(`  ✅ 勾选 "使用 Gemini 原生 API"`);
    console.log(`\n按 Ctrl+C 停止服务\n`);
});

// 优雅退出
process.on('SIGINT', () => {
    console.log('\n\n👋 代理服务器已停止');
    process.exit(0);
});
