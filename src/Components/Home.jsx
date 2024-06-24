import React,  { useEffect, useState, useRef } from "react";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import './Home.css';
import 'swiper/css/scrollbar';
import 'swiper/css/pagination';
import { Autoplay,Scrollbar,Pagination } from 'swiper/modules';
import SliderData from "./SliderData/SliderData";
import ServicesData from "./ServiceData/ServiceData";
import TestimonialData from "./TestimonialData";
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import ConsultancySection from "./ConsultancySection";
import videocover from '../Assets/img/postervideo.png';
import emailjs from "emailjs-com";

const Home = () =>{
    
    const form = useRef();

    const owlOptions = {
        items: 3, // Display one item at a time
        autoplay:true,
        autoplayTimeout:5000, 
        nav:true,
        navText:[
            `<svg width="29" height="8" viewBox="0 0 29 8" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.646446 3.64645C0.451185 3.84171 0.451185 4.15829 0.646446 4.35356L3.82843 7.53554C4.02369 7.7308 4.34027 7.7308 4.53553 7.53554C4.7308 7.34027 4.7308 7.02369 4.53553 6.82843L1.70711 4L4.53553 1.17158C4.7308 0.976313 4.7308 0.65973 4.53553 0.464468C4.34027 0.269206 4.02369 0.269206 3.82843 0.464468L0.646446 3.64645ZM29 3.5L1 3.5L1 4.5L29 4.5L29 3.5Z" fill="black"/></svg>`
            ,`<svg width="29" height="8" viewBox="0 0 29 8" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M28.3536 4.35355C28.5488 4.15829 28.5488 3.84171 28.3536 3.64645L25.1716 0.464466C24.9763 0.269204 24.6597 0.269204 24.4645 0.464466C24.2692 0.659728 24.2692 0.976311 24.4645 1.17157L27.2929 4L24.4645 6.82843C24.2692 7.02369 24.2692 7.34027 24.4645 7.53553C24.6597 7.7308 24.9763 7.7308 25.1716 7.53553L28.3536 4.35355ZM0 4.5H28V3.5H0V4.5Z" fill="black"/></svg>        `
        ],
        addClassActive: true, // Add class to active item
        addClasses: true, 
        responsive : {
            0 : {items:1},
            480 : {items:1},
            768 : {items:2},
            1280 :{items:3}
        }
      };

    const testimonies={
        nav:true,
        navText:[
        `<svg width="77" height="8" viewBox="0 0 77 8" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.646446 3.64645C0.451187 3.84172 0.451187 4.1583 0.646446 4.35356L3.82843 7.53554C4.02369 7.7308 4.34027 7.7308 4.53554 7.53554C4.7308 7.34028 4.7308 7.0237 4.53554 6.82843L1.70711 4.00001L4.53554 1.17158C4.7308 0.976317 4.7308 0.659735 4.53554 0.464472C4.34027 0.26921 4.02369 0.26921 3.82843 0.464472L0.646446 3.64645ZM77 3.5L1 3.50001L1 4.50001L77 4.5L77 3.5Z" fill="black"/></svg>`
        ,`<svg width="77" height="8" viewBox="0 0 77 8" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M76.3536 4.35357C76.5488 4.1583 76.5488 3.84172 76.3536 3.64646L73.1716 0.464479C72.9763 0.269217 72.6597 0.269217 72.4645 0.464479C72.2692 0.659741 72.2692 0.976323 72.4645 1.17159L75.2929 4.00001L72.4645 6.82844C72.2692 7.0237 72.2692 7.34028 72.4645 7.53555C72.6597 7.73081 72.9763 7.73081 73.1716 7.53555L76.3536 4.35357ZM-8.74228e-08 4.5L76 4.50001L76 3.50001L8.74228e-08 3.5L-8.74228e-08 4.5Z" fill="black"/></svg>`
        ]
    }
 
    useEffect(()=>{
        if(!!window.IntersectionObserver){
            let video = document.querySelector('video');
            let isPaused = false; /* flag for auto-pausing of the video */
            let observer = new IntersectionObserver((entries, observer) => { 
                entries.forEach(entry => {
                    if(entry.intersectionRatio!==1  && !video.paused){
                        video.pause(); isPaused = true;
                    }
                    else if(isPaused) {video.play(); isPaused=false;}
                });
            }, {threshold: 1});
            observer.observe(video) ;
        }
    });

    const [formData, setFormData] = useState({
        location: '',
        services:'',
    });
    
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value,
        });
    };
    
    const [openPopup, setopenPopup] = useState(false);
    
    const sendEmail = (event) =>{
        event.preventDefault();
        console.log(form.current)
        // emailjs.sendForm('service_mgh9zss', 'template_c964zir', form.current, 'Dn6ucPwCcl8RRCE9b')
        // .then((result) => {
            
        //     console.log(result.text);
        //     alert('Your mail has been sent successfully');
            
        //     window.location.reload(true);

        //     //This is if you still want the page to reload (since e.preventDefault() cancelled that behavior) 
        // }, (error) => {
        //     console.log(error.text);
        // });
    } 

    return(
        <>

            <Header/>
            <section className="hero-slider">
                <Swiper
                spaceBetween={50}
                slidesPerView={1}
                autoplay={{delay:8000,disableOnInteraction:false,pauseOnMouseEnter: true,}}
                scrollbar= {{ draggable: true,dragSize: 70,}}
                pagination={{ clickable: true,renderBullet: function (index, className) {return '<span class="' + className + '">' + (index + 1) + '</span>';},}}               
                modules={[Autoplay,Scrollbar,Pagination]}
                >
                {SliderData.map((obj,index) => {
                    return(
                        <>
                            <SwiperSlide key={index} style={{background:`url(${obj.img})`,backgroundSize:"cover"}}>                            
                                <div className="container-fluid">
                                    <div className="row align-items-center justify-content-center" style={{height:'850px'}}>
                                        <div className="col-xl-12 col-lg-12 col-md-12 col-lg-12 slider-content">
                                            <p data-aos="fade-down">
                                            Leave the Cleaning to the Experts
                                            </p>
                                            <h2 data-aos="fade-down">{obj.subTitle}</h2>
                                            
                                            <form action="" ref={form} onSubmit={(e)=>sendEmail}>                                           

                                                <div className="d-flex">
                                                    <label className="location">                                                    
                                                        <select name="location" onChange={handleInputChange} value={formData.location} required>
                                                            <option selected>LOCATION </option>
                                                            Luther, Guthrie, Norman, Yukon, Midwest City/Del City, Moore, Edmond, Chickasha, ElReno, Tulsa,
                                                            <option value="Luther">Luther</option>
                                                            <option value="Guthrie">Guthrie</option>
                                                            <option value="Norman">Norman</option>
                                                            <option value="Yukon">Yukon</option>
                                                            <option value="Midwest City/Del City">Midwest City/Del City</option>
                                                            <option value="Moore">Moore</option>
                                                            <option value="Edmond">Edmond</option>
                                                            <option value="Chickasha">Chickasha</option>
                                                            <option value="ElReno">ElReno</option>
                                                            <option value="Tulsa">Tulsa</option>=
                                                        </select>                                                  
                                                    </label>   
                                                    <label className="typeservices">                           
                                                        <select name="services" onChange={handleInputChange} value={formData.services} required>
                                                            <option value="">TYPES OF SERVICES</option>
                                                            <option value="dusting">Dusting</option>
                                                            <option value="gradening">Gardening</option>
                                                            <option value="Mopping">Mopping</option>
                                                        </select>                                                
                                                    </label>    
                                                </div>
                                                <div className="d-flex">                                                                          
                                                    <label className="bedrooms">                             
                                                        <select name="bedroom" required>
                                                            <option value="">BEDROOMS</option>
                                                            <option value="1">1 Bedroom</option>
                                                            <option value="2">2 Bedroom</option>
                                                            <option value="3">3 Bedroom</option>
                                                        </select>                                                                                            
                                                    </label>   
                                                    <label className="bathroom">                          
                                                        <select name="bathroom" required>
                                                            <option value="">BATHROOM</option>
                                                            <option value="1">1 Bathroom</option>
                                                            <option value="2">2 Bathroom</option>
                                                            <option value="3">3 Bathroom</option>
                                                        </select>
                                                    </label>
                                                </div>
                                                <input type="button" value="Get An Exact Price" 
                                                // onClick={()=>setopenPopup(!openPopup)}
                                                />
                                                <div className="popupoverlay" style={{display:openPopup ? 'block' : 'none'}} onClick={()=>setopenPopup(!openPopup)}></div>

                                                <div className="popup" style={{display:openPopup ? 'block' : 'none'}}>
                                                    <h2>Enter you Information</h2>
                                                    <p>We will be in touch soon!!!</p>
                                                    <div className="d-block">
                                                        <label>
                                                            <input type="text" name="name" placeholder="Name" required/>
                                                        </label>
                                                        <label>
                                                            <input type="email" name="email" placeholder="Email" required/>
                                                        </label>
                                                        <input type="submit" value="Submit" />
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        </>
                    )
                })}                
                </Swiper> 
            </section>
            
            
            <section className="Why-section" >
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-xl-6 col-md-12 col-sm-12  video-container d-flex" style={{gap:'30px', position:'relative'}}>    
                            {/* video in hosting  */}
                            <video controls poster={videocover} style={{objectFit:"cover"}} data-aos="fade-down" width="300" height="470">
                                <source src="https://okcuptowncleaning.com/video/cleaning.mp4" type="video/mp4" />
                            </video>   
                            <img src={require('../Assets/img/why_people_love_us.png')} alt=""  data-aos="fade-left" data-aos-delay="300" className="whyus-img" style={{height:'305px'}}/>
                            <div className="videoBox" data-aos="fade-up" data-aos-delay="400">
                                <p style={{borderLeft:"3px solid #158842",paddingLeft:'15px'}}>We value our customers and strive to provide top-notch service. Many have expressed their love for working with us, and we love our customers too! </p>
                                <div className="d-flex align-items-center" style={{gap:'10px'}}>
                                    <img src={require('../Assets/img/author.png')} alt="" width="40px" height={'40px'}/>
                                    <span>Keri B</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-1 col-xl-1 col-md-12 col-sm-12"></div>
                        <div className="col-lg-5 col-xl-5 col-md-12 col-sm-12">
                            <h2 data-aos="fade-up"><span className="colorgreen">Why people</span> love working with us</h2>
                            <p data-aos="fade-down">At OKC Uptown Cleaning, we understand that your time is valuable. That's why we take the hassle out of cleaning, allowing you to focus on what matters most.</p>
                            <h4 data-aos="fade-down" data-aos-delay="250">We Founded it in <span className="colorgreen">2015</span></h4>
                            <button className="greenbtn" data-aos="fade-down" data-aos-delay="500">
                                <a href="/about">Know More
                                    <svg viewBox="0 0 96 96" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M93.781 51.578C95 50.969 96 49.359 96 48c0-1.375-1-2.969-2.219-3.578 0 0-22.868-1.514-31.781-10.422-8.915-8.91-10.438-31.781-10.438-31.781C50.969 1 49.375 0 48 0s-2.969 1-3.594 2.219c0 0-1.5 22.87-10.406 31.781-8.908 8.913-31.781 10.422-31.781 10.422C1 45.031 0 46.625 0 48c0 1.359 1 2.969 2.219 3.578 0 0 22.873 1.51 31.781 10.422 8.906 8.911 10.406 31.781 10.406 31.781C45.031 95 46.625 96 48 96s2.969-1 3.562-2.219c0 0 1.523-22.871 10.438-31.781 8.913-8.908 31.781-10.422 31.781-10.422Z" fill="#000" />
                                    </svg>
                                </a>                                
                            </button> 
                        </div>
                    </div>
                </div>
            </section> 

            <section className='Projects'>
                <div className='container-fluid'>
                    <div className="row">
                        <div className="col-xl-1 col-lg-12 col-md-1 col-sm-12"></div>
                        <div className="col-xl-3 col-lg-4 col-md-12 col-sm-12" data-aos="fade-down">
                            <h2><span className='colorgreen'>700+</span> Projects Done</h2>
                            <p>With over 700 successful projects under our belt, OKC Uptown Cleaning has earned a reputation for delivering outstanding results. Our track record speaks for itself, as we consistently exceed our clients' expectations and leave their spaces looking immaculate. Join the growing list of satisfied customers who have experienced the OKC Uptown Cleaning difference.</p>
                            <button className="greenbtn"  data-aos="fade-down">
                                <a href="/contact-us">Know More
                                <svg viewBox="0 0 96 96" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M93.781 51.578C95 50.969 96 49.359 96 48c0-1.375-1-2.969-2.219-3.578 0 0-22.868-1.514-31.781-10.422-8.915-8.91-10.438-31.781-10.438-31.781C50.969 1 49.375 0 48 0s-2.969 1-3.594 2.219c0 0-1.5 22.87-10.406 31.781-8.908 8.913-31.781 10.422-31.781 10.422C1 45.031 0 46.625 0 48c0 1.359 1 2.969 2.219 3.578 0 0 22.873 1.51 31.781 10.422 8.906 8.911 10.406 31.781 10.406 31.781C45.031 95 46.625 96 48 96s2.969-1 3.562-2.219c0 0 1.523-22.871 10.438-31.781 8.913-8.908 31.781-10.422 31.781-10.422Z" fill="#000" />
                                </svg>
                                </a>
                            </button>
                        </div>
                        <div className="col-xl-8 col-lg-8 col-md-12 col-sm-12">
                            <OwlCarousel margin={20} loop {...owlOptions}>
                                <div className="item custom-first-item">
                                    <img src={require('../Assets/img/project1.png')} alt="" data-aos="fade-left"/>
                                    <h3>Kitchen Cleaning</h3>
                                </div>
                                <div className="item">
                                    <img src={require('../Assets/img/project2.png')} alt=""  data-aos="fade-left"/>
                                    <h3>Bedroom</h3>
                                </div>
                                <div className="item">
                                    <img src={require('../Assets/img/project1.png')} alt="" data-aos="fade-left" />
                                    <h3>Bathroom</h3>
                                </div>
                                <div className="item">
                                    <img src={require('../Assets/img/project2.png')} alt="" data-aos="fade-left" />
                                    <h3>Deep Cleaning</h3>
                                </div>
                            </OwlCarousel>
                        </div>
                    </div>
                </div>
            </section>

            <section className="services">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 justify-content-center text-center">
                            <h2 data-aos="fade-down"><span className="colorgreen">Our</span> Services</h2>
                            <p data-aos="fade-up">We offer a comprehensive range of cleaning services tailored to meet your specific needs. Whether it's residential cleaning, commercial cleaning, deep cleaning, move-in/move-out cleaning, post-construction cleaning, office cleaning, window cleaning, carpet cleaning, or upholstery cleaning, our dedicated team is here to make your space shine.</p>
                        </div>
                        <div className=" row service-outer-wrapper">
                            
                        {ServicesData.map((obj,index)=>{
                                return(<>
                                <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12">
                                    <div className="services-wrapper" key={index} style={{background:`url(${obj.img})`}}  data-aos="fade-left" >
                                        <div>
                                            <a href={obj.link}>
                                            <h3>{obj.head}
                                            <svg width="41" height="16" viewBox="0 0 41 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M40.7071 8.70711C41.0976 8.31658 41.0976 7.68342 40.7071 7.29289L34.3431 0.928932C33.9526 0.538408 33.3195 0.538408 32.9289 0.928932C32.5384 1.31946 32.5384 1.95262 32.9289 2.34315L38.5858 8L32.9289 13.6569C32.5384 14.0474 32.5384 14.6805 32.9289 15.0711C33.3195 15.4616 33.9526 15.4616 34.3431 15.0711L40.7071 8.70711ZM0 9H40V7H0V9Z" fill="white"/>
                                            </svg>
                                            </h3>
                                            <p>{obj.subtitle}</p>
                                            </a>
                                        </div>
                                    </div>
                                </div> 
                                </>)
                            })}                            
                        
                        </div>

                        <div className="mobile-slider row ">
                        <OwlCarousel margin={20} loop {...owlOptions}>
                            {ServicesData.map((obj,index)=>{
                                return(<>
                                <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12">
                                    <div className="services-wrapper" key={index} style={{background:`url(${obj.img})`}}  data-aos="fade-left" >
                                        <div>
                                            <a href={obj.link}>
                                            <h3>{obj.head}
                                            <svg width="41" height="16" viewBox="0 0 41 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M40.7071 8.70711C41.0976 8.31658 41.0976 7.68342 40.7071 7.29289L34.3431 0.928932C33.9526 0.538408 33.3195 0.538408 32.9289 0.928932C32.5384 1.31946 32.5384 1.95262 32.9289 2.34315L38.5858 8L32.9289 13.6569C32.5384 14.0474 32.5384 14.6805 32.9289 15.0711C33.3195 15.4616 33.9526 15.4616 34.3431 15.0711L40.7071 8.70711ZM0 9H40V7H0V9Z" fill="white"/>
                                            </svg>
                                            </h3>
                                            <p>{obj.subtitle}</p>
                                            </a>
                                        </div>
                                    </div>
                                </div> 
                                </>)
                            })}
                        </OwlCarousel>
                        </div>
                    </div>
                </div>
            </section>

            <section className="whyus-section">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
                            <img src={require('../Assets/img/why-choose-us.png')} id="whyusimg" alt=""data-aos="fade-right" data-aos-delay="500"/>
                        </div>
                        <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
                            <h2 data-aos="fade-down"><span className="colorgreen">Why</span> Choose us?</h2>
                            <p data-aos="fade-up" >Don't settle for anything less than perfection. Experience the OKC UPTOWN difference today and discover a whole new level of cleanliness and satisfaction. Contact us now for a free quote and let us make your space shine like never before!</p>
                            <p data-aos="fade-up" >Experience a new standard of perfection with OKC UPTOWN. Elevate your surroundings to unparalleled levels of cleanliness and satisfaction.</p>
                            <button className="greenbtn" data-aos="fade-up">
                                <a href="/Why-choose-us">Know More
                                <svg viewBox="0 0 96 96" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M93.781 51.578C95 50.969 96 49.359 96 48c0-1.375-1-2.969-2.219-3.578 0 0-22.868-1.514-31.781-10.422-8.915-8.91-10.438-31.781-10.438-31.781C50.969 1 49.375 0 48 0s-2.969 1-3.594 2.219c0 0-1.5 22.87-10.406 31.781-8.908 8.913-31.781 10.422-31.781 10.422C1 45.031 0 46.625 0 48c0 1.359 1 2.969 2.219 3.578 0 0 22.873 1.51 31.781 10.422 8.906 8.911 10.406 31.781 10.406 31.781C45.031 95 46.625 96 48 96s2.969-1 3.562-2.219c0 0 1.523-22.871 10.438-31.781 8.913-8.908 31.781-10.422 31.781-10.422Z" fill="#000" />
                                </svg>
                                </a>
                            </button>
                            <br/>
                            <br/>
                            <br/>
                            <div className="claims" style={{gap:'11%'}}>
                                <div className="d-grid text-center" data-aos="fade-left" >
                                    <center>
                                        <img src={require('../Assets/img/icon1.png')} alt="" />
                                    </center>
                                        <span className="colorgreen"><b>Over</b></span>
                                        354000 Cleans
                                </div>
                                <div className="d-grid text-center" data-aos="fade-left" data-aos-delay="300">
                                    <center>
                                        <img src={require('../Assets/img/icon2.png')} alt="" />                            
                                    </center>
                                    <span className="colorgreen"><b>Eco-Friendly</b></span>
                                    Cleaning Products
                                </div>
                                <div className="d-grid text-center" data-aos="fade-left"data-aos-delay="600" >
                                    <center>
                                        <img src={require('../Assets/img/icon3.png')} alt="" />                            
                                    </center>
                                    <span className="colorgreen"><b>100%</b></span>
                                    Satisfaction
                                </div>
                                <div className="d-grid text-center" data-aos="fade-left" data-aos-delay="900">
                                    <center>
                                        <img src={require('../Assets/img/icon4.png')} alt="" />                            
                                    </center>
                                    <span className="colorgreen"><b>Cost</b></span>
                                    Effective
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </section>

            <section className="pad100 bggreen testimonials text-center">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-12">
                            <h2><span className="colorgreen text-center">What Clients</span> have to say about us?</h2>
                            <br/>
                            <br/>
                            <br/>
                            <img className="quote1" src={require('../Assets/img/quote.png')} alt="" />
                            <img className="quote2" src={require('../Assets/img/quote.png')} alt="" />
                            <OwlCarousel margin={20} loop items={1} {...testimonies}>
                                {TestimonialData.map((obj,index)=>{
                                    return(
                                        <div className="testimonials-wrapper" key={obj.id}>
                                            <img src={obj.profileimg} alt="" className="profile"  data-aos="fade-down  "/>
                                            
                                            <div className="vector d-flex">
                                                <img src={require('../Assets/img/vector.png')} alt="" className=" vc1"/>
                                                <img src={require('../Assets/img/vector.png')} alt="" className=" vc2"/>
                                            </div>

                                            <div className="testimonials-content" data-aos="fade-zoom-in">
                                                <p>{obj.comment}</p>
                                                <br/>
                                                <h4>{obj.name}</h4>
                                            </div>
                                        </div>
                                    )
                                })}
                                  
                            </OwlCarousel>
                        </div>
                    </div>
                </div>
            </section>

            <section className="pad100 text-center cleaning-services">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-10 text-center">
                            <h2 data-aos="fade-up"><span className="colorgreen">OKC</span> Uptown cleaning service</h2>
                            <p>OKC Uptown Cleaning is a locally owned and operated cleaning company dedicated to providing exceptional cleaning services. With years of experience and a passion for cleanliness, we have built a reputation for excellence and have become the go-to choice for residential and commercial cleaning needs.</p>
                            <p>Ready to experience the OKC Uptown Cleaning difference? Contact us today to book your cleaning service or request a free quote. Let us handle the dirty work while you enjoy a clean and refreshing space.</p>
                        
                            <div className="btn-container justify-content-center btnhover" style={{gap:'5%',paddingTop:'35px'}}>
                                <button className="greenbtn"  data-aos="fade-down"> <a href="/services/remodel-cleanup">POST CONSTRUCTION CLEANING</a></button>
                                <button className="greenbtn" data-aos="fade-down"> <a href="/services/basic-cleaning">MOVE OUT CLEANING</a></button>
                                <button className="greenbtn" data-aos="fade-down"> <a href="/services/deep-cleaning"> DEEP CLEANING </a></button>
                                <button className="greenbtn" data-aos="fade-down"> <a href="tel:+4058822863"> CALL US TODAY </a></button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <ConsultancySection/>

            <Footer/>
            
        </>
    )
}

export default Home;