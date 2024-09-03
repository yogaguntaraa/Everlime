import Link from "next/link";
import submit from "./action";
// import { ChangeEvent, FormEvent, useState } from "react";


export default function Login({
    searchParams,
  }: {
    searchParams?: { error: string };
  }) {
    
    return (
        <div className="min-h-screen flex items-center justify-center">
            <div className="bg-white shadow-lg rounded-lg overflow-hidden md:flex max-w-4xl w-full">
                {/* Left Side: Form Section */}
                <div className="md:w-1/2 p-8">
                    <h2 className="text-3xl font-bold mb-4 flex items-center justify-center">Good to see you again</h2>
                    <p className="text-gray-600 mb-9 flex items-center justify-center">
                        Please log in to your account.
                    </p>
                    <form action={submit}>
                    <p className="text-red-500">{searchParams?.error}</p>
                        {/* Email Input */}
                        <div className="mb-4">
                            <label htmlFor="email" className="block text-gray-700 mb-2">
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                className="w-full p-3 border border-gray-300 rounded"
                                placeholder="Email"
                            />
                        </div>
                        {/* Password Input */}
                        <div className="mb-4">
                            <label htmlFor="password" className="block text-gray-700 mb-2">
                                Password
                            </label>
                            <div className="relative">
                                <input
                                    type="password"
                                    id="password"
                                    name="password"
                                    className="w-full p-3 border border-gray-300 rounded"
                                    placeholder="Password"
                                />
                            </div>
                        </div>
                        {/* Button */}
                        <button className="w-full bg-black text-white py-3 rounded font-semibold hover:bg-gray-800">
                            LOG IN
                        </button>
                    </form>
                    <p className="text-gray-600 text-center mt-6">
                        Dont have an account?
                        <Link href="/register" className="text-black hover:underline">
                            Sign up
                        </Link>
                    </p>
                </div>
                {/* Right Side: Image Section */}
                <div className="hidden md:block md:w-1/2">
                    <img
                        src="https://media.everlane.com/images/c_fill,w_3840,ar_4:5,q_auto,dpr_1.0,f_auto,fl_progressive:steep/i/65ed9d37_4597/womens-way-high-jean-dkw"
                        alt="Fashion Model"
                        className="h-full w-full object-cover"
                    />
                </div>
            </div>
        </div>
    );
}