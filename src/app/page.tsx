'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from 'next-themes';
import { Moon, Sun, ExternalLink } from 'lucide-react';
import Image from 'next/image';
import { toast, Toaster } from 'sonner';

// Project Data
const projects = [
  {
    id: 1,
    title: "Pink City Mouth Fresheners",
    description: "E-commerce Website",
    details:
      "An elegant e-commerce platform for Pink City Mouth Fresheners, showcasing products with a vibrant and engaging user interface.",
    url: "https://www.pinkcitymouthfresheners.com/",
    imageUrl: "/Pinkcity.png",
    type: "Desktop",
  },
  {
    id: 2,
    title: "Aethery",
    description: "E-commerce Website",
    details:
      "A conceptual mobile application focused on habit tracking and personal productivity with playful micro-interactions.",
    url: "#",
    imageUrl: "/Aethery.png",
    type: "Mobile",
  },
  {
    id: 3,
    title: "Unisphere",
    description: "Student and Faculty Portal for Universities",
    details:
      "An admin dashboard template built with React, and Tailwind CSS. Open-sourced for the community.",
    url: "https://play.google.com/store/search?q=unisphere&c=apps&hl=en_IN",
    imageUrl: "/Unisphere.png",
    type: "Desktop",
  },
 
  {
    id: 4,
    title: "Ygate Solutions",
    description: "Corporate Website",
    details:
      "A modern, professional website designed and developed for Ygate Solutions, featuring comprehensive service details and contact workflows.",
    imageUrl: "/YGateSolutions.png",
    url: "https://www.ygatesolutions.com/",
    type: "Desktop",
  },
];

export default function Home() {
  const [activeProject, setActiveProject] = useState(projects[0]);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [onCopy, setOnCopy] = useState(false);
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  return (
    <main className="overflow-x-clip lg:flex lg:min-h-screen lg:flex-col lg:justify-between">
      <div className="w-full px-[var(--page-padding)]">
        <div className="mx-auto w-full max-w-[var(--container-width)]">
          <div className="relative flex max-lg:flex-col max-lg:justify-center">
            {/* Left Column: Info and Project List */}
            <div className="min-w-[350px] lg:w-[40%] max-lg:contents">
              <header className="sticky top-0 z-50 mb-6 pt-[var(--top-offset)] max-lg:static max-lg:mb-6 max-lg:pt-12 bg-background/80 backdrop-blur-md pb-6 lg:bg-transparent lg:backdrop-blur-none max-lg:order-1">
                <div className="relative z-20 max-w-md">
                  <h1 className="mb-1 text-3xl lg:text-4xl leading-tight font-medium tracking-tight">
                    Sahil Thukran
                  </h1>
                  <h2 className="text-secondary max-w-xs text-lg lg:text-xl leading-relaxed tracking-tight mt-2">
                    Creative Web Developer. <br />
                    Crafting polished websites & applications.
                  </h2>
                </div>
              </header>

              {/* Project List */}
              <div className="relative z-90 flex flex-col gap-2 h-fit  w-full max-w-[400px] max-lg:order-3 -top-20 sm:top-0">
                {projects.map((project) => {
                  const isActive = activeProject.id === project.id;

                  return (
                    <button
                      key={project.id}
                      onMouseEnter={() => setActiveProject(project)}
                      onClick={() => setActiveProject(project)}
                      className={`relative flex w-full cursor-pointer flex-col items-start rounded-2xl px-5 py-4 transition-all duration-300 focus:outline-none ${
                        isActive
                          ? "bg-primary/5 dark:bg-primary/10 shadow-sm"
                          : "hover:bg-primary/5"
                      }`}
                    >
                      <h3
                        className={`text-lg font-medium tracking-tight transition-colors duration-300 ${isActive ? "text-primary" : "text-secondary"}`}
                      >
                        {project.title}
                      </h3>

                      <AnimatePresence>
                        {isActive && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="overflow-hidden"
                          >
                            <p className="mt-2 text-xs text-secondary/80 text-left">
                              {project.description}
                            </p>
                            <p className="mt-2 text-xs text-secondary leading-relaxed text-left">
                              {project.details}
                            </p>
                            {project.url !== "#" && (
                              <a
                                href={project.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="mt-3 flex items-center gap-1.5 text-xs font-medium text-primary hover:opacity-70 transition-opacity w-fit"
                              >
                                <span>See it live</span>
                                <ExternalLink size={14} />
                              </a>
                            )}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Right Column: Display Stage */}
            <div className="display-container lg:absolute top-0 bottom-0 right-0 lg:w-[55%] max-lg:w-full max-lg:order-2 max-lg:mb-12">
              <div className="display-inner lg:sticky top-0 flex w-full flex-col items-center justify-start pt-12 lg:pt-(--top-offset) lg:h-screen ">
                <div className="relative flex w-full max-w-[550px] flex-col items-center ">
                  {/* Display Screen */}
                  <div className="relative z-10 flex w-full flex-col items-center">
                    <div className="relative z-2 w-full rounded-(--display-radius) bg-neutral-900 pt-[58%] ring-inset dark:ring-[1px] dark:ring-neutral-700/20 overflow-hidden">
                      {/* <div className="relative w-full rounded-[var(--display-radius)] bg-neutral-900 dark:bg-black pt-[62%] ring-1 ring-inset ring-neutral-700/20 shadow-2xl overflow-hidden"> */}
                      {/* Top Browser Bar */}

                      {/* Display Content Area */}
                      <div className="absolute top-0 m-2 rounded-(--inner-display-radius) inset-x-0 bottom-0 overflow-hidden">
                        <Image
                          src={
                            mounted && theme === "light"
                              ? "/light.avif"
                              : "/dark-v4.avif"
                          }
                          fill
                          sizes="(max-width: 768px) 100vw, 550px"
                          style={{ width: "100%", height: "100%" }}
                          alt="display background"
                          className="object-cover object-top w-full h-full"
                        />
                        <div
                          className={`mx-auto -translate-y-1/2 top-1/2 w-11/12 h-11/12 p-2 relative rounded-(--inner-display-radius) overflow-hidden  bg-white/20 backdrop-blur-sm `}
                        >
                          <AnimatePresence mode="wait">
                            <motion.div
                              key={activeProject.id}
                              initial={{
                                opacity: 0.5,
                                filter: "blur(8px)",
                                // scale: 0.95,
                              }}
                              animate={{
                                opacity: 1,
                                filter: "blur(0px)",
                                // scale: 1,
                              }}
                              exit={{
                                opacity: 0.5,
                                filter: "blur(2px)",
                                // scale: 0.95,
                              }}
                              transition={{
                                duration: 0.1,
                                // ease: [0.16, 1, 0.3, 1],
                                type: "tween",
                                ease: "linear",
                              }}
                              className={`relative rounded-[2px]  inset-0 w-full h-full   flex items-center justify-center`}
                            >
                              <Image
                                src={
                                  activeProject.imageUrl || "/placeholder.png"
                                }
                                fill
                                sizes="(max-width: 768px) 75vw, 412px"
                                style={{ width: "100%", height: "100%" }}
                                alt={`${activeProject.title} preview`}
                                className="object-cover object-top  w-full h-full rounded-(--inner-display-radius) "
                              />
                            </motion.div>
                          </AnimatePresence>
                        </div>
                      </div>
                    </div>

                    {/* Display Stand Base */}
                    <div className="relative z-0 -mt-1 flex flex-col items-center ">
                      <Image
                        src={
                          mounted && theme === "light"
                            ? "/display-stand-light.avif"
                            : "/display-stand-dark-v2.avif"
                        }
                        width={550}
                        height={16}
                        style={{ width: "full", height: "auto" }}
                        alt="screen stand"
                        className="w-full h-fit"
                      />
                      <Image
                        src={
                          mounted && theme === "light"
                            ? "/keyboard.avif"
                            : "/keyboard-dark.avif"
                        }
                        width={400}
                        height={16}
                        style={{ width: "auto", height: "auto" }}
                        alt="screen stand"
                      />
                      <div className="relative flex flex-col items-start h-fit w-full">
                        <div className="h-20 w-full absolute bottom-28  ml-12 bg-linear-to-tr from-neutral-400/10 via-background to-background  -z-10 -skew-x-50" />
                        <div className="w-full  h-28 bg-linear-to-br from-neutral-500/20 via-background via-50% to-background " />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Fixed Bottom Footer / Controls */}
      <div className="fixed bottom-0 left-0 right-0 px-6 py-2  flex items-center justify-end gap-10 z-100 pointer-events-none bg-background/20 backdrop-blur-xs border-t border-blue-800/10">
        <div className="pointer-events-auto flex items-center gap-6 text-xs font-medium text-secondary">
          <Toaster />
          <button
            className="hover:text-primary transition-colors"
            onClick={() => {
              setOnCopy(true);
              navigator.clipboard.writeText("thukran.sahil26@gmail.com");
              setTimeout(() => {
                setOnCopy(false);
                toast("Email Copied!")
              }, 1200);
            }}
          >
            {onCopy ? "Copied!" : "Email"}
          </button>
          <a
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition-colors"
            href="https://github.com/Sahilthukran2612"
          >
            GitHub
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition-colors"
            href="https://www.linkedin.com/in/sahil-kumar-046a19296/"
          >
            LinkedIn
          </a>
        </div>

        <div className="pointer-events-auto flex h-9 items-center gap-1 rounded-lg  p-1 backdrop-blur-md border border-black/5 dark:border-white/5">
          <button
            onClick={() => setTheme("light")}
            className={`flex size-7 cursor-pointer items-center justify-center rounded-lg transition-colors ${mounted && theme === "light" ? "bg-white shadow-sm text-black" : "text-tertiary hover:text-primary"}`}
            aria-label="Switch to light theme"
          >
            <Sun size={14} />
          </button>
          <button
            onClick={() => setTheme("dark")}
            className={`flex size-7 cursor-pointer items-center justify-center rounded-lg transition-colors ${mounted && theme === "dark" ? "bg-neutral-700 shadow-sm text-white" : "text-tertiary hover:text-primary"}`}
            aria-label="Switch to dark theme"
          >
            <Moon size={14} />
          </button>
        </div>
      </div>
    </main>
  );
}
