import React from 'react';

const Powerball = () => {
  var http = require('https');

  var options = {
    method: 'GET',
    hostname: 'api.collectapi.com',
    port: null,
    path: '/chancegame/usaPowerball',
    headers: {
      'content-type': 'application/json',
      authorization: 'apikey 2IF1U8m6QmRgLZb7yAdtV9:1C5H82eonkDMwxqUGNtX0Q',
    },
  };

  var req = http.request(options, function (res) {
    var chunks = [];

    res.on('data', function (chunk) {
      chunks.push(chunk);
    });

    res.on('end', function () {
      var body = Buffer.concat(chunks);
      console.log(body.toString());
      console.log(req._fetchResponse);
    });
  });

  req.end();

  return <div></div>;
};

export default Powerball;
