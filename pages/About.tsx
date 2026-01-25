
import React from 'react';
import { CHURCH_INFO } from '../constants.ts';

const About: React.FC = () => {
  return (
    <div className="flex flex-col">
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-24">
            <h1 className="text-6xl md:text-8xl font-black text-gray-900 mb-10 tracking-tighter font-heading">Our Identity.</h1>
            <p className="text-2xl text-gray-500 font-medium leading-relaxed">
              We are a Christian community in Shrewsbury dedicated to seeing lives and nations reshaped by love.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 mb-48 items-start">
            <div className="bg-gray-50 p-16 md:p-20 rounded-[4rem] border border-gray-100 shadow-sm relative overflow-hidden h-full flex flex-col justify-center">
              <div className="absolute top-0 right-0 w-64 h-64 bg-brand-500/5 blur-3xl -mr-32 -mt-32 rounded-full"></div>
              <h2 className="text-4xl font-black text-gray-900 mb-10 font-heading">Our Global Vision</h2>
              <p className="text-3xl text-brand-500 font-black mb-10 italic font-heading tracking-tight">"Unto the Nations"</p>
              <p className="text-xl text-gray-500 font-medium leading-relaxed mb-16">
                Shaping the culture through the advancement of God's Kingdom. Our focus remains on the revitalisation of individuals and families.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-8 gap-x-12">
                {['Personhood', 'Participation', 'Preparation', 'Prayer', 'Prophecy', 'Proclamation'].map((point, i) => (
                  <div key={point} className="flex items-center group cursor-default">
                    <span className="text-brand-200 font-black text-sm mr-5 group-hover:text-brand-500 transition-colors">0{i+1}</span>
                    <span className="text-gray-900 font-extrabold text-xl tracking-tight font-heading">{point}</span>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Main Vision Placeholder - Strictly Neutral */}
            <div className="flex flex-col">
              <div className="rounded-[4rem] overflow-hidden border-2 border-dashed border-gray-100 bg-gray-50/30 aspect-[4/5] flex items-center justify-center transition-colors hover:bg-gray-50/50">
                <svg className="w-16 h-16 text-gray-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <p className="mt-8 text-[11px] font-black text-gray-400 uppercase tracking-[0.4em] text-center">Photo coming soon</p>
            </div>
          </div>

          {/* Leadership Section */}
          <div className="mb-48">
            <div className="text-center mb-24">
              <h2 className="text-5xl md:text-7xl font-black text-gray-900 mb-8 font-heading tracking-tighter">Our Leadership.</h2>
              <p className="text-2xl text-gray-500 font-medium">The elders and teachers serving our local assembly.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-x-10 gap-y-16">
              {CHURCH_INFO.leadership.map((person) => (
                <div key={person.name} className="group text-center flex flex-col items-center">
                  <div className="w-full aspect-[4/5] rounded-[2.5rem] overflow-hidden mb-6 shadow-sm border border-gray-100 bg-gray-50/30 flex items-center justify-center group-hover:bg-gray-50/50 transition-all duration-500">
                    {/* Consistent silhouette placeholder */}
                    <svg className="w-12 h-12 text-gray-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  
                  <p className="text-[9px] font-black text-gray-300 uppercase tracking-[0.3em] mb-4">Photo coming soon</p>
                  <h4 className="font-extrabold text-gray-900 text-2xl mb-1 tracking-tight font-heading">{person.name}</h4>
                  <p className="text-brand-500/60 text-[10px] font-black uppercase tracking-[0.3em]">{person.role}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
