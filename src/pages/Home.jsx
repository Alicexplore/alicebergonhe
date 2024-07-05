const Home = () => {
  return (
    <div className="w-full h-svh bg-[#e2deda] dark:bg-[#222] text-[#222] dark:text-[#e2deda] z-40 transition-colors duration-1000">
        <div className="grid grid-cols-10 items-center justify-center text-center w-full h-svh z-40">
            <div className="col-span-1 text-center">
                <h1 className="hidden md:block text-xs font-normal">MCMLXXXIV</h1>
            </div>
            <div className="col-span-1 hidden md:flex justify-end">
                <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 106.18 131.06"
                width="20"
                className="star-svg transition-colors duration-1000"
                >
                <path
                className="cls-1"
                d="M104.1,65.8c-27.47-1.44-49.57-28.7-50.99-62.78-1.42,34.14-23.6,61.43-51.14,62.78v.13c27.54,1.35,49.72,28.65,51.14,62.78,1.42-34.07,23.52-61.34,50.99-62.78v-.14Z"
                />
                </svg>
            </div>
            <div className="col-span-10 md:col-span-6 text-center items-center justify-center text-[3.8rem] md:text-9xl font-bold z-10 leading-[55px] md:leading-[110px]">
                <h2 className="text-sm font-normal leading-10">(HI MY NAME IS ALICE)</h2>
                <h1>CREATIVE</h1>
                <h1>FRONTEND</h1>
                <h2 className="text-sm font-normal leading-10">(DEVELOPER)</h2>

                <div className="flex flex-col items-center justify-center text-center md:hidden text-xs font-normal text-[#222] dark:text-[#e2deda] transition-colors duration-1000">
                    <h1 className="">
                    CURRENTLY FRONTEND ENGINEER APPRENTICE @QONTO
                    </h1>
                    <a href=""></a>
                    <a className="hover:underline gap-1 flex items-center" target="_blank" href="https://www.linkedin.com/in/alicebergonhe/ ">
                        OPEN TO NEW OPPORTUNITIES
                        <span className="text-sm mt-1 -rotate-45"><ion-icon name="arrow-forward-outline"></ion-icon></span>
                    </a>
                </div>

            </div>
            <div className="col-span-1 hidden md:flex justify-start">
                <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 106.18 131.06"
                width="20"
                className="star-svg transition-colors duration-1000"
                >
                <path
                className="cls-1"
                d="M104.1,65.8c-27.47-1.44-49.57-28.7-50.99-62.78-1.42,34.14-23.6,61.43-51.14,62.78v.13c27.54,1.35,49.72,28.65,51.14,62.78,1.42-34.07,23.52-61.34,50.99-62.78v-.14Z"
                />
                </svg>
            </div>
            <div className="col-span-1 text-center">
                <h1 className="hidden md:block text-xs font-normal">CODE PASSIONATE &<br />DESIGN ENTHUSIAST</h1>
            </div>
            <div className="absolute w-full flex bottom-[40px] justify-center text-center items-center">
                <h1 className="flex text-xs border-[#222] dark:border-[#e2deda] border-[1px] p-2">NEW PORTFOLIO COMING VERY SOON</h1>
            </div>
        </div>
    </div>
  );
};

export default Home;