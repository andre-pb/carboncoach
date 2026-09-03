/**
 * All site copy lives here. Wording is taken verbatim from Leon's
 * "Website Copy.docx" and the existing carboncoach.co.uk site.
 *
 * TODO (Leon to confirm):
 *  - calendlyUrl  – booking link
 *  - email        – hello@carboncoach.co.uk is what the current site shows;
 *                   the mailbox still needs setting up with Gravity Host
 */
export const siteConfig = {
  name: "The Carbon Coach",
  shortName: "Carbon Coach",
  url: "https://carboncoach.co.uk",
  email: "hello@carboncoach.co.uk",
  calendlyUrl: "https://calendly.com/",
  strapline: "Inspire Action. Reduce Carbon. Build a Better Future.",
};

export const nav = [
  { label: "Services", href: "#services" },
  { label: "About Me", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export const hero = {
  title: "Climate Awareness and Carbon Reduction Training",
  tagline:
    "Practical carbon reduction training for organisations who want to engage and motivate staff, strengthen credibility and cut their carbon footprint.",
  primaryCta: { label: "Book a 20-minute call", href: siteConfig.calendlyUrl },
  secondaryCta: { label: "Get in touch", href: "#contact" },
};

export const services = {
  heading: "Services",
  intro:
    "I offer practical, engaging support to help organisations understand and act on climate change with confidence. My services are designed to move teams beyond awareness and into meaningful, measurable action.",
  audience:
    "I work with public sector teams, educational organisations, business support groups and corporates.",
  items: [
    {
      title: "Carbon Literacy Training",
      body: "Accredited, interactive training that equips individuals and teams with the knowledge and motivation to reduce their carbon impact. Participants gain a recognised certification while developing significant practical carbon reduction actions tailored to their roles and organisation.",
      detail:
        "This can be achieved through 2 x half day sessions or one full day workshop – in person or online.",
      icon: "award",
    },
    {
      title: "Workshops",
      body: "Flexible, targeted sessions that build climate awareness, spark discussion, and inspire action. Ideal for team away days, leadership groups, or organisations at any stage of their sustainability journey.",
      detail:
        "Training is available for groups of 4–15 and can be delivered online or in person.",
      icon: "users",
    },
    {
      title: "Consultancy",
      body: "Support to help organisations embed climate action into their strategy and culture. Working with your leadership team, I'll help you develop a practical carbon reduction plan, build staff engagement and establish clear milestones—turning ambition into achievable, measurable outcomes.",
      detail: null,
      icon: "compass",
    },
  ],
} as const;

export const about = {
  heading: "About Me",
  lead: "Every fraction of a degree matters.",
  paragraphs: [
    "That's what drives my work as a sustainability professional—because the choices organisations make today have a very real impact on tomorrow's world. I am a sustainability professional with over 10 years' experience in climate education and organisational change. I am a certified Carbon Literacy Facilitator and have completed the Carbon Literacy Professional training course, drawing on experience across schools, further education and private sector organisations to make climate action practical, engaging and achievable.",
    "My background includes roles as an environmental educator, Sustainability Manager in secondary schools and Green Skills Coordinator in further education. I hold an MSc in Climate Change Management.",
    "I support organisations to influence behaviour, embed climate action into everyday practice and achieve meaningful environmental impact alongside cost savings.",
  ],
  credentials: [
    "Certified Carbon Literacy Facilitator",
    "Carbon Literacy Professional training course",
    "MSc in Climate Change Management",
    "Over 10 years' experience in climate education and organisational change",
  ],
};

/**
 * Logos live in /public/logos. `dark: true` marks logos supplied as white
 * artwork (meant for a dark header) so they sit on a navy tile.
 * Entries without a logo render as a text tile.
 */
export const organisations = {
  heading: "Organisations I have worked with",
  items: [
    {
      name: "Carbon Literacy Project",
      logo: "/logos/carbon-literacy-project.svg",
      url: "https://carbonliteracy.com/",
    },
    {
      name: "Speak Carbon Collective",
      logo: "/logos/speak-carbon-collective.webp",
      url: "https://speakcarbon.earth/",
    },
    {
      name: "Westway Trust",
      logo: "/logos/westway-trust.svg",
      url: "https://www.westway.org/",
    },
    {
      name: "Villiers High School",
      logo: "/logos/villiers-high-school.png",
      url: "https://www.villiers.ealing.sch.uk/",
    },
    {
      name: "Sustainability Managers for Schools",
      logo: "/logos/sustainability-managers-for-schools.webp",
      url: "https://sustainabilitymanagersforschools.org/",
    },
    {
      name: "West Thames College",
      logo: "/logos/west-thames-college.png",
      url: "https://www.west-thames.ac.uk/",
    },
    {
      name: "Repowering London",
      logo: "/logos/repowering-london.webp",
      url: "https://www.repowering.org.uk/",
      dark: true,
    },
    { name: "ProVeg", logo: "/logos/proveg.svg", url: "https://proveg.org/uk/" },
    {
      name: "Energy Sparks",
      logo: "/logos/energy-sparks.webp",
      url: "https://energysparks.uk/",
      dark: true,
    },
  ] as Array<{ name: string; logo?: string; url?: string; dark?: boolean }>,
};

export const cta = {
  text: "First conversation is free — no commitment, just an honest look at whether carbon literacy is right for you.",
  button: { label: "Get in touch", href: "#contact" },
};

export const contact = {
  heading: "Contact",
  booking: "Book a 20-minute call to explore how I can help your team.",
  bookingButton: "Book a 20-minute call",
  emailIntro:
    "Email me on hello@carboncoach.co.uk or fill in the form below — I'll get back within a couple of days.",
};

export const footer = {
  copyright: `Copyright © ${new Date().getFullYear()} Carbon Coach`,
};
