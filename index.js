import fs from 'fs';

let text = fs.readfileSync('index.js', 'utf-8');
console.log(text);