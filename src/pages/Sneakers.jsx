const Sneakers = () => {
    return (
      <div className="w-full h-screen grid grid-cols-1 md:grid-cols-2 bg-[#222] text-[#f2f2f2]">
        <div className="grid-cols-1 p-10">
          <h1 className="text-[4rem] font-medium mb-4 tracking-wide">sneakers</h1>
          <p className="text-justify mb-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Et culpa, aperiam dolores
            voluptas porro eius nam eaque non ratione earum!
          </p>
         
          <div className="flex gap-3">  
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" width={50}/>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg" width={50}/>
          
          </div>
          
          
          <button className=" cursor-pointer top-10 bg-[#222] hover:bg-transparent text-white hover:transition-all hover:duration-1000 hover:text-[#222] font-bold py-2 px-4 rounded border-[#222] border">
              View on GitHub
            </button>
          
        </div>
        <div className="grid-cols-1">
          <img
            src="./works/diana-light-u_jt9A7FADk-unsplash.jpg"
            alt="sneakers"
            className="w-full h-full"
          /> 
        </div>
      </div>
    );
  };
  
  export default Sneakers;