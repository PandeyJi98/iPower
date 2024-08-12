import React from 'react';
import gaurav from "../../Images/Gaurav.jpeg";
import rahul from "../../Images/Rahul.jpeg";
import ankit from "../../Images/Ankit.jpeg";
import feedback from "../../Images/feedback.png";

const Test = () => {
    return (
        <>
            {/* <!-- reviews start --> */}
            <div className="container p-5">
                <div className="row d-flex flex-column-reverse flex-lg-row">
                    <div className="col-12 col-lg-4 d-flex justify-content-center align-items-center mt-4 mt-lg-0" data-aos="slide-up">
                        <img className='img-fluid' loading='lazy' src={feedback} alt="iPower" />
                    </div>
                    <div className="col-12 col-lg-8 text-dark" data-aos="slide-right">
                        <h5>Testimonials</h5>
                        <h5><b>Few of Our Client’s feedback of users!</b></h5>
                        <p>Clients Reviews:</p>
                        <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
                            <div className="carousel-indicators">
                                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
                                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="4" aria-label="Slide 5"></button>
                            </div>
                            <div className="carousel-inner p-3">
                                {/* Card 1 */}
                                <div style={{ display:"flex", justifyContent:"center" }} className="carousel-item active pb-5" data-bs-interval="3000">
                                    <article className="Testimonisal-card">
                                        <div className="Testimonisal-card-img">
                                           <div className="Testimonisal-card-imgs  pv delete"> <img src={ankit} alt="Ankit" className="d-block" style={{ width: "100%", height: "100%", borderRadius: '5%' }} /></div>
                                        </div>
                                        <div className="project-info">
                                            <div className="flex">
                                                <div className="project-title">Ankit</div>
                                                <span className="tag">HR Manager</span>
                                            </div>
                                            <span className="lighter">
                                            "I Power’s cycling challenge was impeccably well-organized. Every aspect of the event, from registration to the route logistics,
                                             was handled with precision. Their seamless execution ensured that our team could focus on enjoying the ride and the camaraderie. 
                                             This level of organization truly sets I Power apart."
                                            </span>
                                        </div>
                                    </article>
                                </div>
                                {/* Card 2 */}
                                <div style={{ display:"flex", justifyContent:"center" }} className="carousel-item pb-5" data-bs-interval="3000">
                                    <article className="Testimonisal-card">
                                    <div className="Testimonisal-card-img">
                                           <div className="Testimonisal-card-imgs  pv delete"> <img src={rahul} loading='lazy' alt="Rahul" className="d-block" style={{ width: "100%", height: "100%", borderRadius: '5%' }} /></div>
                                        </div>
                                        <div className="project-info">
                                            <div className="flex">
                                                <div className="project-title">Rahul</div>
                                                <span className="tag">IT (Software Tester)</span>
                                            </div>
                                            <span className="lighter">
                                            "Our experience with I Power was highlighted by their commitment to providing hygienic and rich food. The post-ride meals
                                             were not only delicious but also prepared with the utmost attention to cleanliness and quality. This thoughtful detail made the event even more enjoyable and satisfying for everyone involved."
                                            </span>
                                        </div>
                                    </article>
                                </div>
                                {/* Card 3 */}
                                <div style={{ display:"flex", justifyContent:"center" }} className="carousel-item pb-5" data-bs-interval="3000">
                                    <article className="Testimonisal-card">
                                    <div className="Testimonisal-card-img">
                                           <div className="Testimonisal-card-imgs  pv delete"> <img src={gaurav} loading='lazy' alt="Ankit" className="d-block" style={{ width: "100%", height: "100%", borderRadius: '5%' }} /></div>
                                        </div>
                                        <div className="project-info">
                                            <div className="flex">
                                                <div className="project-title">Gaurav</div>
                                                <span className="tag">PA (Accountant)</span>
                                            </div>
                                            <span className="lighter">
                                            "I Power’s meticulous planning was evident throughout our cycling challenge. They left no stone unturned in their
                                             detailed preparations, ensuring a smooth and engaging experience. From the well-mapped routes to the precise timing of breaks, every element was thoughtfully orchestrated."
                                            </span>
                                        </div>
                                    </article>
                                </div>
                            </div>
                            <button className="carousel-control-prev nextSlider" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Previous</span>
                            </button>
                            <button className="carousel-control-next prevSlider" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Next</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- reviews end --> */}
        </>
    );
};

export default Test;
