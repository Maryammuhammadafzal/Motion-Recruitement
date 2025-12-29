import React from 'react'
import { Badge } from './ui/badge'
import Image from 'next/image'

const FeaturedSection = () => {
    // const featuredData = [
    //     {
    //         title: "Frontend Developer",
    //         skills: ["HTML", "CSS", "JavaScript", "React"],
    //         icon: Target,
    //         salary: "85,000",
    //         location: "Karachi, Pakistan",
    //     },
    //     {
    //         title: "Backend Developer (Node.js)",
    //         skills: ["Node.js", "Express", "MongoDB", "REST APIs"],
    //         icon: Server,
    //         salary: "120,000",
    //         location: "Lahore, Pakistan",
    //     },
    //     {
    //         title: "Full Stack Developer",
    //         skills: ["React", "Node.js", "MongoDB", "Next.js"],
    //         icon: Code,
    //         salary: "150,000",
    //         location: "Remote",
    //     },
    //     {
    //         title: "UI/UX Designer",
    //         skills: ["Figma", "Wireframing", "Prototyping", "Design Systems"],
    //         icon: Palette,
    //         salary: "90,000",
    //         location: "Islamabad, Pakistan",
    //     },
    //     {
    //         title: "Data Analyst",
    //         skills: ["SQL", "Excel", "Power BI", "Python"],
    //         icon: LineChart,
    //         salary: "110,000",
    //         location: "Karachi, Pakistan",
    //     },
    //     {
    //         title: "DevOps Engineer",
    //         skills: ["AWS", "Docker", "CI/CD", "Linux"],
    //         icon: Cloud,
    //         salary: "180,000",
    //         location: "Remote",
    //     },
    //     {
    //         title: "Cybersecurity Analyst",
    //         skills: ["Network Security", "SIEM", "Risk Assessment"],
    //         icon: ShieldCheck,
    //         salary: "160,000",
    //         location: "Lahore, Pakistan",
    //     },
    //     {
    //         title: "Database Administrator",
    //         skills: ["MySQL", "PostgreSQL", "Performance Tuning"],
    //         icon: Database,
    //         salary: "140,000",
    //         location: "Islamabad, Pakistan",
    //     },
    //     {
    //         title: "Embedded Systems Engineer",
    //         skills: ["C/C++", "Microcontrollers", "RTOS"],
    //         icon: Cpu,
    //         salary: "170,000",
    //         location: "Karachi, Pakistan",
    //     }
    // ];
    return (
        <div className='px-1 py-6 w-full'>
            <section className="bg-primary rounded-2xl w-full text-background">

                <div className="grid max-w-screen-xl px-4 py-8 mx-auto  lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
                    <div className="mr-auto place-self-center lg:col-span-6 pl-3">
                        <Badge className='px-3 py-1 my-10 bg-background text-primary text-sm'> <span className='font-medium'>100+</span> Successful Jobs </Badge>
                        <h1 className="max-w-xl mb-4 my-3 text-2xl leading-12 font-normal md:text-3xl xl:text-4xl dark:text-white">Increase your job success rate wih <span className="max-w-2xl mb-4 text-3xl font-semibold leading-none md:text-4xl xl:text-5xl dark:text-white">Motion Recruitment</span> </h1>
                        <p className="max-w-xl mb-10 font-light text-background primary/70 lg:mb-8  lg:text-base ">Specialized tech recruitment that matches top talent with forward thinking companies, contract, permanent, and remote roles.</p>
                        <a href="#" className="inline-flex items-center justify-center px-8  py-3 mr-3 text-base font-medium text-center text-primary bg-background hover:bg-background rounded-full focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900">
                            Find Jobs
                            {/* <svg className="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg> */}
                        </a>
                        {/* <a href="#" className="inline-flex items-center justify-center px-8 py-3 text-base font-medium text-center text-primary bg-primary/20 border border-gray-300 rounded-full hover:bg-primary/30 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
                        Hire Talent
                    </a> */}
                    </div>
                    <div className="lg:mt-0 px-6 pt-10 lg:col-span-6  lg:flex">
                        <div className='h-auto w-full flex justify-end relative items-center'>
                            <div className='h-[500px] w-[450px] rounded-2xl'>
                                <Image src={'/images/feature-section-1.jpg'} alt='team image' width={400} height={400} className='w-full h-full shadow-xl rounded-2xl' />
                            </div>
                            <div className='lg:w-[260px] lg:h-[260px] w-[300px] h-[300px] absolute xl:-left-0 lg:-left-10 left-60 bottom-6'>

                                <Image src={'/images/successful-jobs.jpg'} alt='successful Jobs image' width={260} height={260} className='h-full shadow-xl w-full rounded-2xl' />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="grid max-w-screen-xl px-4 py-8 mx-auto  lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
                    <div className="lg:mt-0 px-6 pt-10 lg:col-span-6 flex">
                        <div className='h-auto w-full pr-3 flex justify-start relative items-center lg:flex-2 flex-1'>
                            <div className='h-[500px] w-[450px] rounded-2xl'>
                                <Image src={'/images/feature-section-1.jpg'} alt='team image' width={400} height={400} className='w-full h-full shadow-xl rounded-2xl' />
                            </div>
                            <div className='w-[260px] h-[260px] absolute xl:-right-0 lg:-right-10 bottom-6'>

                                <Image src={'/images/review-recomend.jpg'} alt='successful Jobs image' width={260} height={260} className='h-full shadow-xl w-full rounded-2xl' />
                            </div>

                        </div>
                    </div>
                    <div className="mr-auto place-self-center lg:pl-10 pl-3 lg:col-span-6 flex flex-col lg:flex-2 flex-1">
                        <Badge className='px-3 py-1 my-10 bg-background text-primary text-sm'> <span className='font-medium'>100+</span> best companies </Badge>
                        <h1 className="max-w-xl mb-4 my-3 text-2xl leading-12 font-normal md:text-3xl xl:text-4xl dark:text-white">Join the best companies to work today! <span className="max-w-2xl mb-4 text-3xl font-semibold leading-none md:text-4xl xl:text-5xl dark:text-white">Motion Recruitment</span> </h1>
                        <p className="max-w-xl mb-10 font-light text-background primary/70 lg:mb-8  lg:text-base ">Find great places to work. Get access to millions of company  reviews. Company name or job title. Find Companies. Do you want to search for salaries?</p>
                        <div className='w-auto h-auto'>
                            <a href="#" className="inline-flex items-center justify-center px-8  py-3 mr-3 text-base font-medium text-center text-primary bg-background hover:bg-background rounded-full focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900">
                                More About Us
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default FeaturedSection
