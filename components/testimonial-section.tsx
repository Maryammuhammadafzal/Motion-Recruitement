import React from 'react';
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
        },
    ];

    // Duplicate testimonials for smoother continuous marquee effect
    const extendedTestimonials = [...testimonials, ...testimonials, ...testimonials];

    return (
        <section className="w-full py-8 md:py-12 lg:py-16 overflow-hidden">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-10 md:mb-14">
                    <Badge className="px-3 py-1 bg-background text-primary text-xs sm:text-sm">
                        Trusted by Candidates & Employers
                    </Badge>
                    <h2 className="mt-4 text-2xl sm:text-3xl md:text-4xl font-semibold text-primary tracking-tight">
                        Insights from our users
                    </h2>
                    <p className="mt-4 max-w-2xl mx-auto text-sm sm:text-base text-primary/70 font-light">
                        From career growth to successful hires, hear how professionals and companies achieve results through our recruitment expertise.
                    </p>
                </div>

                {/* Responsive Marquee Rows */}
                <div className="space-y-6 md:space-y-8">
                    {/* Row 1 - Always visible */}
                    <Marquee pauseOnHover speed={40} gradient={false}>
                        {extendedTestimonials.map((data, index) => (
                            <div
                                key={`row1-${index}`}
                                className="mx-4 flex-shrink-0 w-80 sm:w-96 bg-white rounded-2xl p-6 shadow-sm shadow-foreground/20 hover:shadow-xl transition-shadow duration-300"
                            >
                                <p className="text-base text-primary leading-relaxed mb-8">
                                    “{data.feedback}”
                                </p>
                                <div className="flex items-center gap-4">
                                    <Image
                                        src="/images/user-image.jpg"
                                        alt={data.name}
                                        width={48}
                                        height={48}
                                        className="rounded-full object-cover"
                                    />
                                    <div>
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
                    </Marquee>

                    {/* Row 2 - Visible on md and above */}
                    <Marquee
                        pauseOnHover
                        speed={40}
                        direction="right"
                        gradient={false}
                        className="hidden md:block"
                    >
                        {extendedTestimonials.map((data, index) => (
                            <div
                                key={`row2-${index}`}
                                className="mx-4 flex-shrink-0 w-80 sm:w-96 bg-white rounded-2xl p-6 shadow-sm shadow-foreground/20 hover:shadow-xl transition-shadow duration-300"
                            >
                                <p className="text-base text-primary leading-relaxed mb-8">
                                    “{data.feedback}”
                                </p>
                                <div className="flex items-center gap-4">
                                    <Image
                                        src="/images/user-image.jpg"
                                        alt={data.name}
                                        width={48}
                                        height={48}
                                        className="rounded-full object-cover"
                                    />
                                    <div>
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
                    </Marquee>

                    {/* Row 3 - Visible only on lg and above */}
                    <Marquee
                        pauseOnHover
                        speed={40}
                        gradient={false}
                        className="hidden lg:block"
                    >
                        {extendedTestimonials.map((data, index) => (
                            <div
                                key={`row3-${index}`}
                                className="mx-4 flex-shrink-0 w-80 sm:w-96 bg-white rounded-2xl p-6 shadow-sm shadow-foreground/20 hover:shadow-xl transition-shadow duration-300"
                            >
                                <p className="text-base text-primary leading-relaxed mb-8">
                                    “{data.feedback}”
                                </p>
                                <div className="flex items-center gap-4">
                                    <Image
                                        src="/images/user-image.jpg"
                                        alt={data.name}
                                        width={48}
                                        height={48}
                                        className="rounded-full object-cover"
                                    />
                                    <div>
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
                    </Marquee>
                </div>
            </div>
        </section>
    );
};

export default TestimonialSection;