import React from 'react'
import profilePic from "../Home/profile.jpeg"
import CV from "../Home/sulaimon.pdf"
import { Link } from 'react-router-dom'
import boot from "../Home/boot.svg"
import css from "../Home/css.svg"
import git from "../Home/git.svg"
import js from "../Home/js.svg"
import html from "../Home/html.svg"
import github from "../Home/github.svg"

import image1 from "../../Components/Project/huddle.png"
import image2 from "../../Components/Project/flutter.png"
import image3 from "../../Components/Project/palmpay.png"

import image5 from "../../Components/Project/todo.jpeg"
import image6 from "../../Components/Home/api.jpeg"

import Footer from '../Footer'

const Home = () => {
  return (
    <div>
      <div className='md:mt-36 mt-20 md:ml-24 px-4 md:px-0 justify-center items-center md:flex lg:flex sm:block sm:justify-ce'>
        <div className="text-4xl md:text-5xl md:mr-20 font-bold text-center md:text-left">
          <h1>Hi <span role="img" aria-label="waving hand">👋</span>,</h1>
          <h1>My name is <br/><span className="text-blue-700">OLAITAN</span></h1>
          <p className="text-2xl md:text-3xl">I am a frontend Developer</p>
          <div className="mt-8 text-xl md:text-2xl flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
          <a href={CV} download="Olaitan-CV.pdf" className="bg-red-500 p-2 rounded-lg text-center">
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
      <div>

 <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* Project Card 1 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-lg">
              <div className="w-full h-48 overflow-hidden mt-4">
                <img src={image1} alt="Project image" className="w-full object-cover" />
              </div>
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">Huddle Landing Page</h3>
                <p className="text-gray-600 text-sm mb-4">I designed and developed a responsive Huddle landing page, showcasing a clean, user-friendly interface with engaging visuals and seamless functionality to drive community interaction.</p>
                <p className="text-sm text-gray-500 mb-4">Tech stack : HTML, JavaScript, Tailwind CSS, React</p>
                <div className="flex space-x-4">
                  <a href="https://huddle-landing-page-chi-tan.vercel.app/" className="text-blue-500 hover:text-blue-600 flex items-center">
                    <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 12a2 2 0 100-4 2 2 0 000 4z"/><path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd"/></svg>
                    Live Preview
                  </a>
                  <a href="https://github.com/Sulaimonyusuf123/Huddle-landing-page" className="text-gray-500 hover:text-gray-600 flex items-center">
                    <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"/></svg>
                    View Code
                  </a>
                </div>
              </div>
            </div>

            {/* Project Card 2 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-lg">
              <div className="w-full h-48 overflow-hidden mt-4">
                <img src={image3} alt="Project image" className="w-full object-cover" />
              </div>
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">Palmpay</h3>
                <p className="text-gray-600 text-sm mb-4">I created a PalmPay website, replicating its intuitive UI/UX and core payment functionalities, delivering a secure, scalable, and user-centric fintech solution tailored for seamless digital transactions.</p>
                <p className="text-sm text-gray-500 mb-4">Tech stack : HTML, JavaScript, TailwindCSS, React, State Management</p>
                <div className="flex space-x-4">
                  <a href="https://palmpay-coral.vercel.app/" className="text-blue-500 hover:text-blue-600 flex items-center">
                    <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 12a2 2 0 100-4 2 2 0 000 4z"/><path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd"/></svg>
                    Live Preview
                  </a>
                  <a href="https://github.com/Sulaimonyusuf123/Palmpay" className="text-gray-500 hover:text-gray-600 flex items-center">
                    <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"/></svg>
                    View Code
                  </a>
                </div>
              </div>
            </div>

            {/* Project Card 3 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-lg">
              <div className="w-full h-48 overflow-hidden mt-4">
                <img src={image2} alt="Project image" className="w-full object-cover" />
              </div>
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">FlutterWave</h3>
                <p className="text-gray-600 text-sm mb-4">I built a flutterwave project as a hands-on Tailwind CSS practice project, crafting a responsive, modern UI with streamlined styling to enhance my front-end development skills.</p>
                <p className="text-sm text-gray-500 mb-4">Tech stack : HTML, JavaScript, SASS, React</p>
                <div className="flex space-x-4">
                  <a href="https://flutterwave-seven.vercel.app/" className="text-blue-500 hover:text-blue-600 flex items-center">
                    <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 12a2 2 0 100-4 2 2 0 000 4z"/><path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd"/></svg>
                    Live Preview
                  </a>
                  <a href="https://github.com/Sulaimonyusuf123/Flutterwave" className="text-gray-500 hover:text-gray-600 flex items-center">
                    <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"/></svg>
                    View Code
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Second row of projects */}
        <div className="container mx-auto px-4 pb-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* Project Card 4 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-lg">
              <div className="w-full h-48 overflow-hidden mt-4">
                <img src={image6} alt="Project image" className="w-full object-cover" />
              </div>
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">API JSON data</h3>
                <p className="text-gray-600 text-sm mb-4">I built an API to fetch and process online JSON data. a real-time dashboard with a seach , enabling dynamic content delivery with efficient data handling and seamless integration into a responsive front-end styled with Tailwind CSS.</p>
                <p className="text-sm text-gray-500 mb-4">Tech stack : HTML, JavaScript, SASS, React</p>
                <div className="flex space-x-4">
                  <a href="https://api-test-eight-rust.vercel.app/" className="text-blue-500 hover:text-blue-600 flex items-center">
                    <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 12a2 2 0 100-4 2 2 0 000 4z"/><path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd"/></svg>
                    Live Preview
                  </a>
                  <a href="https://github.com/Sulaimonyusuf123/API-test" className="text-gray-500 hover:text-gray-600 flex items-center">
                    <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"/></svg>
                    View Code
                  </a>
                </div>
              </div>
            </div>

            {/* Project Card 5 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-lg">
              <div className="w-full h-48 overflow-hidden mt-4">
                <img src={image5} alt="Project image" className="w-full object-cover" />
              </div>
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">Music App</h3>
                <p className="text-gray-600 text-sm mb-4">Used state management to handle storage</p>
                <p className="text-sm text-gray-500 mb-4">Tech stack : HTML, JavaScript, SASS, React</p>
                <div className="flex space-x-4">
                  <a href="https://music-app-five-sand.vercel.app/" className="text-blue-500 hover:text-blue-600 flex items-center">
                    <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 12a2 2 0 100-4 2 2 0 000 4z"/><path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd"/></svg>
                    Live Preview
                  </a>
                  <a href="https://github.com/Sulaimonyusuf123/music-app" className="text-gray-500 hover:text-gray-600 flex items-center">
                    <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"/></svg>
                    View Code
                  </a>
                </div>
              </div>
            </div>

            {/* Project Card 6 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-lg">
              <div className="w-full h-48 overflow-hidden mt-4">
                <img src={image2} alt="Project image" className="w-full object-cover" />
              </div>
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">TODO List</h3>
                <p className="text-gray-600 text-sm mb-4">This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content</p>
                <p className="text-sm text-gray-500 mb-4">Tech stack : HTML, JavaScript, SASS, React</p>
                <div className="flex space-x-4">
                  <a href="https://to-do-list-sigma-seven-77.vercel.app/" className="text-blue-500 hover:text-blue-600 flex items-center">
                    <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 12a2 2 0 100-4 2 2 0 000 4z"/><path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd"/></svg>
                    Live Preview
                  </a>
                  <a href="https://github.com/Sulaimonyusuf123/To-Do-list" className="text-gray-500 hover:text-gray-600 flex items-center">
                    <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"/></svg>
                    View Code
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>
        
      </div>
      </div>
      <div className="container mx-auto px-4 mt-2 mb-8">
  <Footer/>
</div>
    </div>
  )
}

export default Home