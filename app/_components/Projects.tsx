import React from "react";
 
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Separator } from "@/components/ui/separator"

import Image from "next/image";

import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure} from "@nextui-org/react";
import { Element } from 'react-scroll';

const Projects = () => {
  const myProjects = [
    {title: 'Personal Website', description: 'A personal playground & portfolio website to test frameworks and learn new technologies.'},
    {title: 'Personal Website', description: 'A personal playground & portfolio website to test frameworks and learn new technologies.A personal playground & portfolio website to test frameworks and learn new technologies.'},
    {title: 'Personal Website', description: 'A personal playground & portfolio website to test frameworks and learn new technologies.A personal playground & portfolio website to test frameworks and learn new technologies.A personal playground & portfolio website to test frameworks and learn new technologies.'},
    {title: 'Personal Website', description: 'A personal playground & portfolio website to test frameworks and learn new technologies.A personal playground & portfolio website to test frameworks and learn new technologies.A personal playground & portfolio website to test frameworks and learn new technologies.A personal playground & portfolio website to test frameworks and learn new technologies.'}, 
  ];

  const {isOpen, onOpen, onOpenChange} = useDisclosure();

  return (
    <Element name="projects" className="h-full lg:h-screen flex flex-col items-center">
      <div className="flex flex-col items-center gap-4 mt-20">
        <span className="text-5xl font-bold font-sans">My Projects</span>
      </div>
      <div className="flex justify-center items-center p-20">
        <Carousel
          opts={{
            align: "start",
          }}
        >
          <CarouselContent>
            {myProjects.map((project: any, i: number) => (
              <CarouselItem key={i} className="pl-1 md:basis-1/2 lg:basis-1/3 w-[100px] md:w-full">
                  <Card className="flex flex-col justify-between h-full border-0 bg-light-mode-card text-white dark:bg-[#222222]">
                    <CardContent className="flex flex-col items-center justify-center p-10">
                      <div className="p-1 font-sans text-xl font-semibold mb-10">
                        {project.title}
                      </div>
                      <div className="text-sm text-center">
                        {project.description}
                      </div>
                    </CardContent>
                    <CardFooter className="w-full">
                      <Button onPress={onOpen} className="w-full">Read</Button>
                        <Modal className="h-2/3" isOpen={isOpen} onOpenChange={onOpenChange} size="4xl">
                          <ModalContent className="bg-light-mode-bg dark:bg-[#202020] overflow-auto max-h-svh">
                            {(onClose) => (
                              <>
                                <ModalHeader className="flex flex-col gap-1 items-center">{project.title}</ModalHeader>
                                <ModalBody>
                                  <div className="flex flex-col items-center">
                                    <div className="bg-light-mode-bg h-20 dark:bg-[#2a2a2a] w-full p-5 rounded-lg flex justify-center items-center gap-x-10">
                                      <div className="flex flex-col items-center">
                                        <div>Project Type</div>
                                        <div>Web</div>
                                      </div>
                                      <Separator orientation="vertical" />
                                      <div className="flex flex-col items-center">
                                        <div>Core Framework</div>
                                        <div>React</div>
                                      </div>
                                      <Separator orientation="vertical"/>
                                      <div className="flex flex-col items-center">
                                        <div>Date</div>
                                        <div>August 2024</div>
                                      </div>
                                    </div>
                                    <div className="mt-10">
                                    My main purpose of building this website was learning new frameworks. Those new frameworks are mainly Redux, SCSS, GraphQL and Jest. So far I learned Redux and SCSS quite good but GraphQL and Jest are not used yet. The side purposes are not getting rusted and learning new implementation techniques while developing. At this project I used react-redux-typescript boilerplate and modularized the main sections. One of my mistake for this project was selecting ReactJS. I was already experienced at ReactJS, I would select NextJS to learn new one. In this project the frameworks and libraries I used are ReactJS, Redux, Typescript, SASS (SCSS), Webpack, React-Helmet, react-router-domV6.4, React-Icons, SwiperV8.4, Google Analytics 4, React-Cookie, React-Hook-FormV7.3, React-Tooltip. As the WebStorm's statistic plugin says I wrote more than 4000 lines of code so far (scss, tsx and ts files). I built this website to learn new frameworks and libs, getting better at clean code and kiss, solid and dry principles, learning new coding techniques and lastly creating a portfolio like website for my future career.
                                    </div>
                                    <div className="mt-10">
                                      <Carousel className="max-h-[500px]">
                                        <CarouselContent className="max-h-[500px]">
                                          <CarouselItem>
                                            <img src="/static/media/can.png" className="w-full" alt=""></img>
                                          </CarouselItem>
                                          <CarouselItem>
                                            <img src="/static/media/can.png" className="w-full" alt=""></img>
                                          </CarouselItem>
                                          <CarouselItem>
                                            <img src="/static/media/can.png" className="w-full" alt=""></img>
                                          </CarouselItem>
                                          <CarouselItem>
                                            <img src="/static/media/can.png" className="w-full" alt=""></img>
                                          </CarouselItem>
                                          <CarouselItem>
                                            <img src="/static/media/can.png" className="w-full" alt=""></img>
                                          </CarouselItem>
                                          <CarouselItem>
                                            <img src="/static/media/can.png" className="w-full" alt=""></img>
                                          </CarouselItem>
                                        </CarouselContent>
                                        <CarouselPrevious className="absolute left-0 top-1/2 transform translate-x-1/2 -translate-y-1/2" />
                                        <CarouselNext className="absolute right-0 top-1/2 transform -translate-x-1/2 -translate-y-1/2" />
                                      </Carousel>
                                    </div>
                                  </div>
                                </ModalBody>
                                <ModalFooter>
                                </ModalFooter>
                              </>
                            )}
                          </ModalContent>
                        </Modal>
                    </CardFooter>
                  </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </Element>
  );
};

export default Projects;
