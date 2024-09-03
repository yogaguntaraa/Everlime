"use server";

import { schemaUser } from "@/db/validation/user";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { z } from "zod";

export default async function submit(formData: FormData) {
    try {
        const validateBody = await schemaUser.parseAsync({
            email: formData.get("email"),
            password: formData.get("password"),
        });
        const response = await fetch(
            process.env.NEXT_PUBLIC_BASE_URL + "/api/login",
            {
                method: "POST",
                body: JSON.stringify(validateBody),
                headers: {
                    "Content-Type": "application/json",
                },
            }
        );
        const { access_token } = await response.json();

        if (!access_token) {
            throw new Error("Invalid email/password");
        }

        cookies().set("authorization", `Bearer ${access_token}`);
        redirect("/");
    } catch (error) {
        console.log(error);
        if (error instanceof z.ZodError) {
            throw redirect(`/login?error=${error.errors[0].message}`);
        } else if ((error as Error).message === "Invalid email/password") {
            throw redirect(
                `/login?error=${encodeURIComponent("Invalid email/password")}`
            );
        }
        throw error;
        // throw redirect(
        //   `/login?error=${encodeURIComponent((error as Error).message)}`
        // );
    }
}