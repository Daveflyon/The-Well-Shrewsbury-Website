import React, { useState } from 'react';
import { CHURCH_INFO } from '../constants.ts';
import { submitWeb3Form } from '../lib/web3forms.ts';

const Contact: React.FC = () => {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');

    try {
      await submitWeb3Form({
        name,
        email,
        message,
        subject: 'Contact enquiry – The Well Shrewsbury',
        from_name: 'The Well Website',
      });
      setStatus('success');
      setName('');
      setEmail('');
      setMessage('');
    } catch {
      setStatus('error');
    }
  };

  return (
    <div className="flex flex-col">
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-24">
            <h1 className="text-6xl md:text-8xl font-black text-gray-900 mb-10 tracking-tighter font-heading">Connect.</h1>
            <p className="text-2xl text-gray-500 font-medium">We would love to hear from you. Reach out with any enquiries.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
            <div>
              <div className="space-y-16 mb-20">
                <div>
                  <h4 className="text-[11px] font-black text-gray-400 uppercase tracking-[0.3em] mb-6">Address</h4>
                  <p className="text-4xl text-gray-900 font-black font-heading tracking-tight">{CHURCH_INFO.location}</p>
                </div>
                <div>
                  <h4 className="text-[11px] font-black text-gray-400 uppercase tracking-[0.3em] mb-6">Call</h4>
                  <p className="text-2xl text-gray-900 font-extrabold font-heading">{CHURCH_INFO.contact.phone2}</p>
                </div>
              </div>
              <div className="rounded-[4rem] h-[400px] w-full overflow-hidden border border-gray-100 shadow-inner bg-gray-100">
                <img
                  src="/images/shrewsbury-town-square.jpg"
                  alt="Shrewsbury Town Square, home of The Well"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>

            <div className="bg-white p-16 md:p-20 rounded-[4rem] border border-gray-50 shadow-3xl shadow-gray-200/50 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-1.5 h-full bg-brand-500"></div>
              <h2 className="text-4xl font-black text-gray-900 mb-10 font-heading tracking-tight">Direct Message.</h2>

              {status === 'success' ? (
                <div className="fade-in">
                  <h3 className="text-2xl font-black text-gray-900 mb-4 font-heading">Thank you.</h3>
                  <p className="text-lg text-gray-500 font-medium leading-relaxed">
                    Your message is on its way. We&apos;ll be in touch as soon as we can.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-10">
                  <div>
                    <label htmlFor="contact-name" className="block text-[11px] font-black text-gray-400 uppercase tracking-[0.3em] mb-4">Your Name</label>
                    <input
                      id="contact-name"
                      name="name"
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full px-8 py-5 bg-gray-50 border border-gray-200 rounded-[2rem] focus:ring-4 focus:ring-brand-500/10 focus:border-brand-500 focus:bg-white transition-all outline-none font-medium"
                      placeholder="E.g. James Smith"
                    />
                  </div>
                  <div>
                    <label htmlFor="contact-email" className="block text-[11px] font-black text-gray-400 uppercase tracking-[0.3em] mb-4">Your Email</label>
                    <input
                      id="contact-email"
                      name="email"
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-8 py-5 bg-gray-50 border border-gray-200 rounded-[2rem] focus:ring-4 focus:ring-brand-500/10 focus:border-brand-500 focus:bg-white transition-all outline-none font-medium"
                      placeholder="E.g. james@example.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="contact-message" className="block text-[11px] font-black text-gray-400 uppercase tracking-[0.3em] mb-4">Enquiry</label>
                    <textarea
                      id="contact-message"
                      name="message"
                      rows={5}
                      required
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="w-full px-8 py-5 bg-gray-50 border border-gray-200 rounded-[2.5rem] focus:ring-4 focus:ring-brand-500/10 focus:border-brand-500 focus:bg-white transition-all outline-none resize-none font-medium"
                      placeholder="Tell us how we can help..."
                    ></textarea>
                  </div>
                  {status === 'error' && (
                    <p className="text-sm text-red-600 font-medium leading-relaxed">
                      Sorry, we couldn&apos;t send that just now. Please email{' '}
                      <a href={`mailto:${CHURCH_INFO.contact.email}`} className="underline hover:text-brand-500">{CHURCH_INFO.contact.email}</a>
                      {' '}or call {CHURCH_INFO.contact.phone1}.
                    </p>
                  )}
                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="w-full bg-brand-500 text-white font-black py-6 rounded-[2rem] hover:bg-brand-600 transition-all duration-300 shadow-2xl shadow-brand-500/30 hover:-translate-y-2 disabled:opacity-70 disabled:hover:translate-y-0"
                  >
                    {status === 'submitting' ? 'Sending…' : 'Send Message'}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
