import { Request, Response, Router } from 'express';

const router = Router()

router.get('/_health', (request: Request, response: Response) => {
  return response.json({
    message: 'I am alive!',
    data: null
  });
});

export { router };