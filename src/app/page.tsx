'use client'
// pages/index.js

import { useState, useEffect } from "react";
import Image from "next/image";

export default function Home() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    // Apply dark mode class to the body element based on the state
    if (isDarkMode) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <main className={`flex min-h-screen flex-col items-center p-8 ${isDarkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-900"}`}>
      {/* Toggle Dark Mode Button */}
      <button
        onClick={toggleDarkMode}
        className="absolute top-4 right-4 bg-gray-300 dark:bg-gray-700 text-gray-900 dark:text-gray-200 px-4 py-2 rounded-full shadow-lg"
      >
        {isDarkMode ? "Light Mode" : "Dark Mode"}
      </button>

      {/* Header Section */}
      <header className="w-full max-w-4xl mx-auto text-center my-12">
        <Image
          src="/profile.jpeg" // Make sure to add a profile picture in the public folder
          alt="James Unsworth"
          className="rounded-full"
          width={150}
          height={150}
        />
        <h1 className="text-4xl font-bold mt-4">James Unsworth</h1>
        <p className="text-xl">Full Stack Developer in Finance | Founder of London AI Network</p>
        <p className="text-lg mt-2">London, UK | 20 years old</p>
      </header>

      {/* About Section */}
      <section className="w-full max-w-4xl mx-auto bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-200 shadow-md rounded-lg p-8 mb-12">
        <h2 className="text-3xl font-semibold mb-4">About Me</h2>
        <p>
          I am a passionate full stack developer working in the finance sector in London. I specialize in building high-performance web applications and have a keen interest in the latest web technologies and AI. As the founder of the London AI Network, my mission is to create a silicon-like experience for developers, founders, and VCs in London.
        </p>
      </section>

      {/* Skills Section */}
      <section className="w-full max-w-4xl mx-auto bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-200 shadow-md rounded-lg p-8 mb-12">
        <h2 className="text-3xl font-semibold mb-4">Skills</h2>
        <ul className="grid grid-cols-2 gap-4">
          <li>JavaScript</li>
          <li>React.js</li>
          <li>Next.js</li>
          <li>Node.js</li>
          <li>Java</li>
          <li>MongoDB</li>
          <li>SQL</li>
          <li>HTML & CSS</li>
          <li>TypeScript</li>
          <li>Python</li>
        </ul>
      </section>

      {/* Projects Section */}
      {/* <section className="w-full max-w-4xl mx-auto bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-200 shadow-md rounded-lg p-8 mb-12">
        <h2 className="text-3xl font-semibold mb-4">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gray-50 dark:bg-gray-600 text-gray-900 dark:text-gray-200 p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-2">Finance Tracker</h3>
            <p>A web application to track personal finances and investments, built with React, Node.js, and MongoDB.</p>
          </div>
          <div className="bg-gray-50 dark:bg-gray-600 text-gray-900 dark:text-gray-200 p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-2">AI Network Platform</h3>
            <p>The official platform for the London AI Network, built with Next.js and Tailwind CSS, providing resources and community features for developers and founders.</p>
          </div>
          {/* Add more projects as needed */}
        {/* </div> */}
      {/* </section> */}

      {/* Newsletter Signup Button */}
      <section className="w-full max-w-4xl mx-auto bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-200 shadow-md rounded-lg p-8 mb-12">
        <h2 className="text-3xl font-semibold mb-4">Newsletter</h2>
        <p className="mb-4">Stay updated with the latest news and updates from the London AI Network. Sign up for my newsletter!</p>
        <a
          href="https://londonainexus.substack.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-blue-500 dark:bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-600 dark:hover:bg-blue-700"
        >
          Subscribe to Newsletter
        </a>
      </section>

      {/* Contact Section */}
      <section className="w-full max-w-4xl mx-auto bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-200 shadow-md rounded-lg p-8 mb-12">
        <h2 className="text-3xl font-semibold mb-4">Contact</h2>
        <p className="mb-4">Feel free to reach out to me via email or connect with me on LinkedIn.</p>
        <p>Email: <a href="mailto:unsworth.jamesa@gmail.com" className="text-blue-500 dark:text-blue-300">unsworth.jamesa@gmail.com</a></p>
        <p>LinkedIn: <a href="https://www.linkedin.com/in/james-unsworth-927507216/?originalSubdomain=uk" className="text-blue-500 dark:text-blue-300">www.linkedin.com/in/james-unsworth-927507216</a></p>
      </section>
    </main>
  );
}
