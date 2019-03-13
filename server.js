const fs = require('fs');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended:true}));

const data = fs.readFileSync('./database.json');
const conf = JSON.parse(data);
const mysql = require('mysql');

const connection = mysql.createConnection({
    host:conf.host,
    user:conf.user,
    password:conf.password,
    port:conf.port,
    database:conf.database
})

connection.connect();

const multer = require('multer');
const upload = multer({dest: './upload'});

app.get('/api/customers' ,(req,res) =>{
    connection.query(
        "SELECT * FROM CUSTOMER WHERE isDeleted = 0",
        (err,rows,fields) =>{
            res.send(rows);
        }
    );
});

// upload 폴더 공유 전역 변수 
// 실제 사용자는 /image 찾고 컴퓨터 경로는 upload
app.use('/image',express.static('./upload'));

app.post('/api/customers',upload.single('image'),(req,res) =>{
    let sql = 'INSERT INTO CUSTOMER VALUES (null,?,?,?,?,?,now(),0)';
    // multer 라이브러리
    // 실제 파일 바이너리로 받고 
    // 해당 라이브러리에서 filename명 중복되지 않게 제공받는다
    let image = '/image/'+ req.file.filename;

    let userName = req.body.userName;
    let birthday = req.body.birthday;
    let gender = req.body.gender;
    let job = req.body.job;

    let params =[image,userName,birthday,gender,job];
    console.log("SQL " + sql);
    console.log("params " + params);
    connection.query(sql,params,
        (err,rows,fields) => {
            res.send(rows);
        }
    );
});

app.delete('/api/customers/:id',(req,res) =>{
    let sql = "UPDATE CUSTOMER SET isDeleted = 1 WHERE id =?";
    let params = [req.params.id]; //post 나 get 아니므로 파라미터 :id
    console.log("SQL " + sql);
    console.log("params " + params);
    connection.query(sql,params,
        (err,rows,fields) => {
            res.send(rows);
        }
    );
} )

app.listen(port, () => console.log(`Listening on port ${port}`));