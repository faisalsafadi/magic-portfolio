import { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";
import { Line, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Meriem",
  lastName: "Boualam",
  name: `Meriem Boualam`,
  role: "Creative Director & Visual Artist",
  avatar: "/images/avatar.jpg",
  email: "contact@meriem-boualam.com",
  location: "Africa/Casablanca", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English", "French", "Arabic"], // optional: Leave the array empty if you don't want to display languages
  locale: "en", // BCP 47 language tag for the HTML lang attribute, e.g., 'en', 'ja', 'zh-TW'
};

const newsletter: Newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}'s Creative Insights</>,
  description: <>Weekly updates on photography, video production and creative projects</>,
};

const social: Social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  // Set essentials: true for links you want to show on the about page
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/meriem-boualam",
    essential: false,
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/meriem-boualam-creative-director/",
    essential: true,
  },
  {
    name: "Instagram",
    icon: "instagram",
    link: "https://www.instagram.com/meriemboualam_creative/",
    essential: false,
  },
  {
    name: "Threads",
    icon: "threads",
    link: "https://www.threads.net/@meriemboualam_creative",
    essential: true,
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
    essential: true,
  },
];

const home: Home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `Meriem Boualam - Creative Director & Visual Artist`,
  description: `Portfolio showcasing photography, video production, advertising campaigns and visual content creation by Meriem Boualam`,
  headline: <>Creative storytelling through visual arts</>,
  featured: {
    display: true,
    title: (
      <Row gap="12" vertical="center">
        <strong className="ml-4">Featured Work</strong>{" "}
        <Line background="brand-alpha-strong" vert height="20" />
        <Text marginRight="4" onBackground="brand-medium">
          Recent Projects
        </Text>
      </Row>
    ),
    href: "/work/creative-portfolio-showcasing-photography-video-advertising",
  },
  subline: (
    <>
      I'm Meriem Boualam, a creative director and visual artist based in Marrakesh. 
      Specializing in photography, video production, advertising campaigns and visual content creation.
    </>
  ),
};

const about: About = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        {person.firstName} is a Marrakesh-based creative director and visual artist with expertise in 
        photography, video production, advertising campaigns and visual content creation. With over 10 years of experience in the industry, she specializes in telling compelling stories through visual media.
      </>
    ),
  },
  work: {
    display: true,
    title: "Work Experience",
    experiences: [
      {
        company: "Visual Storytelling Studio",
        timeframe: "2020 - Present",
        role: "Creative Director & Photographer",
        achievements: [
          <>
            Led photography and video production for international advertising campaigns, resulting in a 40% increase in brand engagement.
          </>,
          <>
            Managed end-to-end creative process for luxury fashion brands and lifestyle publications.
          </>,
        ],
        images: [],
      },
      {
        company: "Marrakesh Media House",
        timeframe: "2015 - 2020",
        role: "Senior Video Producer & Editor",
        achievements: [
          <>
            Produced award-winning documentary series for cultural festivals and heritage events.
          </>,
          <>
            Directed and edited commercials for regional brands, achieving a 30% boost in campaign effectiveness.
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true,
    title: "Education",
    institutions: [
      {
        name: "Institute of Visual Arts - Marrakesh",
        description: <>Specialized in Photography and Visual Storytelling</>,
      },
      {
        name: "International Film School - Casablanca",
        description: <>Advanced Certificate in Video Production & Direction</>,
      },
    ],
  },
  technical: {
    display: true,
    title: "Expertise Areas",
    skills: [
      {
        title: "Photography",
        description: <>Documentary, Fashion, Portrait and Event Photography with a focus on storytelling.</>,
        tags: [
          {
            name: "Photography",
            icon: "gallery",
          },
          {
            name: "Lighting",
            icon: "eye",
          },
          {
            name: "Composition",
            icon: "grid",
          },
        ],
        images: [],
      },
      {
        title: "Video Production",
        description: <>Full production cycle including direction, editing and post-production for commercials, documentaries and events.</>,
        tags: [
          {
            name: "Editing",
            icon: "book",
          },
          {
            name: "Direction",
            icon: "eye",
          },
          {
            name: "Post-Production",
            icon: "grid",
          },
        ],
        images: [],
      },
      {
        title: "Advertising Campaigns",
        description: <>Concept development, creative direction and visual content creation for brand campaigns.</>,
        tags: [
          {
            name: "Branding",
            icon: "person",
          },
          {
            name: "Creative Direction",
            icon: "globe",
          },
          {
            name: "Campaign Strategy",
            icon: "arrowUpRight",
          },
        ],
        images: [],
      },
    ],
  },
};

const blog: Blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work: Work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Photography, video production and advertising campaigns by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A collection of photography, video stills and creative visuals by ${person.name}`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
  images: [
    {
      src: "/images/gallery/horizontal-1.jpg",
      alt: "Photography portfolio",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-4.jpg",
      alt: "Video production work",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-3.jpg",
      alt: "Advertising campaign visuals",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-1.jpg",
      alt: "Creative storytelling",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-2.jpg",
      alt: "Portrait photography",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-2.jpg",
      alt: "Event coverage",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-4.jpg",
      alt: "Fashion photography",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-3.jpg",
      alt: "Documentary visuals",
      orientation: "vertical",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
