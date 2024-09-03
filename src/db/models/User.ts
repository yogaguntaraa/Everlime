import database from "@/db/config/mongodb"
import { TUser } from "../validation/user";
import { hashPassword } from "@/helpers/bcrypt";

export default class User {
    static async create(user: TUser) {
        const collection = database.collection("users");
        user.password = hashPassword(user.password);
        const { insertedId } = await collection.insertOne({
            ...user,
            createdAt: new Date(),
            updatedAt: new Date(),
        });
        return insertedId;
    }

    static async findByEmail(email: string) {
        const collection = database.collection("users");
        const selectedUser = await collection.findOne({ email });
        return selectedUser;
    }
}