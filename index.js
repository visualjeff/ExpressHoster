const express = require('express')
const path = require('path');
const app = express();
const port = process.env.PORT || 1234; //Use port 1337 is for running on Azure.

/* If CORS is needed 
if (process.env.NODE_ENV === 'development') {
 var cors = require('cors');
 app.use(cors());
}
*/

app.use(express.static(path.join(__dirname, './client/dist')));

/* Handle every other route with index.html, which will contain a script tag to your application's JavaScript file(s). */
app.get('*', function (request, response) {
  response.sendFile(path.resolve(__dirname, './client/dist/index.html'));
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
