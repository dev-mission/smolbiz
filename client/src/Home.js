function Home() {
  return (
    <main className="container">
      <div className="row">
        <div className="col d-flex justify-content-center">
          <h5>Connect and Shop in Your Neighborhood</h5>
        </div>
      </div>
      <div className="row">
        {/*search bar JUSTIFY CENTER*/}
        <form class="col-md-6 offset-3">
          <div class="row">
            <div className="offset-2 col-6">
              <input class="form-control" type="search" placeholder="What can I help you find today?" aria-label="Search" />
            </div>
            <div className="col-4">
             <button class="btn btn-outline-success" type="submit">Search</button>
            </div>
          </div>
        </form>
      </div>
      <div className="row">
        {/*carousel of photos and captions*/}
        <div id="carouselExampleCaptions" class="carousel slide col-8 offset-2" data-bs-ride="carousel">
          <div class="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
          </div>
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img src="https://www.tripsavvy.com/thmb/TXvFG9C3Gdxou7yY-UgZAIn416g=/1920x1280/filters:no_upscale():max_bytes(150000):strip_icc()/DSC05433-5bdc80c4c9e77c00510fbe98.jpg" class="d-block w-100" alt="..." />
              <div class="carousel-caption d-none d-md-block">
                <h5>First slide label</h5>
                <p>Some representative placeholder content for the first slide.</p>
              </div>
            </div>
            <div class="carousel-item">
              <img src="https://www.tripsavvy.com/thmb/TXvFG9C3Gdxou7yY-UgZAIn416g=/1920x1280/filters:no_upscale():max_bytes(150000):strip_icc()/DSC05433-5bdc80c4c9e77c00510fbe98.jpg" class="d-block w-100" alt="..." />
              <div class="carousel-caption d-none d-md-block">
                <h5>Second slide label</h5>
                <p>Some representative placeholder content for the second slide.</p>
              </div>
            </div>
            <div class="carousel-item">
              <img src="https://www.tripsavvy.com/thmb/TXvFG9C3Gdxou7yY-UgZAIn416g=/1920x1280/filters:no_upscale():max_bytes(150000):strip_icc()/DSC05433-5bdc80c4c9e77c00510fbe98.jpg" class="d-block w-100" alt="..." />
              <div class="carousel-caption d-none d-md-block">
                <h5>Third slide label</h5>
                <p>Some representative placeholder content for the third slide.</p>
              </div>
            </div>
          </div>
          <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>

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