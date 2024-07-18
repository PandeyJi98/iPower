import { NavLink } from "react-router-dom";
import cyclingGif from "../../../Images/Racing Green Raleigh.gif"
const Content = () => {
  return (
    <>
      {/* </div> -->
<!-- social button end -->
        <!-- web design text start --> */}
      <div className="container mt-5">
        <div className="row">
          <div className="col-12 col-lg-6 order-lg-2">
            <h2>
              <strong>Cycle Challenge</strong>
            </h2>
            <p>
            Cycle Challenges offer a platform for individuals to challenge themselves physically and mentally, promote health and fitness,
             and contribute to charitable causes or personal goals. They cater to a wide range of participants, from recreational
             cyclists to competitive athletes, each benefiting from the physical, mental, and social aspects of participating in such events.
            </p>
            <h3>Benefits of Cycle Challenges:</h3>
            <strong>Physical Fitness</strong><span>: Cycling challenges encourage regular exercise, promoting cardiovascular health, muscle strength, and overall fitness</span><br/>
            <strong>Mental Well-being:</strong><span>Participating in challenges can reduce stress levels and improve mental clarity and focus.</span><br/>
            <strong>Social Interaction:</strong><span>Opportunities to connect with like-minded individuals, fostering a sense of community and camaraderie.</span><br/>
            <strong>Achievement and Goal Setting:</strong><span>Setting and achieving cycling goals provides a sense of accomplishment and boosts motivation.</span><br/>
            <strong>Charitable Contributions:</strong><span>Many challenges support charitable causes, allowing participants to contribute positively to their communities or global initiatives.</span>
          </div>
          <div className="col-12 col-lg-6 order-lg-1 d-flex justify-content-center align-items-center">
            <img
              className="img-fluid"
              src={cyclingGif}
              alt="Best Web Development Company In Gurgaon" />
          </div>
        </div>
      </div>
    </>
  );
};
export default Content;
