import React from 'react';
import { CHURCH_INFO } from '../constants.ts';

const About: React.FC = () => {
  return (
    <div className="flex flex-col">
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-24">
            <h1 className="text-6xl md:text-8xl font-black text-gray-900 mb-10 tracking-tighter font-heading">Our Identity.</h1>
            <p className="text-2xl text-gray-500 font-medium leading-relaxed mb-12">
              We are a Christian community in Shrewsbury dedicated to seeing lives and nations reshaped by love.
            </p>
            <blockquote className="border-l-4 border-brand-500 pl-8 py-2 italic text-3xl text-gray-900 font-serif leading-relaxed">
              "If anyone thirsts, let him come to Me and drink..."
              <footer className="text-sm text-gray-400 font-sans font-bold uppercase tracking-widest mt-4 not-italic">— John 7:37</footer>
            </blockquote>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 mb-48 items-start">
            <div className="space-y-12">
              <div className="bg-gray-50 p-16 md:p-20 rounded-[4rem] border border-gray-100 shadow-sm relative overflow-hidden">
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
              
              <div className="bg-white p-12 rounded-[3rem] border border-gray-100 shadow-sm">
                <h3 className="text-2xl font-black text-gray-900 mb-6 font-heading">Our History</h3>
                <p className="text-lg text-gray-500 font-medium leading-relaxed">
                  The church was originally birthed in 1990 by some American missionaries who returned to the USA in 2005. Since then it has been pastored by Pete Bellingham from 2009 to 2022 and he now pastors our sister church in Oswestry. From 2022 until now the church is pastored by Harry Price and James Pilsworth who are supported by the current leadership team.
                </p>
              </div>
            </div>

            <div className="rounded-[4rem] overflow-hidden shadow-2xl rotate-1 hover:rotate-0 transition-all duration-700 aspect-[4/5] bg-gray-100 group sticky top-32">
              <img src="https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&q=80&w=1200" alt="Shrewsbury Community" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
            </div>
          </div>

          {/* Leadership */}
          <div className="mb-48">
            <div className="text-center mb-24">
              <h2 className="text-5xl md:text-7xl font-black text-gray-900 mb-8 font-heading tracking-tighter">Our Leadership.</h2>
              <p className="text-2xl text-gray-500 font-medium">The elders and teachers serving our local assembly.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10">
              {CHURCH_INFO.leadership.map((person) => (
                <div key={person.name} className="group text-center">
                  <div className="aspect-[4/5] rounded-[2.5rem] overflow-hidden mb-8 shadow-md group-hover:shadow-2xl transition-all duration-500 hover:-translate-y-3">
                    <img 
                      src={person.image} 
                      alt={person.name} 
                      className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000" 
                    />
                  </div>
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
