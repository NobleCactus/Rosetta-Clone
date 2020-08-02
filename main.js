var express = require('express');
var app = express();
var handlebars = require('express-handlebars').create({defaultLayout:'main'});

app.set("view engine", "handlebars");
app.set('port', process.argv[2]);
app.engine('handlebars', handlebars.engine);
app.use(express.static('Public'));

app.get('/', function(req,res){
        res.render('homepage');
	});

app.get('/noun-practice', function(req,res){
        res.render('nouns', {layout:'nouns'});
	});

app.get('/history', function(req,res){
        res.render('history', {layout:'history'});
	});

app.get('/contact-us', function(req,res){
        res.render('contact', {layout:'contact'});
	
	});

app.get('/rsdl', function(req,res){
        res.render('download', {layout:'download'});
	
	});



app.listen(process.argv[2],function() {console.log('Listening at port 3000');});