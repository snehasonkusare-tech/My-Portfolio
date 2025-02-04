import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  html,
  css,
  mongodb,
  git,
  R,
  Pyhton,
  SQL,
  MySQL,
  PowerBI,
  Hexa,
  iBase,
  Neu,
  carrent,
  jobit,
  tripguide,
  UMD,
  MIT,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Experience",
  },
  {
    id: "skills",
    title: "Skills",
  },
  {
    id: "education",
    title: "Education",
  },
  {
    id: "contact",
    title: "Contact",
  },
  

];

const services = [
  {
    title: "Data Scientist",
    icon: web,
  },
  {
    title: "Machine Learning Enigneer",
    icon: mobile,
  },
  {
    title: "AI Engineer",
    icon: backend,
  },
  {
    title: "Data Analyst",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "R",
    icon: R,
  },
  {
    name: "Python",
    icon: Pyhton,
  },
  {
    name: "PowerBI",
    icon: PowerBI,
  },
  {
    name: "SQL",
    icon: SQL,
  },
  {
    name: "MySQL",
    icon: MySQL,
  },

];

const experiences = [
  {
    title: "Associate Software Engineer",
    company_name: "Hexaware Texchnology LTD",
    icon: Hexa,
    iconBg: "#383E56",
    date: "September 2021 - January 2024",
    points: [
      "Developed and optimized machine learning models for anomaly detection and root cause analysis, improving system efficiency by 40%.",
      "Designed and implemented function-based and semi-supervised labeling strategies, enhancing predictive model accuracy.",
      "Led data science initiatives, leveraging Python, SQL, and Spark to analyze large-scale datasets and drive business insights.",
      "Conducted A/B testing and iterative validation to refine model performance based on real-world feedback.",
      "Collaborated with cross-functional teams to deploy predictive algorithms into production environments on cloud platforms."
    ],
  },
  {
    title: "Software Intern",
    company_name: "iBase Technologyies",
    icon: iBase,
    iconBg: "#E6DEDD",
    date: "November 2020 - August 2021",
    points: [
      "Built machine learning models for clustering and classification, enabling actionable insights for business applications.",
      "Designed scalable MySQL databases, improving query performance and data integrity in production environments.",
      "Optimized deep learning algorithms in Python, enhancing computational efficiency and predictive performance."
    ],
  },
  {
    title: "Web Developer Intern",
    company_name: "Neurapses Technology",
    icon: Neu,
    iconBg: "#383E56",
    date: "July 2020 - December 2020",
    points: [
      "Developed and maintained company websites using HTML, CSS, JavaScript,Bootstrap and AngularJS, improving user experience and responsiveness.",
      "Collaborated with designers and backend developers to implement interactive UI components and optimize website performance",
      "Integrated MySQL for dynamic content management and ensured seamless data retrieval and storage for web applications.",
    ],
  },
];

const testimonials = [
  {
    testimonial:"University of Massachusetts Dartmouth",
    name: "Masters in Data Science",
    Percentage:"3.7/4",
    company: "2024 - 2026 | Pursuing",
    image:UMD


  },
  {
    testimonial:"MIT Art, Desgin and Technology University",
    name: "Bachelors in Electronics and Communication Engineering",
    Percentage:"7.57/10",
    company: "2017 - 2021",
    image: MIT,
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
