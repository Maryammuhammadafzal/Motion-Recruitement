import React from 'react'
import { Badge } from './ui/badge'
import { BriefcaseBusiness, Cloud, Code, Compass, Cpu, Database, LineChart, Palette, Rocket, Search, Server, ShieldCheck, Target } from 'lucide-react'


const JobSection = () => {
    const featuredData = [
        {
            title: "Frontend Developer",
            skills: ["HTML", "CSS", "JavaScript", "React"],
            icon: Target,
            salary: "85,000",
            location: "Karachi, Pakistan",
        },
        {
            title: "Backend Developer (Node.js)",
            skills: ["Node.js", "Express", "MongoDB", "REST APIs"],
            icon: Server,
            salary: "120,000",
            location: "Lahore, Pakistan",
        },
        {
            title: "Full Stack Developer",
            skills: ["React", "Node.js", "MongoDB", "Next.js"],
            icon: Code,
            salary: "150,000",
            location: "Remote",
        },
        {
            title: "UI/UX Designer",
            skills: ["Figma", "Wireframing", "Prototyping", "Design Systems"],
            icon: Palette,
            salary: "90,000",
            location: "Islamabad, Pakistan",
        },
        {
            title: "Data Analyst",
            skills: ["SQL", "Excel", "Power BI", "Python"],
            icon: LineChart,
            salary: "110,000",
            location: "Karachi, Pakistan",
        },
        {
            title: "DevOps Engineer",
            skills: ["AWS", "Docker", "CI/CD", "Linux"],
            icon: Cloud,
            salary: "180,000",
            location: "Remote",
        },
        {
            title: "Cybersecurity Analyst",
            skills: ["Network Security", "SIEM", "Risk Assessment"],
            icon: ShieldCheck,
            salary: "160,000",
            location: "Lahore, Pakistan",
        },
        {
            title: "Database Administrator",
            skills: ["MySQL", "PostgreSQL", "Performance Tuning"],
            icon: Database,
            salary: "140,000",
            location: "Islamabad, Pakistan",
        },
        {
            title: "Embedded Systems Engineer",
            skills: ["C/C++", "Microcontrollers", "RTOS"],
            icon: Cpu,
            salary: "170,000",
            location: "Karachi, Pakistan",
        }
    ];
    return (
        <section className="w-full bg-image h-auto flex justify-center rounded-2xl items-center">
            <div className="py-8  mx-auto max-w-7xl w-full flex flex-col items-center sm:py-16 ">
                <div className="max-w-3xl flex flex-col items-center text-center">
                    <Badge className='px-3 py-1 my-10 bg-background text-primary text-sm'> Live Tech Opportunities </Badge>
                    <h2 className="mb-4 text-4xl tracking-tight max-w-lg text-center font-semibold text-primary ">Explore Open Tech Roles</h2>
                    <p className="max-w-2xl mb-10 font-light text-primary/70 lg:mb-8 lg:text-base ">Browse current opportunities across top tech roles. Contract or permanent, remote or on-site — find positions that match your skills and career goals.</p>
                </div>
                <div className="space-y-8 flex flex-col md:gap-12 w-full md:space-y-0">
                    <div className=' w-full h-auto px-6 py-3 rounded-2xl'></div>
                    {featuredData.slice(1, 5).map((data, index) => (
                        <div key={index} className='bg-white shadow-sm shadow-foreground/50 hover:shadow-lg hover:shadow-foreground flex justify-between gap-2 rounded-2xl p-6'>
                            <div className='flex flex-col'>
                                <div className="flex justify-center font-medium text-sm text-primary w-fit gap-3 items-center mb-6 ">
                                    {<data.icon />} Airbnb
                                    {/* <svg className="w-7 h-7 text-background" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 0l-2 2a1 1 0 101.414 1.414L8 10.414l1.293 1.293a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg> */}
                                </div>
                                <h3 className="mb-2 md:text-xl text-lg font-medium text-primary">{data.title}</h3>
                                {/* <p className="text-primary/70 text-sm">{data.description}</p> */}
                                <div className='flex max-md:flex-wrap w-auto md:gap-0 gap-2'>
                                    {data.skills?.map((skill, index) => (
                                        <Badge key={index} className='px-4 md:mr-3 py-2 md:my-3 bg-background text-primary border border-primary/50  md:text-sm text-xs'> {skill}</Badge>
                                    ))}
                                </div>
                            </div>
                            <div className='w-fit h-fit'>
                                <p className='md:text-xl text-lg my-3 text-primary/50'><span className='md:text-xl text-lg text-primary'>${data.salary}</span>/year</p>
                                <p className='md:text-sm text-xs text-foreground'>{data.location}</p>
                            </div>
                        </div>
                    ))}

                </div>
                <a href="#" className="inline-flex mt-6 items-center justify-center px-8  py-3 mr-3 text-base font-medium text-center text-background bg-primary hover:bg-secondary rounded-full focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900">
                    Show More  </a>
            </div>
        </section>
    )
}

export default JobSection
