const navLinks = [
  {
    id: 1,
    name: "Projects",
    type: "finder",
  },
  {
    id: 3,
    name: "Contact",
    type: "contact",
  },
  {
    id: 4,
    name: "Resume",
    type: "resume",
  },
];

const navIcons = [
  {
    id: 1,
    img: "/icons/wifi.svg",
  },
  {
    id: 2,
    img: "/icons/search.svg",
  },
  {
    id: 3,
    img: "/icons/user.svg",
  },
  {
    id: 4,
    img: "/icons/mode.svg",
  },
];

const dockApps = [
  {
    id: "finder",
    name: "Portfolio", // was "Finder"
    icon: "finder.png",
    canOpen: true,
  },
  {
    id: "safari",
    name: "Articles", // was "Safari"
    icon: "safari.png",
    canOpen: true,
  },
  {
    id: "photos",
    name: "Gallery", // was "Photos"
    icon: "photos.png",
    canOpen: true,
  },
  {
    id: "contact",
    name: "Contact", // or "Get in touch"
    icon: "contact.png",
    canOpen: true,
  },
  {
    id: "terminal",
    name: "Skills", // was "Terminal"
    icon: "terminal.png",
    canOpen: true,
  },
  {
    id: "trash",
    name: "Archive", // was "Trash"
    icon: "trash.png",
    canOpen: false,
  },
];

const blogPosts = [
  {
    id: 1,
    date: "Nov 30, 2025",
    title:
      "The Ultimate Guide to WordPress Maintenance and Speed Optimization in 2025",
    image: "/images/blog1.png",
    link: "https://docs.google.com/document/d/e/2PACX-1vRHq5Bh3H37R5JXST-DbJztTWirDmypsJ2pgj55_AHnjWe94_Zps_hL-mMHSzRZqlhAmu8GLpv-7la1/pub",
  },
  {
    id: 2,
    date: "Nov 30, 2025",
    title: "Mastering Elementor: How to Build Stunning Websites Without Bloating Your Code",
    image: "/images/blog2.png",
    link: "https://docs.google.com/document/d/e/2PACX-1vS8zCWtTNSWJxRa5MIs9ZZ6B0T6WWmt0aXeb84Ta5yIJLgEvUIWmCeAhGZtwAO7raubNke6QeMNHFvV/pub",
  },
  {
    id: 3,
    date: "Nov 30, 2025",
    title: "Shopify 101: Essential Apps and Design Tricks to Skyrocket Your Conversion Rate",
    image: "/images/blog3.png",
    link: "https://docs.google.com/document/d/e/2PACX-1vQZ8ek40YVJ0eYWjRZpGDHZNmepjDhPZA770wiDlHEvzE2qbxgwzCmLNSOGB1m5vonyKk2kxAU9VxNw/pub",
  },
];

const techStack = [
  {
    category: "Frontend",
    items: ["React.js", "Next.js", "TypeScript", "JavaScript (ES6+)"],
  },
  {
    category: "CMS & E-com",
    items: ["WordPress", "Elementor", "Shopify", "Liquid", "WooCommerce"],
  },
  {
    category: "Mobile",
    items: ["Flutter", "Dart", "Firebase"],
  },
  {
    category: "Styling",
    items: ["Tailwind CSS", "CSS3", "Sass/SCSS"],
  },
  {
    category: "Backend",
    items: ["Node.js", "PHP", "Express.js"],
  },
  {
    category: "Database",
    items: ["MySQL", "MongoDB"],
  },
  {
    category: "Dev Tools",
    items: ["Git", "GitHub", "Docker", "Postman", "VS Code"],
  },
];

const socials = [
  {
    id: 1,
    text: "Github",
    icon: "/icons/github.svg",
    bg: "#0c1117",
    link: "https://github.com/Hans-tech-coder",
  },
  {
    id: 2,
    text: "Facebook",
    icon: "/icons/facebook.svg",
    bg: "#0966FF",
    link: "https://www.facebook.com/obenahans",
  },
  {
    id: 3,
    text: "Instagram",
    icon: "/icons/instagram.svg",
    bg: "#FF3140",
    link: "https://www.instagram.com/obenahans/",
  },
  {
    id: 4,
    text: "LinkedIn",
    icon: "/icons/linkedin.svg",
    bg: "#05b6f6",
    link: "https://www.linkedin.com/in/hans-obena/",
  },
];

const photosLinks = [
  {
    id: 1,
    icon: "/icons/gicon1.svg",
    title: "Library",
  },
  {
    id: 2,
    icon: "/icons/gicon2.svg",
    title: "Memories",
  },
  {
    id: 3,
    icon: "/icons/file.svg",
    title: "Places",
  },
  {
    id: 4,
    icon: "/icons/gicon4.svg",
    title: "People",
  },
  {
    id: 5,
    icon: "/icons/gicon5.svg",
    title: "Favorites",
  },
];

const gallery = [
  {
    id: 1,
    img: "/images/gal1.png",
  },
  {
    id: 2,
    img: "/images/gal2.png",
  },
  {
    id: 3,
    img: "/images/gal3.png",
  },
  {
    id: 4,
    img: "/images/gal4.png",
  },
];

export {
  navLinks,
  navIcons,
  dockApps,
  blogPosts,
  techStack,
  socials,
  photosLinks,
  gallery,
};

const WORK_LOCATION = {
  id: 1,
  type: "work",
  name: "Work",
  icon: "/icons/work.svg",
  kind: "folder",
  children: [
    // ▶ Project 1
    {
      id: 5,
      name: "Marie France",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-10 left-5", // icon position inside Finder
      windowPosition: "top-[5vh] left-12", // optional: Finder window position
      children: [
        {
          id: 1,
          name: "Marie France Project.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 left-10",
          description: [
            "The Marie France website is a professional digital gateway to the Philippines' most trusted weight management clinic.",
            "More than just an informational site, it translates their holistic and scientific approach into an engaging and trustworthy user experience.",
            "Think of it as your initial consultation with a wellness expert—informative, welcoming, and accessible from any device.",
            "I developed this using WordPress and Elementor, ensuring a pixel-perfect design, seamless responsiveness, and easy content management."
          ],
        },
        {
          id: 2,
          name: "mariefrance.com.ph",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://mariefrance.com.ph/",
          position: "top-10 right-20",
        },
        {
          id: 4,
          name: "mariefrance.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-52 right-80",
          imageUrl: "/images/project-1.png",
        },
        // {
        //   id: 5,
        //   name: "Design.fig",
        //   icon: "/images/plain.png",
        //   kind: "file",
        //   fileType: "fig",
        //   href: "https://www.figma.com/proto/yvNYMDixu1BZdpLx9IyBPz/202507-MARIE-FRANCE-WEBSITE-DESIGN?node-id=15193-5120&t=kRYI2ZpE6EMkZ0hU-1&scaling=min-zoom&content-scaling=fixed&page-id=10701%3A21715&starting-point-node-id=15193%3A8418",
        //   position: "top-60 right-20",
        // },
      ],
    },

    // ▶ Project 2
    {
      id: 6,
      name: "PHINMA Properties",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-52 right-80",
      windowPosition: "top-[20vh] left-7",
      children: [
        {
          id: 1,
          name: "PHINMA Properties Project.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 right-10",
          description: [
            "The PHINMA Properties website is a dedicated digital space designed to connect first-time homebuyers with sustainable communities.",
            "It goes beyond simple listings, offering a user-centric experience that guides aspiring owners with clarity, trust, and ease.",
            "Think of it as an always-open virtual showroom—bringing the dream of owning a home closer to reality from any device.",
            "I crafted this using WordPress and Elementor, ensuring a responsive, high-performance interface that makes property browsing effortless."
          ],
        },
        {
          id: 2,
          name: "phinmaproperties.com",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://phinmaproperties.com/",
          position: "top-20 left-20",
        },
        {
          id: 4,
          name: "phinmap-roperties.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-52 left-80",
          imageUrl: "/images/project-2.png",
        },
        // {
        //   id: 5,
        //   name: "Design.fig",
        //   icon: "/images/plain.png",
        //   kind: "file",
        //   fileType: "fig",
        //   href: "https://google.com",
        //   position: "top-60 left-5",
        // },
      ],
    },

    // ▶ Project 3
    {
      id: 7,
      name: "Builders Home",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-10 left-90",
      windowPosition: "top-[35vh] left-11",
      children: [
        {
          id: 1,
          name: "Builders Home Project.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 left-10",
          description: [
            "The Builders Home website is a comprehensive e-commerce hub designed to be your one-stop shop for architectural and construction supplies.",
            "It transforms the typically heavy task of sourcing materials into a streamlined experience, helping users refresh their spaces in minutes.",
            "Think of it as a fully stocked digital warehouse—giving you access to trusted building essentials without the hassle of long hardware trips.",
            "I developed this using Shopify, creating a secure, inventory-rich platform with a smooth checkout flow optimized for high sales conversions."
          ],
        },
        {
          id: 2,
          name: "buildershome.com",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://buildershome.com/",
          position: "top-10 right-20",
        },
        {
          id: 4,
          name: "builders-home.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-52 right-80",
          imageUrl: "/images/project-3.png",
        },
        // {
        //   id: 5,
        //   name: "Design.fig",
        //   icon: "/images/plain.png",
        //   kind: "file",
        //   fileType: "fig",
        //   href: "https://google.com",
        //   position: "top-60 right-20",
        // },
      ],
    },

    // ▶ Project 4
    {
      id: 8,
      name: "BestKept Organizer",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-52 left-80",
      windowPosition: "top-[50vh] left-7",
      children: [
        {
          id: 1,
          name: "BestKept Organizer Project.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 left-20",
          description: [
            "The BestKept Organizer website is a curated e-commerce destination dedicated to mindful living and aesthetic home organization.",
            "Moving beyond simple storage, it offers an inspiring shopping journey centered on creating spaces that adapt to your unique lifestyle—not the other way around.",
            "Think of it as a digital sanctuary for structure—helping you transform clutter into calm with products that maximize both efficiency and beauty.",
            "I built this using Shopify, engineering a visually clean, seamless shopping experience that perfectly reflects the brand's philosophy of elegance and order."
          ],
        },
        {
          id: 2,
          name: "bestkeptorganizer.com",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://bestkeptorganizer.com/",
          position: "top-20 right-20",
        },
        {
          id: 4,
          name: "bestkept-organizer.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-52 right-60",
          imageUrl: "/images/project-4.png",
        },
        // {
        //   id: 5,
        //   name: "Design.fig",
        //   icon: "/images/plain.png",
        //   kind: "file",
        //   fileType: "fig",
        //   href: "https://google.com",
        //   position: "top-60 right-20",
        // },
      ],
    },
  ],
};

const ABOUT_LOCATION = {
  id: 2,
  type: "about",
  name: "About me",
  icon: "/icons/info.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "me.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-10 left-5",
      imageUrl: "/images/adrian.jpg",
    },
    {
      id: 2,
      name: "casual-me.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-28 right-72",
      imageUrl: "/images/adrian-2.jpg",
    },
    {
      id: 3,
      name: "conference-me.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-52 left-80",
      imageUrl: "/images/adrian-3.jpeg",
    },
    {
      id: 4,
      name: "about-me.txt",
      icon: "/images/txt.png",
      kind: "file",
      fileType: "txt",
      position: "top-60 left-5",
      subtitle: "Meet the Developer Behind the Code",
      image: "/images/adrian.jpg",
      description: [
        "Hey! I’m Adrian 👋, a web developer who enjoys building sleek, interactive websites that actually work well.",
        "I specialize in JavaScript, React, and Next.js—and I love making things feel smooth, fast, and just a little bit delightful.",
        "I’m big on clean UI, good UX, and writing code that doesn’t need a search party to debug.",
        "Outside of dev work, you'll find me tweaking layouts at 2AM, sipping overpriced coffee, or impulse-buying gadgets I absolutely convinced myself I needed 😅",
      ],
    },
  ],
};

const RESUME_LOCATION = {
  id: 3,
  type: "resume",
  name: "Resume",
  icon: "/icons/file.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "Resume.pdf",
      icon: "/images/pdf.png",
      kind: "file",
      fileType: "pdf",
      // you can add `href` if you want to open a hosted resume
      // href: "/your/resume/path.pdf",
    },
  ],
};

const TRASH_LOCATION = {
  id: 4,
  type: "trash",
  name: "Trash",
  icon: "/icons/trash.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "trash1.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-10 left-10",
      imageUrl: "/images/trash-1.png",
    },
    {
      id: 2,
      name: "trash2.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-40 left-80",
      imageUrl: "/images/trash-2.png",
    },
  ],
};

export const locations = {
  work: WORK_LOCATION,
  about: ABOUT_LOCATION,
  resume: RESUME_LOCATION,
  trash: TRASH_LOCATION,
};

const INITIAL_Z_INDEX = 1000;

const WINDOW_CONFIG = {
  finder: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  contact: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  resume: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  safari: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  photos: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  terminal: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  txtfile: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  imgfile: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
};

export { INITIAL_Z_INDEX, WINDOW_CONFIG };