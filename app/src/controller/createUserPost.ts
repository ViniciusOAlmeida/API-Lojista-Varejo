import { Request, Response } from "express";
import { UserBusiness } from "../business/usersBusiness";

export class CreateUserPost { // a classe seria uma bolsa de funções 
    private userBusiness: UserBusiness;

    constructor() { 
        this.userBusiness = new UserBusiness(); // Create a new instance of UserBusiness
    }

    async handle(request: Request, response: Response) {
        const { name, email, password } = request.body;
    
        try {
            // Call the createUser method from the UserService
            const user = await this.userBusiness.post(name, email, password);

            // Respond with the created user
            return response.status(201).json(user);
        } catch (error) {
            // Handle errors appropriately (e.g., return an error response)
            console.error("Error creating user:", error.message);
            return response.status(500).json({ error: "Internal Server Error" });
        }
  
    }
}