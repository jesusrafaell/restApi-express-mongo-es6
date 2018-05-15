import express from 'express';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import mongoose from 'mongoose';
import method from 'express-method-override';
import routes from './routes/routes';

mongoose.connect('mongodb://localhost/jesus-rest');

const app = express();

app.set('port', process.env.PORT || 5000);
app.set('views', `${__dirname}/views`);
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: false}));
app.use(morgan('dev'));
app.use(method('_method'));

app.use('/', routes);

app.listen(app.get('port'), () => {
    console.log(`Run on ${app.get('port')}`);
});