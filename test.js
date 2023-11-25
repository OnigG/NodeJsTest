const http = require('http');

const postData = JSON.stringify({
  key: 'value',
  anotherKey: 'anotherValue'
});

const options = {
  //hostname: 'nodetest-husj.onrender.com', // Replace with your server's hostname or domain
  hostname: 'localhost', // Replace with your server's hostname or domain
  port: 3000, // Replace with your server's port
  //port: 443, // Replace with your server's port
  path: '/receive', // The endpoint on your server
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Content-Length': postData.length
  }
};

const req = http.request(options, (res) => {
  let data = '';

  res.on('data', (chunk) => {
    data += chunk;
  });

  res.on('end', () => {
    console.log('Response:', data);
  });
});

req.on('error', (error) => {
  console.error('Error:', error);
});

req.write(postData);
req.end();
