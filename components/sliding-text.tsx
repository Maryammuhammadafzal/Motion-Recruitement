import { Sparkle } from 'lucide-react'
import React from 'react'
import Marquee from 'react-fast-marquee'

const SlidingText = () => {
    return (
        <Marquee>
            <div className="overflow-hidden  text-primary">
                <div className="flex items-center whitespace-nowrap animate-marquee gap-12 py-6">
                    {[...Array(8)].map((_, i) => (
                        <h3 key={i} className="flex gap-12 font-bold text-7xl items-center">
                            Real Jobs. Real Connections. <Sparkle size={38} />
                        </h3>
                    ))}
                </div>
            </div>
        </Marquee>
        //   <div className="w-full h-auto my-20 relative">
        //   <div className="overflow-hidden  text-primary">
        //     <div className="flex items-center whitespace-nowrap animate-marquee gap-12 py-6">
        //       {[...Array(8)].map((_, i) => (
        //         <h3 key={i} className="flex gap-12 font-bold text-7xl items-center">
        //           Real Jobs. Real Connections. <Sparkle size={38} />
        //         </h3>
        //       ))}
        //     </div>
        //   </div>
        //   {/* <div className="overflow-hidden -z-10 -rotate-3 absolute top-0 left-0 right-0 bg-[#007BFF] text-white">
        //     <div className="flex items-center whitespace-nowrap animate-marquee-left gap-12 py-6">
        //       {[...Array(8)].map((_, i) => (
        //         <h3 key={i} className="flex gap-12 font-bold text-5xl items-center">
        //           We Are Creative <Sparkle size={38} />
        //         </h3>
        //       ))}
        //     </div>
        //   </div> */}
        // </div>
    )
}

export default SlidingText
