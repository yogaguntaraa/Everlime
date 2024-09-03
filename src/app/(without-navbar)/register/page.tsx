import Link from "next/link";
import register from "./action";

export default function Register({
    searchParams,
}: {
    searchParams?: { error: string };
}) {
    return (
        <div className="min-h-screen flex items-center justify-center">
            <div className="bg-white shadow-lg rounded-lg overflow-hidden md:flex max-w-4xl w-full">
                {/* Left Side: Form Section */}
                <div className="md:w-1/2 p-8">
                    <h2 className="text-3xl font-bold mb-4 flex items-center justify-center">Create an account</h2>
                    <p className="text-gray-600 mb-9">
                        Complete your sign up to receive your discount.*
                    </p>
                    <form action={register}>
                        <p className="text-red-500">{searchParams?.error}</p>
                        <div className="mb-4">
                            <label htmlFor="username" className="block text-gray-700 mb-2">
                                Username
                            </label>
                            <input
                                type="username"
                                id="username"
                                name="username"
                                className="w-full p-3 border border-gray-300 rounded"
                                placeholder="username"
                            />
                        </div>
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
                            Unlock Your Discount
                        </button>
                    </form>
                    <p className="text-gray-600 text-center mt-6">
                        Already have an account?{" "}
                        <Link href="/login" className="text-black hover:underline">
                            Log in
                        </Link>
                    </p>
                    <p className="text-xs text-gray-500 text-center mt-6">
                        New user discount applies only to full price items.
                        <br />
                        By providing your email address, you agree to our{" "}
                        <a href="#" className="underline">
                            Privacy Policy
                        </a>{" "}
                        and{" "}
                        <a href="#" className="underline">
                            Terms of Service
                        </a>
                        .
                    </p>
                </div>
                {/* Right Side: Image Section */}
                <div className="hidden md:block md:w-1/2">
                    <img
                        src="https://media.everlane.com/images/c_fill,w_3840,ar_4:5,q_auto,dpr_1.0,f_auto,fl_progressive:steep/i/2acf6ba3_2d25/womens-way-high-jean-ind"
                        alt="Fashion Model"
                        className="h-full w-full object-cover"
                    />
                </div>
            </div>
        </div>
    );
}