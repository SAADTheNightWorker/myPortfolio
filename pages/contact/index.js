//components
import Circles from "../../components/Circles";

//icons
import { BsArrowRight } from "react-icons/bs";

//framer
import { motion } from "framer-motion";

//varient
import { fadeIn } from "../../variants";
import Link from "next/link";

const Contact = () => {
  return (
    <div className="h-full bg-primary/30">
      <div
        className="container mx-auto text-center py-32 xl:text-left flex items-center
      justify-center h-full"
      >
        {/* text & form */}
        <div className="flex flex-col w-full max-w-[700px]">
          {/* {text} */}

          <motion.h2
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2 text-center mb-12"
          >
            Let's <span className="text-accent">connect.</span>
          </motion.h2>

          {/* {form} */}
          <motion.form
            variants={fadeIn("up", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="flex-1 flex flex-col gap-6 w-full mx-auto "
          >
            <div className="flex gap-x-6 w-full">
              <input type="text" placeholder="Name" className="input" />
              <input type="text" placeholder="Subject" className="input" />
            </div>
            <input type="text" placeholder="Email" className="input" />
            <textarea placeholder="message" className="textarea"></textarea>
            <button
              className="btn rounded-full border border-white/50 max-w-[170px]
              px-8 transition-all duration-300 flex items-center justify-center overflow-hidden
             hover:border-accent group"
            >
              <span
                className="group-hover:translate-y-[120%] group-hover:opacity-0 
               transition-all duration-500"
              >
                Let' talk
              </span>
              <BsArrowRight
                className="-translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0
              group-hover:opacity-100 transition-all duration-300 absolute text-[22px]"
              />
            </button>
            <div className="flex gap-x-6 border border-accent/20 rounded-lg px-10 py-4 mx-auto">
              <h2 className="text-accent animate-pulse">Email Me</h2>
            <Link href="mailto:saadsahib398@gmail.com">saadsahib398@gmail.com</Link>
            </div>
          </motion.form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
