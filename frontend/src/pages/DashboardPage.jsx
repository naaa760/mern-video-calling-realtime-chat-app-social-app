import { Link } from "react-router";
import { ShipWheelIcon } from "lucide-react";

const DashboardPage = () => {
  return (
    <div className="min-h-screen bg-purple-50 relative overflow-hidden">
      {/* Enhanced Background Image */}
      <div
        className="fixed inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url("/pi.jpg")',
          opacity: "0.15",
          filter: "blur(1px) brightness(1.1) contrast(1.1)",
        }}
      ></div>

      {/* Gradient Overlay for background */}
      <div className="fixed inset-0 z-0 bg-gradient-to-br from-purple-900/10 via-transparent to-lime-900/10"></div>

      {/* Decorative elements */}
      <div className="absolute top-20 left-32 w-4 h-4 bg-purple-300 rounded-full"></div>
      <div className="absolute top-40 right-48 w-6 h-6 bg-purple-300 rounded-full"></div>
      <div className="absolute bottom-32 left-1/4 w-5 h-5 bg-purple-300 rounded-full"></div>

      {/* Cloud shape */}
      <div className="absolute top-48 left-0 w-96 h-80 bg-white rounded-full opacity-20 blur-3xl"></div>

      {/* Navbar - Transparent with rounded corners and sticky on scroll */}
      <div className="sticky top-0 z-50 w-full py-4">
        <div className="container mx-auto px-4">
          <nav className="backdrop-blur-md bg-white/50 border border-white/40 shadow-md rounded-full px-6 py-3 transition-all duration-300">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                <ShipWheelIcon className="h-8 w-8 text-lime-500" />
                <span className="text-2xl font-bold text-lime-500">BeamUp</span>
              </div>

              <div className="hidden md:flex items-center space-x-6 text-gray-600">
                <a
                  href="#features"
                  className="hover:text-lime-500 transition-colors"
                >
                  Features & Pricing
                </a>
                <a
                  href="#blog"
                  className="hover:text-lime-500 transition-colors"
                >
                  Blog
                </a>
                <a
                  href="#new"
                  className="hover:text-lime-500 transition-colors"
                >
                  What's New?
                </a>
              </div>

              <div className="flex items-center space-x-3">
                <Link
                  to="/login"
                  className="px-4 py-2 text-lime-500 hover:text-lime-600 transition-colors"
                >
                  Login
                </Link>
                <Link
                  to="/signup"
                  className="bg-lime-500 hover:bg-lime-600 text-white px-6 py-2 rounded-full transition-colors shadow-md"
                >
                  Get Started
                </Link>
              </div>
            </div>
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 mt-12 md:mt-24">
        <div className="flex flex-col lg:flex-row items-center relative">
          {/* Feature bubbles outside of card, but still on screen */}

          <div className="absolute -right-10 top-1/4 bg-white shadow-lg rounded-full p-3 border border-gray-100 transition-transform duration-300 group-hover:transform group-hover:translate-x-3 z-10">
            <span className="text-2xl">🎤</span>
          </div>

          {/* Left Column - Text */}
          <div className="w-full lg:w-1/2 lg:pr-12">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl mb-6 font-semibold tracking-tight">
              <span className="bg-gradient-to-r from-gray-900 via-gray-600 to-gray-300 inline-block text-transparent bg-clip-text drop-shadow-[0_1.2px_1.2px_rgba(255,255,255,0.3)]">
                Stay connected with real-time messages,
                <div>Wherever you are</div>
              </span>
            </h1>

            <p className="text-lg text-gray-600 mb-8">
              BeamUp is the only all-in-one communication platform that connects
              you with people worldwide for seamless video calls, messaging, and
              collaboration.
            </p>

            <Link
              to="/signup"
              className="inline-block bg-lime-500 hover:bg-lime-600 text-white font-medium px-8 py-3 rounded-full"
            >
              Get Started
            </Link>
          </div>

          {/* Right Column - Image */}
          <div className="w-full lg:w-1/2 mt-12 lg:mt-0 flex justify-center relative">
            <div className="relative w-80 md:w-96 h-auto bg-white/80 backdrop-blur-sm p-5 rounded-3xl shadow-xl border border-white/40 overflow-hidden group transition-all duration-300 hover:shadow-2xl">
              {/* Subtle gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 to-secondary/10 rounded-3xl"></div>

              <div className="relative z-10">
                <img
                  src="/ph.webp"
                  alt="BeamUp app interface"
                  className="w-full h-auto rounded-xl shadow-md object-cover"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src =
                      "https://placehold.co/600x800/gray/white?text=BeamUp+App";
                  }}
                />
              </div>

              {/* All feature icons have been removed */}

              {/* Floating labels */}
              <div className="absolute bottom-4 left-4 right-4 bg-white/80 backdrop-blur-sm py-2 px-4 rounded-full shadow-md border border-white/40">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-gray-700">
                    BeamUp App
                  </span>
                  <div className="bg-lime-500/20 text-lime-500 text-xs rounded-full px-2 py-1">
                    Live Demo
                  </div>
                </div>
              </div>
            </div>

            {/* Background decoration - made more subtle */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-full -z-10 blur-3xl"></div>
          </div>
        </div>

        {/* Feature section */}
        <div className="text-center mt-32 mb-12">
          <h2 className="text-2xl font-bold mb-4">
            Connect with video partners worldwide
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Practice conversations, make friends, and improve your communication
            skills together
          </p>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
