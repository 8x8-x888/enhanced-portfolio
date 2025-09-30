// src/components/Contact.jsx
import React, { useState } from 'react';
import { SendIcon, CheckIcon, ErrorIcon } from '../assets/Icons';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState(null); // 'submitting' | 'success' | 'error' | null
  const FORMSPREE = import.meta.env.VITE_FORMSPREE_ENDPOINT || '';

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((s) => ({ ...s, [name]: value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus('submitting');

    try {
      if (FORMSPREE) {
        const res = await fetch(FORMSPREE, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            message: formData.message,
          }),
        });
        if (!res.ok) throw new Error('Network response was not ok');
      } else {
        // fallback: open mailto if no endpoint configured
        const mailto = `mailto:you@example.com?subject=${encodeURIComponent('Portfolio enquiry from ' + formData.name)}&body=${encodeURIComponent(formData.message + '\n\n' + formData.email)}`;
        window.location.href = mailto;
      }

      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch (err) {
      console.error(err);
      setStatus('error');
    } finally {
      setTimeout(() => setStatus(null), 5000);
    }
  }

  return (
    <section id="contact-form" className="py-16 md:py-24 bg-dark-bg" aria-label="Contact Form to Start a Project">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-light-text font-extrabold mb-2">LET’S BUILD TOGETHER</h2>
          <p className="text-lg text-gray-400">Ready to automate? Fill out the form or book a call.</p>
        </div>

        <div className="bg-gray-800 p-8 md:p-12 rounded-xl shadow-2xl border border-gray-700">
          {/* status messages */}
          {status === 'success' && (
            <div className="mb-4 text-green-400 inline-flex items-center gap-2">
              <CheckIcon className="w-5 h-5" /> Message sent — thank you!
            </div>
          )}
          {status === 'error' && (
            <div className="mb-4 text-rose-400 inline-flex items-center gap-2">
              <ErrorIcon className="w-5 h-5" /> Something went wrong — please try again.
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your name"
                required
                className="input"
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your email"
                required
                className="input"
              />
            </div>

            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell me about your project..."
              rows="6"
              required
              className="input"
            />

            <div className="flex items-center gap-4">
              <button
                type="submit"
                disabled={status === 'submitting'}
                className="btn-primary inline-flex items-center gap-3"
              >
                {status === 'submitting' ? (
                  <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor"><circle cx="12" cy="12" r="10" strokeWidth="4" strokeOpacity="0.25"></circle><path d="M4 12a8 8 0 018-8" strokeWidth="4"></path></svg>
                ) : (
                  <SendIcon className="w-5 h-5" />
                )}
                Send Message
              </button>

              <div className="text-sm text-gray-400">Or <a href="#hero" className="text-primary-blue underline">book a call</a></div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
