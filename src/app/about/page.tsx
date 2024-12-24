export default function About() {
    return (
        <div className="flex flex-col items-center space-y-8 my-9 px-4">
            {/* About Casemate Section */}
            <div className="bg-pink-200 text-gray-900 p-6 rounded-lg shadow-md w-full max-w-3xl transform transition-transform duration-300 hover:scale-105 hover:shadow-lg">
                <h1 className="text-2xl md:text-3xl font-bold text-pink-600 text-center">
                    About Casemate
                </h1>
                <h3 className="text-xl md:text-2xl font-semibold text-gray-900 text-center mt-2">
                    Where Style Meets Protection
                </h3>
                <p className="mt-4 text-base md:text-lg text-gray-800 text-center">
                    At Casemate, we don’t just design mobile covers - we create experiences. Our brand embodies sophistication, beauty, and simplicity.
                </p>
            </div>

            {/* Who We Are Section */}
            <div className="bg-pink-100 text-gray-900 p-6 rounded-lg shadow-md w-full max-w-3xl transform transition-transform duration-300 hover:scale-105 hover:shadow-lg">
                <h1 className="text-xl md:text-2xl font-bold text-pink-600">Who We Are</h1>
                <p className="mt-2 text-base md:text-lg text-gray-800">
                    Casemate was born to bring a fresh perspective to mobile covers. We combine timeless elegance with cutting-edge protection to offer you covers that speak volumes about your style.
                </p>
            </div>

            {/* Why Choose Us Section */}
            <div className="bg-pink-100 text-gray-900 p-6 rounded-lg shadow-md w-full max-w-3xl transform transition-transform duration-300 hover:scale-105 hover:shadow-lg">
                <h1 className="text-xl md:text-2xl font-bold text-pink-600">Why Choose Us</h1>
                <p className="mt-2 text-base md:text-lg text-gray-800">
                    <span className="font-semibold">Premium Materials:</span> Durable, lightweight, and stylish. <br />
                    <span className="font-semibold">Elegant Designs:</span> Minimalist yet expressive, perfect for any mood. <br />
                    <span className="font-semibold">Personal Touch:</span> Each design is a celebration of individuality.
                </p>
            </div>

            {/* Join the Casemate Family Section */}
            <div className="bg-pink-100 text-gray-900 p-6 rounded-lg shadow-md w-full max-w-3xl transform transition-transform duration-300 hover:scale-105 hover:shadow-lg">
                <h1 className="text-xl md:text-2xl font-bold text-pink-600">Join the Casemate Family</h1>
                <p className="mt-2 text-base md:text-lg text-gray-800">
                    We’re more than just a store - we’re a community of trendsetters who love to blend beauty with functionality. Explore our collection, and let your phone reflect your vibe.
                </p>
            </div>
        </div>
    );
}
