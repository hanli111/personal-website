"use client";
import React from "react";

const navItems = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => (
  <nav className="fixed top-0 left-0 w-full z-50 bg-white/80 dark:bg-black/60 backdrop-blur border-b border-gray-200 dark:border-gray-800 shadow-sm">
    <div className="max-w-3xl mx-auto flex justify-between items-center px-4 py-2">
      <span className="font-bold text-lg tracking-tight">Han Li</span>
      <ul className="flex gap-4 text-sm font-medium">
        {navItems.map((item) => (
          <li key={item.href}>
            <a href={item.href} className="hover:text-indigo-600 transition-colors duration-200">
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  </nav>
);

export default Navbar; 