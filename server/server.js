const express = require('express');

const app = express();

app.use(express.static('dist'));

app.listen(3000, () => {
  console.log('测试地址');
  console.warn('http://localhost:3000');
});


