export const navLinks = [
    {
      id: 1,
      name: 'Home',
      href: '#home',
    },
    {
      id: 2,
      name: 'About',
      href: '#about',
    },
    {
      id: 3,
      name: 'Work',
      href: '#work',
    },
    {
      id: 4,
      name: 'Contact',
      href: '#contact',
    },
  ];
  

  export const myProjects = [
    {
      title: 'Chat - Chat App',
      desc: 'Chat is a real time chat application built on top of mern stack with socket io for real time updates',
      subdesc:
        'Worked for around 1 month in this app and builded a awesome app.',
      href: 'https://github.com/M0hitThapa/MultiLingual-Chat-app.git',
      texture: '/textures/project/project1.mp4',
      logo: '/images/project-logo1.png',
      logoStyle: {
        backgroundColor: '#2A1816',
        border: '0.2px solid #36201D',
        boxShadow: '0px 0px 60px 0px #AA3C304D',
      },
      spotlight: '/images/spotlight1.png',
      tags: [
        {
          id: 1,
          name: 'React.js',
          path: '/images/react.svg',
        },
        {
          id: 2,
          name: 'TailwindCSS',
          path: '/images/tailwindcss.png',
        },
        {
          id: 3,
          name: 'TypeScript',
          path: '/images/typescript.png',
        },
        {
          id: 4,
          name: 'Framer Motion',
          path: '/images/framer.png',
        },
      ],
    },
    {
      title: 'Short-Url - Amazing url shortener',
      desc: 'Short-url is a tool used to shorten the big junky url to beautiful short url.',
      subdesc:
        'With shorturl, users can experience the easiness of url shortening and sharing with others',
      href: 'https://github.com/M0hitThapa/url-shortener.git',
      texture: '/textures/project/project2.mp4',
      logo: '/images/project-logo2.png',
      logoStyle: {
        backgroundColor: '#13202F',
        border: '0.2px solid #17293E',
        boxShadow: '0px 0px 60px 0px #2F6DB54D',
      },
      spotlight: '/images/spotlight2.png',
      tags: [
        {
          id: 1,
          name: 'React.js',
          path: '/images/react.svg',
        },
        {
          id: 2,
          name: 'TailwindCSS',
          path: 'public/images/tailwindcss.png',
        },
        {
          id: 3,
          name: 'TypeScript',
          path: '/images/typescript.png',
        },
        {
          id: 4,
          name: 'Framer Motion',
          path: '/images/framer.png',
        },
      ],
    },
    {
      title: 'StickyNote - StickyNotesApp',
      desc: 'A Beautiful draggable notes app with beautiful ui and ux and a lot of colourful sticky notes.',
      subdesc:
        'With a focus on productivity this app helps you to manage a lot of junky notes in a beautiful format',
      href: 'https://www.youtube.com/watch?v=lEflo_sc82g',
      texture: '/textures/project/project3.mp4',
      logo: '/images/project-logo3.png',
      logoStyle: {
        backgroundColor: '#60f5a1',
        background:
          'linear-gradient(0deg, #60F5A150, #60F5A150), linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(208, 213, 221, 0.8) 100%)',
        border: '0.2px solid rgba(208, 213, 221, 1)',
        boxShadow: '0px 0px 60px 0px rgba(35, 131, 96, 0.3)',
      },
      spotlight: '/images/spotlight3.png',
      tags: [
        {
          id: 1,
          name: 'React.js',
          path: '/images/react.svg',
        },
        {
          id: 2,
          name: 'TailwindCSS',
          path: '/images/tailwindcss.png',
        },
        {
          id: 3,
          name: 'TypeScript',
          path: '/images/typescript.png',
        },
        {
          id: 4,
          name: 'Framer Motion',
          path: '/images/framer.png',
        },
      ],
    },

    
  ];
  
  export const calculateSizes = (isSmall, isMobile, isTablet) => {
    return {
      deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
      deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
      cubePosition: isSmall ? [4, -5, 0] : isMobile ? [5, -5, 0] : isTablet ? [5, -5, 0] : [9, -5.5, 0],
      reactLogoPosition: isSmall ? [3, 4, 0] : isMobile ? [5, 4, 0] : isTablet ? [5, 4, 0] : [12, 3, 0],
      ringPosition: isSmall ? [-5, 7, 0] : isMobile ? [-10, 10, 0] : isTablet ? [-12, 10, 0] : [-24, 10, 0],
      targetPosition: isSmall ? [-5, -10, -10] : isMobile ? [-9, -10, -10] : isTablet ? [-11, -7, -10] : [-13, -13, -10],
    };
  };
  
  export const workExperiences = [
    {
      id: 1,
      name: 'Ankit',
      pos: ' Web Developer',
      duration: '2023 - Present',
      title: "Working on side projects with my partner ankit to build and launch a saas and improving skills better.",
      icon: '/images/react.svg',
      animation: 'victory',
    },
    {
      id: 2,
      name: 'Suraj',
      pos: 'Web Developer',
      duration: '2023 - 2024',
      title: "worked with a client for a room rental project. Builded the whole frontend and learned a lot in that project.",
      icon: '/images/react.svg',
      animation: 'clapping',
    },
    
  ];