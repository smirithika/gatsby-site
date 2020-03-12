import React from 'react'

import  "../styles/index.css"

const IndexPage = () => {
    return (
        <html>
            <head>
                <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" />
            </head>
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
                            <h2 className='pet-care-title'>WELCOME TO DOGGER PET CARE</h2>    
                            <p className='pet-care-summary'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                        </div>
                    </section>
                    <section className={'pet-care'}>
                        <div className={'love-and-care'}>
                            <div className={'love-care-content'}>
                                <h3 className='pet-care-subtitle'>Love &amp; Care</h3>
                                <p className='pet-care-details'>Far far away, behind the word mountains, Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
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
                                <h3  className='pet-care-subtitle'>Fearsome</h3>
                                <p className='pet-care-details'>Far far away, behind the word mountains, Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
                                <p>
                                    <a className={'pet-care-btn'} href="#">Read More</a>
                                </p>
                            </div>
                        </div>
                        <div className={'beautiful'}>
                            <div className={'beautiful-content'}>
                                <h3 className='pet-care-subtitle'>Beautiful</h3>
                                <p className='pet-care-details'>Far far away, behind the word mountains, Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
                                <p>
                                    <a className={'pet-care-btn'} href="#">Read More</a>
                                </p>
                            </div>
                            <div className={'beautiful-img'}>
                                <img src="https://colorlib.com/preview/theme/dogger/images/dogger_img_sm_2.jpg" alt="love-care-image"></img>
                            </div>
                        </div>
                    </section>
                    <section id="about-us" className={'about-us'}>
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
                    <section id="trainers" className='trainers'>
                        <div className='trainers-content'>
                            <h2 className='trainers-title'>OUR TRAINERS</h2>
                            <p className='trainers-summary'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                        </div>
                        <div className='trainer-details'>
                            <div className='individual-trainer trainer-1'>
                                <img src="https://colorlib.com/preview/theme/dogger/images/dogger_trainer_1.jpg"></img>
                                <h3>Jessica White</h3>
                                <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                                <div className='trainer-social'>
                                    <a className="fa fa-facebook" href="#"></a>
                                    <a className="fa fa-instagram" href="#"></a>
                                    <a className="fa fa-twitter" href="#"></a>
                                </div>
                            </div>
                            <div className='individual-trainer trainer-2'>
                                <img src="https://colorlib.com/preview/theme/dogger/images/dogger_trainer_2.jpg"></img>
                                <h3>Valerie Elash</h3>
                                <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                                <div className='trainer-social'>
                                    <a className="fa fa-facebook" href="#"></a>
                                    <a className="fa fa-instagram" href="#"></a>
                                    <a className="fa fa-twitter" href="#"></a>
                                </div>
                            </div>
                            <div className='individual-trainer trainer-3'>
                                <img src="https://colorlib.com/preview/theme/dogger/images/dogger_trainer_3.jpg"></img>
                                <h3>Alicia Jones</h3>
                                <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                                <div className='trainer-social'>
                                    <a className="fa fa-twitter" href="#"></a>
                                    <a className="fa fa-instagram" href="#"></a>
                                    <a className="fa fa-facebook" href="#"></a>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className='pricing'>
                        <div className='pricing-content'>
                            <h2 className='pricing-title'>PRICING TABLE</h2>
                            <p className='pricing-summary'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                        </div>
                        <div className='pricing-table'>
                            <div className='basic-pricing'>
                                <h3 className='pricing-type'>BASIC</h3>
                                <div className='pricing-price'>
                                    <p className='pricing-amount'>$47</p>
                                    <p className='pricing-period'>/year</p>
                                </div>
                                <ul className='pricing-features'>
                                    <li className='pricing-feature'><span>Officia quaerat eaque neque</span></li>
                                    <li className='pricing-feature'><span>Possimus aut consequuntur incidunt</span></li>
                                    <li className='pricing-feature'><span>Lorem ipsum dolor sit amet</span></li>
                                    <li className='pricing-feature'><span>Consectetur adipisicing elit</span></li>
                                    <li className='pricing-feature'><span>Dolorum esse odio quas architecto sint</span></li>
                                </ul>
                                <a className='pricing-btn' href="#">Buy Now</a>
                            </div>
                            <div className='premium-pricing'>
                                <h3 className='pricing-type'>PREMIUM</h3>
                                <div className='pricing-price'>
                                    <p className='pricing-amount'>$250</p>
                                    <p className='pricing-period'>/year</p>
                                </div>
                                <ul className='pricing-features'>
                                    <li className='pricing-feature'><span>Officia quaerat eaque neque</span></li>
                                    <li className='pricing-feature'><span>Possimus aut consequuntur incidunt</span></li>
                                    <li className='pricing-feature'><span>Lorem ipsum dolor sit amet</span></li>
                                    <li className='pricing-feature'><span>Consectetur adipisicing elit</span></li>
                                    <li className='pricing-feature'><span>Dolorum esse odio quas architecto sint</span></li>
                                </ul>
                                <a className='pricing-btn' href="#">Buy Now</a>
                            </div>
                            <div className='professional-pricing'>
                                <h3 className='pricing-type'>PROFESSIONAL</h3>
                                <div className='pricing-price'>
                                    <p className='pricing-amount'>$850</p>
                                    <p className='pricing-period'>/year</p>
                                </div>
                                <ul className='pricing-features'>
                                    <li className='pricing-feature'><span>Officia quaerat eaque neque</span></li>
                                    <li className='pricing-feature'><span>Possimus aut consequuntur incidunt</span></li>
                                    <li className='pricing-feature'><span>Lorem ipsum dolor sit amet</span></li>
                                    <li className='pricing-feature'><span>Consectetur adipisicing elit</span></li>
                                    <li className='pricing-feature'><span>Dolorum esse odio quas architecto sint</span></li>
                                </ul>
                                <a className='pricing-btn' href="#">Buy Now</a>
                            </div>
                        </div>
                    </section>
                    <section className='faq'>
                        <div className='faq-content'>
                            <h2 className='faq-title'>FREQUENTLY ASK QUESTIONS</h2>
                            <p className='faq-summary'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                        </div>
                        <div className='faq-bottom-content'>
                            <div className='faq-questions'>
                                <ul className='questions'>
                                    <li>questuin1</li>
                                    <li>questuin1</li>
                                    <li>questuin1</li>
                                </ul>
                            </div>
                            <div>
                                <img className='faq-img' src="https://colorlib.com/preview/theme/dogger/images/dogger_img_sm_1.jpg" alt="faq dog image"></img>
                            </div>

                        </div>
                    </section>
                    <section id="testimonials" className='customers'>

                    </section>
                    <section className='gallery'>

                    </section>
                    <section className='blog'>

                    </section>
                    <section id="services" className='services'>

                    </section>
                    <section id="contact-us" className='contact'>
                        <div className='contact-form'>

                        </div>
                        <div className='contact-us'>

                        </div>
                    </section>
                </main>
                <footer>
                    <div className='shortcuts'>
                        <div className="footer-about-us">
                            <h2 className='shortcut-heading'>About Us</h2>
                            <p className='shortcut-summary'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque facere laudantium magnam voluptatum autem. Amet aliquid nesciunt veritatis aliquam.</p>
                        </div>
                        <div className="footer-quick-links">
                            <h2 className='shortcut-heading'>Quick Links</h2>
                            <ul className='shortcut-list'>
                                <li><a href='#about-us'>About Us</a></li>
                                <li><a href='#trainers'>Trainers</a></li>
                                <li><a href='#services'>Services</a></li>
                                <li><a href='#testimonials'>Testimonials</a></li>
                                <li><a href='#contact-us'>Contact Us</a></li>
                            </ul>
                        </div>
                        <div className="footer-follow-us">
                            <h2 className='shortcut-heading'>Follow Us</h2>
                            <a href="#" className="fa fa-facebook"></a>
                            <a href="#" className="fa fa-twitter"></a>
                            <a href="#" className="fa fa-instagram"></a>
                            <a href="#" className="fa fa-linkedin"></a>
                        </div>
                        <div className="footer-newsletter">
                            <h2 className='shortcut-heading'>Subscribe Newsletter</h2>
                            <form>
                                <input className="footer-newsletter-input" type="text" placeholder="Enter Email"></input>
                                <button className="footer-newsletter-btn">Send</button>
                            </form>
                        </div>
                    </div>
                    <div className='copyright'>
                        <hr/>
                        <p>Copyright 2020 All rights reserved | <a className='agency-link' href='https://www.triive.agency'>Triive Agency</a></p>
                    </div>
                </footer>
            </body>
        </html>
    )
}
export default IndexPage