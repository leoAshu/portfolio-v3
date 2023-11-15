import {
    VerticalTimeline,
    VerticalTimelineElement,
} from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'

import { skills, experiences } from '../constants'

const About = () => {
    return (
        <section className="max-container">
            <h1 className="head-text">
                Hello, I'm{' '}
                <span className="blue-gradient_text font-semibold drop-shadow">
                    Ashutosh
                </span>
            </h1>

            <div className="mt-5 flex flex-col gap-3 text-slate-500">
                <p>
                    A passionate Software Developer with expertise in Web and
                    Mobile app development, skilled in cutting-edge technolgies
                    like Machine Learning, Deep Learning and Blockchain.
                </p>
            </div>

            <div className="py-10 flex flex-col">
                <h3 className="subhead-text">My Skills</h3>

                <div className="mt-16 flex flex-wrap gap-12">
                    {skills.map((skill) => (
                        <div className="block-container w-20 h-20">
                            <div className="btn-back rounded-xl" />
                            <div className="btn-front rounded-xl flex justify-center items-center">
                                <img
                                    src={skill.imageUrl}
                                    alt={skill.name}
                                    className="w-1/2 h-1/2 object-contain"
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="py-16">
                <h3 className="subhead-text">Work Experience</h3>
                <div className="mt-5 flex flex-col gap-3 text-slate-500">
                    <p>
                        With an extensive three-year tenure in the IT industry,
                        I've navigated diverse roles within a spectrum of
                        companies, consistently honing my skills and
                        collaborating with bright minds. Here's a snapshot of my
                        journey:
                    </p>
                </div>

                <div className="mt-12 flex">
                    <VerticalTimeline>
                        {experiences.map((exp) => (
                            <VerticalTimelineElement
                                key={exp.company_name}
                                date={exp.date}
                                icon={
                                    <div className="flex justify-center items-center w-full h-full">
                                        <img
                                            src={exp.icon}
                                            alt={exp.company_name}
                                            className="w-[60%] h-[60%] object-contain"
                                        />
                                    </div>
                                }
                                iconStyle={{ background: exp.iconBg }}
                                contentStyle={{
                                    borderBottom: '8px',
                                    borderStyle: 'solid',
                                    borderBottomColor: exp.iconBg,
                                    boxShadow: 'none',
                                }}
                            >
                                <div>
                                    <h3 className="text-black text-xl font-poppins font-semibold">
                                        {exp.title}
                                    </h3>
                                    <p
                                        className="text-black-500 font-medium font-base"
                                        style={{ margin: 0 }}
                                    >
                                        {exp.company_name}
                                    </p>
                                </div>

                                <ul className="my-5 list-disc ml-5 space-y-2">
                                    {exp.points.map((point, idx) => (
                                        <li
                                            key={`experience-point-${idx}`}
                                            className="text-white-500/50 font-normal pl-1 text-small"
                                        >
                                            {point}
                                        </li>
                                    ))}
                                </ul>
                            </VerticalTimelineElement>
                        ))}
                    </VerticalTimeline>
                </div>
            </div>
        </section>
    )
}

export default About
