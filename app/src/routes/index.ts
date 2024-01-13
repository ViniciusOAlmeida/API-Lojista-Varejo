import { Request, Response, Router } from 'express';
import { users } from './users';

const router = Router()

router.get('/_health', (request: Request, response: Response) => {
  return response.json({
    message: 'I am alive!',
    data: null
  });
});
router.use('/v1', users);

export { router };