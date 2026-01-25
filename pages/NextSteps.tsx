import React from 'react';
import { CHURCH_INFO } from '../constants.ts';

const NextSteps: React.FC = () => {
  return (
    <div className="flex flex-col">
      <section className="py-24 bg-gray-50/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-24">
            <h1 className="text-6xl md:text-8xl font-black text-gray-900 mb-10 tracking-tighter font-heading">Deepen.</h1>
            <p className="text-2xl text-gray-500 font-medium leading-relaxed">Discover how you can participate in the ongoing story of The Well.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-32">
            {/* Generosity - Restyled for clarity after bank detail removal */}
            <div className="bg-white p-16 md:p-24 rounded-[4rem] shadow-sm border border-gray-100 flex flex-col justify-center hover:shadow-xl transition-all duration-500">
              <h2 className="text-5xl font-black text-gray-900 mb-10 font-heading">Generosity.</h2>
              <p className="text-2xl text-gray-500 font-medium leading-relaxed">
                We believe in a life marked by giving. Our ministry is supported by the sincere contributions of those who call this community home.
              </p>
            </div>

            {/* Serving */}
            <div className="bg-brand-500 text-white p-16 md:p-20 rounded-[4rem] shadow-3xl relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-80 h-80 bg-white/5 -ml-40 -mt-40 rounded-full blur-[120px] group-hover:scale-125 transition-transform duration-1000" />
              <h2 className="text-5xl font-black mb-10 font-heading relative z-10">Serving.</h2>
              <p className="text-2xl opacity-90 mb-14 font-medium leading-relaxed relative z-10">
                Connection happens best when we serve together. Find your unique fit in our community teams.
              </p>
              <ul className="space-y-6 relative z-10">
                {[
                  "Greeting & Connections",
                  "Hospitality & Catering",
                  "Worship Arts",
                  "Children & Youth",
                  "Digital & Media",
                  "Serving"
                ].map((item) => (
                  <li key={item} className="flex items-center text-xl font-extrabold tracking-tight font-heading">
                    <div className="w-3 h-3 rounded-full bg-brand-200 mr-5" />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-20 pt-10 border-t border-white/10 relative z-10">
                <p className="text-[11px] font-black uppercase tracking-[0.3em] opacity-50 mb-3">Participation</p>
                <p className="text-2xl font-extrabold font-heading">Speak with any leader this Sunday.</p>
              </div>
            </div>
          </div>

          {/* The Mission Fund - Bank Details Removed, Spacing Refined */}
          <div className="bg-gray-900 text-white p-16 md:p-32 rounded-[5rem] text-center shadow-3xl relative overflow-hidden">
            <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-brand-500/10 -mr-64 -mb-64 rounded-full blur-[150px]" />
            <h2 className="text-5xl md:text-7xl font-black mb-12 font-heading tracking-tighter relative z-10">The Mission Fund.</h2>
            <p className="text-2xl text-gray-400 max-w-4xl mx-auto font-medium leading-relaxed relative z-10">
              We extend our reach globally, supporting works in UK and Europe, Honduras, Sierra Leone, Kenya, Egypt, Israel, Montenegro, the Philippines and North Korea. Missions giving is kept strictly separate for direct field support.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NextSteps;