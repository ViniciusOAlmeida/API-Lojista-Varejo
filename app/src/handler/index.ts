import express from 'express';

import { router } from '../routes';
import { configuration } from '../config';
// import Exceptions after creating

const PORT = configuration.PORT;
const app = express();

app.use(express.json());
app.use(router);
app.use((err: Error, request: express.Request, response: express.Response, next: express.NextFunction) => {
  if (err instanceof Error) {
    return response.status(400).json({
      error: err.message
    });
  }

  return response.status(500).json({
    message: 'Internal Server Error',
    data: null
  });
});

app.listen(PORT, () => console.log("APP running"))