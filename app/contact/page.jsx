"use client";
import { useState } from 'react';
import './contactMe.css';

export default function Page() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const phoneNumber = '1234567890'; // Replace with your WhatsApp phone number including country code
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\nMessage: ${formData.message}`)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div
      style={{ backgroundImage: "url(bg-3.jpg)" }}
      className="overflow-hidden w-screen h-screen bg-cover bg-center flex items-center justify-center"
    >
      <div
        style={{ backgroundImage: "url(atombg-comp.webp)" }}
        className="h-[60%] w-[80%] relative bg-cover bg-center rounded-xl border border-white"
      >
        <div className="absolute left-20 bottom-16 w-[70%] md:w-[30%]">
          <form onSubmit={handleSubmit}>
            <h2 className="text-2xl font-bold mb-5 text-white">Contact Me</h2>
            <div className="mb-3">
              <input
                type="text"
                placeholder="Your name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-3 py-2 text-sm text-gray-800 placeholder-gray-400 bg-white border-0 rounded shadow"
              />
            </div>
            <div className="mb-3">
              <input
                type="email"
                placeholder="Email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-3 py-2 text-sm text-gray-800 placeholder-gray-400 bg-white border-0 rounded shadow"
              />
            </div>
            <div className="mb-3">
              <textarea
                placeholder="Your message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full px-3 py-2 text-sm text-gray-800 placeholder-gray-400 bg-white border-0 rounded shadow"
              />
            </div>
            <button type="submit" className="px-6 mb-10 py-3 text-sm font-bold text-white uppercase transition-all duration-150 ease-linear bg-blue-500 hover:bg-blue-400">
              Send a message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
