
import React from 'react';
import { CHURCH_INFO } from '../constants.ts';

const Contact: React.FC = () => {
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
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
                  <div>
                    <h4 className="text-[11px] font-black text-gray-400 uppercase tracking-[0.3em] mb-6">Call</h4>
                    <p className="text-2xl text-gray-900 font-extrabold font-heading mb-1">{CHURCH_INFO.contact.phone1}</p>
                    <p className="text-2xl text-gray-900 font-extrabold font-heading">{CHURCH_INFO.contact.phone2}</p>
                  </div>
                  <div>
                    <h4 className="text-[11px] font-black text-gray-400 uppercase tracking-[0.3em] mb-6">Social</h4>
                    <div className="flex space-x-8 mt-4">
                      <a href="#" className="text-gray-300 hover:text-brand-500 transition-all duration-300 transform hover:scale-125">
                        <span className="sr-only">YouTube</span>
                        <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/></svg>
                      </a>
                      <a href="#" className="text-gray-300 hover:text-brand-500 transition-all duration-300 transform hover:scale-125">
                        <span className="sr-only">Spotify</span>
                        <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm5.59 17.357c-.225.369-.706.488-1.074.263-2.91-1.778-6.57-2.18-10.887-1.192-.422.096-.844-.167-.941-.588-.097-.421.167-.843.588-.94 4.734-1.082 8.783-.625 12.05 1.371.369.224.489.705.264 1.076zm1.488-3.26c-.284.463-.89.605-1.353.322-3.329-2.047-8.403-2.641-12.339-1.446-.522.158-1.076-.142-1.234-.663-.158-.522.143-1.077.663-1.235 4.502-1.365 10.11-.693 13.942 1.664.463.284.604.891.321 1.358zm.13-3.4c-3.991-2.37-10.573-2.589-14.391-1.43-.612.186-1.258-.168-1.444-.78-.186-.612.168-1.257.78-1.444 4.392-1.334 11.65-1.078 16.297 1.68.551.327.732 1.036.405 1.587-.327.551-1.036.732-1.587.405z"/></svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-100 rounded-[4rem] h-[400px] w-full flex items-center justify-center text-gray-400 font-black uppercase tracking-[0.3em] text-[10px] overflow-hidden border border-gray-100 shadow-inner">
                <p>Map Context: {CHURCH_INFO.shortLocation}</p>
              </div>
            </div>

            <div className="bg-white p-16 md:p-20 rounded-[4rem] border border-gray-50 shadow-3xl shadow-gray-200/50 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-1.5 h-full bg-brand-500"></div>
              <h2 className="text-4xl font-black text-gray-900 mb-10 font-heading tracking-tight">Direct Message.</h2>
              <form className="space-y-10">
                <div>
                  <label className="block text-[11px] font-black text-gray-400 uppercase tracking-[0.3em] mb-4">Your Name</label>
                  <input type="text" className="w-full px-8 py-5 bg-gray-50 border border-gray-200 rounded-[2rem] focus:ring-4 focus:ring-brand-500/10 focus:border-brand-500 focus:bg-white transition-all outline-none font-medium" placeholder="E.g. James Smith" />
                </div>
                <div>
                  <label className="block text-[11px] font-black text-gray-400 uppercase tracking-[0.3em] mb-4">Your Email</label>
                  <input type="email" className="w-full px-8 py-5 bg-gray-50 border border-gray-200 rounded-[2rem] focus:ring-4 focus:ring-brand-500/10 focus:border-brand-500 focus:bg-white transition-all outline-none font-medium" placeholder="E.g. james@example.com" />
                </div>
                <div>
                  <label className="block text-[11px] font-black text-gray-400 uppercase tracking-[0.3em] mb-4">Enquiry</label>
                  <textarea rows={5} className="w-full px-8 py-5 bg-gray-50 border border-gray-200 rounded-[2.5rem] focus:ring-4 focus:ring-brand-500/10 focus:border-brand-500 focus:bg-white transition-all outline-none resize-none font-medium" placeholder="Tell us how we can help..."></textarea>
                </div>
                <button className="w-full bg-brand-500 text-white font-black py-6 rounded-[2rem] hover:bg-brand-600 transition-all duration-300 shadow-2xl shadow-brand-500/30 hover:-translate-y-2">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
