function Navbar() {
    return (
      <div className="h-[80px] w-full fixed">
        <section className="flex justify-between p-10">
            <div className="flex-row text-2xl">
                <h1>Alice Bergonhe</h1>
                <a className="underline underline-offset-8" href="https://www.linkedin.com/in/alicebergonhe/" 
                target="_blank" rel="noopener noreferrer">Frontend developer</a>
            </div>
            <div className="flex gap-8">
                <h1>about</h1>
                <h1>works</h1>
                <h1>contact</h1>
            </div>
        </section>
      </div>
    );
  }
  
  export default Navbar;