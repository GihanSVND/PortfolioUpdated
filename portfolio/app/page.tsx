"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Home() {
  const ref = useRef(null);

  // Get the scroll progress
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Apply a faster scrolling effect (120% speed)
  const y = useTransform(scrollYProgress, [0, 1], [0, -900]); // Adjust -500 to fine-tune the effect

  return (
    <div>
      <div className="relative flex justify-center items-center h-[700px] sm:h-[700px] md:h-[900px] bg-[#151515]">
        <div>
          <h1 className="text-center text-[100px] sm:text-[160px] md:text-[320px] font-bold font-[Poppins] relative z-0 translate-y-[-150px] sm:translate-y-[-250px] md:translate-y-[-250px]">
            THINKER
          </h1>
          <motion.img
            src="/head.png"
            alt="Head"
            style={{ y }} // Apply parallax effect
            initial={{ opacity: 0, filter: "blur(120px)" }}
            animate={{ opacity: 1, filter: "blur(0px)" }}
            transition={{ duration: 1 }}
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 translate-y-[200px] md:translate-y-[-50px] z-10 w-[300px] h-[400px] sm:w-[400px] sm:h-[533px] md:w-[600px] md:h-[800px]"
          />
        </div>
      </div>
      <div className="bg-[#151515]">
        <motion.h2
          initial={{ opacity: 0, filter: "blur(80px)" }}
          whileInView={{ opacity: 1, filter: "blur(0px)" }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true, margin: "-50px 0px" }} // Ensures it animates only once when in view
          className="font-[Inter] text-center font-medium text-[50px] sm:text-[60px] md:text-[80px] leading-[1.1] text-white"
        >
          I&#39;m a <span className="font-[against] font-light">Designer</span>{" "}
          <br />
          who Create the <br />
          <span className="font-[Neuropolitical] font-light">Future</span>{" "}
          <span className="font-[Zapfino] font-light">Today</span>
        </motion.h2>

        <motion.h3
          initial={{ opacity: 0, filter: "blur(80px)" }}
          whileInView={{ opacity: 1, filter: "blur(0px)" }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          viewport={{ once: true, margin: "-50px 0px" }}
          className=" py-[25px] font-[Poppins] text-center sm:tracking-[20px]"
        >
          So You Don&#39;t Have To Wait Until Tomorrow
        </motion.h3>
      </div>
    </div>
  );
}
