import './Home.css';

function Home() {
  return (

    <main className="container">
      <div className="row banner" style= {{'background-color':'#FFE69C'}}>
        <div className="col d-flex justify-content-center">
          <h5 className="p-1" style= {{'font-weight':'bold'}}>Connect and Shop in Your Neighborhood</h5>
        </div>
      </div>
      <div className="row">
        {/*search bar JUSTIFY CENTER*/}
        <form class="col-12 justify-content-center ms-5" >
          <div class="row m-2">
            <div className="offset-2 col-6 p-3">
              <input class="form-control input-main-search"  type="search" placeholder="What can I help you find today?" aria-label="Search" />
            </div>
            <div className="col-3 p-3">
             <button class="btn btn-outline-success btn-main-search" type="submit">Search</button>
            </div>
          </div>
        </form>
      </div>
      <div className="row m-2" >
        {/*carousel of photos and captions*/}
        <div id="myCarousel" class="carousel slide col-8 offset-2" data-bs-ride="carousel">
          <div class="carousel-indicators">
            <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
          </div>
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img src="https://cdn.shopify.com/s/files/1/1981/3807/files/WestPortal-Interior_2048x.jpg?v=1569596576" style= {{"height":"500px"}} class="d-block w-100" alt="..." />
              <div class="carousel-caption d-none d-md-block">
                <div className="col-12 carousel-title rounded">
                <h5 >Noe Valley Bakery</h5>
                <p>Fresh bread & pastries baked with love.</p>
                </div>
              </div>
            </div>
            <div class="carousel-item">
              <img src="https://miro.medium.com/max/1200/1*nB8_DAL8WSnhDXMAs4jiqg.jpeg" style= {{"height":"500px"}} class="d-block w-100" alt="..." />
              <div class="carousel-caption d-none d-md-block">
                <div className="col-12 carousel-title rounded">
                  <h5>Rainbow Grocery</h5>
                  <p>Support local Grocery Stores, right here in SF.</p>
                </div>
              </div>
            </div>
            <div class="carousel-item">
              <img src="https://miro.medium.com/max/1200/0*mdCyZvngBWZgt5vb" style= {{"height":"500px"}} class="d-block w-100" alt="..." />
              <div class="carousel-caption d-none d-md-block">
                <div className="col-12 carousel-title rounded">
                  <h5>Amoeba Music</h5>
                  <p>For all your music needs.</p>
                  </div>
              </div>
            </div>
          </div>
          <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </a>
          <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </a>
        </div>
      </div>
      <div className="row m-2">
        <div className="col d-flex justify-content-center m-2">
          <h3 className="p-3 subtitle">Shop by Category</h3>
        </div>        
      </div>
      <div className="row justify-content-center">
        <div className="col-md-3" >
          <div class="card d-inline-block community-identity" style={{'width':'20rem'}} >
            <img src="https://drive.google.com/uc?id=1g8WtPWgZu3EODTRJZ4_5CA35PqQgy8nD" className="card-img-top card-image-ci" alt="..." />
            <div class="card-body">
              <a href='#' className="link-dark"><p className="card-title d-flex justify-content-center">Black-Owned Businesses</p></a>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div class="card d-inline-block community-identity" style={{'width':'20rem'}} >
            <img src="https://assets.entrepreneur.com/slideshow/20190806200349-ent19-sept-youngmill-brandon.jpeg?width=1000" className="card-img-top card-image-ci" alt="..." />
            <div class="card-body">
              <a href='#' className="link-dark"><p className="card-title d-flex justify-content-center">Youth-Owned Businesses</p></a>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div class="card d-inline-block community-identity" style={{'width':'20rem'}}>
            <img src="https://thumbor.forbes.com/thumbor/fit-in/1200x0/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F6088823192aa511a8812768e%2F0x0.jpg" className="card-img-top card-image-ci" alt="..." />
            <div class="card-body">
              <a href='#' className="link-dark"><p className="card-title d-flex justify-content-center">AAPI-Owned Businesses</p></a>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-12" style={{'height':'2rem'}}>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-md-3" >
          <div class="card d-inline-block community-identity" style={{'width':'20rem'}}>
            <img src="https://pbs.twimg.com/media/EuDTAY_U0AAdzQb.jpg" className="card-img-top card-image-ci" alt="..." />
            <div class="card-body">
              <a href='#' className="link-dark"><p className="card-title d-flex justify-content-center">LGBTQIA-Owned Businesses</p></a>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div class="card d-inline-block community-identity" style={{'width':'20rem'}}>
            <img src="https://drive.google.com/uc?id=1uq5qiJdpOk2AclzAqkCxM9PbFKfb484A" className="card-img-top card-image-ci" alt="..." />
            <div class="card-body">
              <a href='#' className="link-dark"><p className="card-title d-flex justify-content-center">Hispanic-Owned Businesses</p></a>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div class="card d-inline-block community-identity" style={{'width':'20rem'}}>
            <img src="https://drive.google.com/uc?id=1ip2TTEhwc72tnN4NP2xS-C4JTMPQtOdI" className="card-img-top card-image-ci" alt="..." />
            <div class="card-body">
              <a href='#' className="link-dark"><p className="card-title d-flex justify-content-center">Female-Owned Businesses</p></a>
            </div>
          </div>
        </div>
      </div>
      <div className="row m-2">
        <div className="col d-flex justify-content-center m-2">
          <h3 className= "p-3 subtitle">Shoutouts from the Community</h3>
        </div>        
      </div>
      <div className="row d-flex justify-content-center">
        <div className="col-md-5 m-2">
        <a href="https://dm-smolbiz.herokuapp.com/shopprofile">
          <div class="card mb-3 shoutout" >
            <div class="row g-0">
              <div class="col-md-4">
                <img src="https://hgtvhome.sndimg.com/content/dam/images/grdn/fullset/2014/2/26/0/img-9193.JPG.rend.hgtvcom.966.725.suffix/1452659786303.jpeg" alt="..." className="shoutout-img"/>
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h5 class="card-title shoutout-title">Oasis Garden Supplies</h5>
                  <p class="card-text shoutout-text">“I always find something special here and James makes sure I know how to care for my new plants. Everything is homegrown and most definitely a steal for its price!”</p>
                  <p class="card-text"><small class="text-muted">@suzyannsf</small></p>
                </div>
              </div>
            </div>
          </div>
          </a>
        </div>
        <div className="col-md-5">
          <div class="card mb-3 shoutout" >
            <div class="row g-0">
              <div class="col-md-4">
                <img src="https://s3-media0.fl.yelpcdn.com/bphoto/t7cmv44-mxI_mnKXsXvoFA/ls.jpg" alt="..." className="shoutout-img"/>
              </div>
              <div class="col-md-8">
                <div class="card-body ">
                  <h5 class="card-title shoutout-title">Eado Car Wash</h5>
                  <p class="card-text shoutout-text">"Whenever I feel like treating myself, I come here, where I know Jason Eado will take good care of me and Bobby, my 2000 VW buggy. He's always around for a chat, and you can't leave without a smile on your face."</p>
                  <p class="card-text"><small class="text-muted">@bobbyandme</small></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row d-flex justify-content-center">
      <div className="col-md-5">
          <div class="card mb-3 shoutout">
            <div class="row g-0">
              <div class="col-md-4">
                <img src="https://media-exp1.licdn.com/dms/image/C4E0BAQGou9w8g3wwFQ/company-logo_200_200/0/1587402105280?e=2159024400&v=beta&t=h7d3DTXEYmBO4tZuHAf50X6o5JQh2JW52eIlzDMRxqM" alt="..." className="shoutout-img"/>
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h5 class="card-title shoutout-title">Unity Tutors</h5>
                  <p class="card-text shoutout-text">"Wow! My son in fourth grade is already excelling in pre-algebra, thanks to the team at Unity Tutors! As recent high school graduates themselves, the connection and bond they are able to form is amazing!"</p>
                  <p class="card-text"><small class="text-muted">@helicopmom</small></p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-5">
          <div class="card mb-3 shoutout" >
            <div class="row g-0">
              <div class="col-md-4">
                <img src="https://www.dailynews.com/wp-content/uploads/2021/04/LDN-L-AMOEBA-0323-04-1.jpg" alt="..." className="shoutout-img"/>
              </div>
              <div class="col-md-8">
                <div class="card-body ">
                  <h5 class="card-title shoutout-title">Amoeba Music</h5>
                  <p class="card-text shoutout-text">"The records are well kept, and the store is very clean. They have such a diverse collection. I found a copy of the Taylor Swift's new album folklore on vinyl and bought Is This It from the Strokes on vinyl, as well."</p>
                  <p class="card-text"><small class="text-muted">@tswiftyfan89</small></p>
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
      <div className="row mt-3">
        <div className="col d-flex justify-content-center">
          <h3 className= "p-3 subtitle">Local Leaderboard</h3>
        </div>  
      </div>
      <div className="row">
        <div className="col-12 d-flex justify-content-center">
          <h5>Sign up to checkout where your friends are shopping and earn badges</h5>     
        </div> 
      </div>
      <div className="row justify-content-center">
        <div className="offset-1 col-md-5 d-flex flex-column align-items-center">
        <div class="card text-center d-flex border-0" style={{'width':'15rem'}}>
              <img src="https://www.corporatephotographylondon.com/wp-content/uploads/2019/11/HKstrategies-1210.jpg" class="rounded-circle image-winner" alt="..." />
              <div class="card-body">
                <h5 class="card-title">Socially-Concious Sarah</h5>
                <p class="card-text">1000 points</p>
              </div>
              </div>
            
              <table class="table table-hover flex-column" style={{'width':'25rem'}}>
              <thead>
                <tr>
                  <th scope="col">Place</th>
                  <th scope="col">First</th>
                  <th scope="col">Last</th>
                  <th scope="col">Username</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1st</th>
                  <td>Socially-Concious</td>
                  <td>Sarah</td>
                  <td>@scsarah</td>
                </tr>
                <tr>
                  <th scope="row">2nd</th>
                  <td>Frugal</td>
                  <td>Frank</td>
                  <td>@frugfrank</td>
                </tr>
                <tr>
                  <th scope="row">3rd</th>
                  <td>Business</td>
                  <td>Bo</td>
                  <td>@busbo</td>
                </tr>
              </tbody>
              </table>
        </div>
        <div className='col-md-5'>
          <div className='row'>
            <div class="card border-0 text-center" id='badge' style={{'width':'15rem'}}>
              <img src="https://www.iconpacks.net/icons/1/free-badge-icon-1355-thumb.png" class="rounded-circle" alt="..." />
              <div class="card-body">
                <h5 class="card-title">Super-Shopper Award</h5>
                <p class="card-text">100 Shoutouts Given</p>
              </div>
            </div>
            <div class="card border-0 text-center" id='badge' style={{'width':'15rem'}}>
              <img src="https://www.iconpacks.net/icons/1/free-badge-icon-1355-thumb.png" class=" rounded-circle" alt="..." />
              <div class="card-body">
                <h5 class="card-title">Super-Supporter Award</h5>
                <p class="card-text">100 Kudos Given</p>
              </div>
            </div>
            <div className='row'>
              <div class="card border-0 text-center" id='badge' style={{'width':'15rem'}}>
                <img src="https://www.iconpacks.net/icons/1/free-badge-icon-1355-thumb.png" class="rounded-circle" alt="..." />
                <div class="card-body">
                  <h5 class="card-title">Super-Reviewer Award</h5>
                  <p class="card-text">100 Kudos Received</p>
                </div>
              </div>
              <div class="card border-0 text-center" id='badge' style={{'width':'15rem'}}>
                <img src="https://www.iconpacks.net/icons/1/free-badge-icon-1355-thumb.png" class=" rounded-circle" alt="..." />
                <div class="card-body">
                  <h5 class="card-title">Super-Influencer Award</h5>
                  <p class="card-text">100 Followers</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>  
  );
}

export default Home;