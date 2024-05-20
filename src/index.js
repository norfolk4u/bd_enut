import app from './app' 

app.listen(app.get('port'));
app.timeout = 60000; // in milliseconds


console.log('server on port' +  app.get('port'));

