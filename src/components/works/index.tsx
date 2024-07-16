import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    title: "Pi chat v2",
    description:
      "A social networking site that makes it easy for you to communicate with other students in my college",
    image: "/project1.png",
    stack:
      "Next js, redux toolkit, swr, pusher, next-auth, postgresql, prisma ",
    links: {
      github: "https://github.com/Pinchedmon/pi-chat-v2",
    },
  },
  {
    title: "Practica app",
    description: "Сайт для прохождения практик студентов вузов",
    image: "/project2.jpg",
    stack:
      "Next js, trpc, zustand, swr, pusher, next-auth, postgresql, prisma, docker",
    links: {
      github: "https://github.com/embersee/scholar",
    },
  },
  {
    title: "React Kanban",
    description:
      "Сайд для своей продуктивности и планирования (Делал вместе с @Ibizza)",
    image: "/project3.png",
    stack: "react, redux toolkit, firebase",
    links: {
      github: "https://github.com/ib1zza/react-kanban",
      site: "https://react-kanban-delta.vercel.app/",
    },
  },
  {
    title: "Pi-Libria",
    description: "Сайт по просмотру аниме (нужен VPN)",
    image: "/project4.png",
    stack: "react, firebase",
    links: {
      github: "https://github.com/Pinchedmon/Pi-Libria",
      site: "https://pi-libria.vercel.app/",
    },
  },
  {
    title: "Pi-Flix",
    description: "Сайт каталог сайтов (нужен VPN)",
    image: "/project5.png",
    stack: "react, firebase ",
    links: {
      github: "https://github.com/Pinchedmon/Pi-Flix",
      site: "https://pi-flix.vercel.app/",
    },
  },
];

const Works = () => {
  return (
    <section className="text-white z-10 gap-[20px] flex w-full h-[80vh]">
      <div className="border border-white/10 bg-black/60 flex-col items-center justify-between align-center h-full w-full rounded-3xl p-[40px]">
        <Carousel className="flex items-center justify-between align-center w-full h-full">
          <CarouselContent>
            {projects.map((project, index) => (
              <CarouselItem key={index}>
                <div className="p-1">
                  <Card>
                    <CardContent className="flex flex-col items-center justify-center p-6">
                      <Image
                        width={300}
                        height={0}
                        src={project.image}
                        alt={project.title}
                        className="w-[300px] rounded-2xl mb-4"
                      />
                      <h3 className="text-2xl  font-semibold">
                        {project.title}
                      </h3>
                      <p className="text-lg">{project.description}</p>
                      <p className="text-lg mb-2">Stack: {project?.stack}</p>
                      <div className="flex gap-4">
                        {project.links?.github && (
                          <Link
                            href={project?.links?.github as string}
                            className="bg-orange px-2 py-1 rounded-xl"
                          >
                            github
                          </Link>
                        )}
                        {project.links?.site && (
                          <Link
                            href={project?.links?.site as string}
                            className="bg-orange px-2 py-1 rounded-xl"
                          >
                            site
                          </Link>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
};

export default Works;
