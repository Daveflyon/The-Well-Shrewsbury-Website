
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
                  <p>Being central, there is plenty of public parking. We suggest <strong className="text-gray-900">St Julian's Friars</strong> or <strong className="text-gray-900">Abbey Foregate</strong> car parks—both are within a short walk of The Well.</p>
                  <p>Our welcome team will be at the main doors to greet you, answer any questions, and direct you to the main meeting space.</p>
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
                    { title: "Accessibility", desc: "The building is fully accessible. Please let our team know if you need any specific assistance." },
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
                    <h4 className="font-extrabold text-2xl mb-4 font-heading">Bible Club (10:30)</h4>
                    <p className="text-gray-400 font-medium leading-relaxed">Engaging crafts and age-appropriate Bible lessons. Parents are welcome to stay nearby for care needs.</p>
                  </div>
                  <div className="bg-white/5 p-10 rounded-[2.5rem] border border-white/10 backdrop-blur-sm">
                    <h4 className="font-extrabold text-2xl mb-4 font-heading">Mother & Baby</h4>
                    <p className="text-gray-400 font-medium leading-relaxed">A quiet and dedicated room upstairs equipped with toys and comfortable seating for your convenience.</p>
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
                <div className="bg-brand-50 p-12 rounded-[3rem] border border-brand-100">
                  <h3 className="text-2xl font-black text-brand-900 mb-6 font-heading tracking-tight">Need Support?</h3>
                  <p className="text-brand-800 font-medium text-sm leading-relaxed mb-8">If you have specific needs or require transport assistance, we are here to help.</p>
                  <a href={`tel:${CHURCH_INFO.contact.phone1}`} className="inline-flex items-center text-brand-500 font-black text-sm uppercase tracking-widest hover:translate-x-2 transition-transform duration-300">
                    Get in touch →
                  </a>
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
