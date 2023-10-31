import React, { useRef, useState, useEffect } from 'react'
import Footer from '../shared/Footer/Footer'
import NavbarTeam from '../shared/Navbar/NavbarTeam'
import { AiOutlineArrowRight, AiOutlineArrowLeft } from "react-icons/ai";
import './Allevents.css'
import { alleventsrjn, alleventorientation , alleventempresario} from '../../Data/EventsData';
import { alleventeic } from '../../Data/EventsData';
import { alleventsrijan } from '../../Data/EventsData';
const AllEvents = () => {
    useEffect(() => {
        document.title = "Past Events ECELL | NITS";
    }, []);

    let allevntsrjn = useRef();

    function srjnfwdNextgo() {
        allevntsrjn.current.scrollLeft += allevntsrjn.current.offsetWidth;
    }

    function srjnbackPrevbk() {
        allevntsrjn.current.scrollLeft -= allevntsrjn.current.offsetWidth;
    }

    let allevntorientation = useRef();

    function orientfwdNextgo() {
        allevntorientation.current.scrollLeft += allevntorientation.current.offsetWidth;
    }

    function orientbackPrevbk() {
        allevntorientation.current.scrollLeft -= allevntorientation.current.offsetWidth;
    }

    let allevntempressario = useRef();

    function empressariofwdNextgo() {
        allevntempressario.current.scrollLeft += allevntempressario.current.offsetWidth;
    }

    function empressariobackPrevbk() {
        allevntempressario.current.scrollLeft -= allevntempressario.current.offsetWidth;
    }

    let allevnteic = useRef();

    function eicfwdNextgo() {
        allevnteic.current.scrollLeft += allevnteic.current.offsetWidth;
    }

    function eicbackPrevbk() {
        allevnteic.current.scrollLeft -= allevnteic.current.offsetWidth;
    }

    let allevntincubation = useRef();

    function incubationfwdNextgo() {
        allevntincubation.current.scrollLeft += allevntincubation.current.offsetWidth;
    }

    function incubationbackPrevbk() {
        allevntincubation.current.scrollLeft -= allevntincubation.current.offsetWidth;
    }

    /* implementing ioa */
    const config = {
        rootMargin: "0px 0px 0px 0px",
        threshold: 0.2,
    };

    const [loaded, setIsLoaded] = useState(false);
    useEffect(() => {
        let observer = new window.IntersectionObserver(function (entries, self) {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    loadImages(entry.target);
                    self.unobserve(entry.target);
                }
            });
        }, config);
        const imgs = document.querySelectorAll("[data-src]");
        imgs.forEach((img) => {
            observer.observe(img);
        });
        return () => {
            imgs.forEach((img) => {
                observer.unobserve(img);
            });
        };
    }, []);

    const loadImages = (image) => {
        image.src = image.dataset.src;
    };

    return (
        <>
            <NavbarTeam />
            <div className="events-main-hero ">
                <div className="top-hro-all-evnts-pol">
                    <h1>OUR PAST EVENTS</h1>
                </div>
            </div>

            {/* Orientation starts */}
            <div className="upcom-evnts-top">
                <h1><span style={{ fontFamily: "Barlow Condensed", color: "#224259", fontWeight: "900" }}>ORIENTATION</span></h1>
            </div>
            <div className="upcomi-evvnts-parnt" ref={allevntorientation}>
                {alleventorientation.map((item) => {
                    return (

                        <div className="upcom-evnt-indi" key={item.id}>
                            <div className="img-upcom-evnt">
                                <img src=''
                                    data-src={item.img}
                                    className={loaded ? "loaded" : "loading"}
                                    onLoad={() => setIsLoaded(true)}
                                    alt="" />
                            </div>

                            <div className="title-announc-upcom-evnt">
                                <h1>{item.title}</h1>
                            </div>
                            <div className="dte-locn-upcomi-event">
                                <h2>{item.date}</h2>
                            </div>

                                <div className="btns-info-klp">
                                    <div className="btns-1-ent-indi">
                                        <button>{item.btn1}</button>
                                    </div>
                                    <div className="btns-1-ent-indi">
                                        <button>{item.btn2}</button>
                                    </div>
                                </div>

                           

                            <div className="abt-content-indi-evnt">
                                <h3>{item.content}</h3>
                            </div>
                        </div>

                    );
                })}
            </div>
            <div className="btns">
                <button className="prev btn-testimonial" onClick={orientbackPrevbk}>
                    <AiOutlineArrowLeft className="btn-indi-testimonial" />
                </button>
                <button className="next btn-testimonial" onClick={orientfwdNextgo}>
                    <AiOutlineArrowRight className="btn-indi-testimonial" />
                </button>
            </div>
            {/* Orientation ends */}

            {/* Empressario starts */}
            <div className="upcom-evnts-top eic-hd-ttle">
                <h1><span style={{ fontFamily: "Barlow Condensed", color: "#224259", fontWeight: "900" }}>EMPRESSARIO</span></h1>
            </div>

            <div className="upcomi-evvnts-parnt" ref={allevntempressario}>
                {alleventempresario.map((item) => {
                    return (

                        <div className="upcom-evnt-indi" key={item.id}>
                            <div className="img-upcom-evnt">
                                <img src=''
                                    data-src={item.img}
                                    className={loaded ? "loaded" : "loading"}
                                    onLoad={() => setIsLoaded(true)}
                                    alt="" />
                            </div>

                            <div className="title-announc-upcom-evnt">
                                <h1>{item.title}</h1>
                            </div>
                            <div className="dte-locn-upcomi-event">
                                <h2>{item.date}</h2>
                            </div>

                                <div className="btns-info-klp">
                                    <div className="btns-1-ent-indi">
                                        <button>{item.btn1}</button>
                                    </div>
                                    <div className="btns-1-ent-indi">
                                        <button>{item.btn2}</button>
                                    </div>
                                </div>

                            

                            <div className="abt-content-indi-evnt">
                                <h3>{item.content}</h3>
                            </div>
                        </div>

                    );
                })}
            </div>

            <div className="btns">
                <button className="prev btn-testimonial" onClick={empressariobackPrevbk}>
                    <AiOutlineArrowLeft className="btn-indi-testimonial" />
                </button>
                <button className="next btn-testimonial" onClick={empressariofwdNextgo}>
                    <AiOutlineArrowRight className="btn-indi-testimonial" />
                </button>
            </div>
            {/* Empressario ends */}

            {/* EIC starts */}
            <div className="upcom-evnts-top eic-hd-ttle">
                <h1><span style={{ fontFamily: "Barlow Condensed", color: "#224259", fontWeight: "900" }}>ENTREPRENEURSHIP & INNOVATION CHALLENGE (EIC)</span></h1>
            </div>

            <div className="upcomi-evvnts-parnt" ref={allevnteic}>
                {alleventeic.map((item) => {
                    return (

                        <div className="upcom-evnt-indi" key={item.id}>
                            <div className="img-upcom-evnt">
                                <img src=''
                                    data-src={item.img}
                                    className={loaded ? "loaded" : "loading"}
                                    onLoad={() => setIsLoaded(true)}
                                    alt="" />
                            </div>

                            <div className="title-announc-upcom-evnt">
                                <h1>{item.title}</h1>
                            </div>

                            <div className="dte-locn-upcomi-event">
                                <h2>{item.date}</h2>
                            </div>

                            <div className="btns-info-klp">
                                <div className="btns-1-ent-indi">
                                    <button>{item.btn1}</button>
                                </div>
                                <div className="btns-1-ent-indi">
                                    <button>{item.btn2}</button>
                                </div>
                            </div>

                            <div className="abt-content-indi-evnt">
                                <h3>{item.content}</h3>
                            </div>
                        </div>

                    );
                })}
            </div>
            <div className="btns">
                <button className="prev btn-testimonial" onClick={eicbackPrevbk}>
                    <AiOutlineArrowLeft className="btn-indi-testimonial" />
                </button>
                <button className="next btn-testimonial" onClick={eicfwdNextgo}>
                    <AiOutlineArrowRight className="btn-indi-testimonial" />
                </button>
            </div>
            {/* EIC ends */}

            {/* Srijan starts */}
            <div className="upcom-evnts-top eic-hd-ttle">
                <h1><span style={{ fontFamily: "Barlow Condensed", color: "#224259", fontWeight: "900" }}>SRIJAN</span></h1>
            </div>
            <div className="upcomi-evvnts-parnt" ref={allevntsrjn}>
                {alleventsrijan.map((item) => {
                    return (
                        <div className="upcom-evnt-indi" key={item.id}>
                            <div className="img-upcom-evnt">
                                <img src=''
                                    data-src={item.img}
                                    className={loaded ? "loaded" : "loading"}
                                    onLoad={() => setIsLoaded(true)}
                                    alt="" />
                            </div>

                            <div className="title-announc-upcom-evnt">
                                <h1>{item.title}</h1>
                            </div>

                            <div className="dte-locn-upcomi-event">
                                <h2>{item.date}</h2>
                            </div>

                            <div className="btns-info-klp">
                                <div className="btns-1-ent-indi">
                                    <button>{item.btn1}</button>
                                </div>
                                <div className="btns-1-ent-indi">
                                    <button>{item.btn2}</button>
                                </div>
                            </div>

                            <div className="abt-content-indi-evnt">
                                <h3>{item.content}</h3>
                            </div>
                        </div>

                    );
                })}
            </div>
            <div className="btns">
                <button className="prev btn-testimonial" onClick={srjnbackPrevbk}>
                    <AiOutlineArrowLeft className="btn-indi-testimonial" />
                </button>
                <button className="next btn-testimonial" onClick={srjnfwdNextgo}>
                    <AiOutlineArrowRight className="btn-indi-testimonial" />
                </button>
            </div>
            {/* Srijan ends */}

            {/* Incubation starts */}
            {/* <div className="upcom-evnts-top eic-hd-ttle">
                <h1><span style={{ fontFamily: "Barlow Condensed", color: "#224259", fontWeight: "900" }}>INCUBATION</span></h1>
            </div>
            <div className="upcomi-evvnts-parnt" ref={allevntincubation}>
                {alleventsrjn.map((item) => {
                    return (

                        <div className="upcom-evnt-indi" key={item.id}>
                            <div className="img-upcom-evnt">
                                <img src=''
                                    data-src={item.img}
                                    className={loaded ? "loaded" : "loading"}
                                    onLoad={() => setIsLoaded(true)}
                                    alt="" />
                            </div>

                            <div className="title-announc-upcom-evnt">
                                <h1>{item.title}</h1>
                            </div>

                            <div className="dte-locn-upcomi-event">
                                <h2>{item.date}</h2>
                            </div>

                            <div className="btns-info-klp">
                                <div className="btns-1-ent-indi">
                                    <button>Research</button>
                                </div>
                                <div className="btns-1-ent-indi">
                                    <button>Srijan</button>
                                </div>
                            </div>

                            <div className="abt-content-indi-evnt">
                                <h3>{item.content}</h3>
                            </div>
                        </div>

                    );
                })}
            </div>
            <div className="btns">
                <button className="prev btn-testimonial" onClick={incubationbackPrevbk}>
                    <AiOutlineArrowLeft className="btn-indi-testimonial" />
                </button>
                <button className="next btn-testimonial" onClick={incubationfwdNextgo}>
                    <AiOutlineArrowRight className="btn-indi-testimonial" />
                </button>
            </div> */}
            {/* Incubation ends */}
            <Footer />
        </>
    )
}

export default AllEvents