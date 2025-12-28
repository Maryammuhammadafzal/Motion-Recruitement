
import React from 'react'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { Badge } from './ui/badge'

const FaqSection = () => {
    const faqs = [
        {
            value: "item-1",
            question: "How do I apply for a job?",
            answer: "You can browse open roles on our website and apply directly, or submit your resume to be considered for current and future opportunities."
        },
        {
            value: "item-2",
            question: "Is there any cost to job seekers?",
            answer: "No. Our recruitment services are completely free for candidates."
        },
        {
            value: "item-3",
            question: "What types of roles do you offer?",
            answer: "We offer contract, permanent, and remote roles across frontend, backend, DevOps, data, design, and other tech disciplines."
        },
        {
            value: "item-4",
            question: "Do you help with interview preparation?",
            answer: "Yes. Our recruiters provide interview guidance, company insights, and feedback to help you perform confidently."
        },
        {
            value: "item-5",
            question: "Can I apply if I don’t see a matching role?",
            answer: "Absolutely. Submit your resume and we'll reach out when a suitable opportunity becomes available."
        },
    ]
    return (
        <section className="w-full h-auto flex justify-center rounded-2xl items-center">
            <div className="py-4  mx-auto max-w-7xl w-full flex flex-col gap-6 items-center sm:py-4 ">
                <div className="max-w-2xl flex flex-col items-center text-center">
                    <Badge className='px-3 py-1 my-10 bg-primary/20 text-primary text-sm'>Questions, Answered </Badge>
                    <h2 className="mb-4 text-4xl tracking-tight max-w-lg text-center font-semibold text-primary ">Frequently Asked Question</h2>
                    <p className="max-w-xl mb-10 font-light text-primary/70 lg:mb-8 lg:text-base ">Find quick answers about our recruitment process, job opportunities, and hiring solutions.</p>
                </div>
                <div className="space-y-8 max-w-2xl bg-primary/5 text-primary p-6 rounded-2xl flex flex-col md:gap-12 w-full md:space-y-0">
                    <Accordion
                        type="single"
                        collapsible
                        className="w-full"
                        defaultValue="item-1"
                    >
                        {faqs.map((faq, index) => (
                            <AccordionItem key={index} value={faq.value}>
                                <AccordionTrigger className='font-medium text-base'>{faq.question}</AccordionTrigger>
                                <AccordionContent className="flex flex-col bg-background rounded-xl px-2 py-4 gap-4 text-balance">
                                    <p>
                                        {faq.answer}
                                    </p>
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>

                </div>
            </div>
        </section>
    )
}

export default FaqSection
