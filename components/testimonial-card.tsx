import Image from 'next/image';
import React from 'react'

const TestimonialCard = ({ data }: any) => {
    return (
        <div className="bg-white w-[340px] shrink-0 rounded-2xl p-6 shadow-sm hover:shadow-lg transition-shadow flex flex-col justify-between">
            <p className="text-sm leading-relaxed text-primary mb-6">
                “{data.feedback}”
            </p>

            <div className="flex items-center gap-3">
                <Image
                    src="/images/user-image.jpg"
                    alt={data.name}
                    width={48}
                    height={48}
                    className="rounded-full object-cover"
                />
                <div>
                    <h4 className="font-semibold text-sm text-primary">
                        {data.name}
                    </h4>
                    <p className="text-xs text-primary/70">
                        {data.role} · {data.company}
                    </p>
                </div>
            </div>
        </div>
    );
};


export default TestimonialCard
