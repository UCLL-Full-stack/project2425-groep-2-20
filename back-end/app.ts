import * as dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import * as bodyParser from 'body-parser';
import swaggerJSDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
import exerciseRouter from './controller/exercise.routes';
import { userRouter } from './controller/user.routes';
import programRouter from './controller/program.routes';

const app = express();
dotenv.config();
const port = process.env.APP_PORT || 3000;

app.use(cors({origin: 'http://localhost:8080'}));
app.use(bodyParser.json());
app.use('/users',userRouter);
app.use('/exercises', exerciseRouter);
app.use('/programs',programRouter)

app.get('/status', (req, res) => {
    res.json({ message: 'Back-end is running...' });
});


app.listen(port || 3000, () => {
    console.log(`Back-end is running on port ${port}.`);
});
