import React from "react";

const Header = () => (
  <header className="flex flex-col items-center gap-2 py-6 border-b border-gray-300 dark:border-gray-700">
    <h1 className="text-4xl font-bold tracking-tight">Han Li</h1>
    <div className="flex flex-col sm:flex-row items-center gap-2 text-sm text-gray-700 dark:text-gray-300">
      <span>📞 312-998-1665</span>
      <span>•</span>
      <a href="mailto:hanli243023@gmail.com" className="hover:underline">hanli243023@gmail.com</a>
      <span>•</span>
      <a href="https://linkedin.com/in/hanli111" target="_blank" rel="noopener noreferrer" className="hover:underline">linkedin.com/in/hanli111</a>
      <span>•</span>
      <a href="https://github.com/hanli111" target="_blank" rel="noopener noreferrer" className="hover:underline">github.com/hanli111</a>
    </div>
  </header>
);

export default Header; 