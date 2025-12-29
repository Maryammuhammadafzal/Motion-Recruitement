
import React from 'react'
import { Badge } from './ui/badge';
import Marquee from 'react-fast-marquee';
import Image from 'next/image';

const TestimonialSection = () => {
    const testimonials = [
        {
            name: "Ahmed Raza",
            role: "Frontend Developer",
            company: "FinTech Startup",
            feedback:
                "The recruitment process was clear and fast. I landed a role that perfectly matched my skills and career goals.",
        },
        {
            name: "Sarah Khan",
            role: "HR Manager",
            company: "Software House",
            feedback:
                "We hired highly qualified engineers in less than two weeks. The candidate quality and communication were excellent.",
        },
        {
            name: "Usman Ali",
            role: "Backend Engineer",
            company: "SaaS Company",
            feedback:
                "They didn’t just find me a job — they prepared me for interviews and supported me until onboarding.",
        },
        {
            name: "Ayesha Malik",
            role: "Product Designer",
            company: "Digital Agency",
            feedback:
                "The team understood my design background and connected me with opportunities aligned with my long-term growth.",
        }
    ];
    return (
        <section className="w-full py-8 h-auto overflow-hidden flex justify-center  items-center">
            <div className="py-4  mx-auto max-w-7xl bg-primary/10 rounded-2xl w-full flex flex-col items-center ">
                <div className="max-w-3xl flex flex-col items-center text-center">
                    <Badge className='px-3 py-1 my-10 bg-background text-primary text-sm'> Trusted by Candidates & Employers </Badge>
                    <h2 className="mb-4 text-4xl tracking-tight max-w-lg text-center font-semibold text-primary ">Insight from our users</h2>
                    <p className="max-w-2xl mb-10 font-light text-primary/70 lg:mb-8 lg:text-base ">From career growth to successful hires, hear how professionals and companies achieve results through our recruitment expertise.</p>
                </div>
                <div className="space-y-3 flex justify-between gap-3 h-[500px] md:gap-4 px-6 w-full md:space-y-0">
                    <Marquee pauseOnHover speed={30} className=' rotate-90'>
                        <div className="overflow-hidden h-auto text-primary">
                            <div className="flex h-auto items-center py-6 animate-marquee whitespace-nowrap">
                                {testimonials.map((data, index) => (
                                    <div
                                        key={index}
                                        className="bg-white w-[360px] -rotate-90 shrink-0 rounded-2xl p-6 shadow-sm shadow-foreground/30 hover:shadow-lg justify-between flex flex-col h-[300px] transition-shadow duration-300"
                                    >
                                        {/* Feedback */}
                                        <p className="text-base leading-relaxed text-primary mb-6 whitespace-normal">
                                            “{data.feedback}”
                                        </p>

                                        {/* User Info */}
                                        <div className="flex items-center gap-4">
                                            <Image
                                                src="/images/user-image.jpg"
                                                alt={data.name}
                                                width={48}
                                                height={48}
                                                className="rounded-full object-cover"
                                            />

                                            <div className="flex flex-col">
                                                <h4 className="font-semibold text-primary text-sm">
                                                    {data.name}
                                                </h4>
                                                <p className="text-xs text-primary/70">
                                                    {data.role} · {data.company}
                                                </p>
                                            </div>
                                        </div>

                                    </div>
                                ))}
                            </div>

                        </div>
                    </Marquee>
                    <Marquee pauseOnHover direction='right' speed={30} className='max-md:hidden rotate-90 '>
                        <div className="overflow-hidden h-auto text-primary">
                            <div className="flex h-auto items-center py-6 animate-marquee whitespace-nowrap">
                                {testimonials.map((data, index) => (
                                    <div
                                        key={index}
                                        className="bg-white w-[360px] -rotate-90 shrink-0 rounded-2xl p-6 shadow-sm shadow-foreground/30 hover:shadow-lg justify-between flex flex-col h-[300px] transition-shadow duration-300"
                                    >
                                        {/* Feedback */}
                                        <p className="text-base leading-relaxed text-primary mb-6 whitespace-normal">
                                            “{data.feedback}”
                                        </p>

                                        {/* User Info */}
                                        <div className="flex items-center gap-4">
                                            <Image
                                                src="/images/user-image.jpg"
                                                alt={data.name}
                                                width={48}
                                                height={48}
                                                className="rounded-full object-cover"
                                            />

                                            <div className="flex flex-col">
                                                <h4 className="font-semibold text-primary text-sm">
                                                    {data.name}
                                                </h4>
                                                <p className="text-xs text-primary/70">
                                                    {data.role} · {data.company}
                                                </p>
                                            </div>
                                        </div>

                                    </div>
                                ))}
                            </div>

                        </div>
                    </Marquee>
                    <Marquee pauseOnHover speed={30} className=' rotate-90 '>
                        <div className="overflow-hidden h-auto text-primary">
                            <div className="flex h-auto items-center py-6 animate-marquee whitespace-nowrap">
                                {testimonials.map((data, index) => (
                                    <div
                                        key={index}
                                        className="bg-white w-[360px] -rotate-90 shrink-0 rounded-2xl p-6 shadow-sm shadow-foreground/30 hover:shadow-lg justify-between flex flex-col h-[300px] transition-shadow duration-300"
                                    >
                                        {/* Feedback */}
                                        <p className="text-base leading-relaxed text-primary mb-6 whitespace-normal">
                                            “{data.feedback}”
                                        </p>

                                        {/* User Info */}
                                        <div className="flex items-center gap-4">
                                            <Image
                                                src="/images/user-image.jpg"
                                                alt={data.name}
                                                width={48}
                                                height={48}
                                                className="rounded-full object-cover"
                                            />

                                            <div className="flex flex-col">
                                                <h4 className="font-semibold text-primary text-sm">
                                                    {data.name}
                                                </h4>
                                                <p className="text-xs text-primary/70">
                                                    {data.role} · {data.company}
                                                </p>
                                            </div>
                                        </div>

                                    </div>
                                ))}
                            </div>

                        </div>
                    </Marquee>
                </div>
            </div>
        </section>
    )
}

export default TestimonialSection
