const express = require('express')
const app = express()
const port = 3000
const cors = require('cors')

app.use(cors())

app.get('/api/transactions', (req, res) => {
  return res.json({
    list: [
      { id: 1, accountHolder: 'Penelope Berry', IBAN: 'DE63500105173833675741', amount: 10.99, date: new Date(), note: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus maximus lacus eget bibendum porta.'},
      { id: 2, accountHolder: 'Paul Clarkson', IBAN: 'DE92500105174765356824', amount: 250.80, date: new Date(), note: 'Sed id consequat urna. Maecenas ac mattis neque. Suspendisse in luctus lectus.'},
      { id: 3, accountHolder: 'David Butler', IBAN: 'DE82500105171946297899', amount: 1000.99, date: new Date(), note: 'Mauris egestas sagittis nunc eu condimentum.'},
      { id: 4, accountHolder: 'Sarah Davidson', IBAN: 'DE05500105174921581158', amount: 500, date: new Date(), note: 'Interdum et malesuada fames ac ante ipsum primis in faucibus. Praesent ut feugiat tortor.'},
      { id: 5, accountHolder: 'Tracey Hunter', IBAN: 'DE93500105176198859181', amount: 68.25, date: new Date(), note: 'Sed pulvinar ex nulla, in eleifend ex venenatis vel. Proin sit amet est non ligula blandit facilisis ut non est'}
    ]
  });
})

app.put('/api/:transaction', (req, res) => {
  return res.json({status: 'ok'});
})

app.post('/', (req, res) => {
  res.send('POST request to the homepage');
});

app.delete('/', function (req, res) {
  res.send('DELETE request to homepage')
})



app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
