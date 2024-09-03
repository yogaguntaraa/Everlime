
export default function About() {
    return (
        <div className="bg-gray-50 min-h-screen flex flex-col items-center justify-center">
            {/* Hero Section */}
            <div className="relative w-full h-96 bg-cover bg-center" style={{ backgroundImage: 'url(https://i.natgeofe.com/n/2a832501-483e-422f-985c-0e93757b7d84/6.jpg?w=1436&h=1078)' }}>
                <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center items-center text-white">
                    <h1 className="text-4xl lg:text-6xl font-bold text-center">We believe we can all make a difference.</h1>
                    <p className="text-lg lg:text-2xl font-light mt-4">Our way: Exceptional quality. Ethical factories. Radical Transparency.</p>
                </div>
            </div>

            {/* Content Section */}
            <div className="px-4 py-12 md:px-12 md:py-16 text-center">
                <p className="text-center font-sans text-5xl font-light">
                    At Everlime, we want the right choice to be as easy as putting on a great T-shirt. That’s why we partner with the best, ethical factories around the world. Source only the finest materials. And share those stories with you—down to the true cost of every product we make. It’s a new way of doing things. We call it Radical Transparency.
                </p>
            </div>
            <div className="min-h-screen flex items-center justify-center">
                <div className="bg-orange-200 w-full h-[507px] flex items-center justify-center">
                    {/* Left Side: Form Section */}
                    <div className="md:w-1/2 p-8">
                        <p className="text-xl text-justify">Our Factories</p>
                        <h1 className="text-4xl lg:text-6xl font-bold text-justify">Our ethical approach.</h1>
                        <p className="text-justify text-xl font-light mt-4">We spend months finding the best factories around the world—the same ones that produce your favorite designer labels. We visit them often and build strong personal relationships with the owners. Each factory is given a compliance audit to evaluate factors like fair wages, reasonable hours, and environment. Our goal? A score of 90 or above for every factory.</p>
                    </div>
                    {/* Right Side: Image Section */}
                    <div className="hidden md:block w-full md:w-1/2">
                        <img
                            src="https://remake.world/wp-content/uploads/2020/01/everlanepetition.jpg"
                            alt=""
                            className="h-full w-full object-cover"
                        />
                    </div>
                </div>
            </div>
            <div className="min-h-screen flex items-center justify-center">
                <div className="bg-orange-200 w-full h-[590] flex items-center justify-center">
                    {/* Right Side: Image Section */}
                    <div className="hidden md:block w-full md:w-1/2">
                        <img
                            src="https://img2.storyblok.com/768x605/filters:format(webp)/f/102348/3750x2954/22a878f668/sdp-everlane-hero4-small.jpg"
                            alt=""
                            className="h-full w-full object-cover"
                        />
                    </div>
                    {/* Left Side: Form Section */}
                    <div className="md:w-1/2 p-8">
                        <p className="text-xl text-justify">Our QUALITY</p>
                        <h1 className="text-4xl lg:text-6xl font-bold text-justify">Designed to last.</h1>
                        <p className="text-justify text-xl font-light mt-4">At Everlime, we’re not big on trends. We want you to wear our pieces for years, even decades, to come. That’s why we source the finest materials and factories for our timeless products— like our Grade-A cashmere sweaters, Italian shoes, and Peruvian Pima tees.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}