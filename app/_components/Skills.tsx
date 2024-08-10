import Image from "next/image"
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
import SkillsCard from "./SkillsCard";
import Autoplay from "embla-carousel-autoplay";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import { SiCsharp, SiExpress, SiGit, SiJavascript, SiJquery, SiMongodb, SiPython, SiRedux, SiTailwindcss, SiTypescript } from "react-icons/si";
import { FaCss3Alt, FaHtml5, FaNodeJs, FaPhp, FaReact } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import { Element } from 'react-scroll';

/* <SkillsCard 
logo={"react.png"}
title={"react.js"}
detail={"detail"}
/> */

const Skills = () => {

    useEffect(() => {
        AOS.init({
            duration:800,
            once:true,
        })
    }, []) 

    return (
    <Element name="skills" className="flex flex-col h-full lg:h-screen pr-10 mb-10 lg:mb-0">

        <div className="flex flex-col items-center gap-4 mt-5">
            <span className="text-5xl font-bold font-sans">My Skills</span>
            <span className="text-[#afafaf] text-sm">My Core Skills</span>
        </div>

        <div className="rounded h-[100%] w-[100%] mt-12 ml-[20px] mr-[20px]">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-stretch gap-4 mr-auto ml-auto mb-[40px]">

                <div data-aos="fade-right" className="flex flex-col items-center bg-[#eedbcc] dark:bg-[#222222] rounden-lg p-4">
                    <div className="flex flex-row justify-center p-6 relative border border-[#a0816c] dark:border-[#5a5a5a] rounded-full">
                        <div>
                            <div className="bg-[#a0816c] dark:bg-[#5a5a5a] rounded-full h-[15px] w-[15px] absolute top-[50px] -left-[7px]"></div>
                            <div className="bg-[#a0816c] dark:bg-[#5a5a5a] rounded-full h-[15px] w-[15px] absolute top-[50px] -right-[7px]"></div>
                        </div>
                        <img className="w-[70px] h-[70px]" alt="" src="/static/media/react.png"></img>
                    </div>
                    <p className="text-lg text-[#61dafb] font-semibold mb-8 text-center">React.js</p>
                    <p className="text-[#625446] dark:text-[#afafaf] text-sm leading-5 text-center">
                        React is my favorite frontend framework and Im still learning about it. It is very deep and enjoyable. I mostly used hooks but also have a limited knowledge to old class components.
                    </p>
                </div>

                <div data-aos="fade-right" className="flex flex-col items-center bg-[#eedbcc] dark:bg-[#222222] rounden-lg p-4">
                    <div className="flex flex-row justify-center p-6 relative border border-[#a0816c] dark:border-[#5a5a5a] rounded-full">
                        <div>
                            <div className="bg-[#a0816c] dark:bg-[#5a5a5a] rounded-full h-[15px] w-[15px] absolute top-[50px] -left-[7px]"></div>
                            <div className="bg-[#a0816c] dark:bg-[#5a5a5a] rounded-full h-[15px] w-[15px] absolute top-[50px] -right-[7px]"></div>
                        </div>
                        <img className="w-[70px] h-[70px]" alt="" src="/static/media/node.png"></img>
                    </div>
                    <p className="text-lg text-[#519b41] font-semibold mb-8 text-center">Node.js</p>
                    <p className="text-[#625446] dark:text-[#afafaf] text-sm leading-5 text-center">
                    I mostly used Node.JS on backend and the reason I like it is javascript. Express Server and JS puts it forward for me.
                    </p>
                </div>

                <div data-aos="fade-right" className="flex flex-col items-center bg-[#eedbcc] dark:bg-[#222222] rounden-lg p-4">
                    <div className="flex flex-row justify-center p-6 relative border border-[#a0816c] dark:border-[#5a5a5a] rounded-full">
                        <div>
                            <div className="bg-[#a0816c] dark:bg-[#5a5a5a] rounded-full h-[15px] w-[15px] absolute top-[50px] -left-[7px]"></div>
                            <div className="bg-[#a0816c] dark:bg-[#5a5a5a] rounded-full h-[15px] w-[15px] absolute top-[50px] -right-[7px]"></div>
                        </div>
                        <img className="w-[70px] h-[70px]" alt="" src="/static/media/html.png"></img>
                        <img className="w-[70px] h-[70px]" alt="" src="/static/media/css.png"></img>
                    </div>
                    <p className="text-lg text-[#61dafb] font-semibold mb-8 text-center"><span className="text-[#fe4d1c]">HTML</span><span className="text-[#afafaf]"> & </span><span className="text-[#028aca]">CSS</span></p>
                    <p className="text-[#625446] dark:text-[#afafaf] text-sm leading-5 text-center">
                    Everybody knows HTML and CSS are essential for web developers. Even most people finds them easy I think that knowing them deeply is important. I used TailwindCSS and SCSS so far and still in a learning progress.
                    </p>
                </div>
                <div data-aos="fade-right" className="flex flex-col items-center bg-[#eedbcc] dark:bg-[#222222] rounden-lg p-4">
                    <div className="flex flex-row justify-center p-6 relative border border-[#a0816c] dark:border-[#5a5a5a] rounded-full">
                        <div>
                            <div className="bg-[#a0816c] dark:bg-[#5a5a5a] rounded-full h-[15px] w-[15px] absolute top-[42px] -left-[7px]"></div>
                            <div className="bg-[#a0816c] dark:bg-[#5a5a5a] rounded-full h-[15px] w-[15px] absolute top-[42px] -right-[7px]"></div>
                        </div>
                        <img className="w-[50px] h-[50px] mr-5" alt="" src="/static/media/js.png"></img>
                        <img className="w-[50px] h-[50px]" alt="" src="/static/media/ts.png"></img>
                    </div>
                    <p className="text-lg text-[#61dafb] font-semibold mb-8 text-center"><span className="text-[#FFFF00] dark:text-[#f7df1e]">JavaScript</span><span className="text-[#afafaf]"> & </span><span className="text-[#007bcd]">TypeScript</span></p>
                    <p className="text-[#625446] dark:text-[#afafaf] text-sm leading-5 text-center">
                    JavaScript might be the reason why I love web. I love coding with JS and using ES6/7 features. At some point I had struggle with type definition and error handling and found TypeScript. TS is also beautiful but JS is still my favorite.
                    </p>
                </div>
                <div data-aos="fade-right" className="flex flex-col items-center bg-[#eedbcc] dark:bg-[#222222] rounden-lg p-4">
                    <div className="flex flex-row justify-center p-6 relative border border-[#a0816c] dark:border-[#5a5a5a] rounded-full">
                        <div>
                            <div className="bg-[#a0816c] dark:bg-[#5a5a5a] rounded-full h-[15px] w-[15px] absolute top-[50px] -left-[7px]"></div>
                            <div className="bg-[#a0816c] dark:bg-[#5a5a5a] rounded-full h-[15px] w-[15px] absolute top-[50px] -right-[7px]"></div>
                        </div>
                        <img className="w-[70px] h-[70px]" alt="" src="/static/media/mongo.png"></img>
                    </div>
                    <p className="text-lg text-[#599636] font-semibold mb-8 text-center">MongoDB</p>
                    <p className="text-[#625446] dark:text-[#afafaf] text-sm leading-5 text-center">
                    I prefer NoSQL over SQL in most situations. I can not say my favorite but MongoDB is my best so far. Frameworks like Mongoose works quite good and fast.
                    </p>
                </div>
                <div data-aos="fade-right" className="flex flex-col items-center bg-[#eedbcc] dark:bg-[#222222] rounden-lg p-4">
                    <div className="flex flex-row justify-center p-6 relative border border-[#a0816c] dark:border-[#5a5a5a] rounded-full">
                        <div>
                            <div className="bg-[#a0816c] dark:bg-[#5a5a5a] rounded-full h-[15px] w-[15px] absolute top-[50px] -left-[7px]"></div>
                            <div className="bg-[#a0816c] dark:bg-[#5a5a5a] rounded-full h-[15px] w-[15px] absolute top-[50px] -right-[7px]"></div>
                        </div>
                        <img className="w-[70px] h-[70px]" alt="" src="/static/media/php.png"></img>
                    </div>
                    <p className="text-lg text-[#787cb4] font-semibold mb-8 text-center">PHP</p>
                    <p className="text-[#625446] dark:text-[#afafaf] text-sm leading-5 text-center">
                        PHP is my first backend language ever. I work with php over 2 years. I used php over 5 projects. I love php.
                    </p>
                </div>
                <Carousel 
                    className="flex justify-center items-center bg-[#eedbcc] col-span-1 md:col-span-2 lg:col-span-3 dark:bg-[#222222] p-3 rounded-lg"
                    opts={{
                        loop: true
                    }}
                    plugins={[
                        Autoplay({
                          delay: 1700,
                        }),
                    ]}
                >
                    <CarouselContent>
                        <CarouselItem className="text-[#a0816c] dark:text-white basis-1/2 md:basis-1/6 lg:basis-1/12 text-6xl flex justify-center items-center"><SiGit /></CarouselItem>
                        <CarouselItem className="text-[#a0816c] dark:text-white basis-1/2 md:basis-1/6 lg:basis-1/12 text-6xl flex justify-center items-center"><SiMongodb /></CarouselItem>
                        <CarouselItem className="text-[#a0816c] dark:text-white basis-1/2 md:basis-1/6 lg:basis-1/12 text-6xl flex justify-center items-center"><FaReact /></CarouselItem>
                        <CarouselItem className="text-[#a0816c] dark:text-white basis-1/2 md:basis-1/6 lg:basis-1/12 text-6xl flex justify-center items-center"><FaHtml5 /></CarouselItem>
                        <CarouselItem className="text-[#a0816c] dark:text-white basis-1/2 md:basis-1/6 lg:basis-1/12 text-6xl flex justify-center items-center"><FaCss3Alt /></CarouselItem>
                        <CarouselItem className="text-[#a0816c] dark:text-white basis-1/2 md:basis-1/6 lg:basis-1/12 text-6xl flex justify-center items-center"><FaPhp /></CarouselItem>
                        <CarouselItem className="text-[#a0816c] dark:text-white basis-1/2 md:basis-1/6 lg:basis-1/12 text-6xl flex justify-center items-center"><SiJquery /></CarouselItem>
                        <CarouselItem className="text-[#a0816c] dark:text-white basis-1/2 md:basis-1/6 lg:basis-1/12 text-6xl flex justify-center items-center"><FaNodeJs  /></CarouselItem>
                        <CarouselItem className="text-[#a0816c] dark:text-white basis-1/2 md:basis-1/6 lg:basis-1/12 text-6xl flex justify-center items-center"><SiJavascript  /></CarouselItem>
                        <CarouselItem className="text-[#a0816c] dark:text-white basis-1/2 md:basis-1/6 lg:basis-1/12 text-6xl flex justify-center items-center"><SiTypescript  /></CarouselItem>
                        <CarouselItem className="text-[#a0816c] dark:text-white basis-1/2 md:basis-1/6 lg:basis-1/12 text-6xl flex justify-center items-center"><RiNextjsFill  /></CarouselItem>
                        <CarouselItem className="text-[#a0816c] dark:text-white basis-1/2 md:basis-1/6 lg:basis-1/12 text-6xl flex justify-center items-center"><SiExpress  /></CarouselItem>
                        <CarouselItem className="text-[#a0816c] dark:text-white basis-1/2 md:basis-1/6 lg:basis-1/12 text-6xl flex justify-center items-center"><SiTailwindcss  /></CarouselItem>
                        <CarouselItem className="text-[#a0816c] dark:text-white basis-1/2 md:basis-1/6 lg:basis-1/12 text-6xl flex justify-center items-center"><SiPython /></CarouselItem>
                        <CarouselItem className="text-[#a0816c] dark:text-white basis-1/2 md:basis-1/6 lg:basis-1/12 text-6xl flex justify-center items-center"><SiCsharp  /></CarouselItem>
                        <CarouselItem className="text-[#a0816c] dark:text-white basis-1/2 md:basis-1/6 lg:basis-1/12 text-6xl flex justify-center items-center"><SiRedux  /></CarouselItem>
                    </CarouselContent>
                </Carousel>
            </div>
        </div>
    </Element>
  )
}

export default Skills