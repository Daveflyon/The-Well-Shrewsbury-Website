
import React from 'react';
import { CHURCH_INFO } from '../constants.ts';

const Sundays: React.FC = () => {
  const morningGroups = CHURCH_INFO.meetings.sunday.schedule.find((item) => item.time === "10:30");

  return (
    <div className="flex flex-col">
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16 md:mb-24">
            <h1 className="text-4xl sm:text-6xl md:text-8xl font-black text-gray-900 mb-6 md:mb-10 tracking-tighter font-heading">Our Sundays.</h1>
            <p className="text-lg sm:text-2xl text-gray-500 font-medium leading-relaxed">
              We meet weekly to worship God, hear from the Word, and encourage one another.
            </p>
          </div>

          <div className="mb-20 md:mb-32 lg:max-w-6xl lg:mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {CHURCH_INFO.meetings.sunday.schedule.map((item, idx) => (
                <div key={idx} className="bg-gray-50 p-8 sm:p-12 rounded-[2rem] md:rounded-[2.5rem] border border-gray-100 flex flex-col items-center text-center group hover:bg-white hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                  <span className="text-brand-500 font-black text-3xl sm:text-4xl mb-5 font-heading tracking-tighter">{item.time}</span>
                  <span className="text-gray-900 font-extrabold text-lg sm:text-xl leading-tight tracking-tight font-heading">{item.event}</span>
                </div>
              ))}
            </div>

            {'streams' in (morningGroups ?? {}) && (
              <div className="mt-8 bg-gray-50 border border-gray-100 p-6 sm:p-12 md:p-16 rounded-[2rem] md:rounded-[3rem] shadow-sm">
                <p className="text-xl sm:text-2xl text-gray-900 font-extrabold leading-relaxed font-heading mb-6 md:mb-8">
                  At 10:30, three groups run side by side. Join the one that fits you.
                </p>
                <div className="space-y-4">
                  {morningGroups.streams.map((stream) => (
                    <p key={stream.label} className="text-base sm:text-lg md:text-xl text-gray-500 font-medium leading-relaxed">
                      <span className="text-gray-900 font-extrabold">{stream.label}</span>, {stream.description}
                    </p>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center mb-24 md:mb-48">
            <div className="fade-in min-w-0">
              <h2 className="text-3xl sm:text-5xl font-black text-gray-900 mb-6 md:mb-10 font-heading tracking-tight">Worship & Word.</h2>
              <p className="text-lg sm:text-2xl text-gray-500 mb-8 md:mb-12 leading-relaxed font-medium">
                Our main meeting is centered around sincere worship and sharing truth from the Bible. It is a time of spiritual growth and personal refreshment.
              </p>
              <div className="bg-brand-500 p-6 sm:p-12 rounded-[2rem] md:rounded-[3rem] shadow-2xl shadow-brand-500/25 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-48 h-48 bg-white/10 -mr-24 -mt-24 rounded-full blur-3xl" />
                <p className="text-xl sm:text-3xl font-extrabold italic mb-0 font-heading leading-tight tracking-tight relative z-10">
                  "Our heart is for every person to find their place in God's story."
                </p>
              </div>
            </div>
            <div className="rounded-[2rem] md:rounded-[4rem] overflow-hidden shadow-2xl aspect-video bg-gray-100 relative group">
              <img src="/images/jesus-and-well.png" alt="Jesus and the well" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
            </div>
          </div>

          {/* Midweek Activities */}
          <div className="bg-gray-900 text-white rounded-[2rem] sm:rounded-[3rem] md:rounded-[5rem] p-6 sm:p-10 md:p-16 lg:p-32 relative overflow-hidden shadow-3xl">
            <div className="absolute inset-0 bg-gradient-to-br from-brand-500/10 via-transparent to-transparent opacity-60" />
            <div className="relative z-10 min-w-0">
              <h2 className="text-3xl sm:text-4xl md:text-7xl font-black mb-10 md:mb-20 text-center font-heading tracking-tighter">Midweek Life.</h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-12">
                <div className="bg-white/5 p-6 sm:p-10 md:p-16 rounded-[1.5rem] md:rounded-[3rem] border border-white/10 backdrop-blur-md group hover:bg-white/10 transition-all duration-500 min-w-0">
                  <span className="text-brand-300 font-black text-[11px] uppercase tracking-[0.2em] sm:tracking-[0.3em] block mb-6 md:mb-8">Tuesdays • {CHURCH_INFO.meetings.tuesday.time}</span>
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-6 md:mb-8 font-heading break-words">{CHURCH_INFO.meetings.tuesday.title}</h3>
                  <p className="text-gray-400 text-base sm:text-lg md:text-xl font-medium leading-relaxed">{CHURCH_INFO.meetings.tuesday.description}</p>
                </div>
                <div className="bg-white/5 p-6 sm:p-10 md:p-16 rounded-[1.5rem] md:rounded-[3rem] border border-white/10 backdrop-blur-md group hover:bg-white/10 transition-all duration-500 min-w-0">
                  <span className="text-brand-300 font-black text-[11px] uppercase tracking-[0.2em] sm:tracking-[0.3em] block mb-6 md:mb-8">New Midweek Schedule</span>
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-6 md:mb-8 font-heading break-words leading-tight">Wednesdays. Two studies each week. Now running.</h3>
                  <div className="space-y-6 md:space-y-8 text-gray-400 text-base sm:text-lg md:text-xl font-medium leading-relaxed">
                    <p>
                      <strong className="text-white">Marriage &amp; Relationship Study, 7:00 to 8:00pm.</strong> Building stronger, Christ-centred relationships and homes. For adults and married couples.
                    </p>
                    <p>
                      <strong className="text-white">Main Church Bible Study, 8:00 to 9:00pm.</strong> Going deeper into God's Word together as one church family. All are welcome.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-16 md:mt-32">
            <div className="max-w-4xl min-w-0">
              <h2 className="text-3xl sm:text-5xl md:text-6xl font-black text-gray-900 mb-6 md:mb-10 font-heading tracking-tight">Church Events.</h2>
              <div className="bg-gray-50 border border-gray-100 p-6 sm:p-12 md:p-16 rounded-[2rem] md:rounded-[3rem] shadow-sm">
                <p className="text-[11px] font-black text-brand-500 uppercase tracking-[0.3em] mb-6">Church Events</p>
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 mb-6 font-heading tracking-tight break-words leading-tight">Bible Truth Foundations - Part 1: New Life in Christ. Now running.</h3>
                <p className="text-base sm:text-xl text-gray-500 font-medium leading-relaxed mb-6">16 lessons across 4 key sections, Sundays 10:30 to 11:00am.</p>
                <p className="text-base sm:text-xl text-gray-500 font-medium leading-relaxed">
                  For new believers wanting solid biblical grounding, and long-term Christians strengthening their foundations. We explore who God really is, what He is truly like, when eternal life begins, and much more.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Sundays;
