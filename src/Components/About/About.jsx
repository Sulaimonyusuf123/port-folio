import React from 'react'
import { Link } from 'react-router-dom'
import logo from "../Home/LOGO.svg"
import profilePic from "../Home/profile.jpeg"
import CV from "../Home/sulaimon-cv.pdf"
import html from "../Home/html.svg"
import css from "../Home/css.svg"
import js from "../Home/js.svg"
import boot from "../Home/boot.svg"
import git from "../Home/git.svg"
import github from "../Home/github.svg"
import Footer from '../Footer'

const About = () => {
  // Experience years calculation
  const startYear = 2020
  const currentYear = new Date().getFullYear()
  const yearsOfExperience = currentYear - startYear

  return (
    <div className="container mx-auto px-4 pb-12">
      {/* Header */}
      <div className="md:mt-24 mt-16 text-center">
        <h1 className="text-4xl md:text-5xl font-bold">About Me</h1>
        <p className="text-xl md:text-2xl mt-6">My journey, skills, and career path</p>
      </div>

      {/* Profile Section */}
      <div className="mt-16 md:flex items-center gap-12">
        <div className="md:w-1/3 mb-8 md:mb-0">
          <div className="w-64 h-64 md:w-full md:h-auto aspect-square rounded-full overflow-hidden mx-auto">
            <img src={profilePic} alt="Olaitan - Frontend Developer" className="w-full h-full object-cover" />
          </div>
        </div>
        
        <div className="md:w-2/3">
          <h2 className="text-3xl font-bold mb-6">Hi, I'm <span className="text-blue-700">OLAITAN</span></h2>
          <p className="text-lg mb-4">
            I'm a passionate Frontend Developer with {yearsOfExperience} years of experience creating responsive and intuitive web applications. 
            I specialize in translating UI/UX designs into clean, efficient code that provides seamless user experiences.
          </p>
          <p className="text-lg mb-4">
            Throughout my career, I've worked on various projects ranging from e-commerce platforms to corporate websites
            and interactive web applications. I'm dedicated to writing clean, maintainable code and staying updated with
            the latest web development trends and technologies.
          </p>
          <p className="text-lg mb-8">
            When I'm not coding, I enjoy sharing my knowledge through tech communities, exploring new development tools,
            and contributing to open-source projects.
          </p>
          
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <a href={CV} download className="bg-red-500 hover:bg-red-600 text-white py-2 px-6 rounded-lg text-center transition">
              Download CV
            </a>
            <Link to="/Contact" className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-6 rounded-lg text-center transition">
              Contact Me
            </Link>
          </div>
        </div>
      </div>

      {/* Education & Experience */}
      <div className="mt-20 md:flex gap-8">
        {/* Education */}
        <div className="md:w-1/2 mb-12 md:mb-0">
          <h2 className="text-3xl font-bold mb-8 text-center md:text-left">Education</h2>
          
          <div className="bg-gray-100 p-6 rounded-lg mb-6">
            <div className="flex justify-between items-start mb-2">
              <h3 className="text-xl font-bold">Bachelor of Science in Computer Science</h3>
              <span className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded">2016-2020</span>
            </div>
            <p className="text-gray-600 mb-4">University of Lagos</p>
            <p>Focused on web development technologies, programming languages, and software engineering principles.</p>
          </div>
          
          <div className="bg-gray-100 p-6 rounded-lg">
            <div className="flex justify-between items-start mb-2">
              <h3 className="text-xl font-bold">Frontend Web Development</h3>
              <span className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded">2019</span>
            </div>
            <p className="text-gray-600 mb-4">Udacity Nanodegree</p>
            <p>Intensive program covering modern frontend frameworks, responsive design, and web performance optimization.</p>
          </div>
        </div>
        
        {/* Experience */}
        <div className="md:w-1/2">
          <h2 className="text-3xl font-bold mb-8 text-center md:text-left">Experience</h2>
          
          <div className="bg-gray-100 p-6 rounded-lg mb-6">
            <div className="flex justify-between items-start mb-2">
              <h3 className="text-xl font-bold">Senior Frontend Developer</h3>
              <span className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded">2022-Present</span>
            </div>
            <p className="text-gray-600 mb-4">TechInnovate Solutions</p>
            <p>Leading frontend development for enterprise clients, implementing modern UI libraries, and mentoring junior developers.</p>
          </div>
          
          <div className="bg-gray-100 p-6 rounded-lg">
            <div className="flex justify-between items-start mb-2">
              <h3 className="text-xl font-bold">Frontend Developer</h3>
              <span className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded">2020-2022</span>
            </div>
            <p className="text-gray-600 mb-4">WebCreate Studios</p>
            <p>Developed responsive websites and web applications for various clients using React, styling with Tailwind CSS, and implementing performance optimizations.</p>
          </div>
        </div>
      </div>

      {/* Skills Section */}
      <div className="mt-20">
        <h2 className="text-3xl font-bold mb-8 text-center">Skills & Expertise</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Technical Skills */}
          <div className="bg-gray-100 p-6 rounded-lg">
            <h3 className="text-2xl font-bold mb-6">Technical Skills</h3>
            
            <div className="grid grid-cols-2 gap-y-4">
              <div>
                <h4 className="font-semibold mb-2">Frontend</h4>
                <ul className="space-y-2">
                  <li>HTML5 & CSS3</li>
                  <li>JavaScript (ES6+)</li>
                  <li>React.js</li>
                  <li>Tailwind CSS</li>
                  <li>Responsive Design</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold mb-2">Tools & Others</h4>
                <ul className="space-y-2">
                  <li>Git & GitHub</li>
                  <li>NPM/Yarn</li>
                  <li>Webpack</li>
                  <li>VS Code</li>
                  <li>Figma (for UI implementation)</li>
                </ul>
              </div>
            </div>
          </div>
          
          {/* Soft Skills */}
          <div className="bg-gray-100 p-6 rounded-lg">
            <h3 className="text-2xl font-bold mb-6">Soft Skills</h3>
            
            <div className="grid grid-cols-1 gap-y-3">
              <div className="mb-4">
                <div className="flex justify-between mb-1">
                  <span className="font-medium">Problem Solving</span>
                  <span>95%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: '95%' }}></div>
                </div>
              </div>
              
              <div className="mb-4">
                <div className="flex justify-between mb-1">
                  <span className="font-medium">Communication</span>
                  <span>90%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: '90%' }}></div>
                </div>
              </div>
              
              <div className="mb-4">
                <div className="flex justify-between mb-1">
                  <span className="font-medium">Teamwork</span>
                  <span>85%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: '85%' }}></div>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between mb-1">
                  <span className="font-medium">Time Management</span>
                  <span>80%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: '80%' }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Tech Tools Section */}
      <div className="mt-20">
        <h2 className="text-3xl font-bold mb-8 text-center">Tools I Work With</h2>
        
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-8 justify-items-center">
          {[html, css, js, boot, git, github].map((tech, index) => (
            <div key={index} className="flex justify-center items-center bg-white p-4 rounded-xl shadow-md hover:shadow-lg transition w-20 h-20">
              <img src={tech} alt="Tech Tool" className="w-full h-full object-contain" />
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      {/* <div className='bg-gray-200 py-12 mt-20 rounded-lg'>
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-4">
            <img src={logo} alt="Logo" className="w-12 h-auto mb-4 md:mb-0" />
            <a href="tel:+09032691151" className="text-blue-500 hover:text-blue-700 text-lg md:text-base">09032691151</a>
            <a href="mailto:sulaimonyusuf911@gmail.com" className="text-blue-500 hover:text-blue-700 text-lg md:text-base">sulaimonyusuf911@gmail.com</a>
            <div className="flex space-x-6 md:space-x-4">
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-500">
                <svg className="h-6 w-6 md:h-5 md:w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-700">
                <svg className="h-6 w-6 md:h-5 md:w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-700">
                <svg className="h-6 w-6 md:h-5 md:w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div> */}
      <div className='mt-12'>
        <Footer/>
      </div>
    </div>
  )
}

export default About