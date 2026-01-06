import React from 'react';
import { CHURCH_INFO } from '../constants.ts';

const PlanYourVisit: React.FC = () => {
  return (
    <div className="flex flex-col">
      {/* Page Header */}
      <section className="py-24 bg-white border-b border-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-7xl font-extrabold text-gray-900 mb-8 tracking-tight font-heading">Plan Your Visit</h1>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto font-medium leading-relaxed">
            We’ve made joining us simple and stress-free. Here is everything you need to know.
          </p>
        </div>
      </section>

      {/* Key Logistics */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            
            <div className="lg:col-span-2 space-y-24">
              {/* When & Where */}
              <div className="fade-in">
                <h2 className="text-3xl font-black text-gray-900 mb-10 flex items-center font-heading">
                  <span className="w-14 h-14 rounded-2xl bg-brand-500 text-white flex items-center justify-center mr-6 text-xl font-black shadow-lg shadow-brand-500/20">1</span>
                  When & Where
                </h2>
                <div className="bg-white border border-gray-100 p-12 rounded-[3rem] shadow-2xl shadow-gray-200/40 space-y-12">
                  <div className="flex flex-col md:flex-row md:justify-between border-b border-gray-50 pb-12">
                    <div>
                      <h4 className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-3">Meeting Time</h4>
                      <p className="text-4xl font-extrabold text-gray-900 font-heading">Sundays {CHURCH_INFO.sundayTime}</p>
                    </div>
                    <div className="mt-8 md:mt-0">
                      <h4 className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-3">Warm Welcome</h4>
                      <p className="text-2xl text-brand-500 font-extrabold">Doors Open 10:20</p>
                    </div>
                  </div>
                  <div>
                    <h4 className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-3">Building Location</h4>
                    <p className="text-3xl text-gray-900 font-extrabold mb-4 font-heading">{CHURCH_INFO.location}</p>
                    <p className="text-lg text-gray-500 font-medium">Located prominently in Shrewsbury's historic Town Square building.</p>
                  </div>
                </div>
              </div>

              {/* Parking */}
              <div className="fade-in">
                <h2 className="text-3xl font-black text-gray-900 mb-10 flex items-center font-heading">
                  <span className="w-14 h-14 rounded-2xl bg-brand-500 text-white flex items-center justify-center mr-6 text-xl font-black shadow-lg shadow-brand-500/20">2</span>
                  Parking & Arrival
                </h2>
                <div className="text-xl text-gray-500 font-medium leading-relaxed space-y-8">
                  <p>Being central, there is plenty of public parking. We suggest <strong className="text-gray-900">Frankwell</strong> (Free), <strong className="text-gray-900">The Gap</strong>, or town centre car parks (Paid)—all are within a short walk of The Well.</p>
                </div>
              </div>

              {/* What to Expect */}
              <div className="fade-in">
                <h2 className="text-3xl font-black text-gray-900 mb-10 flex items-center font-heading">
                  <span className="w-14 h-14 rounded-2xl bg-brand-500 text-white flex items-center justify-center mr-6 text-xl font-black shadow-lg shadow-brand-500/20">3</span>
                  The Sunday Experience
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {[
                    { title: "Service Format", desc: "A blend of sincere worship, community prayer, and relevant teaching from the Bible." },
                    { title: "Dress Code", desc: "Come as you feel comfortable. We are a relaxed community with no formal dress expectations." },
                    { title: "Accessibility", desc: "The building we rent is not fully accessible for wheelchair users. Please contact us for further information." },
                    { title: "Community Lunch", desc: "Stay for a free buffet lunch after the service. It's a wonderful way to meet others." }
                  ].map(item => (
                    <div key={item.title} className="bg-gray-50 p-10 rounded-[2.5rem] border border-transparent hover:border-brand-100 hover:bg-white hover:shadow-xl transition-all duration-500">
                      <h4 className="font-extrabold text-gray-900 text-xl mb-3 font-heading tracking-tight">{item.title}</h4>
                      <p className="text-gray-500 font-medium leading-relaxed">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Children */}
              <div className="bg-gray-900 text-white p-16 md:p-20 rounded-[4rem] shadow-2xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-80 h-80 bg-brand-500/10 blur-[120px] -mr-40 -mt-40 rounded-full" />
                <h2 className="text-4xl md:text-5xl font-black mb-10 font-heading">For the Families</h2>
                <p className="text-xl text-gray-300 mb-14 font-medium leading-relaxed">We value our children and youth as full members of our community. We provide safe and fun environments for every age group.</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  <div className="bg-white/5 p-10 rounded-[2.5rem] border border-white/10 backdrop-blur-sm">
                    <h4 className="font-extrabold text-2xl mb-4 font-heading">Bible Club & Youth</h4>
                    <p className="text-gray-400 font-medium leading-relaxed mb-2">Starts at 10:30 AM</p>
                    <ul className="text-gray-400 font-medium leading-relaxed list-disc list-inside">
                      <li>Children's Bible Club (Ages 3-12)</li>
                      <li>Youth Group (Ages 13-19+)</li>
                    </ul>
                  </div>
                  <div className="bg-white/5 p-10 rounded-[2.5rem] border border-white/10 backdrop-blur-sm">
                    <h4 className="font-extrabold text-2xl mb-4 font-heading">Mother & Baby</h4>
                    <p className="text-gray-400 font-medium leading-relaxed">A quiet and dedicated room upstairs is available. Please note space and toys are currently limited.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar Sticky Info */}
            <div className="hidden lg:block">
              <div className="sticky top-32 space-y-10">
                <div className="bg-white p-12 rounded-[3rem] border border-gray-100 shadow-sm">
                  <h3 className="text-2xl font-black text-gray-900 mb-8 font-heading tracking-tight">Common Questions</h3>
                  <div className="space-y-8">
                    <div>
                      <p className="font-black text-gray-900 text-[11px] mb-2 uppercase tracking-[0.2em]">Pre-booking</p>
                      <p className="text-gray-500 font-medium text-sm">No booking required. We operate an open door policy.</p>
                    </div>
                    <div>
                      <p className="font-black text-gray-900 text-[11px] mb-2 uppercase tracking-[0.2em]">Admission</p>
                      <p className="text-gray-500 font-medium text-sm">All our services and Sunday meals are free of charge.</p>
                    </div>
                    <div>
                      <p className="font-black text-gray-900 text-[11px] mb-2 uppercase tracking-[0.2em]">The Atmosphere</p>
                      <p className="text-gray-500 font-medium text-sm">Expect a warm, friendly, and informal setting.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default PlanYourVisit;
