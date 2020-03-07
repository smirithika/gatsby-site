import React from 'react'

import  "../styles/index.css"

const IndexPage = () => {
    return (
        <body>
            <header>
            <nav className={'sticky'}>
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
                </nav>
                <div className={'welcome'}>
                    <div className={'welcome-note'}>
                        <h2>WE CARE FOR<br/> YOUR DOG</h2>
                        <p>We always try to provide your dog the best <br/> services.</p>
                    </div>
                    <div>
                        <img className={'welcome-doggy'} src="https://colorlib.com/preview/theme/dogger/images/dogger_img_1.png" alt="dog image"></img>
                    </div>
                </div>
            </header>
            <main>
                <section className={'pet-care'}>
                    <section className={'pet-care-content'}>
                        <h2>WELCOME TO DOGGER PET CARE</h2>    
                        <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                    </section>
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
            </main>
            <footer>
                <p>Copyright 2020 All rights reserved | <a href="www.triive.agency">Triive Agency</a></p>
            </footer>
        </body>
    )
}
export default IndexPage