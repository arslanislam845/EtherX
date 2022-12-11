import React from 'react'
import CarouselGigs from "./CarouselGigs";
const MakeOffer = () => {
    return (
        <div className='flex flex-row w-full h-[65vh] py-10 md:pb-30' 
        style={{ backgroundColor: "#F9FAFB" }}
        >

            <div className="w-[40%] text-center px-12 mt-6">
                <h1 className="text-5xl pt-7 font-black tracking-tight text-black sm:text-5xl md:text-5xl">
                    <span className="block xl:inline">Hi,</span>{" "}
                    <span className="block text-[#2563EB] xl:inline">
                        {" "}
                       Arslan Islam
                    </span>{" "}
                    <br />
                    <span className="block font-bold md:text-3xl mt-1">
                       Here What you need to build your website
                    </span>
                </h1>
                <p className="mx-auto mt-3 max-w-md text-base text-black sm:text-lg md:mt-5 md:max-w-3xl md:text-xl ">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam sit suscipit nulla ullam maxime, esse debitis, quae consectetur minima impedit rem error facilis.
                </p>
                <div className="mx-auto mt-5 max-w-md sm:flex sm:justify-center md:mt-8">
                    <div className="rounded-md shadow-md">
                        <a
                            href="/"
                            className="flex w-full items-center justify-center rounded-md border border-transparent bg-[#2563EB] px-8 py-2 text-base font-semibold text-white tracking-wider md:py-2 md:px-10 md:text-lg hover:bg-[#4e80ea]"
                        >
                            Explore
                        </a>
                    </div>
                </div>

            </div>
            <div className='w-[60%] '>
                <CarouselGigs />
            </div>
        </div>
    )
}

export default MakeOffer