import React from 'react'
import { Badge } from './ui/badge'
import { BriefcaseBusiness, Compass, Rocket, Search, ShieldCheck, Target } from 'lucide-react'

const AboutSection = () => {
    const aboutData = [
        {
            title: "Discover Your Path",
            description: "We start by understanding your skills, aspirations, and ideal work culture. Then we map opportunities that align.",
            icon: Target
        },
        {
            title: "Connect & Prepare",
            description: "Your recruiter connects you with the right opportunities and prepares you with insights, feedback, and interview support.",
            icon: BriefcaseBusiness
        },
        {
            title: "Secure the Role",
            description: "From interviews to offer negotiation and onboarding, we guide you through every step until you confidently accept.",
            icon: ShieldCheck
        },
        {
            title: "Grow & Succeed",
            description: "Our support doesn’t stop at placement. We stay connected to help you grow, adapt, and succeed long-term.",
            icon: Rocket
        },

    ]
  return (
  <section className="w-full h-auto flex justify-center items-center">
  <div className="py-8 px-4 mx-auto max-w-7xl flex flex-col items-center sm:py-16 lg:px-6">
      <div className="max-w-3xl mb-8 lg:mb-16 flex flex-col items-center text-center">
         <Badge className='px-3 py-1 my-10 bg-primary/20 text-primary text-sm'> Built for Long Term Success </Badge>
          <h2 className="mb-4 text-4xl tracking-tight max-w-lg text-center font-semibold text-primary ">A Simple, Proven Hiring & Career Process</h2>
          <p className="max-w-xl mb-10 font-light text-primary/70 lg:mb-8  lg:text-base ">We remove complexity from tech hiring and job searching. Our structured, human-first process ensures the right match — faster, clearer, and with long-term success in mind.</p>
      </div>
      <div className="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-4 md:gap-12 md:space-y-0">
        {aboutData.map((data, index)=> (
          <div key={index} className='bg-white shadow-sm shadow-foreground rounded-2xl p-6'>
              <div className="flex justify-center text-background items-center mb-6 w-10 h-10 rounded-xl bg-primary lg:h-12 lg:w-12">
                {<data.icon />}
                  {/* <svg className="w-7 h-7 text-background" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 0l-2 2a1 1 0 101.414 1.414L8 10.414l1.293 1.293a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg> */}
              </div>
              <h3 className="mb-2 text-xl font-medium text-primary">{data.title}</h3>
              <p className="text-primary/70 text-sm">{data.description}</p>
          </div>
        ))}
         
      </div>
  </div>
</section>
  )
}

export default AboutSection
