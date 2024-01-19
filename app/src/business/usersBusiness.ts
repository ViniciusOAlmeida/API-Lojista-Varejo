export class UserBusiness {
    async post(name: string, email: string, password: string): Promise<{ name: string, email: string, password: string }> {
        if (!name || !email || !password) {
            throw new Error("Name, email, and password are required");
        }

        const user = {
            name,
            email,
            password
        };

        return user;
    }
}
