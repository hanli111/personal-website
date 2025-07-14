"use client";
import React, { useState } from "react";
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    emailjs.send(
      process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
      process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
      {
        name: form.name,
        email: form.email,
        message: form.message,
      },
      process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
    )
    .then(() => {
      setSubmitted(true);
    })
    .catch((error) => {
      alert('Failed to send message. Please try again.');
    });
  };

  return (
    <section id="contact" className="max-w-2xl mx-auto py-16 px-4 text-center">
      <h2 className="text-3xl font-bold mb-4">Contact</h2>
      {submitted ? (
        <div className="text-green-600 font-semibold">Thank you for reaching out!</div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded border border-gray-300 dark:bg-black/20 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded border border-gray-300 dark:bg-black/20 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={form.message}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded border border-gray-300 dark:bg-black/20 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            rows={5}
            required
          />
          <button
            type="submit"
            className="px-6 py-2 bg-indigo-600 text-white rounded-full font-semibold shadow hover:bg-indigo-700 transition"
          >
            Send Message
          </button>
        </form>
      )}
    </section>
  );
};

export default Contact; 