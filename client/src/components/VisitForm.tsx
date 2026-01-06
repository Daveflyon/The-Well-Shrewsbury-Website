
import React, { useState } from 'react';

const VisitForm: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="bg-white p-10 rounded-[2rem] shadow-2xl border border-gray-100 text-center fade-in">
        <div className="w-20 h-20 bg-brand-50 text-brand-500 rounded-3xl flex items-center justify-center mx-auto mb-6">
          <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-3xl font-bold text-gray-900 mb-3 font-heading">See you soon!</h3>
        <p className="text-gray-500 font-medium leading-relaxed">Thank you for letting us know. We've sent a confirmation to your email with helpful arrival details.</p>
      </div>
    );
  }

  return (
    <div className="bg-white p-10 rounded-[2.5rem] shadow-2xl border border-gray-50 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1.5 bg-brand-500"></div>
      <h3 className="text-2xl font-bold text-gray-900 mb-2 font-heading">Planning a visit?</h3>
      <p className="text-gray-500 font-medium mb-8">Let us know you're coming so we can welcome you personally.</p>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-[10px] font-extrabold text-gray-400 uppercase tracking-widest mb-2">Your Name</label>
          <input
            type="text"
            id="name"
            required
            className="w-full px-5 py-4 bg-gray-50/50 border border-gray-200 rounded-xl focus:ring-4 focus:ring-brand-500/10 focus:border-brand-500 focus:bg-white transition-all outline-none font-medium placeholder:text-gray-300"
            placeholder="John Smith"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-[10px] font-extrabold text-gray-400 uppercase tracking-widest mb-2">Email Address</label>
          <input
            type="email"
            id="email"
            required
            className="w-full px-5 py-4 bg-gray-50/50 border border-gray-200 rounded-xl focus:ring-4 focus:ring-brand-500/10 focus:border-brand-500 focus:bg-white transition-all outline-none font-medium placeholder:text-gray-300"
            placeholder="john@example.com"
          />
        </div>
        <div>
          <label htmlFor="message" className="block text-[10px] font-extrabold text-gray-400 uppercase tracking-widest mb-2">Any questions? (Optional)</label>
          <textarea
            id="message"
            rows={2}
            className="w-full px-5 py-4 bg-gray-50/50 border border-gray-200 rounded-xl focus:ring-4 focus:ring-brand-500/10 focus:border-brand-500 focus:bg-white transition-all outline-none resize-none font-medium placeholder:text-gray-300"
            placeholder="Parking info, kids groups, etc."
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full bg-brand-500 text-white font-extrabold py-5 rounded-xl hover:bg-brand-600 shadow-lg shadow-brand-500/20 hover:shadow-2xl hover:shadow-brand-500/40 transition-all duration-300 hover:-translate-y-1"
        >
          Send My Plan
        </button>
        <p className="text-center text-[10px] font-bold text-gray-300 uppercase tracking-widest">Safe & Secure Community</p>
      </form>
    </div>
  );
};

export default VisitForm;
