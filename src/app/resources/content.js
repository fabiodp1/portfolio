import { InlineCode } from "@/once-ui/components";

const person = {
    firstName: 'Fabio',
    lastName:  'Di Pane',
    get name() {
        return `${this.firstName} ${this.lastName}`;
    },
    role:      'Web Developer',
    avatar:    '/images/avatar.jpg',
    location:  'Europe/Rome',        // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
    languages: ['English', 'Italian', 'Spanish']  // optional: Leave the array empty if you don't want to display languages
}

const newsletter = {
    display: false,
    title: <>Subscribe to {person.firstName}'s Newsletter</>,
    description: <>I occasionally write about design, technology, and share thoughts on the intersection of creativity and engineering.</>
}

const social = [
    // Links are automatically displayed.
    // Import new icons in /once-ui/icons.ts
    {
        name: 'GitHub',
        icon: 'github',
        link: 'https://github.com/fabiodp1',
    },
    {
        name: 'LinkedIn',
        icon: 'linkedin',
        link: 'https://www.linkedin.com/in/fabio-di-pane-39971222/',
    },
    {
        name: 'X',
        icon: 'x',
        link: '',
    },
    {
        name: 'Email',
        icon: 'email',
        link: 'mailto:dipane.fabio@gmail.com',
    },
]

const home = {
    label: 'Home',
    title: `${person.name}'s Portfolio`,
    description: `Portfolio website showcasing my work as a ${person.role}`,
    headline: <>Web Developer</>,
    subline: <>Hi!<br/>I'm Fabio, a web developer at <InlineCode>7Circle | Var Group</InlineCode>, where I craft intuitive<br/> web applications. After hours, I study, play the drums and play videogames.</>
}

const workingYears = new Date().getFullYear() - new Date('2020').getFullYear();

const about = {
    label: 'About',
    title: 'About me',
    description: `Meet ${person.name}, ${person.role} from ${person.location}`,
    tableOfContent: {
        display: true,
        subItems: false
    },
    avatar: {
        display: true
    },
    calendar: {
        display: true,
        link: 'https://cal.com'
    },
    intro: {
        display: true,
        title: 'Introduction',
        description: <>After a professional past in the economic / tourism sector, I embarked on a self-taught course of study in CS until I became a developer, {workingYears} years now, initially focused on the front-end but gradually extending my knowledge also to the back-end and deploy, thanks to the projects undertaken during work experience and personal preference for the business logic of applications.
Constantly updated and curious to try and learn new technologies.</>
    },
    work: {
        display: true, // set to false to hide this section
        title: 'Work Experience',
        experiences: [
            {
                company: '7Circle | Var Group',
                timeframe: '2022 - Present',
                role: 'Senior Design Engineer',
                achievements: [
                    <>Redesigned the UI/UX for the FLY platform, resulting in a 20% increase in user engagement and 30% faster load times.</>,
                    <>Spearheaded the integration of AI tools into design workflows, enabling designers to iterate 50% faster.</>
                ],
                images: [ // optional: leave the array empty if you don't want to display images
                    {
                        src: '/images/projects/project-01/cover-01.jpg',
                        alt: 'Once UI Project',
                        width: 16,
                        height: 9
                    }
                ]
            }
        ]
    },
    studies: {
        display: true, // set to false to hide this section
        title: 'Studies',
        institutions: [
            {
                name: 'University of Jakarta',
                description: <>Studied software engineering.</>,
            }
        ]
    }
}

const technical = {
    label: 'Technical skills',
    display: true, // set to false to hide this section
    title: 'Technical skills',
    skills: [
        {
            title: 'Figma',
            description: <>Able to prototype in Figma with Once UI with unnatural speed.</>,
            // optional: leave the array empty if you don't want to display images
            images: [
                {
                    src: '/images/projects/project-01/cover-02.jpg',
                    alt: 'Project image',
                    width: 16,
                    height: 9
                },
                {
                    src: '/images/projects/project-01/cover-03.jpg',
                    alt: 'Project image',
                    width: 16,
                    height: 9
                },
            ]
        },
        {
            title: 'Next.js',
            description: <>Building next gen apps with Next.js + Once UI + Supabase.</>,
            // optional: leave the array empty if you don't want to display images
            images: [
                {
                    src: '/images/projects/project-01/cover-04.jpg',
                    alt: 'Project image',
                    width: 16,
                    height: 9
                },
            ]
        }
    ]
}

const blog = {
    label: 'Blog',
    title: 'Writing about design and tech...',
    description: `Read what ${person.name} has been up to recently`
    // Create new blog posts by adding a new .mdx file to app/blog/posts
    // All posts will be listed on the /blog route
}

const work = {
    label: 'Work',
    title: 'My projects',
    description: `Design and dev projects by ${person.name}`
    // Create new project pages by adding a new .mdx file to app/blog/posts
    // All projects will be listed on the /home and /work routes
}

/* const gallery = {
    label: 'Gallery',
    title: 'My photo gallery',
    description: `A photo collection by ${person.name}`,
    // Images from https://pexels.com
    images: [
        { 
            src: '/images/gallery/img-01.jpg', 
            alt: 'image',
            orientation: 'vertical'
        },
        { 
            src: '/images/gallery/img-02.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-03.jpg', 
            alt: 'image',
            orientation: 'vertical'
        },
        { 
            src: '/images/gallery/img-04.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-05.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-06.jpg', 
            alt: 'image',
            orientation: 'vertical'
        },
        { 
            src: '/images/gallery/img-07.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-08.jpg', 
            alt: 'image',
            orientation: 'vertical'
        },
        { 
            src: '/images/gallery/img-09.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-10.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-11.jpg', 
            alt: 'image',
            orientation: 'vertical'
        },
        { 
            src: '/images/gallery/img-12.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-13.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-14.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
    ]
} */

// export { person, social, newsletter, home, about, blog, work, gallery };
export { person, social, newsletter, home, about, blog, work, technical };