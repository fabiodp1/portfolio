import { InlineCode } from "@/once-ui/components";

const createI18nContent = (t) => {
  const person = {
    firstName: "Fabio",
    lastName: "Di Pane",
    get name() {
      return `${this.firstName} ${this.lastName}`;
    },
    role: t("person.role"),
    avatar: "/images/avatar.jpg",
    location: "Europe/Rome", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
    languages: ["English", "Italian", "Spanish"], // optional: Leave the array empty if you don't want to display languages
  };

  const newsletter = {
    display: false,
    title: <>{t("newsletter.title", { firstName: person.firstName })}</>,
    description: <>{t("newsletter.description")}</>,
  };

  const social = [
    // Links are automatically displayed.
    // Import new icons in /once-ui/icons.ts
    {
      name: "GitHub",
      icon: "github",
      link: "https://github.com/fabiodp1",
    },
    {
      name: "LinkedIn",
      icon: "linkedin",
      link: "https://www.linkedin.com/in/fabio-di-pane-39971222/",
    },
    {
      name: "X",
      icon: "x",
      link: "",
    },
    {
      name: "Email",
      icon: "email",
      link: "mailto:dipane.fabio@gmail.com",
    },
  ];

  const home = {
    label: t("home.label"),
    title: t("home.title", { name: person.name }),
    description: t("home.description", { role: person.role }),
    headline: <>{t("home.headline")}</>,
    subline: <>{t("home.subline")}</>,
  };

  const workingYears =
    new Date().getFullYear() - new Date("2020").getFullYear();

  const about = {
    label: t("about.label"),
    title: t("about.title"),
    description: t("about.description", {
      name: person.name,
      role: person.role,
      location: person.location,
    }),
    tableOfContent: {
      display: true,
      subItems: true,
    },
    avatar: {
      display: true,
    },
    calendar: {
      display: false,
      link: "https://cal.com",
    },
    intro: {
      display: true,
      title: t("about.intro.title"),
      description: <>{t("about.intro.description", { workingYears })}</>,
    },
    work: {
      display: true, // set to false to hide this section
      title: t("about.work.title"),
      experiences: [
        {
          company: "7Circle | Var Group",
          timeframe: t("about.work.experiences.7Circle.timeframe"),
          role: t("about.work.experiences.7Circle.role"),
          achievements: t("about.work.experiences.7Circle.achievements").split(
            ";"
          ),
          location: "Padua | Italy",
          images: [
            // optional: leave the array empty if you don't want to display images
            {
              src: "/images/7Circle.jpg",
              alt: "7Circle",
              width: 16,
              height: 9,
            },
          ],
        },
        {
          company: "IdeaSmart",
          timeframe: t("about.work.experiences.IdeaSmart.timeframe"),
          role: t("about.work.experiences.IdeaSmart.role"),
          achievements: t(
            "about.work.experiences.IdeaSmart.achievements"
          ).split(";"),
          location: "Padua, Italy",
          images: [],
        },
        {
          company: "Australia",
          timeframe: t("about.work.experiences.Australia.timeframe"),
          role: t("about.work.experiences.Australia.role"),
          achievements: t(
            "about.work.experiences.Australia.achievements"
          ).split(";"),
          location: "Australia | all around country",
          images: [
            {
              src: "/images/australia.jpg",
              alt: "Australia on the road",
              width: 16,
              height: 9,
            },
          ],
        },
        {
          company: "LaDarsena Travels",
          timeframe: t("about.work.experiences.LaDarsena.timeframe"),
          role: t("about.work.experiences.LaDarsena.role"),
          achievements: t(
            "about.work.experiences.LaDarsena.achievements"
          ).split(";"),
          location: "Milan | Italy",
          images: [],
        },
        {
          company: "Others",
          timeframe: t("about.work.experiences.Others.timeframe"),
          role: t("about.work.experiences.Others.role"),
          achievements: t("about.work.experiences.Others.achievements").split(
            ";"
          ),
          location: "Venice, Rome, Turin, Padua | Italy",
          images: [],
        },
      ],
    },
    studies: {
      display: true, // set to false to hide this section
      title: t(`about.studies.title`),
      institutions: [
        {
          name: "HarvardX",
          course: <>{t(`about.studies.institutions.HarvardX.course`)}</>,
          description: (
            <>{t(`about.studies.institutions.HarvardX.description`)}</>
          ),
          images: [
            {
              src: "/images/cs50.jpg",
              alt: "CS50 certificate",
              width: 16,
              height: 9,
            },
          ],
        },
        {
          name: "freeCodeCamp",
          description: (
            <>{t(`about.studies.institutions.freeCodeCamp.description`)}</>
          ),
          images: [
            {
              src: "/images/freeCodeCamp-1.png",
              alt: "freeCodeCamp certificate",
              width: 16,
              height: 9,
            },
            {
              src: "/images/freeCodeCamp-2.png",
              alt: "freeCodeCamp certificate",
              width: 16,
              height: 9,
            },

            {
              src: "/images/freeCodeCamp-3.png",
              alt: "freeCodeCamp certificate",
              width: 16,
              height: 9,
            },
          ],
        },
        {
          name: "Cà Foscari Univercity of Venice",
          course: <>{t(`about.studies.institutions.caFoscari.course`)}</>,
          description: (
            <>{t(`about.studies.institutions.caFoscari.description`)}</>
          ),
          images: [],
        },
      ],
    },
  };

  const technical = {
    display: true, // set to false to hide this section
    label: t("technical.label"),
    title: t("technical.title"),
    description: t("technical.description"),
    skills: [
      {
        title: "Vue.js",
        url: "https://vuejs.org/",
        image: {
          src: "/images/vue.png",
          alt: "Vue.js icon",
        },
      },
      {
        title: "TypeScript",
        url: "https://www.typescriptlang.org/",
        image: {
          src: "/images/typescript.png",
          alt: "TypeScript icon",
        },
      },
      {
        title: "Pinia",
        url: "https://pinia.vuejs.org/",
        image: {
          src: "/images/pinia.png",
          alt: "Pinia icon",
        },
      },
      {
        title: "React JS",
        url: "https://react.dev/",
        image: {
          src: "/images/react.png",
          alt: "React JS icon",
        },
      },
      {
        title: "Next.js",
        url: "https://nextjs.org/",
        image: {
          src: "/images/next.png",
          alt: "Next.js icon",
        },
      },
      {
        title: "MobX",
        url: "https://mobx.js.org/",
        image: {
          src: "/images/mobx.png",
          alt: "MobX icon",
        },
      },
      {
        title: "Vite",
        url: "https://vite.dev/",
        image: {
          src: "/images/vite.png",
          alt: "Vite icon",
        },
      },
      {
        title: "Vitest",
        url: "https://vitest.dev/",
        image: {
          src: "/images/vitest.png",
          alt: "Vitest icon",
        },
      },
      {
        title: "Cypress",
        url: "https://www.cypress.io/",
        image: {
          src: "/images/cypress.png",
          alt: "Cypress icon",
        },
      },
      {
        title: "C#",
        url: "https://learn.microsoft.com/en-us/dotnet/csharp/",
        image: {
          src: "/images/csharp.png",
          alt: "C# icon",
        },
      },
      {
        title: ".NET",
        url: "https://dotnet.microsoft.com/en-us/",
        image: {
          src: "/images/dotnet.png",
          alt: ".NET icon",
        },
      },
      {
        title: "PostgreSQL",
        url: "https://www.postgresql.org/",
        image: {
          src: "/images/postgres.png",
          alt: "PostgreSQL icon",
        },
      },
    ],
  };

  const blog = {
    label: t("blog.label"),
    title: t("blog.title"),
    description: t("blog.description", { name: person.name }),
    // Create new blog posts by adding a new .mdx file to app/blog/posts
    // All posts will be listed on the /blog route
  };

  const work = {
    label: t("work.label"),
    title: t("work.title"),
    description: t("work.description", { name: person.name }),
    // Create new project pages by adding a new .mdx file to app/blog/posts
    // All projects will be listed on the /home and /work routes
  };

  return {
    person,
    social,
    newsletter,
    home,
    about,
    blog,
    work,
    // gallery,
    technical,
  };
};

export { createI18nContent };
