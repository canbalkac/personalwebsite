import { Button } from "@/components/ui/button";
import { Element } from 'react-scroll'

const AboutMe = () => {
  return (
    <Element name="about" className="flex justify-center items-center h-full lg:h-screen p-10 lg:max-w-[85%]">
      <div className="relative bg-light-mode-card dark:bg-neutral-900 p-20 rounded-lg">
        <div className="mb-5 absolute w-[100px] h-[100px] bg-[#daccb9] dark:bg-[#413d3c] rounded-full top-5 sm:right-5 transform translate-x-1/2 -translate-y-1/2">
          <img
            className="w-[96px] h-[96px] absolute rounded-full transform top-0.5 left-0.5"
            src="/static/media/can.png"
            alt=""
          />
        </div>
        <p className="mb-5">
        I am Can <span className="text-green-600 font-bold">Balkaç</span>
        </p>
        <p className="font-bold sm:text-3xl md:text-4xl lg:text-5xl mb-5">
        Full Stack Web Developer
        </p>
        <p className="text-[#e6ded3] dark:text-[#afafaf] text-sm leading-7 max-width-[%75]">
          Welcome to my website, I am Can Balkaç and I'm senior student at Near East University of Software Engineer department.
          I am not currently working for a company, so I am open to any kind of job offer. My main interest is Web Development bu i'm willing to learn new platforms and technologies.
          Trying to push myself forward as much as possible and keep working on personal projects. I will try to represent myself and demonstrate my personal works.
        </p>
        <div className="flex mt-10 gap-2">
          <div>
            <Button className="w-full bg-light-mode-bg hover:bg-[#86745a] dark:bg-black dark:hover:bg-neutral-800 dark:text-white">Contact Me</Button>
          </div>
          <div>
          <a href="/static/media/canbalkacv.pdf" target="_blank" rel="noopener noreferrer"><Button className="w-full bg-light-mode-bg hover:bg-[#86745a] dark:bg-black dark:hover:bg-neutral-800 dark:text-white">Resume</Button></a>
          </div>
        </div>
      </div>
    </Element>
  );
};

export default AboutMe;
