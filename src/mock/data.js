import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Isak Antin | Front-End Developer', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'A portfolio made by front-end developer student Isak Antin', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hi, my name is',
  name: 'Isak',
  subtitle: 'I\'m a Front End Developer.',
  cta: 'About me',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: 'My name is Isak Antin, i\'m a 19 year old front-end developer student based in Sweden.',
  paragraphTwo: 'I like to create functional and innovative products that helps me grow as a developer.',
  paragraphThree: 'These days, i\'m teaching myself new ways of developing applications and learning about algorithms.',
  resume: '', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'MuskGoToMars.png',
    title: 'Musk Go To Mars',
    info: 'Musk Go To Mars is a simple game made using JavaScript.',
    info2: 'The game mainly taught me how to use JS canvas. But in the project i also had to learn how to\
    implement sound and spritesheets in JavaScript projects. One of the big problems i encountered was with\
    crash detection.',
    url: 'https://axelpahne.github.io/side-scrollers/',
    repo: 'https://github.com/axelpahne/side-scrollers', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'Scorekeeper.png',
    title: 'Scorekeeper',
    info: 'A simple scorekeeper using JavaScript',
    info2: 'In this project i wanted to make the code compact yet functional. I\'m happy with how the \
    project turned out. In this project, i learned a bit about for loops and if-statements.',
    url: 'https://ant1n.github.io/Scorekeeper/',
    repo: 'https://github.com/Ant1N/Scorekeeper', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'VisitedCities.jpg',
    title: 'Visited Cities',
    info: 'An app to display city information',
    info2: 'In this project i made an application which shows weather and general information about a city using APIs.\
    You can also select what cities you\'ve visited and see the total amount of inhabitans in the selected cities.\n\n\
    In this project i learned a lot about APIs, JSON and data structures in general.',
    url: 'https://ant1n.github.io/Visited-Cities/',
    repo: 'https://github.com/Ant1N/Scorekeeper', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'isakantin@live.se',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'codepen',
      url: 'https://codepen.io/1337antin',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/isakantin/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/Ant1N',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
