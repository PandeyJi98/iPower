import React, { Component } from 'react'
import { Link, NavLink } from 'react-router-dom'
import "./home.css"
import cycleImage from "../../Images/single-cycle.png"
import runChallengeIms from "../../Images/colorful-man.png"
import walkImage from "../../Images/walking-foot.png"

export default class Service extends Component {
    render() {
        return (
            <div className="container pb-lg-5 mt-4 p-30" >
                <h2 className="mb-5 text-center"><strong>Challenges We Provide</strong></h2>
                <div className="row" >
                    <div className="col-12 col-md-6 col-xl-3 mb-5 mb-md-5 mb-xl-0 " data-aos="zoom-out-up">
                        <div className="card m-auto h-100 " >
                            <img src={cycleImage} className="card-img-top" alt="web designing" title="web designing" height="210" width="210" />
                            
                            <div className="card-body">
                                <h2 className="card-title fs-4"><strong>Cycling Challenge</strong></h2>
                                <p className="card-text">Cycle challenges motivate participants through goal-setting, camaraderie,
                                     and the thrill of overcoming physical and mental barriers.</p>
                                <NavLink to="/cycling-challenge" className="btn btn-primary">Read More</NavLink>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-xl-3 mb-5 mb-md-5 mb-xl-0" data-aos="zoom-out-down">
                        <div className="card m-auto h-100">
                            <img src={runChallengeIms} className="card-img-top" alt="Web Development" title='Web Development' height="210" width="210" />
                            <div className="card-body">
                                <h2 className="card-title fs-4"><strong>Run Challenge</strong></h2>
                                <p className="card-text">A run challenge motivates by setting goals, encouraging perseverance, and fostering a sense of
                                     accomplishment through physical achievement.</p>
                                <NavLink to="/run-challenge" className="btn btn-primary">Read More</NavLink>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-xl-3 mb-5 mb-md-5 mb-xl-0" data-aos="zoom-out-left">
                        <div className="card m-auto h-100">
                            <img src={walkImage} className="card-img-top" alt="Digital Marketing" title='Digital Marketing' height="210" width="210" />
                            <div className="card-body">
                                <h2 className="card-title fs-4"><strong>Walk Challenge</strong></h2>
                                <p className="card-text">A run challenge motivates by setting goals, encouraging perseverance, and fostering a sense of
                                     accomplishment through physical achievement.</p>
                                <NavLink to="/walk-challenge" className="btn btn-primary">Read More</NavLink>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-xl-3  mb-5 mb-md-5 mb-xl-0" data-aos="zoom-out-right">
                        <div className="card m-auto h-100">
                            <img src='assets/image/services/software_development.webp' className="card-img-top" alt="Software Development" title='Software Development' height="210" width="210" />
                            <div className="card-body">
                                <h2 className="card-title fs-4"><strong>21-Days Challenget</strong></h2>
                                <p className="card-text">A 21-day challenge motivates by instilling discipline, forming habits, and offering a structured approach to achieving personal goals.</p>
                                <NavLink to="/software-development" className="btn btn-primary">Read More</NavLink>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row mt-lg-5">
                    <div className="col-12 col-md-6 col-xl-3 mb-5 mb-md-5 mb-xl-0" data-aos="zoom-in-right">
                        <div className="card m-auto h-100">
                            <img src='assets/image/services/automated_system.webp' className="card-img-top" alt="Automated System" title='Automated System' height="210" width="210" />
                            <div className="card-body">
                                <h2 className="card-title fs-4"><strong>30-Days Challenge</strong></h2>
                                <p className="card-text ">A 30-day challenge motivates by providing a clear timeframe, encouraging consistency, and fostering determination to achieve lasting personal improvement.</p>
                                <NavLink to="/automated-system" className="btn btn-primary ">Read More</NavLink>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-xl-3 mb-5 mb-md-5 mb-xl-0" data-aos="zoom-in-up">
                        <div className="card m-auto h-100">
                            <img src='assets/image/services/business_analysis.webp' className="card-img-top" alt="Business Analysis" title='Business Analysis' height="210" width="210" />
                            <div className="card-body">
                                <h2 className="card-title fs-4"><strong>Plant Challenge</strong></h2>
                                <p className="card-text">each sapling is a promise of cleaner air, healthier ecosystems, and a sustainable future for generations to come.</p>
                                <NavLink to="/business-analysis" className="btn btn-primary">Read More</NavLink>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-xl-3 mb-5 mb-xl-0" data-aos="zoom-in-down">
                        <div className="card m-auto h-100">
                            <img src='assets/image/services/social_media.webp' className="card-img-top" alt="Social Marketing Media" title='Social Marketing Media' height="210" width="210" />
                            <div className="card-body">
                                <h2 className="card-title fs-4"><strong>Trip Challenge</strong></h2>
                                <p className="card-text">Embark on the journey of a lifetime; embrace the unknown, discover yourself, and collect moments that enrich your soul forever.</p>
                                <NavLink to="/socialMedia-marketing" className="btn btn-primary">Read More</NavLink>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-xl-3 mb-md-5 mb-xl-0" data-aos="zoom-in-left">
                        <div className="card m-auto h-100">
                            <img src='assets/image/services/App_development.webp' className="card-img-top" alt="App Development" title='App Development' height="210" width="210" />
                            <div className="card-body">
                                <h2 className="card-title fs-4"><strong>Swimming challenge</strong></h2>
                                <p className="card-text">Dive into the deep blue, conquer doubts with each stroke, and emerge stronger—unleash your aquatic spirit in every shimmering wave.</p>
                                <NavLink to="/app-development" className="btn btn-primary">Read More</NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
