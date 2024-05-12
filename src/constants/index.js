import {
  mobile,
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
  virtualaccess,
  carrent,
  jobit,
  tripguide,
  threejs,
  nnpc,
  futo,
  logo,
  devops,
  monitoring,
  networking,
  fullstack,
  boonfuLogo
} from "../assets";

import {
  SiStyledcomponents, SiTailwindcss, SiReact, SiTypescript, SiPhp, SiNodedotjs, SiMysql, SiMongodb, SiRedis, SiFirebase, SiKubernetes, SiAnsible, SiTerraform, SiNewrelic, SiPowershell, SiDigitalocean, SiMicrosoftteams, SiGooglemeet, SiTeamviewer, SiAnydesk, SiSlack, SiMicrosoftonenote,SiNotion,SiWikipedia, SiReadthedocs, SiFramer, SiHeroku, SiNamecheap, SiPassport, SiBootstrap, SiJavascript, SiHtml5, SiCss3, SiExpress
} from 'react-icons/si';
import { FaJava, FaDatabase, FaLaptopCode, FaCode, FaDocker, FaGitAlt, FaJenkins, FaFileCode, FaPython, FaCloud, FaAws, FaUsers, FaConfluence, FaBootstrap, FaNodeJs} from 'react-icons/fa';
import { IoInfiniteSharp} from 'react-icons/io5';
import { TbDeviceHeartMonitorFilled, TbHeartRateMonitor, TbWorldWww } from 'react-icons/tb';
import { BiSupport, BiLogoNetlify } from 'react-icons/bi';
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
    title: "Technical Support (INTERNSHIP)",
    company_name: "NNPC, Ikoyi, Lagos",
    icon: nnpc,
    active: false,
    iconBg: "#E6DEDD",
    duration: "6 month",
    date: "Jun. 2014 - Dec. 2014",
    points: [
      "Performed Anti-Virus Program Installation and Virus Removal for Customers",
      "Installed Printers, Computer and Network Systems Provided application support by handling users queries with an 80% accuracy.",
      "Daily maintenance, monitoring and support of the IT server and systems infrastructure", "Troubleshoot networking, routing and inter connectivity issues, including troubleshooting of network device configuration and low-level application interaction- TCP/IP, DNS, DHCP, Layer 2/3 network devices.", "Configure inter-vlan routing on Layer 3 Switches", "Assisted the network manager with Installation, Configuration and Administration of Windows Servers 2000/2003, Active Directory, FTP, DNS, DHCP, TFTP, under various LAN and WAN environments.", "Setting up companies mail on staff desktop / mobile and password reset.", "Worked with the I.T team members to resolve Local Server Issues", "Provided Network LAN Supports", "Remote Desktop Troubleshooting.",
      "Obtain feedbacks and suggestions from staffs.",
      "Establishing timeline / report for escallating issues."
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
      "Worked closely with department to analyze IT system requirements, information technology needs and their budget in order to plan IT project and ensure customers satisfaction.",
      "Developed IT system specifications after evaluating departments expectation to comply with industry standards",
      "Solved clients IT issues - Researched and purchased equipment / quality software, documented plan for software, hardware and networking installation and maintainance.",
      "Decommission of bad computers/networks.",
      "Installed and updated Windows 10, MS Suite, Matlab, Norton 360.",
      "Installed network technology: Wireless Access point, DHCP, TCP/IP, Access Control(Security).",
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
"Deployed applications to production environments using Docker, AWS, or Heroku, ensuring seamless deployment and scalability.",
    ],
  },
  {
    title: "IT Technical Support",
    company_name: "NNPC, Ikoyi, Lagos",
    icon: nnpc,
    active: false,
    iconBg: "#E6DEDD",
    duration: "8 month",
    date: "Feb. 2014 - Sept. 2019",
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
    icon: virtualaccess,
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
    name: "VA Ticket Tracker",
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
        color: "text-sky-600",
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
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "text-gray-200",
      },
      {
        name: "supabase",
        color: "text-red-600",
      },
      {
        name: "css",
        color: "text-blue-600",
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
  title: "Team Collaboration",
  icon: FaUsers,
  details: [{
    tech: "MS Teams",
    icon: SiMicrosoftteams,
  }, {
    tech: "Slack",
    icon: SiSlack,
  }]
}, {
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
