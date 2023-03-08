import { motion } from "framer-motion";
import React from "react";
import Tilt from "react-tilt";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { styles } from "../style";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div
          options={{ max: 45, scale: 1, speed: 450 }}
          className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
        >
          <img src={icon} alt="title" className="w-16 h-16 object-contain " />
          <h3 className="text-white text-[20px] font-bold text-center">{title}</h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis ea
        corporis voluptas vero labore temporibus et accusantium ducimus
        aspernatur, tempore molestiae possimus? Facilis modi tempore minima,
        maxime, explicabo consequatur possimus unde dolorum est pariatur id
        delectus vero, saepe adipisci reprehenderit. Officia beatae eos nam
        natus eum? Minima ut beatae animi necessitatibus quia amet veritatis
        rerum iste suscipit, nostrum error numquam? Veritatis perspiciatis vel
        voluptates exercitationem asperiores natus, eveniet laudantium, adipisci
        quidem, nemo hic? Asperiores praesentium ex eaque nostrum illo qui ipsa
        eos nemo eveniet hic sed repudiandae, assumenda iste, obcaecati et
        necessitatibus harum cum dolorem molestias aliquid natus eligendi animi!
      </motion.p>
      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
