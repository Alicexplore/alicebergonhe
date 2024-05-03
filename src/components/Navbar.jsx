function Navbar() {
    return (
      <div className="h-[80px] w-full fixed">
        <section className="flex justify-between p-10 mix-blend-exclusion text-[#222]">
            <div className="flex-row text-2xl">
                <h1>Alice Bergonhe</h1>
                <a className="flex items-center" href="https://www.linkedin.com/in/alicebergonhe/" 
                target="_blank" rel="noopener noreferrer">Frontend developer <span className="-mb-3 ml-1" ><ion-icon  name="arrow-forward-outline"></ion-icon></span></a>
            </div>
            <div className="flex text-4xl">
                <ion-icon name="add-outline"></ion-icon>
            </div>
        </section>
      </div>
    );
  }
  
  export default Navbar;