import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaWordpress,
  FaFigma,
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiFramer,
  SiAdobexd,
  SiAdobephotoshop,
} from "react-icons/si";

//  data
const aboutData = [
  {
    title: "skills",
    info: [
      {
        title: "Web Development",
        icons: [
          FaHtml5,
          FaCss3,
          FaJs,
          FaReact,
          SiNextdotjs,
          SiFramer,
          FaWordpress,
        ],
      },
      {
        title: "UI/UX Design",
        icons: [FaFigma, SiAdobexd, SiAdobephotoshop],
      },
    ],
  },
  {
    title: "awards",
    info: [
      {
        title: "Webby Awards - Honoree",
        stage: "2011 - 2012",
      },
      {
        title: "Adobe Design Achievement Awards - Finalist",
        stage: "2009 - 2010",
      },
    ],
  },
  {
    title: "experience",
    info: [
      {
        title: "UX/UI Designer - XYZ Company",
        stage: "2012 - 2023",
      },
      {
        title: "Web Developer - ABC Agency",
        stage: "2010 - 2012",
      },
      {
        title: "Intern - DEF Corporation",
        stage: "2008 - 2010",
      },
    ],
  },
  {
    title: "credentials",
    info: [
      {
        title: "Web Development - ABC University, LA, CA",
        stage: "2011",
      },
      {
        title: "Computer Science Diploma - AV Technical Institute",
        stage: "2009",
      },
      {
        title: "Certified Graphic Designer - ABC Institute, Los Angeles, CA",
        stage: "2006",
      },
    ],
  },
];

// components
import Avatar from "../../components/Avatar";
import Circles from "../../components/Circles";
import { useState } from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants"; // Adjust the path as necessary

//counter
import CountUp from "react-countup";
import Link from "next/link";

const About = () => {
  const [index, setIndex] = useState(0);
  return (
    <div className="h-full bg-primary/30 py-32 text-center xl:text-left ">
      {/* <Circles /> */}
      {/* avatar img */}
      <motion.div
        variants={fadeIn("right", 0.2)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="hidden xl:flex absolute bottom-0 -left-[370px]"
      >
        <div className="w-[700px] relative top-40">
          <Avatar />
        </div>
      </motion.div>
      <div className="container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6">
        {/* text */}
        <div className="flex-1 flex flex-col justify-center">
          <motion.h2
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2"
          >
            Captibating <span className="text-accent">stories</span> birth
            magnificent
          </motion.h2>
          <motion.p
            variants={fadeIn("right", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0"
          >
            10 year ago, I began freelancing as devloper. Since then, I've done
            remote work for agencies, counsulted for startups, and collborated
            on digatal products for business and consumer use.
          </motion.p>
          {/* counters */}
          <div className="hidden md:flex md:max-w-xl xl:max-w-none mx-auto xl:mx-0 mb-8">
            <motion.div
              variants={fadeIn("right", 0.6)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="flex flex-1 gap-x-6"
            >
              <div>
                {/* experience */}
                <div
                  className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10
            after:absolute after:top-0 after:right-0"
                >
                  <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                    <CountUp start={0} end={10} duration={5} /> +
                  </div>
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Year of experience
                </div>
              </div>

              <div>
                {/* client */}
                <div
                  className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10
            after:absolute after:top-0 after:right-0"
                >
                  <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                    <CountUp start={0} end={250} duration={5} /> +
                  </div>
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Satisfied clients
                </div>
              </div>

              <div>
                {/* Projects */}
                <div
                  className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10
            after:absolute after:top-0 after:right-0"
                >
                  <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                    <CountUp start={0} end={650} duration={5} /> +
                  </div>
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Finished projects
                </div>
              </div>

              <div>
                {" "}
                {/* awards */}
                <div className="relative flex-1">
                  <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                    <CountUp start={0} end={8} duration={5} /> +
                  </div>
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Winning awards
                </div>
              </div>
            </motion.div>
          </div>
        </div>
        {/* info */}

        <motion.div
          variants={fadeIn("left", 0.6)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="flex flex-col w-full xl:max-w-[48%] h-[480px] max-sm:scale-75"
        >
          <div className="flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4">
            {aboutData.map((item, itemIndex) => {
              return (
                <div
                  key={itemIndex}
                  className={`${
                    index === itemIndex &&
                    "text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300"
                  } cursor-pointer capitalize xl:text-lg relative 
              after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0`}
                  onClick={() => setIndex(itemIndex)}
                >
                  {item.title}
                </div>
              );
            })}
          </div>

          <div className="py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start">
            {aboutData[index].info.map((item, itemIndex) => {
              return (
                <div
                  key={itemIndex}
                  className="flex-1 flex flex-col md:flex-row max-w-max gap-y-2 
                  items-center text-white/60"
                >
                  {/* title */}
                  <div className="font-light mb-2 md:mb-0">{item.title}</div>
                  <div className="hidden md:flex ">-</div>
                  <div>{item.stage}</div>
                  <div className="flex gap-x-4">
                    {/* icon */}
                    {item.icons?.map((Icon, iconIndex) => (
                      <div key={iconIndex} className="text-2xl text-white">
                        <Icon />
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>

        <Link
          className="border absolute left-8 bottom-20 py-3 px-12
           hover:text-accent duration-200 hover:border-accent/20
           mb-36 xl:mb-0 max-sm:hidden"
          href="/dummy.pdf"
          target="_blank"
          download={true}
        >
          Resume
        </Link>
      </div>
    </div>
  );
};

export default About;
