const express = require('express')
const app = express()
const port = 3000
const cors = require('cors')

app.use(cors())

app.get('/api/transactions', (req, res) => {
  return res.json([
    { id: '1fee3cde-a656-4f9b-9bac-a4dd5008f4fa', accountHolder: 'Penelope Berry', IBAN: 'DE63500105173833675741', amount: 100.99, date: new Date('2021-06-12'), note: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'},
    { id: '0b360e7a-9c61-4843-a9e6-d7ebc83d8ed9', accountHolder: 'Paul Clarkson', IBAN: 'DE92500105174765356824', amount: 250.80, date: new Date('2018-06-12'), note: 'Sed id consequat urna. Maecenas ac mattis neque. Suspendisse in luctus lectus.'},
    { id: 'f51d52c3-4d86-448e-8e0d-0ae23703c9cc', accountHolder: 'David Butler', IBAN: 'DE82500105171946297899', amount: 12000.99, date: new Date('2021-06-13'), note: 'Mauris egestas sagittis nunc eu condimentum.'},
    { id: 'ee9e595e-d4e1-4cd5-a5db-e74634883962', accountHolder: 'Sarah Davidson', IBAN: 'DE05500105174921581158', amount: 500, date: new Date('2021-07-13'), note: 'Interdum et malesuada fames ac ante ipsum primis in faucibus.'},
    { id: 'bbfff549-7ba5-4fcb-a5b9-7d31af417ef3', accountHolder: 'Tracey Hunter', IBAN: 'DE93500105176198859181', amount: 68.25, date: new Date('2017-06-13'), note: 'Sed pulvinar ex nulla, in eleifend ex venenatis vel.'}
  ]);
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
