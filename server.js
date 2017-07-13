const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
app.use('/', express.static('public'));
app.use('/static', express.static('dist'));
app.listen(PORT, function () {
  console.log('Listening on port ' + PORT);
});