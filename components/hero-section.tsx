import Image from 'next/image'
import React from 'react'
import { Badge } from './ui/badge'

const HeroSection = () => {
    return (
        <section className="pt-24 text-primary">

            <div className="grid max-w-screen-xl px-4 py-8 mx-auto  lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
                <div className="mr-auto place-self-center lg:col-span-6">
                    <Badge className='px-3 py-1 my-10 bg-primary/20 text-primary text-sm'> <span className='font-medium'>250+</span> trusted client </Badge>
                    <h1 className="max-w-xl mb-4 my-3 text-4xl font-normal leading-none md:text-5xl xl:text-6xl dark:text-white">Your Next Career Move <span className="max-w-2xl mb-4 text-4xl font-semibold leading-none md:text-5xl xl:text-6xl dark:text-white">Starts Here</span> </h1>
                    <p className="max-w-xl mb-10 font-light text-primary/70 lg:mb-8  lg:text-base ">Specialized tech recruitment that matches top talent with forward-thinking companies, contract, permanent, and remote roles.</p>
                    <a href="#" className="inline-flex items-center justify-center px-8  py-3 mr-3 text-base font-medium text-center text-background bg-primary hover:bg-secondary rounded-full focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900">
                        Find Jobs
                        {/* <svg className="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg> */}
                    </a>
                    <a href="#" className="inline-flex items-center justify-center px-8 py-3 text-base font-medium text-center text-primary bg-primary/20 border border-gray-300 rounded-full hover:bg-primary/30 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
                        Hire Talent
                    </a>
                </div>
                <div className="hidden lg:mt-0 px-6 pt-10 lg:col-span-6  lg:flex">
                    <div className='h-auto w-full flex justify-center relative items-center'>
                        <div className='w-full bg-primary h-[350px] flex flex-col justify-between text-background p-6 rounded-2xl'>
                            <h2 className='text-xl max-w-[200px] font-medium'>Successfully connected over <span className='text-foreground'>1,000 businesses</span> with top talent.</h2>
                            <p className='text-sm  max-w-[200px]'> <span className='text-foreground'>Reducing hiring time by 30%</span>  and improving team efficiency across industries.</p>
                        </div>
                        <div className='absolute -top-10 right-0 w-[300px] h-[450px] rounded-2xl'>
                            <div className='w-full h-full relative'>
                                <Image src={'/images/hero-image3.jpg'} alt='people-image' width={300} height={350} className='h-full shadow-xl w-full rounded-2xl' />
                                <div className='absolute p-4 top-0 left-0 flex flex-col  justify-between w-full h-full'>
                                    <Badge className=' px-3 py-1 bg-background text-primary text-xs'> Top rated specialist </Badge>
                                    <div className='flex flex-col pb-6'>
                                        <h4 className='font-medium text-xl text-background'>Sarah Mitcheal</h4>
                                        <p className='text-background'>Mern Stack Developer</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <img src={"https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/phone-mockup.png"} alt="mockup" width={400} height={500}/> */}
                </div>
            </div>
        </section>
    )
}

export default HeroSection
