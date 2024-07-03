"use client"
import { useState, useEffect } from 'react';
import { collection, addDoc, query, orderBy, onSnapshot, serverTimestamp } from "firebase/firestore";
import { db } from '../firebase';
import './contactMe.css';

export default function Page() {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  useEffect(() => {
    const q = query(collection(db, 'chat_app'), orderBy('timestamp'));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const messages = [];
      querySnapshot.forEach((doc) => {
        messages.push({ ...doc.data(), id: doc.id });
      });
      setMessages(messages);
    });
    return () => unsubscribe();
  }, []);

  const handleSendMessage = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, 'chat_app'), {
        ...formData,
        timestamp: serverTimestamp()
      });
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Error sending message:', error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
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
          <form onSubmit={handleSendMessage}>
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
            <button className="px-6 mb-10 py-3 text-sm font-bold text-white uppercase transition-all duration-150 ease-linear bg-blue-500 hover:bg-blue-400" type="submit">
              Send a message
            </button>
          </form>
        </div>
      </div>
      
    </div>
  );
}
