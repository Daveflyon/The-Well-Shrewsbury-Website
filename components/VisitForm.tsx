import React, { useState } from 'react';
import { CHURCH_INFO } from '../constants.ts';
import { submitWeb3Form } from '../lib/web3forms.ts';

const VisitForm: React.FC = () => {
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
        message: message || 'No additional questions provided.',
        subject: 'Plan Your Visit – The Well Shrewsbury',
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

  if (status === 'success') {
    return (
      <div className="bg-white p-10 rounded-[2rem] shadow-2xl border border-gray-100 text-center fade-in">
        <div className="w-20 h-20 bg-brand-50 text-brand-500 rounded-3xl flex items-center justify-center mx-auto mb-6">
          <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-3xl font-bold text-gray-900 mb-3 font-heading">See you soon!</h3>
        <p className="text-gray-500 font-medium leading-relaxed">Thank you for letting us know. We look forward to welcoming you at The Well.</p>
      </div>
    );
  }

  return (
    <div className="bg-white p-10 rounded-[2.5rem] shadow-2xl border border-gray-50 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1.5 bg-brand-500"></div>
      <h3 className="text-2xl font-bold text-gray-900 mb-2 font-heading">Planning a visit?</h3>
      <p className="text-gray-500 font-medium mb-8">You're welcome to simply turn up. If you'd like us to welcome you personally, let us know you're coming and we'll look out for you.</p>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="visit-name" className="block text-[10px] font-extrabold text-gray-400 uppercase tracking-widest mb-2">Your Name</label>
          <input
            type="text"
            id="visit-name"
            name="name"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-5 py-4 bg-gray-50/50 border border-gray-200 rounded-xl focus:ring-4 focus:ring-brand-500/10 focus:border-brand-500 focus:bg-white transition-all outline-none font-medium placeholder:text-gray-300"
            placeholder="John Smith"
          />
        </div>
        <div>
          <label htmlFor="visit-email" className="block text-[10px] font-extrabold text-gray-400 uppercase tracking-widest mb-2">Email Address</label>
          <input
            type="email"
            id="visit-email"
            name="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-5 py-4 bg-gray-50/50 border border-gray-200 rounded-xl focus:ring-4 focus:ring-brand-500/10 focus:border-brand-500 focus:bg-white transition-all outline-none font-medium placeholder:text-gray-300"
            placeholder="john@example.com"
          />
        </div>
        <div>
          <label htmlFor="visit-message" className="block text-[10px] font-extrabold text-gray-400 uppercase tracking-widest mb-2">Any questions? (Optional)</label>
          <textarea
            id="visit-message"
            name="message"
            rows={2}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full px-5 py-4 bg-gray-50/50 border border-gray-200 rounded-xl focus:ring-4 focus:ring-brand-500/10 focus:border-brand-500 focus:bg-white transition-all outline-none resize-none font-medium placeholder:text-gray-300"
            placeholder="Parking info, kids groups, etc."
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
          className="w-full bg-brand-500 text-white font-extrabold py-5 rounded-xl hover:bg-brand-600 shadow-lg shadow-brand-500/20 hover:shadow-2xl hover:shadow-brand-500/40 transition-all duration-300 hover:-translate-y-1 disabled:opacity-70 disabled:hover:translate-y-0"
        >
          {status === 'submitting' ? 'Sending…' : 'Send My Plan'}
        </button>
        <p className="text-center text-[10px] font-bold text-gray-300 uppercase tracking-widest">Safe & Secure Community</p>
      </form>
    </div>
  );
};

export default VisitForm;
