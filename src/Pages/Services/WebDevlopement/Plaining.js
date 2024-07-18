import running from "../../../Images/running.gif.gif"
import runningColorfulMan from "../../../Images/colorful-man.png"
const Plaining = () => {
  return (
    <>
      <div className="container mt-5">
        <div className="row">
          <div className="col-12 col-lg-6">
            <h2 className="mb-2">
              <strong>Run Challenge</strong>
            </h2>
            <p>
              Overall, Run Challenges offer participants a
              structured way to improve fitness levels, achieve personal goals,
              connect with others, and support meaningful causes. They cater to
              a wide range of abilities and motivations, making them accessible
              and beneficial for both recreational runners and competitive
              athletes alike. Benefits of Run Challenges: Physical Fitness:
              Running challenges promote cardiovascular health, improve
              endurance, and contribute to weight management. Mental Well-being:
              Regular running can reduce stress levels, improve mood, and
              enhance mental clarity and focus. Goal Achievement: Setting and
              achieving running goals provides a sense of accomplishment and
              boosts self-confidence. Community and Social Interaction:
              Participation in run challenges allows individuals to connect with
              other runners, fostering a sense of camaraderie and support.
              Charitable Contributions: Many run challenges support charitable
              causes, allowing participants to contribute positively to their
              communities or global initiatives.
            </p>
          </div>
          <div className="col-12 col-lg-6 d-flex justify-content-center align-items-center">
            <img
              className="img-fluid"
              src={running}
              alt="Innovative Web Development Company In Gurgaon"
            />
          </div>
        </div>
        <div className="row">
            
          <div className="col-12 col-lg-6 order-lg-2 pt-4" data-aos="zoom-in">
          <strong>Challenge Rules</strong>
<div style={{display:"flex", flexDirection:"column", gap:"0.7rem"}}>
<span>(1) Complete your chosen distance in the given duration of the event.</span>
<span> (2) Record your activity in any fitness app (STRAVA Recommended)</span>
<span>(3) You are free to choose the days, place (indoors or outdoors), and the distance you want to complete on any particular day.</span>
<span>(4) Participants has to ride a minimum distance of 5 KM for an activity to be considered for the challenge. Less than 5 KM won't be counted.</span>
<span>(5) In a day, a maximum of two rides are accepted. If you do more than 2, then only the first two will be counted towards the challenge.</span>
<span>(6) If you have registered for the medal category then it is mandatory to complete up to 95% of your chosen target to be eligible for medal.
If you fail to complete 95% of your selected target then you won't be receiving the finisher's medal.</span>
</div>
          </div>
          <div
            className="col-12 col-lg-6 order-lg-1 d-flex justify-content-center align-items-center"
            data-aos="zoom-out"
          >
            <img
              className="img-fluid pb-5 pe-5 ps-5"
              src={runningColorfulMan}
              alt="Innovative Web Development Company In Gurgaon"
            />
          </div>
        </div>
      </div>
    </>
  );
};
export default Plaining;
