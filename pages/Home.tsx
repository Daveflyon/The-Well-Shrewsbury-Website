
import React from 'react';
import { Link } from 'react-router-dom';
import { CHURCH_INFO } from '../constants.ts';
import VisitForm from '../components/VisitForm.tsx';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col">
      {/* Redesigned Hero Section */}
      <section className="relative pt-20 pb-28 md:pt-36 md:pb-48 overflow-hidden bg-white">
        {/* Premium Background Elements */}
        <div className="absolute top-0 left-1/4 w-[400px] h-[400px] bg-brand-100/40 premium-blur rounded-full -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-brand-50/60 premium-blur rounded-full translate-y-1/2"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-7 fade-in">
              <div className="flex items-center space-x-3 mb-10">
                <span className="w-12 h-[1px] bg-brand-500"></span>
                <span className="text-brand-500 text-[11px] font-black tracking-[0.3em] uppercase">
                  Shrewsbury Town Square
                </span>
              </div>
              
              <h1 className="text-7xl md:text-[6.5rem] font-extrabold text-gray-900 leading-[0.95] mb-10 tracking-[-0.05em] font-heading">
                Experience <br />
                <span className="text-brand-500">The Well.</span>
              </h1>
              
              <p className="text-2xl text-gray-500 mb-12 max-w-xl leading-relaxed font-medium">
                A community defined by peace, rooted in faith, and located in the historic heart of Shrewsbury.
              </p>
              
              <div className="flex flex-col sm:flex-row space-y-5 sm:space-y-0 sm:space-x-6 mb-16">
                <Link
                  to="/plan-your-visit"
                  className="px-12 py-6 bg-brand-500 text-white rounded-2xl font-black text-center hover:bg-brand-600 transition-all duration-300 shadow-[0_15px_30px_-5px_rgba(0,51,153,0.35)] hover:shadow-[0_25px_45px_-5px_rgba(0,51,153,0.45)] hover:-translate-y-1.5 active:translate-y-0"
                >
                  Plan Your Visit
                </Link>
                <Link
                  to="/sundays"
                  className="px-12 py-6 bg-white border-2 border-gray-100 text-gray-700 rounded-2xl font-black text-center hover:bg-gray-50 hover:border-brand-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                >
                  What's On
                </Link>
              </div>
              
              <div className="flex items-center space-x-10">
                <div className="flex items-center group cursor-default">
                  <div className="w-10 h-10 rounded-xl bg-brand-50 flex items-center justify-center mr-4 group-hover:bg-brand-100 transition-colors">
                    <svg className="w-5 h-5 text-brand-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Sundays</span>
                    <span className="text-gray-900 font-bold tracking-tight">{CHURCH_INFO.sundayTime}</span>
                  </div>
                </div>
                <div className="w-[1px] h-8 bg-gray-100"></div>
                <div className="flex items-center group cursor-default">
                  <div className="w-10 h-10 rounded-xl bg-brand-50 flex items-center justify-center mr-4 group-hover:bg-brand-100 transition-colors">
                    <svg className="w-5 h-5 text-brand-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    </svg>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Location</span>
                    <span className="text-gray-900 font-bold tracking-tight">{CHURCH_INFO.shortLocation}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 lg:pl-4 relative">
              <div className="absolute -inset-10 bg-brand-500/5 blur-[120px] rounded-full pointer-events-none"></div>
              <VisitForm />
            </div>
          </div>
        </div>
      </section>

      {/* Reassurance Snippets */}
      <section className="py-28 bg-gray-50/50 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 font-heading">Simply Welcome.</h2>
            <p className="text-xl text-gray-500 max-w-2xl mx-auto font-medium leading-relaxed">Our Sundays centre on people, connection and sharing life together</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              {
                title: "Come as you are",
                desc: "No dress code. No script. Just a sincere community exploring life and faith together.",
                icon: (
                  <svg className="w-8 h-8 text-brand-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                )
              },
              {
                title: "Diverse Community",
                desc: "A tapestry of backgrounds and stories, unified by a shared experience of hope.",
                icon: (
                  <svg className="w-8 h-8 text-brand-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                )
              },
              {
                title: "Family Focused",
                desc: "Safe and vibrant spaces for children and youth, allowing the whole family to grow.",
                icon: (
                  <svg className="w-8 h-8 text-brand-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                )
              }
            ].map((item) => (
              <div key={item.title} className="bg-white p-12 rounded-[2.5rem] border border-gray-100 shadow-sm hover:shadow-2xl hover:-translate-y-3 transition-all duration-500 group">
                <div className="mb-8 p-4 bg-brand-50 inline-block rounded-2xl group-hover:bg-brand-500 group-hover:text-white transition-all duration-300">{item.icon}</div>
                <h3 className="text-2xl font-black text-gray-900 mb-4 font-heading">{item.title}</h3>
                <p className="text-gray-500 leading-relaxed font-medium">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Location Section */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div className="rounded-[3.5rem] overflow-hidden shadow-2xl aspect-[4/3] relative group">
              <img 
                src="https://images.unsplash.com/photo-1548678967-f1fc5d33931d?auto=format&fit=crop&q=80&w=1000" 
                alt="Shrewsbury Architecture" 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent opacity-60" />
              <div className="absolute bottom-12 left-12 text-white">
                <p className="text-[10px] font-black tracking-[0.3em] uppercase mb-3 opacity-80">Community Presence</p>
                <h4 className="text-3xl font-extrabold font-heading">A Shrewsbury Staple.</h4>
              </div>
            </div>
            <div>
              <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-10 font-heading leading-[1.1]">Built on <br /><span className="text-brand-500">Ancient Paths.</span></h2>
              <p className="text-xl text-gray-500 mb-12 leading-relaxed font-medium">
                The Well is a registered Christian charity in the heart of Shrewsbury Town Square. We are committed to demonstrating the love of Christ through both word and action.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 mb-14">
                <div className="flex items-start">
                  <div className="bg-brand-50 p-4 rounded-2xl mr-6">
                    <svg className="w-6 h-6 text-brand-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-extrabold text-gray-900 text-lg mb-1">Visit</h4>
                    <p className="text-gray-500 font-medium text-sm leading-relaxed">{CHURCH_INFO.location}</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-brand-50 p-4 rounded-2xl mr-6">
                    <svg className="w-6 h-6 text-brand-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-extrabold text-gray-900 text-lg mb-1">Talk</h4>
                    <p className="text-gray-500 font-medium text-sm leading-relaxed">{CHURCH_INFO.contact.phone1}</p>
                  </div>
                </div>
              </div>
              <Link
                to="/contact"
                className="inline-flex items-center px-10 py-5 bg-gray-900 text-white rounded-2xl font-black hover:bg-black transition-all duration-300 shadow-2xl hover:-translate-y-1.5"
              >
                Get Directions
                <svg className="w-5 h-5 ml-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
