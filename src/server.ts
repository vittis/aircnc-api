import express from 'express';
import routes from './routes';
import mongoose from 'mongoose';

const app = express();

mongoose.connect('mongodb+srv://omnistack:omnistack@omnistack-6hhjn.mongodb.net/aircnc?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

app.use(express.json());
app.use(routes);

app.listen(3333);
