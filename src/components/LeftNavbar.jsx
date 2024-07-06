

const LeftNavbar = () => {


  return (
    <div className="fixed z-50 mix-blend-exclusion w-full">
      <div className="flex justify-between p-8 w-full">
        <div className="flex flex-col text-md">
         
            <img className="w-[70px]" src="./images/initsvg.svg" alt="logo" />

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
      </div>
      </div>
    </div>
  );
};

export default LeftNavbar;



