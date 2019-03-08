const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended:true}));

app.get('/api/customers' ,(req,res) =>{
    res.send(
        [
            {
            'id' : 1 ,
            'image' :"https://placeimg.com/64/64/any" ,
            'name' : '홍성인',
            'brithday' : 810227,
            'gender' : '남자',
            'job' :'개발자/아빠'
            },
            {
            'id' : 2 ,
            'image' :"https://placeimg.com/64/64/any" ,
            'name' : '홍지유',
            'brithday' : 120424,
            'gender' : '여자',
            'job' :'초등학생'
            },
            {
            'id' : 3 ,
            'image' :"https://placeimg.com/64/64/any" ,
            'name' : '홍지유',
            'brithday' : 150921,
            'gender' : '여자',
            'job' :'어린이'
            }
        ]        
    );
});

app.listen(port, () => console.log(`Listening on port ${port}`));