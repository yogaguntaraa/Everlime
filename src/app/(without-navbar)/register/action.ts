"use server";
import { schemaUser } from "@/db/validation/user";
import { MongoServerError } from "mongodb";
import { redirect } from "next/navigation";
import { z } from "zod";

export default async function register(formData: FormData) {
    const rawFormData = {
        username: formData.get("username"),
        email: formData.get("email"),
        password: formData.get("password"),
    };

    try {
        const validateBody = await schemaUser.parseAsync(rawFormData);
        const response = await fetch(
            process.env.NEXT_PUBLIC_BASE_URL + "/api/register",
            {
                method: "POST",
                body: JSON.stringify(validateBody),
                // headers: {
                //   "Content-Type": "application/json",
                // },
            }
        );
        const { id } = await response.json();
    } catch (error) {
        if (error instanceof z.ZodError) {
            redirect(`/register?error=${error.errors[0].message}`);
        } else if (error instanceof MongoServerError) {
            if (error.code === 11000)
                redirect(
                    `/register?error=${encodeURIComponent("Email already exist")}`
                );
        }
        console.log(error);
    }
    redirect("/login");
}