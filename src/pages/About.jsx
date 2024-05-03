function About() {
    return (
      <div className="h-[1500px] w-full bg-[#222] p-28">
        <section className="grid grid-cols-3 text-[#f2f2f2]">
            <div className=" col-span-1">
            <h1 className="text-xl">1.</h1>
            </div>
            <div className="col-span-2 space-y-[100px]">
                <h1 className="underline underline-offset-8 text-xl">About</h1>
                <p className="text-7xl text-justify">I build intuitive and visually appealing interfaces that 
                users love to interact with.</p>
            </div>
        </section>
        <section className="grid grid-cols-2 mt-24 text-[#f2f2f2]">
            <img className="" src="./images/portrait.jpg" alt="futuristic tech woman" />
            <div className="-mt-2 pl-28">
                <p className="text-2xl text-justify">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy
                nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi 
                enim ad minim veniam, quis nostrud exerci tation</p>
                <p className="text-2xl text-justify mt-14">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore
                magna aliquam erat volutpat. Ut wisi enim ad</p>
                <h6 className="underline underline-offset-8 text-3xl mt-20">Skills</h6>
            </div>
        </section>
      </div>
    );
  }
  
  export default About;