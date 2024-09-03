export default function Footer() {
    return (
        <>
            {/* Footer */}
            <footer className="bg-gray-50 py-12 border-t border-gray-200">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
                        {/* Account Section */}
                        <div>
                            <h3 className="text-lg font-semibold mb-4">Account</h3>
                            <ul className="space-y-2 text-gray-600">
                                <li>
                                    <a href="#" className="hover:text-gray-900">
                                        Log In
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="hover:text-gray-900">
                                        Sign Up
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="hover:text-gray-900">
                                        Redeem a Gift Card
                                    </a>
                                </li>
                            </ul>
                        </div>
                        {/* Company Section */}
                        <div>
                            <h3 className="text-lg font-semibold mb-4">Company</h3>
                            <ul className="space-y-2 text-gray-600">
                                <li>
                                    <a href="#" className="hover:text-gray-900">
                                        About
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="hover:text-gray-900">
                                        Environmental Initiatives
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="hover:text-gray-900">
                                        Factories
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="hover:text-gray-900">
                                        DEI
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="hover:text-gray-900">
                                        Careers
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="hover:text-gray-900">
                                        International
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="hover:text-gray-900">
                                        Accessibility
                                    </a>
                                </li>
                            </ul>
                        </div>
                        {/* Get Help Section */}
                        <div>
                            <h3 className="text-lg font-semibold mb-4">Get Help</h3>
                            <ul className="space-y-2 text-gray-600">
                                <li>
                                    <a href="#" className="hover:text-gray-900">
                                        Help Center
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="hover:text-gray-900">
                                        Return Policy
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="hover:text-gray-900">
                                        Shipping Info
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="hover:text-gray-900">
                                        Bulk Orders
                                    </a>
                                </li>
                            </ul>
                        </div>
                        {/* Connect Section */}
                        <div>
                            <h3 className="text-lg font-semibold mb-4">Connect</h3>
                            <ul className="space-y-2 text-gray-600">
                                <li>
                                    <a href="#" className="hover:text-gray-900">
                                        Facebook
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="hover:text-gray-900">
                                        Instagram
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="hover:text-gray-900">
                                        Twitter
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="hover:text-gray-900">
                                        Affiliates
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="hover:text-gray-900">
                                        Our Stores
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    {/* Bottom Links */}
                    <div className="mt-12 border-t border-gray-200 pt-6 text-sm text-gray-500 text-center">
                        <div className="space-x-4">
                            <a href="#" className="hover:text-gray-900">
                                Privacy Policy
                            </a>
                            <a href="#" className="hover:text-gray-900">
                                Terms of Service
                            </a>
                            <a href="#" className="hover:text-gray-900">
                                Do Not Sell or Share My Personal Information
                            </a>
                            <a href="#" className="hover:text-gray-900">
                                CA Supply Chain Transparency
                            </a>
                            <a href="#" className="hover:text-gray-900">
                                Vendor Code of Conduct
                            </a>
                            <a href="#" className="hover:text-gray-900">
                                Sitemap Pages
                            </a>
                            <a href="#" className="hover:text-gray-900">
                                Sitemap Products
                            </a>
                        </div>
                        <p className="mt-6">© 2024 All Rights Reserved</p>
                    </div>
                </div>
            </footer>
        </>

    )
}