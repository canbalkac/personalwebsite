'use client'
import Link from "next/link"
import { ModeToggle } from "./DarkModeTogal"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { useState, useEffect } from "react"
import { Link as ScrollLink, Element, Events, scrollSpy } from "react-scroll"

const sections = [
  { id: 'about', title: 'About Me' },
  { id: 'skills', title: 'Skills' },
  { id: 'projects', title: 'Projects' },
  { id: 'contact', title: 'Contact Me' },
];

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('about');

  useEffect(() => {
    Events.scrollEvent.register('begin', function () {
      console.log("begin", arguments);
    });

    Events.scrollEvent.register('end', function () {
      console.log("end", arguments);
    });

    scrollSpy.update();

    return () => {
      Events.scrollEvent.remove('begin');
      Events.scrollEvent.remove('end');
    };
  }, []);

  return (
    <>
      <div className="fixed hidden lg:flex flex-col justify-center items-center h-full w-[220px] bg-light-mode-card dark:bg-neutral-900 outline outline-1 outline-gray-300 dark:outline-gray-700">
        <div className="mt-auto">
          <div className="mb-10 font-bold text-6xl">C</div>
          {sections.map((section) => (
            <div className="mb-10" key={section.id}>
              <ScrollLink
                activeClass="active"
                to={section.id}
                spy={true}
                smooth={true}
                offset={-50}
                duration={500}
                className={`${activeSection === section.id ? 'font-extrabold' : ''}`}
                onSetActive={() => setActiveSection(section.id)}
              >
                {section.title}
              </ScrollLink>
            </div>
          ))}
        </div>
        <div className="mt-auto">
          <ModeToggle />
        </div>
      </div>
      <div className="h-[100px] bg-light-mode-card dark:bg-neutral-900 w-screen lg:hidden outline outline-1 p-4 flex justify-between items-center mb-5">
        <div className="font-bold text-3xl">C</div>
        <div className="flex gap-5">
          <div className="mt-3"><ModeToggle /></div>
          <Sheet key={"left"}>
            <SheetTrigger>Open</SheetTrigger>
            <SheetContent side={"left"} className="bg-light-mode-bg dark:bg-stone-800 h-full bg-opacity-70 dark:bg-opacity-70">
              <SheetHeader>
                <SheetTitle><div className="font-bold text-3xl mb-20 text-white mt-10">C</div></SheetTitle>
                <SheetDescription className="flex flex-col justify-start items-start">
                  {sections.map((section) => (
                    <div className="mb-10 text-2xl text-white" key={section.id}>
                      <ScrollLink
                        activeClass="active"
                        to={section.id}
                        spy={true}
                        smooth={true}
                        offset={-50}
                        duration={500}
                        className={`font-bold ${activeSection === section.id ? 'text-xl' : ''}`}
                        onSetActive={() => setActiveSection(section.id)}
                      >
                        {section.title}
                      </ScrollLink>
                    </div>
                  ))}
                </SheetDescription>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </div>
      </div>
      <div className="hidden">
          {sections.map((section) => (
            <Element name={section.id} key={section.id} className="section">
              <h2>{section.title}</h2>
            </Element>
          ))}
        </div>
    </>
  );
}

export default Navbar;
