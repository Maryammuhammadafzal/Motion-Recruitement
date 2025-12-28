import { Badge } from 'lucide-react'
import React from 'react'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

const FaqSection = () => {
    return (
        <section className="w-full bg-image h-auto flex justify-center rounded-2xl items-center">
            <div className="py-8  mx-auto max-w-7xl w-full flex flex-col items-center sm:py-16 ">
                <div className="max-w-3xl flex flex-col items-center text-center">
                    <Badge className='px-3 py-1 my-10 bg-background text-primary text-sm'> Live Tech Opportunities </Badge>
                    <h2 className="mb-4 text-4xl tracking-tight max-w-lg text-center font-semibold text-primary ">Explore Open Tech Roles</h2>
                    <p className="max-w-2xl mb-10 font-light text-primary/70 lg:mb-8 lg:text-base ">Browse current opportunities across top tech roles. Contract or permanent, remote or on-site — find positions that match your skills and career goals.</p>
                </div>
                <div className="space-y-8 flex flex-col md:gap-12 w-full md:space-y-0">
                    <Accordion
                        type="single"
                        collapsible
                        className="w-full"
                        defaultValue="item-1"
                    >
                        <AccordionItem value="item-1">
                            <AccordionTrigger>Product Information</AccordionTrigger>
                            <AccordionContent className="flex flex-col gap-4 text-balance">
                                <p>
                                    Our flagship product combines cutting-edge technology with sleek
                                    design. Built with premium materials, it offers unparalleled
                                    performance and reliability.
                                </p>
                                <p>
                                    Key features include advanced processing capabilities, and an
                                    intuitive user interface designed for both beginners and experts.
                                </p>
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-2">
                            <AccordionTrigger>Shipping Details</AccordionTrigger>
                            <AccordionContent className="flex flex-col gap-4 text-balance">
                                <p>
                                    We offer worldwide shipping through trusted courier partners.
                                    Standard delivery takes 3-5 business days, while express shipping
                                    ensures delivery within 1-2 business days.
                                </p>
                                <p>
                                    All orders are carefully packaged and fully insured. Track your
                                    shipment in real-time through our dedicated tracking portal.
                                </p>
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-3">
                            <AccordionTrigger>Return Policy</AccordionTrigger>
                            <AccordionContent className="flex flex-col gap-4 text-balance">
                                <p>
                                    We stand behind our products with a comprehensive 30-day return
                                    policy. If you&apos;re not completely satisfied, simply return the
                                    item in its original condition.
                                </p>
                                <p>
                                    Our hassle-free return process includes free return shipping and
                                    full refunds processed within 48 hours of receiving the returned
                                    item.
                                </p>
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>

                </div>
            </div>
        </section>
    )
}

export default FaqSection
