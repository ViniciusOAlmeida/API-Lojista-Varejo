import { Router } from 'express';

//importar os controllers
import { CreateUserPost } from '../controller/createUserPost';

const users = Router();
const users_post = new CreateUserPost()

users.post('/create-users', users_post.handle);

export { users };