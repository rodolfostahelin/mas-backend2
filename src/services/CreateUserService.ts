import { hash } from 'bcryptjs';
import { getRepository } from "typeorm";
import { User } from "../models/User";


interface IUserData {
    name: string;
    email: string;
    password: string
}

class CreateUserService {

    public async execute({ name, email, password }: IUserData): Promise<User | { error: string; }> {
            const userRepository = getRepository(User)
            const checkUserExists = await userRepository.findOne({ email });
            if (checkUserExists) {
                return { error: "Email já existe" }
            }
            const hashedPassword = await hash(password, 8);

            const user = userRepository.create({
                name,
                email,
                password: hashedPassword
            })
            await userRepository.save(user);

            return user;

        }

    }


export { CreateUserService }