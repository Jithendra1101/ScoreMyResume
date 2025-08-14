// src/components/Footer.tsx
import React from "react";
import { FaLinkedin, FaGithub, FaGlobe } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <div>
    <footer className="bg-white text-gray-800 py-4 flex flex-col items-center flex-row justify-between items-center bg-white rounded-full p-4 w-full px-10 max-w-[1200px] mx-auto">
      <p className="flex items-center space-x-2 text-sm">
        <span>Made with</span>
        <span className="text-red-500">❤️</span>
        <span>by</span>
        <span className="font-medium">Jithendra</span>
      </p>

      <div className="flex space-x-4 mt-2">
        <a
          href="https://www.linkedin.com/in/jithendra11/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-600"
        >
          <FaLinkedin size={22} />
        </a>
        <a
          href="https://github.com/Jithendra1101"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-900"
        >
          <FaGithub size={22} />
        </a>
        <a
          href="https://jithendra.in"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-green-600"
        >
          <FaGlobe size={22} />
        </a>
      </div>
    </footer>
    </div>
  );
};

export default Footer;
