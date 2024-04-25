import React from 'react'
import { useState } from 'react';
const Modal = () => {
    const [activeTab, setActiveTab] = useState(1);
    const [modalOpen, setModalOpen] = useState(false);
  
    const handleTabClick = (tabIndex) => {
      setActiveTab(tabIndex);
    };
  
    const toggleModal = () => {
      setModalOpen(!modalOpen);
    };
  return (
    <div className='absolute bottom-5 right-12 z-50'>
      <button className='px-4 py-4 bg-green-400 border-4 rounded-full' onClick={toggleModal}>
        <svg viewBox="0 0 10 14" width="28" height="25" fill="none" id="feedback_svg" class="callibri_panel_picture" xmlns="http://www.w3.org/2000/svg">
          <path d="M3 3V2a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v1" fill="#000"></path>
          <rect x=".5" y="2.5" width="9" height="11" rx="1.5" class="callibri_passive_icon callibri_svg_fill" stroke="#000"></rect>
          <path fill="#000" d="M2 6h5v1H2zM2 8h5v1H2zM2 10h4v1H2z"></path>
        </svg>
      </button>
      {/* modal */}
      {modalOpen && (
        <div className="fixed inset-0 flex justify-center items-center bg-gray-800 bg-opacity-50">
          <div className="bg-white p-8 rounded-lg">
            <button className="absolute top-0 right-0 m-4 text-gray-500 hover:text-gray-700" onClick={toggleModal}>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <div>
              <div className="flex mb-4">
                <button
                  className={`px-4 py-2 ${activeTab === 1 ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'} mr-2`}
                  onClick={() => handleTabClick(1)}
                >
                  Tab 1
                </button>
                <button
                  className={`px-4 py-2 ${activeTab === 2 ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'}`}
                  onClick={() => handleTabClick(2)}
                >
                  Tab 2
                </button>
              </div>
              <div className={`${activeTab === 1 ? 'block' : 'hidden'}`}>
                {/* 1-da form */}
                <form className="bg-gray-100 p-4">
                  <label htmlFor="username" className="block mb-2">Username:</label>
                  <input type="text" id="username" className="border px-2 py-1 mb-2" />
                  <label htmlFor="password" className="block mb-2">Password:</label>
                  <input type="password" id="password" className="border px-2 py-1 mb-2" />
                  <button type="submit" className="bg-blue-500 text-white px-4 py-2">Submit</button>
                </form>
              </div>
              <div className={`${activeTab === 2 ? 'block' : 'hidden'}`}>
                {/* 2-da ifrem */}
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d483175.7732257224!2d-74.26324279946795!3d40.69767092560273!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2s!4v1649731589500!5m2!1sen!2s" width="600" height="450" style={{ border: 0 }} allowFullScreen="" loading="lazy"></iframe>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Modal