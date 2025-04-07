import express from 'express';

import router from './api';

const app = express();
app.use(express.json());

app.get('/', (_, res) => {
  res.json({ message: 'Hello' });
});


app.use('/api', router);

const port = 4000;
app.listen(port, async () => {
  console.log(`Start server from localhost:${port}`);
});
