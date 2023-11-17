import { amazon, enparadigm, issc, oit } from '../assets/images'
import {
    contact,
    css,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    nextjs,
    nodejs,
    react,
    sass,
    summiz,
    dalle,
    ziplink,
    tailwindcss,
    typescript,
    android,
    flask,
    flutter,
    java,
    python,
    tf,
} from '../assets/icons'

export const skills = [
    {
        imageUrl: html,
        name: 'HTML',
    },
    {
        imageUrl: css,
        name: 'CSS',
    },
    {
        imageUrl: javascript,
        name: 'JavaScript',
    },
    {
        imageUrl: typescript,
        name: 'TypeScript',
    },
    {
        imageUrl: python,
        name: 'Python',
    },
    {
        imageUrl: java,
        name: 'Java',
    },
    {
        imageUrl: react,
        name: 'React',
    },
    {
        imageUrl: nodejs,
        name: 'Node.js',
    },
    {
        imageUrl: express,
        name: 'Express',
    },
    {
        imageUrl: nextjs,
        name: 'Next.js',
    },
    {
        imageUrl: flask,
        name: 'Flask',
    },
    {
        imageUrl: mongodb,
        name: 'MongoDB',
    },
    {
        imageUrl: sass,
        name: 'Sass',
    },
    {
        imageUrl: tailwindcss,
        name: 'Tailwind CSS',
    },
    {
        imageUrl: android,
        name: 'Android',
    },
    {
        imageUrl: flutter,
        name: 'Flutter',
    },
    {
        imageUrl: tf,
        name: 'Tensorflow',
    },
    {
        imageUrl: git,
        name: 'Git',
    },
    {
        imageUrl: github,
        name: 'GitHub',
    },
]

export const experiences = [
    {
        title: 'SDE Intern',
        company_name: 'Amazon',
        icon: amazon,
        iconBg: '#232F3E',
        date: 'May 2023 - Aug 2023',
        points: [
            'Worked as Frontend engineer in the Shopping Foundations Team.',
            "Implemented developer and debugging tools for Amazon's internal web framework, improving team’s velocity by 25%.",
            'Communicated complex ideas and strategies to internal teams, ensuring clear understanding.',
            'Gained proficiency in TypeScript, React, Vite, Vitest, and browser extension development.',
        ],
    },
    {
        title: 'Mobile App Developer',
        company_name: 'Enparadigm',
        icon: enparadigm,
        iconBg: '#E6DEDD',
        date: 'Apr 2021 - Jan 2022',
        points: [
            'Worked as a cross-platform mobile app developer.',
            'Developed cross-platform mobile apps with end-to-end ownership.',
            'Proactively Identified and resolved bottlenecks and bugs for optimal app performance.',
            'Maintained organized, documented code for seamless updates and maintenance.',
        ],
    },
    {
        title: 'Software Developer',
        company_name: 'ISSC',
        icon: issc,
        iconBg: '#243546',
        date: 'Jul 2020 - Dec 2020',
        points: [
            'Led diverse IT infrastructure projects, provided timely cross-functional support, managed projects independently with high quality, and demonstrated flexible project management.',
        ],
    },
    {
        title: 'Jr. Software Developer',
        company_name: 'Optimize IT Systems',
        icon: oit,
        iconBg: '#E6DEDD',
        date: 'Jan 2019 - Jan 2020',
        points: [
            'Enhanced Android applications with collaborative feature development, and contributed to cutting-edge research and development projects integrating AI, Computer Vision, and Deep Learning.',
        ],
    },
]

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/YourGitHubUsername',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/YourLinkedInUsername',
    },
]

export const projects = [
    {
        iconUrl: ziplink,
        theme: 'btn-back-blue',
        name: 'ZipLink',
        description:
            'ZipLink is a MERN stack solution for efficient sharing, turning extensive URLs into streamlined links with ease, eliminating cumbersome web addresses for effortless communication and making every link sharing experience a breeze. Simplify, Share, ZipLink!',
        link: 'https://github.com/leoAshu/zip-link',
        demo: 'https://zip-link-six.vercel.app/',
    },
    {
        iconUrl: dalle,
        theme: 'btn-back-black',
        name: 'DALL-E Clone',
        description:
            "A MERN app that leverages OpenAI's DALL-E API to generate and share images, fostering a creative and collaborative space.",
        link: 'https://github.com/leoAshu/dalle_clone',
        demo: 'https://dalle-clone-khaki.vercel.app/',
    },
    {
        iconUrl: summiz,
        theme: 'btn-back-orange',
        name: 'Sumz',
        description:
            'Web-based platform that transforms lengthy articles into concise summaries using OpenAI GPT-4.',
        link: 'https://github.com/leoAshu/ai-summarizer',
        demo: 'https://leoashu.github.io/ai-summarizer/',
    },
]
