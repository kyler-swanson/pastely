import express from 'express';

import cors from 'cors';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import config from 'config';
import routes from './routes/routes';
import mongoose from 'mongoose';

var app = express();
const port = config.get('API_PORT') || 4200;

// Use body-parser as middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))

// Use morgan dev in non-production env
if (process.env.NODE_ENV !== 'production') {
    app.use(morgan('dev'));
} else {
    app.use(morgan('tiny'));
}

// Use cors as middleware
app.use(cors());

// Routes middleware
app.use('/api', routes);

// Fallback endpoint
app.use((req, res) => {
    res.status(404).send('404 - Not Found');
})

// Connect to MongoDB
mongoose.connect(config.get('MONGODB_URL'), { useNewUrlParser: true }).then(
    () => {
        app.listen(port, function () {
            console.log('Pastely - API has started');
            app.emit('APP_STARTED');
        });
    },
    err => {
        // Dump stack
        console.error("Could not connect to MongoDB. " + err);
        // Exit with error code 1
        process.exit(1);
    }
);

module.exports = app;