import {
  logo,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  motivalogic,
  carrent,
  jobit,
  tripguide,
  threejs,
  nnpc,
  futo,
  devops,
  monitoring,
  networking,
  fullstack,
  westermo, 
  kenny,
  amasa,
  avatar,
  boonfuLogo,
} from "../assets";

import {
   SiTailwindcss, SiReact, SiTypescript, SiPhp, SiNodedotjs, SiMysql, SiMongodb, SiRedis, SiFirebase, SiKubernetes, SiAnsible, SiTerraform, SiNewrelic, SiPowershell, SiDigitalocean, SiMicrosoftteams, SiGooglemeet, SiTeamviewer, SiAnydesk, SiSlack, SiMicrosoftonenote,SiNotion,SiWikipedia, SiReadthedocs, SiFramer, SiHeroku, SiNamecheap, SiPassport, SiBootstrap, SiJavascript, SiHtml5, SiCss3, SiExpress, SiDocker
} from 'react-icons/si';
import { FaJava, FaDatabase, FaLaptopCode, FaCode, FaDocker, FaGitAlt, FaJenkins, FaFileCode, FaPython, FaCloud, FaAws, FaUsers, FaConfluence, FaBootstrap, FaNodeJs, FaJira, FaDiscord, FaTrello} from 'react-icons/fa';
import { IoInfiniteSharp} from 'react-icons/io5';
import { TbDeviceHeartMonitorFilled, TbHeartRateMonitor, TbWorldWww } from 'react-icons/tb';
import { BiSupport, BiLogoNetlify } from 'react-icons/bi';
import { CgFigma } from "react-icons/cg";
import { formatDistanceToNow } from "date-fns";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Full Stack Engineer",
    icon: fullstack,
  },
  {
    title: "DevOps",
    icon: devops,
  },
  {
    title: "Network Engineer",
    icon: networking,
  },
  {
    title: "Monitoring & Automation",
    icon: monitoring,
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
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "IT Technical Support",
    company_name: "NNPC, Ikoyi, Lagos",
    icon: nnpc,
    active: false,
    iconBg: "#E6DEDD",
    duration: "6 month",
    date: "Jun. 2014 - Dec. 2014",
    points: [
      "Support end users - Office 360, user account configuration (Active Directory), Hardware and Software. Design, Installation, Troubleshooting and maintainance of PC / Networks.",
      "Working with service providers.",
      "Windows and Office 365 setup and administration",
      "Hardware / Software  - (Desktop / Mobile) support.", "Investigated and diagnosed network problems", "Manage and update IT inventory", "User account configuration: permissions and password management", "Installed, maintained, repaired and upgrade Company’s Computer System, network printers and Networks that really made information sharing easy.", "Configuring and supporting all networked devices", "Performed Upgrading and backups of Cisco router Configuration files using TFTP server.",
      "Maintain professionalism and courtesy, answering phone calls.",
      "Configured VLANs, VTP, Ether channels for proper optimization of the network.", "A positive “can do” attitude towards work, and our clients",
      "Documentation / report escalating issues to higher Tier - handwritten / mail.", "Ensured all IT equipment complies with industry standards.",
      "Develop and manage IT enlightment training resource for staffs.",
      "Provided Local Area Network (LAN) Supports.",
    ],
  },
  {
  title: "IT Consultant",
  company_name: "FUTO, (Mathematics Department)",
  icon: futo,    
  active: false,
  iconBg: "#383E56",
  duration: "11 month",
  date: "Jan. 2015 - Nov. 2015",
  points: [
    "Worked closely with department to analyse IT system requirements, IT needs and their budget to plan IT projects and ensure customers satisfaction.",
    "Developed IT system specifications after evaluating departments expectation to complier with industry standards.",
    "Solved clients IT issues - Researched and purchased equipment / quality software, documented plan for software, hardware and networking installation and maintenance.",
    "Decommission of bad computers/networks.",
    "Installed and updated Windows 10, Microsoft Office Suite, Matlab, Norton 360.",
    "Installed network technology: Wireless Access point, DHCP, TCP/IP, Access Control (Security).",
    "Mentored the first IT officer in mathematics department.",
  ],
},
  {
    title: "Technical Support (INTERNSHIP)",
    company_name: "NNPC, Ikoyi, Lagos",
    icon: nnpc,
    active: false,
    iconBg: "#E6DEDD",
    duration: "8 month",
    date: "Feb. 2014 - Sept. 2019",
    points: [
      "Plan, document, configure, troubleshoot, monitor, and support all network device(s) installation for new / old site(s).",
      "Managing and updating IT inventory.",
      "User account configuration: permissions and password management",
      "Hardware / Software / Network support ensured all IT equipment complies with industry standards.",
      "Configured VLANs, VTP, Ether-channels, DHCP etc, for proper optimization of the network.",
      "Attending to customer query via Ticketing system and documenting / report escalating issues to higher Tier - handwritten / mail.",
      "Maintain professionalism and courtesy, answering phone calls.",
      "Performed Upgrading and backups of Cisco router configuration files using TFTP server.",
      "Working with service providers.",
    ],
  },
  {
    title: "Fullstack Web Developer",
    company_name: "Self-Employed",
    icon: logo,    
    active: true,
    iconBg: "#F8F8F8",
    duration: formatDistanceToNow(new Date(2018, 8, 1)),
    date: "Sept. 2018 - Till Date",
    points: [
      "Develop project concepts and maintain optimal workflow.",
"Collaborated with cross-functional teams to gather requirements, plan sprints, and deliver features on time.",
"Team collaboration to manage large, complex design projects for corporate clients.",
"Championed adoption of TypeScript in React projects, improving developer productivity over 60%.",
"Implemented Git workflows and best practices to streamline collaboration and version control across teams.",
"Integrated third-party APIs and services to extend application functionality and enhance user experience.",
"Developed and maintained RESTful APIs and server-side logic using Node.js and Express.js, ensuring high performance and scalability.",
"Participated in code reviews, provided constructive feedback, and adhered to coding standards and best practices.",
"Facilitated a cross-functional team in adopting Typescript for front-end development, reducing runtime errors observed in production by 50%.",
"Document developed RESTful API for collaboration with Frontend engineer using Swagger UI.",
"Ship software in container – on demand.",
"Implemented automated testing using Mocha to ensure code quality and reliability.",
"Plan, develop, troubleshoot, support, monitor and test software.",
"Collaborate with UI/UX designers using Figma.",
"Automate / Deployed applications to production environments using Jenkins, Docker, AWS, or Heroku, ensuring seamless deployment and scalability.",
    ],
  }, {
    title: "Lead DevOps Engineer",
    company_name: "CloudHight",
    icon: motivalogic,
    active: false,
    iconBg: "#E6DEDD",
    duration: "2 years",
    date: "Dec. 2020 - Dec. 2022",
    points: [
      "Coaching a team more than 8 junior DevOps engineer.",
"Designed and implemented Continuous Integration and Delivery Pipelines using Jenkins and Git.",
"Planning, automating, provisioning, configuring, deploying, monitoring, upgrading client infrastructure with emphasis on security, performance and cost.",
"Coordinating and assigning team members to task in line with client project.",
"Automating client project (CICD) using Terraform, Jenkins, GitHub Webhook, Linux, Ansible.",
"Documentation of processes, error(s) and solutions on each task in confluence in response to task on Jira.",
"Monitoring servers using New Relic.",
"Implemented Git workflows and best practices to streamline collaboration and version control across teams.",
"Automated infrastructure provisioning and configuration management using Ansible, Terraform, and Docker.",
"Implemented Ansible playbooks to automate configuration management, reducing deployment time by 40%.",
"Collaborated with development teams to optimize Node.js application performance and automate build processes.",
"Implemented Git workflows and best practices to streamline collaboration and version control across teams",
"Help junior intern DevOps engineer land their dream job after coaching and interview prep.",
"Alumni network that supports interns in their new jobs.",
"Developed slides to teach interns with detailed information's considering the latest updates in the industry.",
    ],
  },
  {
    title: "NodeJS Fullstack Engineer",
    company_name: "Boonfu",
    icon: boonfuLogo,
    active: true,
    iconBg: "#000000",
    duration: formatDistanceToNow(new Date(2022, 11, 12)),
    date: "Dec. 2022 - Till Date",
    points: [
      "Architected and implemented mini e-commerce platform, by leveraging React / Typescript for frontend and Node.js for the backend.",
"Optimizing customers database to improve web app performance.",
"Collaborating with frontend developers through documentation of RESTful API using SwaggerUI.",
"Directed a team of 3 developers, 1 UI/UX designer in developing, upgrading webapp to improve customers engagement using Agile methodology boosting productivity by 40%.",
"Involve in project / product planning into features for development.",
"Established best coding practices via design principles and patterns, improving team productivity by 25%.",
"Assign and monitoring task using Trello, Discord and Figma.",
"Spearheaded the migration of legacy systems to cloud, employing Docker, Ansible and cloud, which resulted in a 15% improvement in application scalability and a 20% reduction in server costs.",
"Built deployment pipeline for deployment environments and releases using Jenkins.",
"Improved bug detection and fix by 80%.",
      "Speed up testing and development by 50%.",
      "Improved team collaboration and productivity by 40%.",
    ],
  },
  {
    title: "Network Operations Engineer",
    company_name: "Westermo Ireland",
    icon: westermo,
    active: true,
    iconBg: "#fff",
    duration: formatDistanceToNow(new Date(2021, 5, 21)),
    date: "Jun. 2021 - Present",
    points: [
      "Configure, monitor, troubleshoot and support customers sites and devices globally using in-house software's – Activator and Monitor.",
"Designed and maintained monitoring infrastructure using Zabbix, ensuring high availability and proactive issue  resolution.",
"Building Zabbix templates to align with customers' site demands for device monitoring.",
"Develop in-house software's to enhance day-to-day activity and team collaboration.",
"Prioritize customers support with Freshdesk / Salesforce based on support contract.",
"Provide coaching for my colleagues and customers via presentation slides on our products and network protocols.",
"Implemented and maintained network monitoring solutions using Zabbix, ensuring proactive identification and resolution of network issues.",
"Configured and managed IPSec, L2TP, and OpenVPN tunnels for secure communication between remote sites and data centres.",
"Established and maintained VPN connections using WeConnect and other VPN technologies to enable secure remote access for customers.",
"Deployed and configured Radius and TACAS servers for centralized authentication and authorization of network devices.",
"Designed and developed custom Zabbix templates to monitor network devices, servers, and applications, ensuring comprehensive visibility into system health and performance.",
"Configured Zabbix items, triggers, and discovery rules to collect and analyze key performance indicators (KPIs) such as CPU utilization, bandwidth usage, and latency.",
"Integrated Zabbix with network devices via SNMP to monitor interface status, traffic, and errors, facilitating proactive identification and resolution of network issues.",
"Collaborated with stakeholders to gather requirements and define monitoring objectives, ensuring alignment with business goals and objectives.",
"Implemented advanced Zabbix features such as event correlation, auto-discovery, and remote commands to automate routine tasks and enhance operational efficiency.",
"Developed documentation for Zabbix templates, including configuration details, troubleshooting steps, and best practices, to facilitate knowledge sharing and onboarding of new team members.",
"Provided technical support and training to internal teams on Zabbix usage, configuration, and troubleshooting techniques.",
"Conducted regular network audits and assessments to identify vulnerabilities and ensure compliance with security policies.",
"Collaborated with cross-functional teams to troubleshoot and resolve network-related issues in a timely manner.",
"Documented network configurations, procedures, and troubleshooting steps to ensure knowledge transfer and maintain network integrity.",
"Provided technical guidance and mentorship to junior team members, fostering skill development and knowledge sharing.",
"Creating and modifying in-house documentations for processes and device manuals, accommodating changes due to updates."
    ],
  }, 
];

const testimonials = [
  {
    testimonial:

      "Samuel standards is always beating my imagination especially with innovation. How he combines his tech stack to solve problems is EPIC!",
    name: "Kehinde Oniyide",
    designation: "Project Manager IT Infrastructure",
    company: "NNPC",
    image: kenny,
  },
  {
    testimonial:
      "Sam always provide high quality resolution. Not only do you take ownership of issues, you also strive to help others. A good leader and team player.",
    name: "Gerry Keogh",
    designation: "Support Manager",
    company: "WIE",
    image: avatar,
  },
  {
    testimonial:
      "Sam was the first person I employed that was recommended by 2 different people for a single job. Samuel always deliver with industry standards.",
    name: "Jeji Amasa",
    designation: "Supervisor IT Infrastructure",
    company: "NNPC",
    image: amasa,
  },
];

const projects = [
  {
    name: "WIE Ticket Tracker",
    description:
      "Managing and remembering alot of customer request and long chain discussion can be wearisome especially when customer comes back after months of abandoned discussion. This web app was developed, leveraging the power of Mongo ATLAS, Node JS (Express), BootStrap. Not only does it help me keep track of tickets and discussion, I can assign the discussion to a colleague when I am on leave for brief summaries. Ticket can also be claimed back",
    tags: [
      {
        name: "NodeJS",
        color: "text-green-600",
        icon: FaNodeJs,
      },{
        name: "Express (EJS)",
        color: "text-blue-600",
        icon: SiExpress,
      },
      {
        name: "Mongodb",
        color: "text-green-600",
        icon: SiMongodb,
      },
      {
        name: "Bootstrap",
        color: "text-[#915eff]",
        icon: SiBootstrap,
      },{
        name: "Passport JS",
        color: "text-gray-500",
        icon: SiPassport,
      },{
        name: "Namecheap",
        color: "text-purple-600",
        icon: SiHeroku
      },
    ], 
    image: carrent,
    source_code_link: "https://github.com/samuelchika/VATicket",
  },
  {
    name: "RCCG Excel Parish",
    description:
      "A two weeks project to revamp the church website to accomodate the church new feature. Site was originally developed with No-Code technology. I am a member of the media team and collaborated with Joel who provided the approved Figma UI/UX design. The project was powered with MERN stack - React Typescript and shadcn/ui for frontend. Project was built and hosted in Namecheap. Allow blog activity, authentication and defined features.",
    tags: [
      {
        name: "HTML5",
        color: "text-blue-600",
        icon: SiReact
      },
      {
        name: "Tailwind CSS",
        color: "text-[#915eff]",
        icon: SiTailwindcss,
      },
      {
        name: "TypeScript",
        color: "text-blue-600",
        icon: SiTypescript
      },{
        name: "NodeJS",
        color: "text-green-600",
        icon: FaNodeJs,
      },{
        name: "Express (EJS)",
        color: "text-blue-600",
        icon: SiExpress,
      },
      {
        name: "Mongodb",
        color: "text-green-600",
        icon: SiMongodb,
      },{
        name: "Namecheap",
        color: "text-orange-600",
        icon: SiNamecheap
      },
    ],
    image: jobit,
    source_code_link: "https://www.beholdinghisface.com/pages/index",
  },
  {
    name: "Barcode Generator",
    description:
      "A challenge arose in the workplace that cut across teams. Devices brought in as RMA in batches are to be returned in batches. For device to be returned, the RMA number should be inputted into the in-house software manually. To hasten the process is to scan the numbers in, using a barcode reader. I developed a software to read a CSV file, process it, and generate barcode for each data captured in the CSV file. This improved logistic process by 80% ",
    tags: [
      {
        name: "React",
        color: "text-purple-600",
        icon: SiReact
      },{
        name: "Tailwind",
        color: "text-blue-600",
        icon: SiTailwindcss
      },
      {
        name: "JavaScript",
        color: "text-orange-600",
        icon: SiJavascript
      },{
        name: "Docker",
        color: "text-blue-600",
        icon: SiDocker
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

const skills = [{
  title: "FrontEnd",
  icon: FaLaptopCode,
  details: [{
    tech: "Bootstrap",
    icon: FaBootstrap,
  },{
    tech: "Tailwind CSS",
    icon: SiTailwindcss,
  },  {
    tech: "Figma",
    icon: CgFigma,
  },  {
    tech: "Framer Motion",
    icon: SiFramer,
  },{
    tech: "React",
    icon: SiReact,
  },  {
    tech: "TypeScript",
    icon: SiTypescript,
  },]
},  {
  title: "BackEnd",
  icon: FaCode,
  details: [{
    tech: "PHP",
    icon: SiPhp,
  }, {
    tech: "NodeJS (Express)",
    icon: SiNodedotjs,
  }, {
    tech: "Java",
    icon: FaJava,
  }]
}, {
  title: "Database",
  icon: FaDatabase,
  details: [{
    tech: "MySQL",
    icon: SiMysql,
  }, {
    tech: "MongoDB",
    icon: SiMongodb,
  }, {
    tech: "Redis",
    icon: SiRedis,
  }, {
    tech: "Firebase",
    icon: SiFirebase
  }]
}, {
  title: "DevOps",
  icon: IoInfiniteSharp,
  details: [{
    tech: "Docker",
    icon: FaDocker,
  }, {
    tech: "Git",
    icon: FaGitAlt,
  }, {
    tech: "K8",
    icon: SiKubernetes,
  }, {
    tech: "Jenkins",
    icon: FaJenkins
  }, {
    tech: "Ansible",
    icon: SiAnsible
  }, {
    tech: "Terraform",
    icon: SiTerraform
  }]
}, {
  title: "Team Collaboration",
  icon: FaUsers,
  details: [{
    tech: "MS Teams",
    icon: SiMicrosoftteams,
  }, {
    tech: "Slack",
    icon: SiSlack,
  }, {
    tech: "Jira",
    icon: FaJira,
  }, {
    tech: "Discord",
    icon: FaDiscord,
  }, , {
    tech: "Trello",
    icon: FaTrello,
  }]
}, {
  title: "Documentation",
  icon: SiReadthedocs,
  details: [{
    tech: "Confluence",
    icon: FaConfluence,
  }, {
    tech: "MS OneNote",
    icon: SiMicrosoftonenote,
  }, {
    tech: "Notion",
    icon: SiNotion,
  }, {
    tech: "Wiki",
    icon: SiWikipedia,
  }]
},{
  title: "Remote Support",
  icon: BiSupport,
  details: [{
    tech: "MS Teams",
    icon: SiMicrosoftteams,
  }, {
    tech: "Google Meet",
    icon: SiGooglemeet,
  },  {
    tech: "TeamViewer",
    icon: SiTeamviewer,
  },  {
    tech: "AnyDesk",
    icon: SiAnydesk,
  }]
}, {
  title: "Hosting Service",
  icon: TbWorldWww,
  details: [{
    tech: "Netlify",
    icon: BiLogoNetlify,
  }, {
    tech: "Heroku",
    icon: SiHeroku,
  }, {
    tech: "Namecheap",
    icon: SiNamecheap,
  }] 
},{
  title: "Monitoring",
  icon: TbHeartRateMonitor,
  details: [{
    tech: "New Relic",
    icon: SiNewrelic,
  }, {
    tech: "Zabbix",
    icon: TbDeviceHeartMonitorFilled,
  }]
}, {
  title: "Cloud Providers",
  icon: FaCloud,
  details: [{
    tech: "AWS",
    icon: FaAws,
  }, {
    tech: "Digital Ocean",
    icon: SiDigitalocean,
  }]
},  {
  title: "Scripting",
  icon: SiPowershell,
  details: [{
    tech: "Bash",
    icon: FaFileCode,
  }, {
    tech: "Python",
    icon: FaPython,
  }]
} ]

export { services, technologies, experiences, testimonials, projects, skills };
