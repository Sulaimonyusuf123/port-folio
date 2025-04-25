import React from 'react';
import Footer from '../Footer';
import image1 from "../../Components/Project/huddle.png"
import image2 from "../../Components/Project/flutter.png"
import image3 from "../../Components/Project/palmpay.png"
import image4 from "../../Components/Project/music.jpeg"
import image5 from "../../Components/Project/todo.jpeg"

const Project = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
        {/* First row of projects */}
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
                  <a href="#" className="text-gray-500 hover:text-gray-600 flex items-center">
                    <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"/></svg>
                    View Code
                  </a>
                </div>
              </div>
            </div>

            {/* Project Card 2 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-lg">
              <div className="w-full h-48 overflow-hidden mt-4">
                <img src={image2} alt="Project image" className="w-full object-cover" />
              </div>
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">Palmpay cloned</h3>
                <p className="text-gray-600 text-sm mb-4">I created a PalmPay website, replicating its intuitive UI/UX and core payment functionalities, delivering a secure, scalable, and user-centric fintech solution tailored for seamless digital transactions.</p>
                <p className="text-sm text-gray-500 mb-4">Tech stack : HTML, JavaScript, TailwindCSS, React, State Management</p>
                <div className="flex space-x-4">
                  <a href="https://palmpay-coral.vercel.app/" className="text-blue-500 hover:text-blue-600 flex items-center">
                    <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 12a2 2 0 100-4 2 2 0 000 4z"/><path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd"/></svg>
                    Live Preview
                  </a>
                  <a href="#" className="text-gray-500 hover:text-gray-600 flex items-center">
                    <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"/></svg>
                    View Code
                  </a>
                </div>
              </div>
            </div>

            {/* Project Card 3 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-lg">
              <div className="w-full h-48 overflow-hidden mt-4">
                <img src={image3} alt="Project image" className="w-full object-cover" />
              </div>
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">Project Title goes here</h3>
                <p className="text-gray-600 text-sm mb-4">I built a flutterwave project as a hands-on Tailwind CSS practice project, crafting a responsive, modern UI with streamlined styling to enhance my front-end development skills.</p>
                <p className="text-sm text-gray-500 mb-4">Tech stack : HTML, JavaScript, SASS, React</p>
                <div className="flex space-x-4">
                  <a href="https://flutterwave-seven.vercel.app/" className="text-blue-500 hover:text-blue-600 flex items-center">
                    <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 12a2 2 0 100-4 2 2 0 000 4z"/><path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd"/></svg>
                    Live Preview
                  </a>
                  <a href="#" className="text-gray-500 hover:text-gray-600 flex items-center">
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
                <img src={image4} alt="Project image" className="w-full object-cover" />
              </div>
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">Project Title goes here</h3>
                <p className="text-gray-600 text-sm mb-4">This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content</p>
                <p className="text-sm text-gray-500 mb-4">Tech stack : HTML, JavaScript, SASS, React</p>
                <div className="flex space-x-4">
                  <a href="https://flutterwave-seven.vercel.app/" className="text-blue-500 hover:text-blue-600 flex items-center">
                    <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 12a2 2 0 100-4 2 2 0 000 4z"/><path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd"/></svg>
                    Live Preview
                  </a>
                  <a href="#" className="text-gray-500 hover:text-gray-600 flex items-center">
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
                <h3 className="text-xl font-semibold mb-2">Project Title goes here</h3>
                <p className="text-gray-600 text-sm mb-4">This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content</p>
                <p className="text-sm text-gray-500 mb-4">Tech stack : HTML, JavaScript, SASS, React</p>
                <div className="flex space-x-4">
                  <a href="https://music-app-five-sand.vercel.app/" className="text-blue-500 hover:text-blue-600 flex items-center">
                    <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 12a2 2 0 100-4 2 2 0 000 4z"/><path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd"/></svg>
                    Live Preview
                  </a>
                  <a href="#" className="text-gray-500 hover:text-gray-600 flex items-center">
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
                <h3 className="text-xl font-semibold mb-2">Project Title goes here</h3>
                <p className="text-gray-600 text-sm mb-4">This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content</p>
                <p className="text-sm text-gray-500 mb-4">Tech stack : HTML, JavaScript, SASS, React</p>
                <div className="flex space-x-4">
                  <a href="https://to-do-list-sigma-seven-77.vercel.app/" className="text-blue-500 hover:text-blue-600 flex items-center">
                    <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 12a2 2 0 100-4 2 2 0 000 4z"/><path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd"/></svg>
                    Live Preview
                  </a>
                  <a href="#" className="text-gray-500 hover:text-gray-600 flex items-center">
                    <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"/></svg>
                    View Code
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </main>
      
      <div className="container mx-auto px-4 mt-2 mb-8">
  <Footer/>
</div>
    </div>
  );
};

export default Project;