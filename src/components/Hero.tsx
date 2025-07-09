"use client";
import React from "react";

const Hero = () => (
  <section id="hero" className="flex flex-col items-center justify-center min-h-[60vh] pt-12 pb-8 text-center relative z-10">
    {/* 3D Canvas Placeholder */}
    <div className="w-full flex justify-center mb-6">
      <div className="w-64 h-64 bg-gradient-to-br from-indigo-400/30 to-purple-400/30 rounded-full blur-2xl animate-pulse" />
    </div>
    <h1 className="text-4xl sm:text-5xl font-bold mb-2">Han Li</h1>
    <p className="text-lg sm:text-xl text-gray-700 dark:text-gray-300 mb-6">Software Engineer • 3D Portfolio Enthusiast</p>
    <a href="#contact" className="inline-block px-6 py-2 bg-indigo-600 text-white rounded-full font-semibold shadow hover:bg-indigo-700 transition">Contact Me</a>
  </section>
);

export default Hero; 