
import React from 'react';
import { Link } from 'react-router-dom';
import { CHURCH_INFO } from '../constants.ts';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-gray-50 pt-32 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-20 mb-32">
          <div className="col-span-1 lg:col-span-1">
            <h3 className="text-3xl font-black mb-8 text-gray-900 font-heading tracking-tighter">The Well.</h3>
            <p className="text-gray-400 text-base font-medium leading-relaxed mb-10">
              A vibrant family community in Shrewsbury dedicated to seeing life and purpose restored.
            </p>
          </div>

          <div>
            <h4 className="text-[11px] font-black text-gray-300 uppercase tracking-[0.4em] mb-10">Navigation</h4>
            <ul className="space-y-6 text-sm font-extrabold text-gray-500">
              <li><Link to="/plan-your-visit" className="hover:text-brand-500 transition-all duration-300">Plan Your Visit</Link></li>
              <li><Link to="/sundays" className="hover:text-brand-500 transition-all duration-300">Sunday Service</Link></li>
              <li><Link to="/about" className="hover:text-brand-500 transition-all duration-300">Who We Are</Link></li>
              <li><Link to="/next-steps" className="hover:text-brand-500 transition-all duration-300">Take Next Steps</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-[11px] font-black text-gray-300 uppercase tracking-[0.4em] mb-10">Gatherings</h4>
            <p className="text-sm font-extrabold text-gray-900 mb-3 font-heading">Sundays at {CHURCH_INFO.sundayTime}</p>
            <p className="text-sm text-gray-400 font-medium mb-8 leading-relaxed">Doors open early at 10:20 for coffee and setup.</p>
            <Link to="/plan-your-visit" className="text-brand-500 text-[11px] font-black uppercase tracking-widest hover:text-brand-600 hover:underline transition-all duration-300">Full Schedule →</Link>
          </div>

          <div>
            <h4 className="text-[11px] font-black text-gray-300 uppercase tracking-[0.4em] mb-10">The Hub</h4>
            <p className="text-sm text-gray-500 font-medium mb-8 leading-relaxed">
              {CHURCH_INFO.location}<br />
              Shrewsbury Town Square
            </p>
            <p className="text-sm font-black text-gray-900 uppercase tracking-widest">{CHURCH_INFO.contact.phone1}</p>
          </div>
        </div>

        <div className="pt-16 border-t border-gray-50 flex flex-col md:flex-row justify-between items-center text-[11px] font-black text-gray-300 uppercase tracking-[0.3em]">
          <p>© {new Date().getFullYear()} {CHURCH_INFO.name}.</p>
          <div className="flex space-x-10 mt-8 md:mt-0">
            <a href="#" className="hover:text-brand-500 transition-all duration-300">Privacy Policy</a>
            <a href="#" className="hover:text-brand-500 transition-all duration-300">Terms</a>
            <a href="#" className="hover:text-brand-500 transition-all duration-300">Charity #123456</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
