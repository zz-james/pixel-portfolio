const db = {
  Home: {
    type: "bubble",
    contentID: "home",
    dialogID: "dialog_home",
    content: ["Welcome to my site!"],
    player: {
      left: 270,
      top: 280,
    },
    locations: {
      367: "chest",
    },
  },
  Work: {
    type: "modal",
    contentID: "work",
    dialogID: "dialog_work",
    player: {
      left: 545,
      top: 670,
    },
    locations: {
      648: "chimney",
    },
    content: [
      {
        dates: {
          start: new Date("April 2024"),
          end: new Date("April 2025"),
        },
        description:
          "Coelrind develop and operate online e-learning, e-training and e-assessment platforms. I was lead on the reports section of their flagship product XAMS which required creating complex UIs from JSON objects using the MUI components library",
        role: ["Front-End", "Lead", "Developer"],
        employer: "Coelrind Ltd",
        skills: ["React", "Typescript", "MUI components", "Zustand"],
        screenshot: "images/work/coelrind/xams.png",
        contract: "full time",
      },
      {
        dates: {
          start: new Date("March 2023"),
          end: new Date("April 2024"),
        },
        description:
          "Develped dashboards for hospital staff to read and interrogate predictions made by machine learning statistical models using historical NHS data, I designed and implemented a UI and data visualisations including maps, charts and dynamic diagrams. I also co-developed a Flask based Python back-end that consolidates data so patient level, ward level and hospital level data is efficiently available",
        role: ["UI Design", "Full-Stack", "Developer"],
        employer:
          "Nuffield Department of Medicine / The Big Data Institute, University of Oxford",
        skills: [
          "UI Design",
          "Data Visualisation",
          "React",
          "Typescript",
          "Tanstack Query",
          "SVG",
          "CSS",
          "Python",
          "Flask",
          "Cypress",
        ],
        screenshot: "images/work/oxford/patient_safety.png",
        contract: "fixed term",
      },
      {
        dates: {
          start: new Date("October 2019"),
          end: new Date("February 2023"),
        },
        description:
          "pi-top is a Raspberry-Pi based educational project that puts toughened up Raspberry Pis with simple to wire-up connectors into classrooms together with electronics kit, robotics kit and a highly interactive web based learning platform named Further. I was part of the full-stack software engineering team at pi-top that built Further using ReactJS, Apollo GraphQL, Express, MongoDB, Prisma, Loopback, PostGres and also the Further-Link server that runs on the RaspberryPi using Python (Flask). I worked on all aspects of the codebase as well as collaborating on domain model design and technical direction decisions. All code was fully tested with a combination of component and e2e tests. Hosted on Google Cloud using Git, Docker and Jenkins to provide a CI pipeline. Working as a collaborative cross-functional Agile team (at most 5 developers and 1 UX designer) we self-managed using Scrum method organised through Jira, taking feature requests from users, fleshing out features and negotiating timelines with stakeholders such as teachers, resellers, consumers and senior management.",
        role: ["Full-Stack"],
        employer: "Pi-Top/CEED LTD",
        skills: [
          "React",
          "GraphQL",
          "Express",
          "MongoDB",
          "Prisma",
          "PostGres",
          "Typescript",
          "NodeJS",
          "CSS",
          "Python",
          "Flask",
          "SVG",
          "Bash",
          "Google Cloud Containers",
          "Docker",
          "Cypress",
          "React Testing Library",
          "Storybook",
          "Scrum",
          "Agile",
          "Jira",
        ],
        screenshot: "images/work/pi-top/further.png",
        link: "https://further.pi-top.com/",
        contract: "full time",
      },

      {
        dates: {
          start: new Date("July 2019"),
          end: new Date("September 2019"),
        },
        description:
          "Created a web based training game for VISA sales personel, The UI consisted of a virtual underground map with training material available at each stop. The team were struggling with complex state management and I was able to simplify this using an event bus implemented in the Redux middleware. The App was deployed as a SCORM object and delivered through Moodle.",
        role: ["Front-End", "Developer"],
        employer: "Learning Technologies Group UK Ltd.",
        skills: ["React", "Redux", "Sass", "Scorm"],
        screenshot: "images/work/leo/rails.webp",
      },

      {
        dates: {
          start: new Date("March 2017"),
          end: new Date("March 2019"),
        },
        description:
          "Coelrind's flagship e-assessment app was undergoing a rewrite from server side rendered .NET based project to a SPA build in React with a .NET JSON API. My role was to design and build the exam player part of the system",
        role: ["UI Design", "Front-End", "Developer"],
        employer: "XAMS",
        skills: ["React", "Redux", "Material Design"],
        screenshot: "images/work/coelrind/xams-player2.png",
      },

      {
        dates: {
          start: new Date("March 2017"),
          end: new Date("March 2016"),
        },
        description:
          "Campaign Against Living Miserably (CALM) are a charity organisation that campaigns for suicide prevention through good mental health with a particular focus on men, their website delivered both health and entertainment information as well as hosting a vital online chat application to connect those in urgent need of support - a requirement of this service was 24/7 uptime and optimal efficient performance due to high loads at peak times",
        role: [
          "Technical Director",
          "Developer",
          "Full-Stack",
          "Web design",
          "Back-End",
        ],
        employer: "Campaign Against Living Miserably.",
        skills: [
          "WordPress",
          "PHP",
          "MySQL",
          "CSS",
          "HTML",
          "JavaScript",
          "Google Maps",
        ],
        screenshot: "images/work/calm/calm.png",
      },

      {
        dates: {
          start: new Date("February 2016"),
          end: new Date("June 2015"),
        },
        description:
          "Edible Urban are an organisation set up to map out potential food growing areas in cities. I worked with them to develop an mobile app which could be used to crowd source data by allowing users to add potential food growing areas in their city to a map",
        role: ["Developer", "Full-Stack", "UI Design"],
        employer: "Edible Urban.",
        skills: [
          "PHP",
          "MySQL",
          "JavaScript",
          "LeafletJS",
          "Data Visualisation",
        ],
        screenshot: "images/work/edible_urban/edible_urban.png",
      },
    ],
  },
  Projects: {
    type: "modal",
    contentID: "projects",
    dialogID: "dialog_projects",
    player: {
      left: 1100,
      top: 670,
    },
    locations: {
      551: "tree",
    },
    content: [],
  },
  "Free-lance": {
    type: "modal",
    contentID: "freelance",
    dialogID: "dialog_freelance",
    player: {
      left: 280,
      top: 890,
    },
    locations: {
      1122: "flowers",
    },
    content: [],
  },
  About: {
    type: "modal",
    contentID: "about",
    dialogID: "dialog_about",
    player: {
      left: 1100,
      top: 288,
    },
    locations: {
      152: "crate",
    },
    content: [],
  },
  Contact: {
    type: "modal",
    contentID: "contact",
    dialogID: "dialog_contact",
    player: {
      left: 1100,
      top: 890,
    },
    locations: {
      1317: "skeli",
    },
    content: [],
  },
  "": {
    type: "bubble",
  },
};
