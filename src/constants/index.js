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
  divinemercy,
  devops,
  monitoring,
  networking,
  fullstack,
  westermo 
} from "../assets";

import {
  SiStyledcomponents, SiTailwindcss, SiReact, SiTypescript, SiPhp, SiNodedotjs, SiMysql, SiMongodb, SiRedis, SiFirebase, SiKubernetes, SiAnsible, SiTerraform, SiNewrelic, SiPowershell, SiDigitalocean, SiMicrosoftteams, SiGooglemeet, SiTeamviewer, SiAnydesk, SiSlack, SiMicrosoftonenote,SiNotion,SiWikipedia, SiReadthedocs, SiFramer, SiHeroku, SiNamecheap, SiPassport, SiBootstrap, SiJavascript, SiHtml5, SiCss3, SiExpress, SiDocker
} from 'react-icons/si';
import { FaJava, FaDatabase, FaLaptopCode, FaCode, FaDocker, FaGitAlt, FaJenkins, FaFileCode, FaPython, FaCloud, FaAws, FaUsers, FaConfluence, FaBootstrap, FaNodeJs, FaJira, FaDiscord, FaTrello} from 'react-icons/fa';
import { IoInfiniteSharp} from 'react-icons/io5';
import { TbDeviceHeartMonitorFilled, TbHeartRateMonitor, TbWorldWww } from 'react-icons/tb';
import { BiSupport, BiLogoNetlify } from 'react-icons/bi';

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
    title: "Monitoring",
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
    title: "Network Operations Engineer",
    company_name: "Westermo Ireland",
    icon: westermo,
    iconBg: "#fff",
    duration: "2+ yrs",
    date: "Jun. 2021 - Present",
    points: [
      "Configure, monitor, troubleshoot and support customers sites and devices globally using in-house software's – Activator and Monitor.",
      "Building Zabbix templates to align with customers' site demands for device monitoring.",
      "Develop in-house software's to enhance day-to-day activity and team collaboration.",
      "Prioritize customers support with Freshdesk based on support contract.",
      "Provide coaching for my colleagues and customers via presentation slides on our products and network protocols.",
      "Scripting and Automation (Bash and Python).",
      "Creating and modifying in-house documentations for processes and device manuals, accommodating changes due to updates.",
      "Deploying in-house built software's on containers in the server",
    ],
  },  {
    title: "Team Lead DevOps Engineer",
    company_name: "MotivaLogic",
    icon: motivalogic,
    iconBg: "#E6DEDD",
    duration: "2 years",
    date: "Dec. 2020 - Dec. 2022",
    points: [
      "Coaching a team more than 8 junior DevOps engineer.",
      "Preparing junior intern DevOps engineer for interview.",
      "Planning, automating, provisioning, configuring, deploying, monitoring, upgrading client infrastructure with emphasis on security, performance and cost.",
      "Coordinating and assigning team members to task in line with client project.",
      "Automating / Provisioning client project (CI/CD) using Terraform, Jenkins, GitHub Webhook, Linux, Ansible.",
      "Documentation of processes, error(s) encountered and solutions on each task in confluence based on task assigned on Jira.",
      "Monitoring servers using New Relic.",
      "High availability using auto-scaling and load balancers with performance testing.",
      "Escalating interns need to manager.",
    ],
  },
    {
    title: "Software Developer (Freelance)",
    company_name: "Self-Employed",
    icon: logo,
    iconBg: "#F8F8F8",
    duration: "5+ years",
    date: "Sept. 2018 - Till Date",
    points: [
      "Develop project concepts and maintain optimal workflow.",
      "Work with senior developer to manage large, complex design projects for corporate clients.",
      "Carry out quality assurance tests to discover errors and optimize usability.",
      "ETL - Data Management for specific user privileges.",
      "Plan, develop, troubleshoot, support, monitor and test software.",
      "Collaborate with UI/UX designers using Figma.",
      "Cloud / local deployment.",
    ],
  },
    {
    title: "IT Technical Support",
    company_name: "National Petroleum Cooperation, Ikoyi, Lagos",
    icon: nnpc,
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
    title: "IT Consultant",
    company_name: "FUTO, (Mathematics Department)",
    icon: futo,
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
    company_name: "National Petroleum Cooperation, Ikoyi, Lagos",
    icon: nnpc,
    iconBg: "#E6DEDD",
    duration: "6 month",
    date: "Jun. 2014 - Dec. 2014",
    points: [
      "Monitoring Servers and network daily to ensure connectivity before daily online meeting.",
      "Support in PC / Printer / Network device installations using ticketing system.",
      "Assisted the network manager with Installation, Configuration and Administration of Windows Servers 2000/2003, Active Directory, FTP, DNS, DHCP, TFTP, under various LAN and WAN environments.",
      "Used Visio to plan and document network installation before configuration.",
      "Setup companies mail on staff desktop/mobile, password reset, obtain feedback and suggestions.",
      "Worked with the I.T team members to resolve Local Server Issues",
      "Establishing timeline / report for escalating issues.",
    ],
  }, 
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "WIE Ticket Tracker",
    description:
      "A personal web app developed, leveraging the power of Mongo ATLAS, Node JS (Express), BootStrap. This software was inspired by my day-to-challenge of keeping track of my tickets. The functionality enables me to briefly summarize tickets email chain, the type of ticket and who I assigns the ticket to when I go on leave. Assigned colleague can update the ticket with their login credentials even in my absence, and the software list each summary with the author. ",
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
    name: "Beholding His Face",
    description:
      "This project was inspired by my love for studying my bible. Moving books around will not be nice especially trying to reference previous study. Some of its features include but not limited to creating topics, sub topics under main topic, then posts under the sub topics. The post can be classified into 7 catagories which can be seen when you view a post on the LHS. I added an extra functionality for users to comment on post. It is hosted in Namecheap.",
    tags: [
      {
        name: "HTML5",
        color: "text-orange-600",
        icon: SiHtml5
      },{
        name: "CSS",
        color: "text-blue-600",
        icon: SiCss3
      },
      {
        name: "PHP",
        color: "text-purple-600",
        icon: SiPhp,
      },
      {
        name: "Bootstrap",
        color: "text-[#915eff]",
        icon: SiBootstrap,
      },
      {
        name: "JavaScript",
        color: "text-orange-600",
        icon: SiJavascript
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
      "A challenge arose in the work place that cut across teams. Devices brought in as RMA in batches are to be returned in batches. For device to be returned, the RMA number should be inputted into the in-house software manually. To hasten the process is to scan the numbers in, using a barcode reader. I developed a software to read a CSV file, process it, and generate barcode for each data captured in the CSV file. This improved logistic process by 80% ",
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
    tech: "Styled Component",
    icon: SiStyledcomponents,
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
    tech: "Git, GitHub, GitLab",
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
