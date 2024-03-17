import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="flex-shrink-0">
            <Link to="/" className="text-white font-bold text-xl">
              Getch Attendance
            </Link>
          </div>
          <div className="hidden md:block">
            <ul className="flex space-x-4">
              <li>
                <Link to="/" className="text-white hover:text-gray-300">
                  Home
                </Link>
              </li>
              <li>
                <a href="#" className="text-white hover:text-gray-300">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="text-white hover:text-gray-300">
                  Services
                </a>
              </li>
              <li>
                <a href="#" className="text-white hover:text-gray-300">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div className="md:hidden">
            <button className="text-white focus:outline-none">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          </div>
          <div className="hidden md:block">
            <Link
              to="login"
              className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
            >
              Login
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
