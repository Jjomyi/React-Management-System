const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 8080;

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended : true}))

app.get('/api/customers',(req,res) => {
    res.send(
        [{
            'id' : 1,
            'image' : 'https://placeimg.com/64/64/1',
            'name' : '홍길동',
            'birthday' : '961222',
            'gender' : '남자',
            'job' : '대학생'
          },
          {
            'id' : 2,
            'image' : 'https://placeimg.com/64/64/2',
            'name' : '김옴팡',
            'birthday' : '931222',
            'gender' : '남자',
            'job' : '연구원'
          },
          {
            'id' : 3,
            'image' : 'https://placeimg.com/64/64/3',
            'name' : '김나비',
            'birthday' : '913222',
            'gender' : '여자',
            'job' : '승무원'
          }]
    )
})

app.listen(port, () => console.log(`Listening on port${port}`))

