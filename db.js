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
        title: "Coelrind Ltd",
        skills: ["React", "Typescript", "MUI components", "Zustand"],
        screenshot: {
          small: "images/work/coelrind/xams_small.png",
          medium: "images/work/coelrind/xams_medium.png",
          large: "images/work/coelrind/xams.png",
        },
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
        title:
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
        screenshot: {
          small: "images/work/oxford/patient_safety_small.png",
          medium: "images/work/oxford/patient_safety_medium.png",
          large: "images/work/oxford/patient_safety.png",
        },
        contract: "fixed term",
      },
      {
        dates: {
          start: new Date("October 2019"),
          end: new Date("February 2023"),
        },
        description:
          "pi-top is a Raspberry-Pi based educational project that puts toughened up Raspberry Pis with simple to wire-up connectors into classrooms together with electronics kit, robotics kit and a highly interactive web based learning platform named Further. I was part of the full-stack software engineering team at pi-top that built Further using ReactJS, Apollo GraphQL, Express, MongoDB, Prisma, Loopback, PostGres and also the Further-Link server that runs on the RaspberryPi using Python (Flask). I worked on all aspects of the codebase as well as collaborating on domain model design and technical direction decisions. All code was fully tested with a combination of component and e2e tests. Hosted on Google Cloud using Git, Docker and Jenkins to provide a CI pipeline. Working as a collaborative cross-functional Agile team (at most 5 developers and 1 UX designer) we self-managed using Scrum method organised through Jira, taking feature requests from users, fleshing out features and negotiating timelines with stakeholders such as teachers, resellers, consumers and senior management.",
        role: ["Full-Stack", "Developer"],
        title: "Pi-Top/CEED LTD",
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

        screenshot: {
          small: "images/work/pi-top/further_small.png",
          medium: "images/work/pi-top/further_medium.png",
          large: "images/work/pi-top/further.png",
        },

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
        title: "Learning Technologies Group UK Ltd.",
        skills: ["React", "Redux", "Sass", "Scorm"],
        screenshot: {
          small: "images/work/leo/rails_small.webp",
          medium: "images/work/leo/rails_medium.webp",
          large: "images/work/leo/rails.webp",
        },
      },

      {
        dates: {
          start: new Date("March 2017"),
          end: new Date("March 2019"),
        },
        description:
          "Coelrind's flagship e-assessment app was undergoing a rewrite from server side rendered .NET based project to a SPA build in React with a .NET JSON API. My role was to design and build the exam player part of the system",
        role: ["UI Design", "Front-End", "Developer"],
        title: "XAMS",
        skills: ["React", "Redux", "Material Design"],
        screenshot: {
          small: "images/work/coelrind/xams-player2_small.png",
          medium: "images/work/coelrind/xams-player2_medium.png",
          large: "images/work/coelrind/xams-player2.png",
        },
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
        title: "Campaign Against Living Miserably.",
        skills: [
          "WordPress",
          "PHP",
          "MySQL",
          "CSS",
          "HTML",
          "JavaScript",
          "Google Maps",
        ],
        screenshot: {
          small: "images/work/calm/calm_small.png",
          medium: "images/work/calm/calm_medium.png",
          large: "images/work/calm/calm.png",
        },
      },

      {
        dates: {
          start: new Date("February 2016"),
          end: new Date("June 2015"),
        },
        description:
          "Edible Urban are an organisation set up to map out potential food growing areas in cities. I worked with them to develop an mobile app which could be used to crowd source data by allowing users to add potential food growing areas in their city to a map",
        role: ["Developer", "Full-Stack", "UI Design"],
        title: "Edible Urban.",
        skills: [
          "PHP",
          "MySQL",
          "JavaScript",
          "LeafletJS",
          "Data Visualisation",
        ],
        screenshot: "images/work/edible_urban/edible_urban.png",

        screenshot: {
          small: "images/work/edible_urban/edible_urban_small.png",
          medium: "images/work/edible_urban/edible_urban_medium.png",
          large: "images/work/edible_urban/edible_urban.png",
        },
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
    content: [
      {
        title: "Penguin Warrior",
        description:
          "Penguin Warrior is a game developed in the book 'Programming Linux Games'. The book is a primer on the C library SDL and as I was designing a 2D browser based graphics library I was keen to learn it and apply that to my project, the result is browser based penguin warrior ported from C into TypeScript. Unfortunetely it wasn't made for the mobile age so until I have time to include touch controls this one is only playble on the desktop. You can load it on mobile and see the high frame rate and particle effects, you can be shot at by the enemy ship, you just can't move and shoot back :-). No sound either, I'm working on it!",
        skills: [
          "Typescript",
          "HTML5 Canvas",
          "2D game coding",
          "C programming",
        ],
        screenshot: "images/project/penguin/penguin.png",
        link: "https://catplusplus.org.uk/warrior/",
      },
      {
        title: "Pixel Art Collection Kit",
        description:
          "Originally started as a game making kit for use in summer school projects with young people this collection of scripts renders scenes built with 'Tiled' an open source pixel art tile map editor, scenes can be created from any tilemap, with any size, multiple layers, then output with 'save as JavaScript' using these scripts you can directly import the JavaScript map file along with the tiles and the browser will construct the image, the advantage is it can be very large but the image file will only be the size of the tiles file. I used it to make this portfolio!",
        skills: ["JavaScript", "CSS", "HTML"],
        screenshot: "images/project/pixelart/pixelart.png",
        link: "https://github.com/zz-james/pixel-portfolio",
      },
      {
        title: "Morecambe Agora",
        description:
          "Morecambe Agora was a collaboration between myself, artist Jessie Holmes and Creative West End, Morecambe. The project was part of an art trail through the many alleyways of Morecambe's west end. At 8 points on the trail you encountered QR codes printed on ceramic tiles and mounted on the wall. Using your mobile, you were linked to a web page which had an embedded augmented reality (AR) sculpture and an audio file. Based on Greek mythology the alleyways become the Labyrinth and you encounter a minataur, a spider, Daedalus and Theseus who narrate your journey.",
        skills: ["HTML", "A-Frame", "WebVR", "PHP", "WebGL"],
        screenshot: "images/project/agora/agora.png",
        link: "https://catplusplus.org.uk/warrior/",
      },
      {
        title: "The Elastic Project",
        description:
          "The Elastic Project was a collaboration with artist Richard Write. In the backrooms of The British Library are rare collections members of the public don't usually get to see. Richard took many hi-res photos of the book spines of one such collection and I processed them using Imagemagick into map tiles that can be used as a custom map in the LeafletJS map library. Users can then scroll over and zoom into the book spines as if looking at virtual book shelves. Clicking a book spine will give you more information and the chance to reserve a book to view at your next visit to the library. As each book is reserved it gets 'removed' from the 'shelf' revealing an image of the staff who care for the books, who are not usually seen!. Technically the most complex thing was not overwhelming browsers with the many images that were overlaid onto the map when books were 'removed'. To keep it performant, overnight the map tiles were re-rendered with the 'removed' books replaced with their overlay so only books removed in the last 24 hours had to be rendered seperately to the tiles. This was done on a second webserver and coordinated using scripted sftp.",
        skills: [
          "JavaScript",
          "LeafletJS",
          "ImageMagic",
          "PHP",
          "Python",
          "Bash",
        ],
        screenshot: "images/project/elastic/elastic1.png",
        link: "http://www.elasticsystem.net/WWWMuse/About.html",
      },
      {
        title: "Smorgasborg",
        description:
          "My MSc. Computer Science was 25% practical. For this I began work on a project that would make it easier for developers of interactive learning material to create web based simulations and games that could be served from LMS software such as Blackboard or Moodle. This involved creating a flexible game engine which I based on the one found in Rudy Rucker's book 'Software Engineering and Computer Games'. I created DOM Sprites and used the transform property to move them over the playing area, I also included the abilit to move the player viewpoint (camera) this involved CSS matrix and some optimised maths. I also included a 'pin' option which you could pin sprite's location to any value that could be observed, and was easily able to use a JS port of Box2D physics engine, enabling learning matierial developers to harness that power with minimal setup.",
        skills: ["JavaScript", "CSS", "HTML"],
        screenshot: "images/project/smorgasbord/smorgasbord.png",
        link: "https://catplusplus.org.uk/catpsite/smorgasbord/",
      },
      {
        title: "Happening Histories",
        description:
          "Happeninig Histories was an Arts Council of England funded project to create a time capsule of a small residential estate in South East London. Everyone was invited to participate through the tenants and residents association, people who chose to participate came for training in digital photography, photoshop, sound recording, editing, video making in order to create a multimedia story of some element of their lives. Everyone has a story, one resident had been a dancer in Paris in the 1940s and got to Paris from London on her bike! Another showed of an amazing collection of Nigerian printed fabrics, a taxi driver had an amazing collection of old photos he'd taken from his cab, children told stories of what happened in the playground, many residents played musical instruments. The final project was a virtual estate which you could walk around and call in at people's houses, it exists as a CD-Rom in the British Library. ",
        skills: ["Adobe Director", "Lingo"],
        screenshot: "images/project/happening/hh.png",
        link: "https://catplusplus.org.uk/catpsite/hh/",
      },
    ],
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
    content: [
      `
      <p>I'm available for freelance work either as a sole trader or through my company James Cat Ltd. </p>
      <p>
      My day rate is a sliding scale from &pound;250/day to well, to infinity but the average day rate I'm seeing for a web software engineer with my experience is around &pound;400/day.</p> 
      
      <p>If you've got an interesting project, either it uses something game-y, or some interesting data vis, or it helps people out but you can't afford &pound;400 a day, drop me an email or fill out the email form on the <a href='#Contact'>contact page</a><p>
      
      <h5>List of past clients:</h5>
      <p>I've worked for some big name clients (usually through an agency) so I know the importance of protecting brand integrity through high level of quality in my work.</p>

      <ul>
        <li>Sainsbury's</li>
        <li>Ben & Jerry's Ice Cream</li>
        <li>Channel 4</li>
        <li>Volvo</li>
        <li>BMW Mini</li>
        <li>Virgin Games</li>
        <li>Rough Trade Record Shop</li>
        <li>SleezeNation Magazine</li>
        <li>Britax</li>
        <li>Union Bank of Switzerland</li>
      </ul>

      <p>I also consult with community orgs and charities to help them with digital strategy and occasionally fix their broken websites, get in touch if this is you</p>

      <a href="#Contact">Contact page</a>

      `,
    ],
  },
  About: {
    type: "modal",
    contentID: "about",
    dialogID: "dialog_about",
    player: {
      left: 1200,
      top: 288,
    },
    locations: {
      152: "crate",
    },
    content: [
      `
        <p>Hello. My name is James Smith, this is what I look like:<p>
        <img src="images/about/james2.png" width="50%"/>
        <p>Dont be fooled, this palm tree is actually in Manchester.</p>
        <p>I need to work on this part of the site!!<br />
        Things I like<br /><br />
        <ul>
        <li>Retro computer graphics</li>
        <li><i>any</i> Computer graphics</li>
        <li>Retro computer games</li>
        <li>Skateboarding</li>
        <li>Dance Music</li>
        <li>Punk Music</li>
        <li>Sound Collages</li>
        <li>Graphic Arts</li>
        <li>Bright colours</li>
        <li>White chocolate (lol I know!)</li>
        <li><i>any</i> chocolate</li>
        <li>Stories (reading and writing)</li>
        <li>Probably tons of stuff I forgot right now</li>
        </ul>
        <p>
        <a href="#Contact">Contact me</a> if you want any web work done, I'm pretty good!</p>
      `,
    ],
  },
  Contact: {
    type: "modal",
    contentID: "contact",
    dialogID: "dialog_contact",
    player: {
      left: 1230,
      top: 890,
    },
    locations: {
      1317: "skeli",
    },
    content: [
      `
        <p>Here's a list of useful links if you want to find out more about me beyond this website<p>

        <div style="display: flex; gap: 10px;">
        <div><img src="images/contact/github.png" height="20px"/></div><div><a target="pop" href="https://github.com/zz-james/">My Github</a></div>
        </div>

          <br />

        <div style="display: flex; gap: 10px">
        <div><img src="images/contact/wordpress.png" height="20px"/></div><div><a target="pop" href="https://zzjames.wordpress.com/">My Wordpress Blog </a> It's full of notes not actual posts but I will tidy it up!</div>
        </div>

        <br />

        <div style="display: flex; gap: 10px">
        <div><img src="images/contact/linkedin.png" height="20px"/></div><div><a target="pop" href="https://www.linkedin.com/in/james-smith-4aa3465/">My LinkedIn Profile </a></div>
        </div>
        <br />
        Or you can send me a message direct!
        <br /><br />
        <form  id="contact_form">
        <table>

        <div style="display: flex; gap: 10px; margin-bottom: 5px; flex-wrap: wrap">
          <div style="flex-basis: 150px">Your Name:</div><div><input type="text" name="name"></div>
        </div>
        <div style="display: flex; gap: 10px;margin-bottom: 5px; flex-wrap: wrap">
          <div style="flex-basis: 150px">Email Address:</div><div><input type="text" name="email"></div>
        </div>
        <div style="display: flex; gap: 10px;margin-bottom: 5px; flex-wrap: wrap">
          <div style="flex-basis: 150px">Message:</div><div><textarea name="message" rows="10"></textarea></div>
        </div>
        <div style="display: flex; gap: 10px;margin-bottom: 5px; flex-wrap: wrap">
            <div style="flex-basis: 150px"></div>
            <div><input type="submit" value="Submit"></div>
            </div>
            <p id="form-status"></p>
        </form>	
 
      `,
    ],
  },
  "": {
    type: "bubble",
  },
};
