
import React from 'react';
import { CHURCH_INFO } from '../constants';

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
            {/* Giving */}
            <div className="bg-white p-16 md:p-20 rounded-[4rem] shadow-sm border border-gray-100 flex flex-col justify-between hover:shadow-xl transition-all duration-500">
              <div>
                <h2 className="text-5xl font-black text-gray-900 mb-10 font-heading">Generosity.</h2>
                <p className="text-2xl text-gray-500 mb-14 font-medium leading-relaxed">
                  We believe in a life marked by giving. Our ministry is supported by those who call this community home.
                </p>
              </div>
              <div className="bg-gray-50 p-12 rounded-[3rem] border border-gray-100">
                <h4 className="text-[11px] font-black text-brand-500 uppercase tracking-[0.3em] mb-8">Standard Tithes</h4>
                <div className="space-y-6 font-extrabold text-gray-900">
                  <div className="flex justify-between border-b border-gray-200/40 pb-4">
                    <span className="text-gray-400 font-medium">Account</span>
                    <span className="tracking-tight">The Well Ministries</span>
                  </div>
                  <div className="flex justify-between border-b border-gray-200/40 pb-4">
                    <span className="text-gray-400 font-medium">Sort Code</span>
                    <span className="tracking-tight">40-41-30</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400 font-medium">Number</span>
                    <span className="tracking-tight">51443577</span>
                  </div>
                </div>
              </div>
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
                  "Environment Care"
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

          <div className="bg-gray-900 text-white p-16 md:p-28 rounded-[5rem] text-center shadow-3xl relative overflow-hidden">
            <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-brand-500/10 -mr-64 -mb-64 rounded-full blur-[150px]" />
            <h2 className="text-5xl md:text-7xl font-black mb-12 font-heading tracking-tighter relative z-10">The Mission Fund.</h2>
            <p className="text-2xl text-gray-400 max-w-3xl mx-auto mb-16 font-medium leading-relaxed relative z-10">
              We extend our reach globally, supporting works in China, Egypt, Israel, and the Philippines. Missions giving is kept strictly separate for direct field support.
            </p>
            <div className="inline-block bg-white/5 border border-white/10 text-brand-300 px-12 py-6 rounded-3xl font-black uppercase tracking-[0.3em] text-sm relative z-10 hover:bg-white/10 transition-colors cursor-default">
              Missions Sort Code: 40-27-15
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NextSteps;
