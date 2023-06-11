import express from 'express';
import routes from './routes/api/index';

const app = express();
const port = 3000;

app.use(express.static('assets'));
app.use('/api', routes);

app.get('/test', (req, res) => {
  res.send('This test was successfull');
});

app.listen(port, () => {
  console.log(`Listening to port ${port}`);
});

export default app;
