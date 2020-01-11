const http = require('http');
const path = require('path')
const express = require('express');
const app = express();

const server = http.createServer(app);
const port = process.env.PORT || '8000';
const bodyParser = require('body-parser');
const io = require('socket.io')(server);
const router = require('./routes/api');


app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'pug');
app.use(bodyParser.json())
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, './public')));
app.use(function (req, res, next) {
    res.removeHeader("X-Powered-By");
    next();
});

app.use((err , req ,res,next)=> {
    if(err){
        let message;
        if (err.name === "SyntaxError") {
            message = "Json syntax error";
            res.status(400)
        } else if(err.name == "TypeError"){
            message = "Type Error"
            res.status(400)
        } else {
            console.log(err.name, err.message);
            message = "Bad Request";
            res.status(403)
        }
        res.send({
            message:message
        })
    } else {
        next()
    }
})

router(app);

app.use(function(req, res, next) {
    next(res.sendStatus('404'));
});

app.set('port', port);
server.listen(port);
