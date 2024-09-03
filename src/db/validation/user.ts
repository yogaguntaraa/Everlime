import { z } from "zod";

export const schemaUser = z.object({
    username: z.string().min(1, "Username is required").optional(),
    email: z.string().min(1, "Email is required").email("Invalid email format"),
    password: z
        .string()
        .min(5, "Password must contain at least 5 character(s)")
        .max(255),
});

export type TUser = z.infer<typeof schemaUser>;