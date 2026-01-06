
import React from 'react';
import { CHURCH_INFO } from '../constants.ts';

const Sundays: React.FC = () => {
  return (
    <div className="flex flex-col">
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-24">
            <h1 className="text-6xl md:text-8xl font-black text-gray-900 mb-10 tracking-tighter font-heading">Our Sundays.</h1>
            <p className="text-2xl text-gray-500 font-medium leading-relaxed">
              We meet weekly to worship God, hear from the Word, and encourage one another.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-32">
            {CHURCH_INFO.meetings.sunday.schedule.map((item, idx) => (
              <div key={idx} className="bg-gray-50 p-12 rounded-[2.5rem] border border-gray-100 flex flex-col items-center text-center group hover:bg-white hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                <span className="text-brand-500 font-black text-4xl mb-5 font-heading tracking-tighter">{item.time}</span>
                <span className="text-gray-900 font-extrabold text-xl leading-tight tracking-tight font-heading">{item.event}</span>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center mb-48">
            <div className="fade-in">
              <h2 className="text-5xl font-black text-gray-900 mb-10 font-heading tracking-tight">Worship & Word.</h2>
              <p className="text-2xl text-gray-500 mb-12 leading-relaxed font-medium">
                Our main meeting is centered around sincere worship and sharing truth from the Bible. It is a time of spiritual growth and personal refreshment.
              </p>
              <div className="bg-brand-500 p-12 rounded-[3rem] shadow-2xl shadow-brand-500/25 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-48 h-48 bg-white/10 -mr-24 -mt-24 rounded-full blur-3xl" />
                <p className="text-3xl font-extrabold italic mb-0 font-heading leading-tight tracking-tight">
                  "Our heart is for every person to find their place in God's story."
                </p>
              </div>
            </div>
            <div className="rounded-[4rem] overflow-hidden shadow-2xl aspect-video bg-gray-100 relative group">
              <img src="https://images.unsplash.com/photo-1490730141103-6cac27aaab94?auto=format&fit=crop&q=80&w=1200" alt="Sunday Atmosphere" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
            </div>
          </div>

          {/* Midweek Activities */}
          <div className="bg-gray-900 text-white rounded-[5rem] p-16 md:p-32 relative overflow-hidden shadow-3xl">
            <div className="absolute inset-0 bg-gradient-to-br from-brand-500/10 via-transparent to-transparent opacity-60" />
            <div className="relative z-10">
              <h2 className="text-5xl md:text-7xl font-black mb-20 text-center font-heading tracking-tighter">Midweek Life.</h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <div className="bg-white/5 p-16 rounded-[3rem] border border-white/10 backdrop-blur-md group hover:bg-white/10 transition-all duration-500">
                  <span className="text-brand-300 font-black text-[11px] uppercase tracking-[0.3em] block mb-8">Tuesdays • {CHURCH_INFO.meetings.tuesday.time}</span>
                  <h3 className="text-4xl font-extrabold mb-8 font-heading">{CHURCH_INFO.meetings.tuesday.title}</h3>
                  <p className="text-gray-400 text-xl font-medium leading-relaxed">{CHURCH_INFO.meetings.tuesday.description}</p>
                </div>
                <div className="bg-white/5 p-16 rounded-[3rem] border border-white/10 backdrop-blur-md group hover:bg-white/10 transition-all duration-500">
                  <span className="text-brand-300 font-black text-[11px] uppercase tracking-[0.3em] block mb-8">Wednesdays • {CHURCH_INFO.meetings.wednesday.time}</span>
                  <h3 className="text-4xl font-extrabold mb-8 font-heading">{CHURCH_INFO.meetings.wednesday.title}</h3>
                  <p className="text-gray-400 text-xl font-medium leading-relaxed">{CHURCH_INFO.meetings.wednesday.description}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Sundays;
