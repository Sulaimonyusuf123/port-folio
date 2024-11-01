import React from 'react'
import profilePic from "../Home/profile.jpeg"
import CV from "../Home/durella cv.pdf"
import { Link } from 'react-router-dom'
import boot from "../Home/boot.svg"
import css from "../Home/css.svg"
import git from "../Home/git.svg"
import js from "../Home/js.svg"
import html from "../Home/html.svg"
import github from "../Home/github.svg"
import logo from "../Home/LOGO.svg"

const Home = () => {
  return (
    <div>
      <div className='md:mt-36 mt-20 md:ml-24 px-4 md:px-0 justify-center items-center md:flex lg:flex sm:block sm:justify-ce'>
        <div className="text-4xl md:text-5xl md:mr-20 font-bold text-center md:text-left">
          <h1>Hi <span role="img" aria-label="waving hand">👋</span>,</h1>
          <h1>My name is <br/><span className="text-blue-700">OLAITAN</span></h1>
          <p className="text-2xl md:text-3xl">I am a frontend Developer</p>
          <div className="mt-8 text-xl md:text-2xl flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
            <a href={CV} download className="bg-red-500 p-2 rounded-lg text-center">
              Download CV
            </a>
            <Link to="/Contact" className="bg-blue-500 p-2 rounded-lg text-center">
              Contact Me
            </Link>
          </div>
        </div>
        <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden mt-12 mx-auto md:mx-0">
          <img src={profilePic} alt="Light - Developer" className="w-full h-full object-cover" />
        </div>
      </div>
      <div className='mt-24 px-4 md:px-0'>
        <div className='text-center'>
          <p className='text-4xl md:text-5xl font-bold'>My TechStack</p>
          <p className='mt-8 text-xl font-semi-bold md:text-2xl'>Technology I have been working with recently</p>
        </div>
        <div className='mt-12'>
          <div className="grid grid-cols-3 md:flex md:flex-wrap justify-center gap-6">
            {[html, github, js, css, boot, git, html, github, js].map((tech, index) => (
              <div key={index} className="flex justify-center items-center">
                <img src={tech} alt="Tech" className="w-16 md:w-20 bg-white p-2 rounded-2xl border-2 border-gray-400 hover:bg-blue-500" />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div>
        <div className='text-center mt-24 font-bold'>
          <p className='text-4xl md:text-5xl'>Projects</p>
          <p className='text-xl md:text-2xl mt-6'>Things I've built so far</p>
        </div>

        <div className="container mx-auto p-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-6 md:w-[75rem] w-full md:ml-36">
            {[1, 2, 3, 4, 5, 6].map((_, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg">
                <img src={React} alt="Project image" className="w-full h-48 object-cover" />
                <div className="p-6 md:p-4">
                  <h3 className="text-2xl md:text-xl font-semibold mb-4 md:mb-2">Project Tile goes here</h3>
                  <p className="text-gray-600 text-base md:text-sm mb-4">This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content</p>
                  <p className="text-sm text-gray-500 mb-4">Tech stack : HTML, JavaScript, SASS, React</p>
                  <div className="flex space-x-4">
                    <a href="#" className="text-blue-500 hover:text-blue-600 flex items-center">
                      <svg className="w-5 h-5 md:w-4 md:h-4 mr-2 md:mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 12a2 2 0 100-4 2 2 0 000 4z"/><path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd"/></svg>
                      Live Preview
                    </a>
                    <a href="#" className="text-gray-500 hover:text-gray-600 flex items-center">
                      <svg className="w-5 h-5 md:w-4 md:h-4 mr-2 md:mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"/></svg>
                      View Code
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className='bg-gray-200 py-12'>
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
      </div>
    </div>
  )
}

export default Home