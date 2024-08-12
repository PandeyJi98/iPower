import React, { Component } from 'react'
import colorfulImage from "../../Images/two-male-female.png"

export default class About extends Component {
    render() {
        return (
            <div className="container mt-md-5" >
                <div className="row">
                    <div className="col-12 col-lg-6 ps-md-5">
                        <h1 className="my-3" style={{ fontWeight: "bold" }}>Who are we and what is our vision?</h1>
                        <p> At our core, we aim to empower individuals to prioritize and maintain excellent health.
                             Through our challenges, we motivate participants to strive for ongoing wellness and peak 
                             physical condition. We set clear, achievable goals that serve as milestones on their 
                             journey to optimal health. By encouraging commitment and perseverance, we foster habits
                              that promote long-term well-being. Our approach emphasizes personalized goals tailored
                               to individual needs, ensuring each participant receives targeted support in achieving their health objectives. Whether through fitness achievements, nutritional milestones, or mindfulness practices, our challenges are designed to cultivate a holistic approach to health. We believe in empowering individuals not only to reach their health goals but also to sustain them, fostering a lifestyle where well-being is a priority. Join us in this journey towards a healthier, more vibrant life, where every challenge conquered contributes to a stronger, more resilient you.</p>
                    </div>
                    <div className="col-12 d-flex justify-content-center align-items-center col-lg-6">
                        <img className="img-fluid" src={colorfulImage} alt="Best Web Design and Devlopment Company In Gurgaon" title='Best Web Design and Devlopment Company In Gurgaon' style={{ height: '380px' }} />
                    </div>
                </div>
            </div>
        )
    }
}
