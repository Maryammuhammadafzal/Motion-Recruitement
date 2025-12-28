import React from 'react'

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
                    <div className=' w-full h-auto px-6 py-3 rounded-2xl'></div>
                    {featuredData.slice(1, 5).map((data, index) => (
                        <div key={index} className='bg-white shadow-sm shadow-foreground/50 hover:shadow-lg hover:shadow-foreground flex justify-between  rounded-2xl p-6'>
                            <div className='flex flex-col'>
                                <div className="flex justify-center font-medium text-sm text-primary w-fit gap-3 items-center mb-6 ">
                                    {<data.icon />} Airbnb
                                    {/* <svg className="w-7 h-7 text-background" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 0l-2 2a1 1 0 101.414 1.414L8 10.414l1.293 1.293a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg> */}
                                </div>
                                <h3 className="mb-2 text-xl font-medium text-primary">{data.title}</h3>
                                {/* <p className="text-primary/70 text-sm">{data.description}</p> */}
                                <div className='flex w-auto'>
                                    {data.skills?.map((skill, index) => (
                                        <Badge key={index} className='px-4 mr-3 py-2 my-3 bg-background text-primary border border-primary/50 text-sm'> {skill}</Badge>
                                    ))}
                                </div>
                            </div>
                            <div className='w-fit h-fit'>
                                <p className='text-xl my-3 text-primary/50'><span className='text-xl text-primary'>${data.salary}</span>/year</p>
                                <p className='text-sm text-foreground'>{data.location}</p>
                            </div>
                        </div>
                    ))}

                </div>
            </div>
        </section>
  )
}

export default FaqSection
