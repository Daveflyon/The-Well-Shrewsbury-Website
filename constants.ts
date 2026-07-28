
export const CHURCH_INFO = {
  name: "Well Ministries – Shrewsbury",
  location: "3A The Square, Shrewsbury, SY1\u00A01LA",
  shortLocation: "Shrewsbury Town Square",
  sundayTime: "11:00 (Doors 10:20)",
  bibleClubTime: "10:30",
  address: {
    line1: "The Well",
    line2: "3A The Square",
    city: "Shrewsbury",
    county: "Shropshire",
    postcode: "SY1\u00A01LA",
    country: "England"
  },
  contact: {
    phone1: "07910 - 359454",
    phone2: "07910 - 359454",
    email: "info@thewellshrewsbury.com"
  },
  meetings: {
    sunday: {
      title: "Sunday Services",
      schedule: [
        { time: "10:20", event: "Doors Open" },
        {
          time: "10:30",
          event: "Morning Groups",
          streams: [
            { label: "Children's Bible Club", description: "for children" },
            { label: "Youth Group", description: "for young people" },
            { label: "Bible Truth Foundations", description: "for adults" }
          ]
        },
        { time: "11:00", event: "Main Meeting (Worship, Prayer, Teaching)" }
      ]
    },
    tuesday: {
      title: "Coffee Morning",
      time: "11:30 - 13:30",
      description: "Coffee, tea, cake, chat, and prayer."
    },
    wednesday: {
      title: "Bible Study",
      time: "19:30",
      description: "Discussion, prayer, and fellowship."
    }
  },
  leadership: [
    { name: "Harry", role: "Elder and Pastor", image: "/images/Harry.png", email: "harry@thewellshrewsbury.com" },
    { name: "James", role: "Elder and Co-Pastor", image: "/images/James.png", email: "james@thewellshrewsbury.com" },
    { name: "Kate", role: "Administration", image: "/images/Kate.png" },
    { name: "David", role: "Teacher", image: "/images/david-smile.png" },
    { name: "Mohamed", role: "Associate Leader", image: "/images/Mohamed.png" }
  ]
};
