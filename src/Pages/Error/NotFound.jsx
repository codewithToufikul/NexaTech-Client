import { Link } from 'react-router';
import { Home, ArrowLeft, AlertCircle } from 'lucide-react';

const NotFound = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center px-4">
      <div className="text-center max-w-2xl w-full">
        {/* Animated 404 */}
        <div className="mb-8">
          <h1 className="text-9xl md:text-[12rem] font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-pulse">
            404
          </h1>
        </div>

        {/* Error Icon */}
        <div className="mb-6 flex justify-center">
          <div className="relative">
            <div className="absolute inset-0 bg-blue-500/20 rounded-full blur-2xl animate-pulse"></div>
            <AlertCircle className="w-24 h-24 text-blue-400 relative z-10" />
          </div>
        </div>

        {/* Error Message */}
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Page Not Found
        </h2>
        <p className="text-lg text-slate-400 mb-8 max-w-md mx-auto">
          Oops! The page you're looking for doesn't exist or has been moved. 
          Let's get you back on track.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            to="/"
            className="group inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500/50"
          >
            <Home className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            Go Home
          </Link>
          
          <button
            onClick={() => window.history.back()}
            className="group inline-flex items-center gap-2 px-6 py-3 bg-slate-800 border border-slate-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 hover:border-slate-600"
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            Go Back
          </button>
        </div>

        {/* Additional Links */}
        <div className="mt-12 pt-8 border-t border-slate-700">
          <p className="text-slate-500 text-sm mb-4">You might be looking for:</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/services"
              className="text-blue-400 hover:text-blue-300 transition-colors text-sm"
            >
              Services
            </Link>
            <Link
              to="/portfolio"
              className="text-blue-400 hover:text-blue-300 transition-colors text-sm"
            >
              Portfolio
            </Link>
            <Link
              to="/about"
              className="text-blue-400 hover:text-blue-300 transition-colors text-sm"
            >
              About
            </Link>
            <Link
              to="/contact"
              className="text-blue-400 hover:text-blue-300 transition-colors text-sm"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>

      {/* Background Decoration */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>
    </div>
  );
};

export default NotFound;

