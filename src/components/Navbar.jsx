function Navbar() {
    return (
      <div className="h-[80px] w-full fixed mix-blend-exclusion z-50">
        <section className="flex justify-between p-8 text-white">
            <div className="flex-row text-2xl">
                <h1>Alice Bergonhe</h1>
                <h1>Frontend Developer</h1>
                <a className="flex items-center" href="https://www.linkedin.com/in/alicebergonhe/" 
                target="_blank" rel="noopener noreferrer">LinkedIn <span className="-mb-2 ml-1 -rotate-45" ><ion-icon  name="arrow-forward-outline"></ion-icon></span></a>
                <a className="flex items-center" href="https://www.github.com/Alicexplore" 
                target="_blank" rel="noopener noreferrer">Github <span className="-mb-2 ml-1 -rotate-45" ><ion-icon  name="arrow-forward-outline"></ion-icon></span></a>
            </div>
            <div className="flex text-4xl">
                <ion-icon name="add-outline"></ion-icon>
            </div>
        </section>
      </div>
    );
  }
  
  export default Navbar;