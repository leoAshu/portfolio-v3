import { amazon, enparadigm, issc, oit } from '../assets/images'
import {
    car,
    contact,
    css,
    estate,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    nextjs,
    nodejs,
    pricewise,
    react,
    sass,
    snapgram,
    summiz,
    tailwindcss,
    threads,
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
        iconUrl: pricewise,
        theme: 'btn-back-red',
        name: 'Amazon Price Tracker',
        description:
            'Developed a web application that tracks and notifies users of price changes for products on Amazon, helping users find the best deals.',
        link: 'https://github.com/adrianhajdin/pricewise',
    },
    {
        iconUrl: threads,
        theme: 'btn-back-green',
        name: 'Full Stack Threads Clone',
        description:
            'Created a full-stack replica of the popular discussion platform "Threads," enabling users to post and engage in threaded conversations.',
        link: 'https://github.com/adrianhajdin/threads',
    },
    {
        iconUrl: car,
        theme: 'btn-back-blue',
        name: 'Car Finding App',
        description:
            'Designed and built a mobile app for finding and comparing cars on the market, streamlining the car-buying process.',
        link: 'https://github.com/adrianhajdin/project_next13_car_showcase',
    },
    {
        iconUrl: snapgram,
        theme: 'btn-back-pink',
        name: 'Full Stack Instagram Clone',
        description:
            'Built a complete clone of Instagram, allowing users to share photos and connect with friends in a familiar social media environment.',
        link: 'https://github.com/adrianhajdin/social_media_app',
    },
    {
        iconUrl: estate,
        theme: 'btn-back-black',
        name: 'Real-Estate Application',
        description:
            'Developed a web application for real estate listings, facilitating property searches and connecting buyers with sellers.',
        link: 'https://github.com/adrianhajdin/projects_realestate',
    },
    {
        iconUrl: summiz,
        theme: 'btn-back-yellow',
        name: 'AI Summarizer Application',
        description:
            'App that leverages AI to automatically generate concise & informative summaries from lengthy text content, or blogs.',
        link: 'https://github.com/adrianhajdin/project_ai_summarizer',
    },
]
