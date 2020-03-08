import React from 'react'

import  "../styles/index.css"

const IndexPage = () => {
    return (
        <body>
            <header>
                <nav className={'sticky'}>
                    <div className={'nav-content'}>
                        <h1 className={'navlogo'}><a href="#">Dogger.</a></h1>
                        <ul className={'navitems'}> 
                            <li className={'navitem'}><a href="#">Home</a></li>
                            <li className={'navitem'}><a href="#">About</a>
                                {/* <ul>
                                    <li>Trainers</li>
                                    <li>Pricing</li>
                                    <li>FAQ</li>
                                    <li>Testimoniala</li>
                                    <li>Gallery</li>
                                    <li>Blog</li>
                                </ul> */}
                            </li>
                            <li className={'navitem'}><a href="#">Trainers</a></li>
                            <li className={'navitem'}><a href="#">Services</a></li>
                            <li className={'navitem'}><a href="#">Contact</a></li>
                        </ul>
                    </div>    
                </nav>
                <div className={'welcome'}>
                    <div className={'welcome-note'}>
                        <h1>WE CARE FOR YOUR DOG</h1>
                        <p>We always try to provide your dog the best services.</p>
                    </div>
                    <div>
                        <img className={'welcome-doggy'} src="https://colorlib.com/preview/theme/dogger/images/dogger_img_1.png" alt="dog image"></img>
                    </div>
                </div>
            </header>
            <main>
                <section className={'welcome-pet-care'}>
                    <div className={'pet-care-content'}>
                        <h2>WELCOME TO DOGGER PET CARE</h2>    
                        <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                    </div>
                </section>
                <section className={'pet-care'}>
                    <div className={'love-and-care'}>
                        <div className={'love-care-content'}>
                            <h3>Love &amp; Care</h3>
                            <p>Far far away, behind the word mountains, Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
                            <p>
                                <a className={'pet-care-btn'} href="#">Read More</a>
                            </p>
                        </div>
                        <div className={'love-care-img'}>
                            <img src="https://colorlib.com/preview/theme/dogger/images/dogger_img_sm_3.jpg" alt="love-care-image"></img>
                        </div>
                    </div>
                    <div className={'fearsome'}>
                        <div className={'fearsome-img'}>
                            <img src="https://colorlib.com/preview/theme/dogger/images/dogger_img_sm_1.jpg" alt="love-care-image"></img>
                        </div>
                        <div className={'fearsome-content'}>
                            <h3>Fearsome</h3>
                            <p>Far far away, behind the word mountains, Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
                            <p>
                                <a className={'pet-care-btn'} href="#">Read More</a>
                            </p>
                        </div>
                    </div>
                    <div className={'beautiful'}>
                        <div className={'beautiful-content'}>
                            <h3>Beautiful</h3>
                            <p>Far far away, behind the word mountains, Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
                            <p>
                                <a className={'pet-care-btn'} href="#">Read More</a>
                            </p>
                        </div>
                        <div className={'beautiful-img'}>
                            <img src="https://colorlib.com/preview/theme/dogger/images/dogger_img_sm_2.jpg" alt="love-care-image"></img>
                        </div>
                    </div>
                </section>
                <section className={'about-us'}>
                    <div className={'about-us-content'}>
                        <h2 className="about-content-title">ABOUT US</h2>
                        <p className="about-content-subtitle">Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
                        <p className="about-content-summary">A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
                        <ul>
                            <li>A small river named Duden flows</li>
                            <li>It is a paradisematic country</li>
                            <li>Roasted parts of sentences fly</li>
                        </ul>
                    </div>
                    <div className={'about-us-media'}>
                    <a href="https://vimeo.com/317571768">
                        <img src="https://colorlib.com/preview/theme/dogger/images/dogger_img_big_1.jpg"></img>
                    </a>
                    </div>
                </section>
                <section className='trainers'>
                    <div className='trainers-content'>
                        <h2 className='trainers-title'>OUR TRAINERS</h2>
                        <p className='trainers-summary'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                    </div>
                    <div className='trainer-details'>
                        <div className='individual-trainer trainer-1'>
                            <img src="https://colorlib.com/preview/theme/dogger/images/dogger_trainer_1.jpg"></img>
                            <h3>Jessica White</h3>
                            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                        </div>
                        <div className='individual-trainer trainer-2'>
                            <img src="https://colorlib.com/preview/theme/dogger/images/dogger_trainer_2.jpg"></img>
                            <h3>Valerie Elash</h3>
                            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                        </div>
                        <div className='individual-trainer trainer-3'>
                            <img src="https://colorlib.com/preview/theme/dogger/images/dogger_trainer_3.jpg"></img>
                            <h3>Alicia Jones</h3>
                            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                        </div>
                    </div>
                </section>
            </main>
            <footer>
                <p>Copyright 2020 All rights reserved | <a href="www.triive.agency">Triive Agency</a></p>
            </footer>
        </body>
    )
}
export default IndexPage