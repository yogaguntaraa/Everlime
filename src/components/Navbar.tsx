import Link from "next/link";
import { Heart, Search, ShoppingBasket, User } from "lucide-react";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import ButtonLogout from "./ButtonLogout";

export default function Navbar() {
    const cookie = cookies().get("authorization");
    async function logout() {
        "use server";
        cookies().delete("autorization");
        redirect("/login");
    }
    return (
        <nav className="w-full bg-white shadow-lg py-2 z-50">
            <div className="container mx-auto px-4 py-2 flex items-center justify-between">
                {/* Logo */}
                <div className="text-2xl font-bold text-black">
                    <Link href="/" className="hover:text-black">
                        EVERLIME
                    </Link>
                </div>
                {/* Menu Links */}
                <div className="hidden md:flex space-x-6 text-gray-400">
                    <div className="flex gap-5">
                        <Link href="/wishlist">
                            <Heart strokeWidth={1} />
                        </Link>
                        {cookie ? (
                            <ButtonLogout />
                        ) : (
                            <Link href="/login">
                                <User strokeWidth={1} />
                            </Link>
                        )}
                    </div>
                </div>
            </div>
        </nav>
    )
}