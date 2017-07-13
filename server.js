const express = require('express');
const app = express();
let port = process.env.PORT || 3000);
app.use('/', express.static('public'));
app.use('/static', express.static('dist'));
app.listen(port, function() {
  console.log('App is running on port: ' + port);
});