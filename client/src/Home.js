function Home() {
  return (
    <main className="container">
      <div className="row">
        <div className="col d-flex justify-content-center">
          <h5>Connect and Shop in Your Neighborhood</h5>
        </div>
      </div>
      <div className="row">
        {/*search bar*/}
        <form class="col-md-6 d-flex justify-content-center">
          <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
          <button class="btn btn-outline-success" type="submit">Search</button>
        </form>
      </div>
      
      <h1>Home</h1>
      <p>
        <h2>Team members:</h2> 
        <p>Serena Chen</p>
      </p>
      <h1>SmolBiz!</h1>
      <h2>Team members:</h2>
      <p>
        Alice Wang<br />
        Serena Chen<br />
        Ashley Sheng 
      </p>
      <img src = "https://memegenerator.net/img/instances/73979818.jpg"></img>
      <p>indeed very smol</p>
    </main>  
  );
}
export default Home;