

import Darkmode from "../components/Darkmode";

const LeftNavbar = () => {
  // const [isOpen, setIsOpen] = useState(false);

  // const toggleMenu = () => {
  //   setIsOpen(!isOpen);
  // };

  // const menuVariants = {
  //   hidden: { opacity: 0, y: -10 },
  //   visible: (i) => ({
  //     opacity: 1,
  //     y: 0,
  //     transition: {
  //       delay: i * 0.3,
  //       duration: 0.5,
  //     },
  //   }),
  //   exit: (i) => ({
  //     opacity: 0,
  //     y: -50,
  //     transition: {
  //       delay: (3 - i) * 0.3,
  //       duration: 0.5,
  //     },
  //   }),
  // };

  return (
    <div className="fixed z-50 mix-blend-exclusion w-full">
      <div className="flex justify-between p-8 w-full">
        <div className="flex flex-col text-md">
         
            <img className="w-[70px]" src="./images/initsvg.svg" alt="logo" />
        
          {/* <AnimatePresence>
            {isOpen && (
              <div className="mix-blend-exclusion text-[#f2f2f2]">
                {["ALICE BERGONHE", "FRONTEND DEVELOPER"].map((text, index) => (
                  <motion.div
                    key={text}
                    custom={index}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    variants={menuVariants}
                  >
                    <h1>{text}</h1>
                  </motion.div>
                ))}
                {[
                  {
                    text: "LINKEDIN",
                    href: "https://www.linkedin.com/in/alicebergonhe/",
                  },
                  {
                    text: "GITHUB",
                    href: "https://www.github.com/Alicexplore",
                  },
                ].map((item, index) => (
                  <motion.div
                    key={item.text}
                    custom={index + 2}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    variants={menuVariants}
                  >
                    <a
                      className="flex items-center hover:opacity-40 transition-opacity ease-in-out duration-700"
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {item.text}
                      <span className="-mb-2 ml-1 -rotate-45">
                        <ion-icon name="arrow-forward-outline"></ion-icon>
                      </span>
                    </a>
                  </motion.div>
                ))}
                <motion.div
                  custom={4}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  variants={menuVariants}
                  className="absolute w-[100px] sm:w-[230px] mt-2 cursor-pointer"
                >
                  <iframe
                    style={{ border: "0", width: "230px", height: "42px" }}
                    src="https://bandcamp.com/EmbeddedPlayer/album=2081062495/size=small/bgcol=222222/linkcol=ffffff/artwork=none/track=3626635635/"
                    seamless
                  ></iframe>
                </motion.div>
              </div>
            )}
          </AnimatePresence> */}
        </div>
        <div className="hidden md:flex md:flex-col items-center justify-center text-center">
          <h1 className="text-xs text-[#f2f2f2]">
            CURRENTLY FRONTEND ENGINEER APPRENTICE @QONTO
          </h1>
          <a href=""></a>
          <a className="text-xs text-[#f2f2f2] hover:underline gap-1 flex items-center" target="_blank" href="https://www.linkedin.com/in/alicebergonhe/ ">
            OPEN TO NEW OPPORTUNITIES
            <span className="text-sm mt-1 -rotate-45"><ion-icon name="arrow-forward-outline"></ion-icon></span>
          </a>
        </div>
  
        <div className="items-center justify-center flex">
        <Darkmode />
      </div>
      </div>
    </div>
  );
};

export default LeftNavbar;



