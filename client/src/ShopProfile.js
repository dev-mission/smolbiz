import './ShopProfile.css';

function ShopProfile() {
    return (
        <main className="container">
            <div class="row">
                <img src="https://via.placeholder.com/970x250" class="img-fluid" alt="Responsive image" />
            </div>
            <div class="row">
                <h1>Oasis Garden Supply</h1>
            </div>
            <div class="row">
                {/*This is for the left column */}
                <div class="col-9">
                    <div class="row">
                        <div class="d-grid gap-2 col-4 mx-auto">
                            <button class="btn yellow-button" type="submit">
                                <div class="row">
                                    <div class="col-1">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-chat-square-quote" viewBox="0 0 16 16">
                                            <path d="M14 1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1h-2.5a2 2 0 0 0-1.6.8L8 14.333 6.1 11.8a2 2 0 0 0-1.6-.8H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2.5a1 1 0 0 1 .8.4l1.9 2.533a1 1 0 0 0 1.6 0l1.9-2.533a1 1 0 0 1 .8-.4H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
                                            <path d="M7.066 4.76A1.665 1.665 0 0 0 4 5.668a1.667 1.667 0 0 0 2.561 1.406c-.131.389-.375.804-.777 1.22a.417.417 0 1 0 .6.58c1.486-1.54 1.293-3.214.682-4.112zm4 0A1.665 1.665 0 0 0 8 5.668a1.667 1.667 0 0 0 2.561 1.406c-.131.389-.375.804-.777 1.22a.417.417 0 1 0 .6.58c1.486-1.54 1.293-3.214.682-4.112z" />
                                        </svg>
                                    </div>
                                    <div class="col">
                                        Give a shoutout!
                                    </div>
                                </div>
                            </button>
                        </div>
                        <div class="d-grid gap-2 col-4 mx-auto">
                            <button class="btn yellow-button" type="submit">
                                <div class="row">
                                    <div class="col-1">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-emoji-sunglasses" viewBox="0 0 16 16">
                                            <path d="M4.968 9.75a.5.5 0 1 0-.866.5A4.498 4.498 0 0 0 8 12.5a4.5 4.5 0 0 0 3.898-2.25.5.5 0 1 0-.866-.5A3.498 3.498 0 0 1 8 11.5a3.498 3.498 0 0 1-3.032-1.75zM7 5.116V5a1 1 0 0 0-1-1H3.28a1 1 0 0 0-.97 1.243l.311 1.242A2 2 0 0 0 4.561 8H5a2 2 0 0 0 1.994-1.839A2.99 2.99 0 0 1 8 6c.393 0 .74.064 1.006.161A2 2 0 0 0 11 8h.438a2 2 0 0 0 1.94-1.515l.311-1.242A1 1 0 0 0 12.72 4H10a1 1 0 0 0-1 1v.116A4.22 4.22 0 0 0 8 5c-.35 0-.69.04-1 .116z" />
                                            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-1 0A7 7 0 1 0 1 8a7 7 0 0 0 14 0z" />
                                        </svg>
                                    </div>
                                    <div class="col">
                                        @username, @username, and 55 others shouted out here.
                                    </div>
                                </div>
                            </button>
                        </div>
                        <div class="d-grid gap-2 col-4 mx-auto">
                            <button class="btn yellow-button" type="submit">
                                <div class="row">
                                    <div class="col-1">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-share-fill" viewBox="0 0 16 16">
                                            <path d="M11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.499 2.499 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5z" />
                                        </svg>
                                    </div>
                                    <div class="col">
                                        Share
                                    </div>
                                </div>
                            </button>
                        </div>
                    </div>
                    {/*Owner Bio Section */}
                    <div class="row mt-5">
                        <div class="card p-4 owner-card" style={{ "width": "18rem;" }}>
                            <div class="card-body">
                                <div class="row">
                                    <div class="col-3">
                                        <img class="rounded-circle profile" src="https://via.placeholder.com/200" />
                                    </div>
                                    <div class="col-9">
                                        <h5 class="card-title">Shop Owner: Lily Robinson</h5>
                                        <h6 class="card-subtitle mb-2">Bio:</h6>
                                        <p class="card-text">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                                        <h6 class="card-subtitle mb-2">Why did you start Oasis Garden Supply?</h6>
                                        <p class="card-text">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Popular Items */}
                    
                </div>
                {/*This is for the right column */}
                <div class="col offset-1">
                    <div class="row d-flex justify-content-center">
                        <div class="col-1 offset-2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-gender-female" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M8 1a4 4 0 1 0 0 8 4 4 0 0 0 0-8zM3 5a5 5 0 1 1 5.5 4.975V12h2a.5.5 0 0 1 0 1h-2v2.5a.5.5 0 0 1-1 0V13h-2a.5.5 0 0 1 0-1h2V9.975A5 5 0 0 1 3 5z" />
                            </svg>
                        </div>
                        <div class="col">
                            <p>Female Owned</p>
                        </div>
                    </div>

                    <div class="row d-flex justify-content-center">
                        <div class="col-1 offset-2">

                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-rainbow" viewBox="0 0 16 16">
                                <path d="M8 4.5a7 7 0 0 0-7 7 .5.5 0 0 1-1 0 8 8 0 1 1 16 0 .5.5 0 0 1-1 0 7 7 0 0 0-7-7zm0 2a5 5 0 0 0-5 5 .5.5 0 0 1-1 0 6 6 0 1 1 12 0 .5.5 0 0 1-1 0 5 5 0 0 0-5-5zm0 2a3 3 0 0 0-3 3 .5.5 0 0 1-1 0 4 4 0 1 1 8 0 .5.5 0 0 1-1 0 3 3 0 0 0-3-3zm0 2a1 1 0 0 0-1 1 .5.5 0 0 1-1 0 2 2 0 1 1 4 0 .5.5 0 0 1-1 0 1 1 0 0 0-1-1z" />
                            </svg>
                        </div>

                        <div class="col">
                            <p>LGBTQ Owned</p>
                        </div>
                    </div>

                    <div class="row d-flex justify-content-center">
                        <div class="col-1 offset-2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-square" viewBox="0 0 16 16">
                                <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                                <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm12 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1v-1c0-1-1-4-6-4s-6 3-6 4v1a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12z" />
                            </svg>
                        </div>
                        <div class="col">
                            <p>POC Owned</p>
                        </div>
                    </div>

                    <div class="row mb-3">
                        <button type="button" class="btn btn-outline-dark shop-links">OasisGarden.com</button>
                    </div>
                    <div class="row mb-3">
                        <button type="button" class="btn btn-outline-dark shop-links">123-456-7890</button>
                    </div>
                    <div class="row mb-3">
                        <h5>Business Hours</h5>
                        <p>
                            Monday-Friday: 9 - 5 <br /> Saturday & Sunday: 9 - 9<br />
                        </p>
                    </div>
                    <div class="row mb-3">
                        <h5>Location</h5>
                        <p>555 Address Street <br /> San Francisco, CA 95555</p>
                    </div>

                </div>
            </div>
        </main >
    );
}
export default ShopProfile;