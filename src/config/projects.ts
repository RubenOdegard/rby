export const projects = [
  {
    title: "The Odin Project",
    desc: "Collection of projects during The Odin Project.",
    year: "2023",
    content: "",
    hidden: true,
    featured: false,
    image: "none",
    imagealt: "hero image",
    link: "https://github.com/RubenOdegard/the-odin-project",
    live: "none",
    tags: ["Node.js", "Javascript", "ReactJS"],
    showcase: {
      introduction: [
        "Collection of projects during The Odin Project.",
      ],
      desc: [
        "",
      ],
      mainSection: {
        title: "",
        text: [],
      },
      longSection: {},
      tags: [
        "HTML",
        "CSS",
        "JavaScript",
        "Git",
        "GitHub",
        "Node.js",
        "Express.js",
        "SQL",
        "PostgreSQL",
        "MongoDB",
        "Mongoose",
        "React.js",
        "Testing (Jasmine, Jest)",
      ],
      contentSection: [
        {
          title: "Track Details",
          text: [
            "Track details in a scrollable modal, closes on outside click or the close button. Image, track name and individual artists are clickable and links to their respective Spotify pages. Energy level and dancability is calculated from the API reponse range of 0.0 - 1.",
          ],
          image: "https://gcdnb.pbrd.co/images/fgxvWaqrxvsf.png?o=1",
          imagealt: "Track Details",
        },
        {
          title: "Album Details",
          text: [
            "Track details in a scrollable modal, closes on outside click or the close button. Image, album name and invididual artist are clickable as well.",
          ],
          image: "https://gcdnb.pbrd.co/images/iCI8UzdAhI6j.png?o=1",
          imagealt: "Album Details Details",
        },
      ],
    },
  },
  {
    title: "Spotify Web API",
    desc:
      "Example of working with the Spotify Web API with Client Credentials.",
    year: "2023",
    content: "",
    hidden: false,
    featured: true,
    image: "https://gcdnb.pbrd.co/images/P5tYKDhk0Q1i.png?o=1",
    imagealt: "hero image",
    link: "https://github.com/RubenOdegard/spotify-client-credentials",
    live: "https://spotify-client-credentials.vercel.app/",
    tags: ["Spotify API", "Typescript", "Axios"],
    showcase: {
      introduction: [
        "A showcase project for the Spotify Web API using Cliend Credentials",
      ],
      desc: [
        "Spotify Web API has multiple methods of authenticating API requests, one of them being Client Credentials. ",
        "When using Client Credentials, you have access to the Spotify API data except user related data.",
      ],
      mainSection: {
        title: "About",
        text: [
          "There is four sections of this website; artist, top tracks, albums and related artists. You are able to navigate through related artist to change the current artist. Each track and album can be clicked to display more in depth information about the selected item, and there is a popularity bar on each related artist (region locked to Norway). In this example app there is 4 formatter functions which prettify some of the data coming back from Spotify, these can be found in the readme.md and the project on Github.",
          " ",
        ],
      },
      longSection: {},
      tags: [
        "NextJS",
        "Typescript",
        "TailwindCSS",
        "Spotify Web API",
        "Axios",
      ],
      contentSection: [
        {
          title: "Track Details",
          text: [
            "Track details in a scrollable modal, closes on outside click or the close button. Image, track name and individual artists are clickable and links to their respective Spotify pages. Energy level and dancability is calculated from the API reponse range of 0.0 - 1.",
          ],
          image: "https://gcdnb.pbrd.co/images/fgxvWaqrxvsf.png?o=1",
          imagealt: "Track Details",
        },
        {
          title: "Album Details",
          text: [
            "Track details in a scrollable modal, closes on outside click or the close button. Image, album name and invididual artist are clickable as well.",
          ],
          image: "https://gcdnb.pbrd.co/images/iCI8UzdAhI6j.png?o=1",
          imagealt: "Album Details Details",
        },
      ],
    },
  },
  {
    title: "Developer Portfolio",
    desc: "A portfolio created as a final project for Harvard's CS50x course.",
    year: "2023",
    content: "",
    hidden: false,
    featured: true,
    image: "/images/p1/hero.jpg",
    imagealt: "hero image",
    link: "https://github.com/RubenOdegard/cs50-final-project",
    live: "none",
    tags: ["NextJS", "Typescript", "TailwindCSS"],
    showcase: {
      introduction: [
        "Personal developer portfolio as a final project in Harvard CS50x online course. Built using Next.js, Typescript and TailwindCSS.",
      ],
      desc: [
        "For the final project the requirements were simple, create a bigger project using technologies of own choosing.",
        "I immediately thought about creating a developer portfolio, as it is a platform I'm going to be using going forward while trying to step in to a new career field.",
      ],
      mainSection: {
        title: "CS50x - Online Course",
        text: [
          "Selecting the technologies for this project ment going with something that was already familiar to me, even before starting CS50x.",
          "I have previous experience with React and Next, and went with Tailwind for styling because of the speed of development. On the Github page for this project I go into more detail on my thought process both pre and post build.",
        ],
      },
      longSection: {
        title: "SEO and Accessibility",
        text: [
          "Ensured correct page structure, semantic HTML, dynamic metadata, clean and descriptive URLs, responsive design, image optimization, Open Graph Image, XML Sitemap, and implemented a Robots.txt file for effective site crawling. Website can be navigated with keyboard and buttons have correct aria-labels.",
        ],
      },
      tags: [
        "NextJS",
        "Typescript",
        "TailwindCSS",
        "ReactJS",
        "Radix UI",
        "Geist",
      ],
      contentSection: [
        {
          title: "Projects",
          text: [
            "A page for a collection of projects worth showcasing. Github and live preview links and tags. Expandable for more detailed information.",
          ],
          image: "/images/p1/project-page.jpg",
          imagealt: "project page",
        },
        {
          title: "Activities",
          text: [
            "A page for showing current, planned and already completed activities. Conditionally rendering status and fomatting text to more readable dates.",
          ],

          image: "/images/p1/activity-page.jpg",
          imagealt: "activity page",
        },
        {
          title: "Certifications",
          text: [
            "A page for showing current, planned and already completed certifications. Conditionally rendering status and fomatting text to more readable dates.",
          ],

          image: "/images/p1/certification-page.jpg",
          imagealt: "certifiation page",
        },
      ],
    },
  },

  {
    title: "CS50",
    desc:
      "Collection of 9 labs and 10 problem sets and one final project during Harvard's CS50 - Introduction to Computer Science.",
    year: "2023",
    content: "",
    hidden: false,
    featured: false,
    image:
      "https://certificates.cs50.io/29dbe20a-aaab-4cc0-8d03-9c9bb90acce2.png?size=letter",
    imagealt: "hero image",
    link:
      "https://github.com/RubenOdegard/cs50-computer-science-2023?tab=readme-ov-file",
    live: "none",
    tags: ["C", "Python", "SQL", "Algorithms"],
    showcase: {
      introduction: [
        "During Harvard's CS50x - Introduction to Computer Science, I completed 9 labs and 10 problem sets and one final project, over the course of 10 weeks.",
      ],
      desc: [
        "The course starts off by explaining and working with concepts in C, providing a foundational understanding of the 'magic' behind the scenes in higher-level languages. ",
        "As the weeks progressed, the course gradually introduced Python, SQL, HTML, CSS, and Javascript, branching into data structures and algorithms.",
      ],
      mainSection: {
        title: "Thoughts",
        text: [
          "The course has a very steep learning curve. Having prior experience in programming before attempting this course made the progression between concepts and languages initially a lot easier for me. ",
          "For those without any prior programming experience, a realistic timeframe to complete this course is between 8 to 12 months, as opposed to a standard school semester of 4 to 6 months. ",
          "That said, the course is fantastic, and Professor David Malan does an incredible job teaching the course material in an exciting way. ",
        ],
      },
      longSection: {
        title: "What I've learned",
        text: [
          "I dove into the foundations of computer science. From grasping the intricacies of C and understanding some of the 'magic' in higher-level languages, to gradually coding in Python, SQL, HTML, CSS, and Javascript – some languages brought a new dimension to my toolkit, while others were a nice repitition on already known fundamentals. I sharpened my skills in data structures and algorithms, navigating through arrays, linked lists, and trees. Problem sets challenged me to think critically, solving puzzles that ranged from basic algorithms to complex web development. To sum it up, CS50x is a crash course in programming languages, algorithms, and problem-solving, and it delivered to my expectations. If you are interested in the code, check out the Github repo.",
        ],
      },
      tags: [
        "Computer Science",
        "Data Structures",
        "Algorithms",
        "C",
        "Python",
        "SQL",
        "HTML",
        "CSS",
        "Javascript",
      ],
      contentSection: [],
    },
  },
];
