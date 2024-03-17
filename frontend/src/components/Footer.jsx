export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white p-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center">
          <div>
            <p>&copy; 2024 Getch Attendance. All rights reserved.</p>
          </div>
          <div>
            <ul className="flex space-x-4">
              <li>
                <a href="#" className="hover:text-gray-300">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
