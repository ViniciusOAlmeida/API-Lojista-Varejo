import { Request, Response } from "express";

export class CreateUserPost {
    async handle(request: Request, response: Response) {
        const { name, email, password } = request.body;
    
        const user = {
        name,
        email,
        password
        };
    
        return response.status(201).json(user);
    }
}