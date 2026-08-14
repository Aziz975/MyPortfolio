
// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import sassLogo from './assets/tech_logo/sass.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import angularLogo from './assets/tech_logo/angular.png';
import reduxLogo from './assets/tech_logo/redux.png';
import nextjsLogo from './assets/tech_logo/nextjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import gsapLogo from './assets/tech_logo/gsap.png';
import materialuiLogo from './assets/tech_logo/materialui.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import springbootLogo from './assets/tech_logo/springboot.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import firebaseLogo from './assets/tech_logo/firebase.png';
import cLogo from './assets/tech_logo/c.png';
import cppLogo from './assets/tech_logo/cpp.png';
import javaLogo from './assets/tech_logo/java.png';
import pythonLogo from './assets/tech_logo/python.png';
import typescriptLogo from './assets/tech_logo/typescript.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import mcLogo from './assets/tech_logo/mc.png';
import figmaLogo from './assets/tech_logo/figma.png';
import netlifyLogo from './assets/tech_logo/netlify.png';
import vercelLogo from './assets/tech_logo/vercel.png';
import postgreLogo from './assets/tech_logo/postgre.png';
import csharpLogo from './assets/tech_logo/csharp.png';

// Experience Section Logo's
import pinnacleLogo from './assets/company_logo/pinnacle.jpeg';
import agcLogo from './assets/company_logo/agc_logo.png';
import newtonschoolLogo from './assets/company_logo/newtonschool_logo.png';

// Education Section Logo's
import glaLogo from './assets/education_logo/gla_logo.png';
import bsaLogo from './assets/education_logo/bsa_logo.png';
import vpsLogo from './assets/education_logo/vps_logo.png';

// Project Section Logo's
import weatherLogo from './assets/work_logo/weather.png';
import image_searchLogo from './assets/work_logo/image_search.png';
import textLogo from './assets/work_logo/texttovoice.png';
import digitalclockLogo from './assets/work_logo/digitalclock.png';

export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Angular', logo: angularLogo },
      { name: 'Redux', logo: reduxLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      { name: 'Bootstrap', logo: bootstrapLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'MongoDB', logo: mongodbLogo },
      { name: 'Firebase', logo: firebaseLogo },
      { name: 'PostgreSQL', logo: postgreLogo },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C', logo: cLogo },
      { name: 'C++', logo: cppLogo },
      { name: 'Java', logo: javaLogo },
      { name: 'Python', logo: pythonLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'TypeScript', logo: typescriptLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Vercel', logo: vercelLogo },
      { name: 'Netlify', logo: netlifyLogo },
    
    ],
  },
];

  export const experiences = [
    {
      id: 0,
      img: pinnacleLogo,
      role: "Front-End Developer",
      company: "Pinnacle Labs",
      date: "July 2025 - Present",
      desc: "Developed dynamic and scalable web applications using the React, handling  frontend  development. Collaborated with cross-functional teams to build responsive UI, and optimize application performance in an agile environment.",
      skills: [
        "HTML",
        "CSS",
        "JavaScript",
        "React JS",
        "Tailwind CSS",
     
      ],
    },
    
  ];
  
  export const education = [
   
    {
      id: 1,
      img: bsaLogo,
      school: "Dr,Kn Modi institute of engineering and Technology",
      date: "Sept 2022 - Aug 2026",
      grade: "75%",
      desc: "I completed my B.tech degree in Computer science from Dr.kn Modi institute of Engineering and Technology. Throughout my studies, I was immersed in a variety of subjects that deepened my understanding of computing and technology. From exploring Data Structures and Algorithms to diving into Web Development and Database Management Systems, I gained practical insights into the world of software development. My time at BSA College allowed me to work on projects that applied theoretical concepts to real-world problems.",
      degree: "Bachelor of Technology - B.tech (Computer Science)",
    },
    {
      id: 2,
      img: glaLogo,
      school: "Bishop Academy Maharajganj",
      date: "Apr 2017 - March 2018",
      grade: "83%",
      desc: "I completed my class 12 education from Bishop Academy, Maharajganj, under the CBSE board, where I studied Physics, Chemistry, and Mathematics (PCM) with Computer Science.",
      degree: "CBSE(XII) - PCM ",
    },
    {
      id: 3,
      img: vpsLogo,
      school: "St.Joseph's School Maharajganj",
      date: "Apr 2018 - March 2019",
      grade: "90.4%",
      desc: "I completed my class 10 education from St.joseph's School, Maharajganj, under the CBSE board, where I studied Science with Computer.",
      degree: "CBSE(X)", 
    },
  ];
  
  export const projects = [
 
     {
      id: 0,
      title: "Weather web app",
      description:
        "The Weather App is a responsive web application developed using HTML, CSS, and JavaScript that allows users to fetch and view real-time weather information for any city or location worldwide. The application integrates with the OpenWeatherMap API to retrieve live weather data including temperature, humidity, wind speed, and weather conditions.",
      image: weatherLogo,
      tags: ["HTML", "CSS", "JavaScript"],
      github: "hhttps://github.com/Aziz975/Weather-app",
      webapp:"https://weather-app-mu-gray-10.vercel.app/",
      
    },
    {
      id: 1,
      title: "Image Search App",
      description:
        "The Image Search App is a simple, user-friendly web application that allows users to search and view images from the internet based on keywords. It utilizes the Unsplash API (or similar) to fetch high-quality images dynamically and display them in a responsive grid layout.",
      image: image_searchLogo,
      tags: ["React JS", "Node.js", "MongoDB", "Express", "HTML", "CSS", "JavaScript"],
      github: "https://github.com/codingmastr/CSPrep",
      
    },
    {
      id: 2,
      title: "Text To voice Converter",
      description:
        "The Text-to-Voice Converter is a simple yet powerful web application that allows users to input any text and convert it into spoken words using the Web Speech API built into modern browsers.",
      image: textLogo,
      tags: [ "API", "HTML", "CSS", "JavaScript"],
      github: "https://github.com/codingmastr/Movie-Recommendation-App",
       webapp:"https://weather-app-mu-gray-10.vercel.app/",
     
    },
    {
      id: 3,
      title: "Digital Clock",
      description:
        "AThe Digital Clock is a simple and functional web-based application that displays the current time in a clear and dynamic format. Built using HTML, CSS, and JavaScript, the clock updates every second to show hours, minutes, and seconds in real time. It can be easily customized to display 12-hour or 24-hour format, and styled for dark or light themes.",
      image: digitalclockLogo,
      tags: [ "html", "CSS", "ptavaScript"],
      github: "https://github.com/codingmastr/cmtk-email-validator",
   
    },
     {
      id: 4,
      title: "Expense Tracker App",
      description:
        "Developed a full-stack Expense Tracker application using React.js, Tailwind CSS, Node.js, Express.js, and MySQL to help users efficiently manage and monitor their personal finances. Implemented JWT-based authentication for secure user access and RESTful APIs for managing income and expense records. Added features for categorizing transactions, tracking spending, and viewing financial summaries through a responsive and user-friendly interface.",
      image: digitalclockLogo,
      tags: [ "React", "CSS tailwind", "Node"],
      github: "https://github.com/Aziz975/Expense-app",
   
    },
   
   
    
   
    
  ];  