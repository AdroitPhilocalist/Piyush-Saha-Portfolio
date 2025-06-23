export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];
  
  export const gridItems = [
  {
    id: 1,
    title: "I prioritize research collaboration and open communication in academic projects",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "Based in Kolkata, India - Open to global collaborations",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "Full Stack + ML + Blockchain",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Dual degree student passionate about research and development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently researching Federated ML for LLMs at IIT Patna",
    description: "The Research Focus",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to collaborate on a project?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];
  
  export const projects = [
  {
    id: 1,
    title: "BlockMyShow - Decentralized Ticketing",
    des: "A decentralized ticket management dApp using React, ethers.js, and Solidity with Aadhar verification and ERC721 NFTs.",
    img: "/p1.svg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/blockchain.svg", "/solidity.svg"],
    link: "https://github.com/mrknightmare007/tickticket",
  },
  {
    id: 2,
    title: "BookingMaster - Hotel Management",
    des: "Full-stack hotel management system using Next.js, React, MongoDB, and Tailwind CSS for booking and inventory management.",
    img: "/p2.svg",
    iconLists: ["/next.svg", "/re.svg", "/tail.svg", "/mongodb.svg", "/ts.svg"],
    link: "https://github.com/AdroitPhilocalist/booking-master",
  },
  {
    id: 3,
    title: "Krishi-Connect - IoT Agriculture",
    des: "IoT-based system with ML for real-time soil and weather monitoring using a responsive web dashboard.",
    img: "/p3.svg",
    iconLists: ["/python.svg", "/iot.svg", "/ml.svg", "/dashboard.svg", "/raspberry.svg"],
    link: "https://github.com/AdroitPhilocalist/KrishiConnect",
  },
  {
    id: 4,
    title: "Quiz Master V2 - Exam Platform",
    des: "Exam preparation platform with Flask, SQLite, Vue.js, and Bootstrap, featuring quiz management and user statistics.",
    img: "/p4.svg",
    iconLists: ["/flask.svg", "/vue.svg", "/sqlite.svg", "/bootstrap.svg", "/python.svg"],
    link: "https://github.com/AdroitPhilocalist/quiz_master_22f3000921",
  },
];
  
 export const testimonials = [
  {
    quote:
      "Piyush has shown exceptional research capabilities during his internship. His work on PDF security analysis and cryptographic algorithms demonstrates deep technical understanding and attention to detail. His analytical approach to complex problems is commendable.",
    name: "Dr. Subhamoy Maitra",
    title: "Senior Professor, Indian Statistical Institute",
  },
  {
    quote:
      "Working with Piyush on federated machine learning research has been impressive. His grasp of LLM fine-tuning techniques and security considerations shows great promise for advanced research in AI.",
    name: "Prof. Raju Halder",
    title: "Professor, Indian Institute of Technology Patna",
  },
  {
    quote:
      "Piyush's innovative approach to blockchain development in the BlockMyShow project showcased his ability to integrate complex technologies like Solidity and React seamlessly. His problem-solving skills are remarkable.",
    name: "Tech Mentor",
    title: "Blockchain Development Guide",
  },
  {
    quote:
      "The IoT solution developed by Piyush for agricultural monitoring demonstrates his versatility across different technology domains. His full-stack development skills combined with IoT knowledge create powerful solutions.",
    name: "Project Supervisor",
    title: "IoT Solutions Architect",
  },
  {
    quote:
      "Piyush's performance in competitive programming and hackathons reflects his dedication to continuous learning. His achievement as Second Runners-Up at Hack Heritage 2023 speaks to his technical prowess and teamwork abilities.",
    name: "Hackathon Judge",
    title: "Heritage Institute of Technology",
  },
];
  
  export const companies = [
  {
    id: 1,
    name: "IIT Patna",
    img: "/iit-patna.svg",
    nameImg: "/iit-patna-name.svg",
  },
  {
    id: 2,
    name: "ISI Kolkata",
    img: "/isi.svg",
    nameImg: "/isi-name.svg",
  },
  {
    id: 3,
    name: "Heritage Institute",
    img: "/heritage.svg",
    nameImg: "/heritage-name.svg",
  },
  {
    id: 4,
    name: "IIT Madras",
    img: "/iit-madras.svg",
    nameImg: "/iit-madras-name.svg",
  },
  {
    id: 5,
    name: "MongoDB",
    img: "/mongodb.svg",
    nameImg: "/mongodb-name.svg",
  },
];
  
  export const workExperience = [
    {
      id: 1,
      title: "Frontend Engineer Intern",
      desc: "Assisted in the development of a web-based platform using React.js, enhancing interactivity.",
      className: "md:col-span-2",
      thumbnail: "/exp1.svg",
    },
    {
      id: 2,
      title: "Mobile App Dev - JSM Tech",
      desc: "Designed and developed mobile app for both iOS & Android platforms using React Native.",
      className: "md:col-span-2", // change to md:col-span-2
      thumbnail: "/exp2.svg",
    },
    {
      id: 3,
      title: "Freelance App Dev Project",
      desc: "Led the dev of a mobile app for a client, from initial concept to deployment on app stores.",
      className: "md:col-span-2", // change to md:col-span-2
      thumbnail: "/exp3.svg",
    },
    {
      id: 4,
      title: "Lead Frontend Developer",
      desc: "Developed and maintained user-facing features using modern frontend technologies.",
      className: "md:col-span-2",
      thumbnail: "/exp4.svg",
    },
  ];
  
  export const socialMedia = [
    {
      id: 1,
      img: "/git.svg",
    },
    {
      id: 2,
      img: "/twit.svg",
    },
    {
      id: 3,
      img: "/link.svg",
    },
  ];