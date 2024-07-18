import { NavLink } from "react-router-dom";
import rulesImg from "../../../Images/Bicycle Gif.gif"
const Rules = () => {
  return (
    <>
      {/* </div> -->
<!-- social button end -->
        <!-- web design text start --> */}
      <div className="container mt-5">
        <div className="row">
          <div className="col-12 col-lg-6 order-lg-1">
            <h2>
              <strong> Challenge Rules</strong>
            </h2>
           <div style={{display:"flex", flexDirection:"column", gap:"0.7rem"}}>
           <span>(1) Complete your chosen distance in the given duration of the event.</span>
<span>(2) Record your activity in any fitness app (STRAVA Recommended)</span>
<span>(3) You are free to choose the days, place (indoors or outdoors), and the distance you want to complete on any particular day.</span>
<span>(4) Participants has to ride a minimum distance of 5 KM for an activity to be considered for the challenge. Less than 5 KM won't be counted.</span>
<span>(5) In a day, a maximum of two rides are accepted. If you do more than 2, then only the first two will be counted towards the challenge.</span>
<span>(6) If you have registered for the medal category then it is mandatory to complete up to 95% of your chosen target to be eligible for medal. If you fail to complete 
    95% of your selected target then you won't be receiving the finisher's medal.</span>
           </div>
          </div>
          <div className="col-12 col-lg-6 order-lg-2 d-flex justify-content-center align-items-center">
            <img
              className="img-fluid"
              src={rulesImg}
              alt="Best Web Development Company In Gurgaon" />
          </div>
        </div>
      </div>
    </>
  );
};
export default Rules;
