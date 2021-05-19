function Home() {
  return (
    <main className="container">
      <div className="row">
        <div className="col d-flex justify-content-center">
          <h5 className="p-1">Connect and Shop in Your Neighborhood</h5>
        </div>
      </div>
      <div className="row">
        {/*search bar JUSTIFY CENTER*/}
        <form class="col-md-6 offset-3">
          <div class="row m-2">
            <div className="offset-2 col-6">
              <input class="form-control " type="search" placeholder="What can I help you find today?" aria-label="Search" />
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
      <div className="row">
        <div className="col d-flex justify-content-center">
          <h3 className="p-3">Shop by Category</h3>
        </div>        
      </div>
      <div className="row d-flex justify-content-center">
        <div className="col-md-3">
          <div class="card" style={{"width ": "18rem"}}>
            <img src="https://via.placeholder.com/200" className="card-img-top" alt="..." />
            <div class="card-body">
              <a href='#'><h5 className="card-title d-flex justify-content-center">Black-Owned Businesses</h5></a>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div class="card" style={{"width ": "18rem"}}>
            <img src="https://via.placeholder.com/200" className="card-img-top" alt="..." />
            <div class="card-body">
              <a href='#'><h5 className="card-title d-flex justify-content-center">Youth-Owned Businesses</h5></a>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div class="card" style={{"width ": "18rem"}}>
            <img src="https://via.placeholder.com/200" className="card-img-top" alt="..." />
            <div class="card-body">
              <a href='#'><h5 className="card-title d-flex justify-content-center">Asian-Owned Businesses</h5></a>
            </div>
          </div>
        </div>
      </div>
      <div className="row d-flex justify-content-center">
        <div className="col-md-3">
          <div class="card" style={{"width ": "18rem"}}>
            <img src="https://via.placeholder.com/200" className="card-img-top" alt="..." />
            <div class="card-body">
              <a href='#'><h5 className="card-title d-flex justify-content-center">LGBTQIA-Owned Businesses</h5></a>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div class="card" style={{"width ": "18rem"}}>
            <img src="https://via.placeholder.com/200" className="card-img-top" alt="..." />
            <div class="card-body">
              <a href='#'><h5 className="card-title d-flex justify-content-center">Hispanic-Owned Businesses</h5></a>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div class="card" style={{"width ": "18rem"}}>
            <img src="https://via.placeholder.com/200" className="card-img-top" alt="..." />
            <div class="card-body">
              <a href='#'><h5 className="card-title d-flex justify-content-center">Female-Owned Businesses</h5></a>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col d-flex justify-content-center">
          <h3>Shoutouts from the Community</h3>
        </div>        
      </div>
      <div className="row d-flex justify-content-center">
        <div className="col-md-3">
          <div class="card mb-3" style={{"max-width": "540px"}}>
            <div class="row g-0">
              <div class="col-md-4">
                <img src="https://via.placeholder.com/100x250" alt="..." />
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h5 class="card-title">Shoutout title</h5>
                  <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                  <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div class="card mb-3" style={{"max-width": "540px"}}>
            <div class="row g-0">
              <div class="col-md-4">
                <img src="https://via.placeholder.com/100x250" alt="..." />
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h5 class="card-title">Shoutout title</h5>
                  <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                  <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div class="card mb-3" style={{"max-width": "540px"}}>
            <div class="row g-0">
              <div class="col-md-4">
                <img src="https://via.placeholder.com/100x250" alt="..." />
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h5 class="card-title">Shoutout title</h5>
                  <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                  <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row d-flex justify-content-center">
        <div className="col-md-3">
          <div class="card mb-3" style={{"max-width": "540px"}}>
            <div class="row g-0">
              <div class="col-md-4">
                <img src="https://via.placeholder.com/100x250" alt="..." />
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h5 class="card-title">Shoutout title</h5>
                  <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                  <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div class="card mb-3" style={{"max-width": "540px"}}>
            <div class="row g-0">
              <div class="col-md-4">
                <img src="https://via.placeholder.com/100x250" alt="..." />
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h5 class="card-title">Shoutout title</h5>
                  <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                  <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div class="card mb-3" style={{"max-width": "540px"}}>
            <div class="row g-0">
              <div class="col-md-4">
                <img src="https://via.placeholder.com/100x250" alt="..." />
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h5 class="card-title">Shoutout title</h5>
                  <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                  <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row d-flex justify-content-center">
        <div className="col-md-3 d-flex justify-content-center">
          <button className="btn-primary">List View of all Shoutouts</button>
        </div>
      </div>
    </main>  
  );
}
export default Home;