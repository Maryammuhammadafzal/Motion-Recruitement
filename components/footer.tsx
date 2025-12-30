import { FaFacebookF, FaInstagram, FaLinkedin } from "react-icons/fa";
import React from 'react'
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
    return (


        <footer className="bg-primary w-full rounded-2xl md:p-6 p-3  mt-10 text-background">
            <div className="mx-auto rounded-2xl w-full sm:p-4 py-6 lg:py-8">
                <div className="md:flex gap-6 md:justify-between">
                    <div className="mb-6 md:mb-0">
                        <a href="#" className="flex items-center">
                            <img src="/images/logo.svg" className="h-12" alt="Logo" />
                        </a>
                        <p className='max-w-sm mt-6 sm:text-sm text-xs'>Connecting top tech talent with forward thinking companies through a people first recruitment approach.</p>
                    </div>
                    <div className="grid grid-cols-2 gap-12 sm:gap-12 sm:grid-cols-4">
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-heading uppercase">Comapny</h2>
                            <ul className="text-body space-y-3 lg:text-sm text-xs">
                                <li className="">
                                    <a href="#" className="hover:underline">About us</a>
                                </li>
                                <li>
                                    <a href="#" className="hover:underline">How we work</a>
                                </li>
                                <li>
                                    <a href="#" className="hover:underline">Careers</a>
                                </li>
                                <li>
                                    <a href="#" className="hover:underline">Insights</a>
                                </li>
                                <li>
                                    <a href="#" className="hover:underline">Contact us</a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-heading uppercase">Candidates</h2>
                            <ul className="text-body space-y-3 lg:text-sm text-xs">
                                <li className="">
                                    <a href="#" className="hover:underline ">Find Jobs</a>
                                </li>
                                <li>
                                    <a href="#" className="hover:underline">Submit Resume</a>
                                </li>
                                <li>
                                    <a href="#" className="hover:underline">Career Support</a>
                                </li>
                                <li>
                                    <a href="#" className="hover:underline">Interview Preparation</a>
                                </li>
                                <li>
                                    <a href="#" className="hover:underline">Remote Opportunities</a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-heading uppercase">Employers</h2>
                            <ul className="text-body space-y-3 lg:text-sm text-xs">
                                <li className="">
                                    <a href="#" className="hover:underline">Hire Talent</a>
                                </li>
                                <li>
                                    <a href="#" className="hover:underline">Talent Solutions</a>
                                </li>
                                <li>
                                    <a href="#" className="hover:underline">Industries</a>
                                </li>
                                <li>
                                    <a href="#" className="hover:underline">Case Studies</a>
                                </li>
                                <li>
                                    <a href="#" className="hover:underline">Book a Consultation</a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-heading uppercase">Resources</h2>
                            <ul className="text-body space-y-3 lg:text-sm text-xs">
                                <li className="">
                                    <a href="#" className="hover:underline">FAQs</a>
                                </li>
                                <li>
                                    <a href="#" className="hover:underline">Blogs</a>
                                </li>
                                <li>
                                    <a href="#" className="hover:underline">Hiring Guides</a>
                                </li>
                                <li>
                                    <a href="#" className="hover:underline">Market Insights</a>
                                </li>
                                <li>
                                    <a href="#" className="hover:underline">Privacy Policy</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <hr className="my-6 border-default sm:mx-auto lg:my-8" />
                <div className="sm:flex sm:items-center sm:justify-between">
                    <span className="sm:text-sm text-xs text-body sm:text-center">Copyright © 2025 <a href="#" className="hover:underline">Motion Recruitment</a>. All Rights Reserved.
                    </span>
                    <div className="flex mt-4 sm:justify-center sm:mt-0">
                        <a href="#" className="text-sm hover:text-heading">
                            <FaFacebookF />
                        </a>
                        <a href="#" className="text-body hover:text-heading ms-5">
                            <FaInstagram />
                        </a>
                        <a href="#" className="text-body hover:text-heading ms-5">
                            <FaLinkedin />
                        </a>
                        <a href="#" className="text-body hover:text-heading ms-5">
                            <FaXTwitter />
                        </a>
                    </div>
                </div>
            </div>
        </footer>

    )
}

export default Footer
