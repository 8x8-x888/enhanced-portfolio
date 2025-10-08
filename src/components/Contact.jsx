// src/components/Contact.jsx
import React, { useState } from 'react';
import { SendIcon, CheckIcon, ErrorIcon } from '../assets/Icons';

// Component for the Contact Form section
const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
  });
  const [status, setStatus] = useState(null); // 'success', 'error', 'submitting', null
  const [message, setMessage] = useState('');
  const [honeypot, setHoneypot] = useState(''); // Simple honeypot field

  // Environment variables for the API endpoint (read from .env.example/local .env)
  // These will be undefined if the optional backend is not configured in .env
  const API_URL = import.meta.env.VITE_CONTACT_API_URL;
  const API_SECRET = import.meta.env.VITE_CONTACT_API_SECRET;

  // Handle form field changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // Handle honeypot change (must remain empty for legitimate submission)
  const handleHoneypotChange = (e) => {
    setHoneypot(e.target.value);
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!API_URL || !API_SECRET) {
      alert("Note: The contact form backend is not configured in your .env file. Please check the README for setup instructions.");
      return;
    }

    // Honeypot check: if this field has any value, it's likely a bot
    if (honeypot) {
      console.log('Bot detected via honeypot.');
      setStatus('success'); // Fakes a success message to discourage bot
      setMessage('Thank you for your message! I will get back to you soon.');
      return;
    }
    
    setStatus('submitting');
    setMessage('Sending your request...');

    try {
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-API-Secret': API_SECRET, // Custom header for API key/secret
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        setStatus('success');
        setMessage(result.message || 'Success! Your message has been sent.');
        setFormData({ firstName: '', lastName: '', email: '', phone: '', message: '' }); // Clear form
      } else {
        setStatus('error');
        setMessage(result.error || 'Failed to send message. Please try again or book a call.');
      }
    } catch (error) {
      console.error('Submission Error:', error);
      setStatus('error');
      setMessage('Network error. Failed to connect to the server.');
    }
  };

  // Status message rendering helper
  const renderStatusMessage = () => {
    if (!status) return null;

    const isSuccess = status === 'success';
    const Icon = isSuccess ? CheckIcon : ErrorIcon;
    const bgColor = isSuccess ? 'bg-green-500/20 text-green-300' : 'bg-red-500/20 text-red-300';

    return (
      <div 
        role="alert" 
        aria-live="assertive" 
        className={`flex items-center gap-3 p-4 rounded-lg font-semibold mb-6 ${bgColor}`}
      >
        <Icon className="w-5 h-5" />
        {message}
      </div>
    );
  };

  return (
    <section id="contact-form" className="py-16 md:py-24" role="region" aria-label="Contact Form to Start a Project">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-12">
          <h2 className="text-light-text font-extrabold mb-2">LET&rsquo;S BUILD TOGETHER</h2>
          <p className="text-lg text-gray-400">Ready to automate? Fill out the form or book a call.</p>
        </div>

        <div className="bg-gray-800/80 p-8 md:p-12 rounded-xl shadow-2xl border border-gray-700">
          
          {renderStatusMessage()}
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <fieldset disabled={status === 'submitting'}>
              <legend className="sr-only">Contact Information and Message</legend>
              
              {/* Honeypot Field (Invisible to human users) */}
              <div style={{ opacity: 0, position: 'absolute', top: 0, left: 0, height: 0, width: 0, zIndex: -1 }} aria-hidden="true">
                <label htmlFor="hp-field">Keep this field empty</label>
                <input 
                  type="text" 
                  id="hp-field" 
                  name="honeypot" 
                  value={honeypot} 
                  onChange={handleHoneypotChange} 
                  tabIndex={-1} 
                  autoComplete="off" 
                />
              </div>

              {/* Name Fields */}
              <div className="grid sm:grid-cols-2 gap-6 mb-6">
                <input 
                  type="text" 
                  name="firstName" 
                  placeholder="First Name" 
                  className="w-full p-3 rounded-lg bg-gray-700 border border-gray-600 text-light-text placeholder-gray-400 focus:ring-2 focus:ring-primary-blue focus:border-primary-blue transition-colors"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                />
                <input 
                  type="text" 
                  name="lastName" 
                  placeholder="Last Name" 
                  className="w-full p-3 rounded-lg bg-gray-700 border border-gray-600 text-light-text placeholder-gray-400 focus:ring-2 focus:ring-primary-blue focus:border-primary-blue transition-colors"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                />
              </div>

              {/* Email and Phone */}
              <div className="grid sm:grid-cols-2 gap-6 mb-6">
                <input 
                  type="email" 
                  name="email" 
                  placeholder="Email" 
                  className="w-full p-3 rounded-lg bg-gray-700 border border-gray-600 text-light-text placeholder-gray-400 focus:ring-2 focus:ring-primary-blue focus:border-primary-blue transition-colors"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
                <input 
                  type="tel" 
                  name="phone" 
                  placeholder="Phone Number (Optional)" 
                  className="w-full p-3 rounded-lg bg-gray-700 border border-gray-600 text-light-text placeholder-gray-400 focus:ring-2 focus:ring-primary-blue focus:border-primary-blue transition-colors"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>

              {/* Message */}
              <textarea
                name="message"
                rows="6"
                placeholder="Message: Tell me about your biggest manual headache, what apps you use, and what you hope to automate."
                className="w-full p-3 rounded-lg bg-gray-700 border border-gray-600 text-light-text placeholder-gray-400 focus:ring-2 focus:ring-primary-blue focus:border-primary-blue transition-colors mb-6"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>

              {/* Submit Button */}
              <button 
                type="submit" 
                className="btn-primary w-full flex items-center justify-center gap-2"
                disabled={status === 'submitting'}
              >
                {status === 'submitting' ? (
                  <>
                    <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </>
                ) : (
                  <>
                    <SendIcon className="w-5 h-5" />
                    Send Request
                  </>
                )}
              </button>
            </fieldset>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;