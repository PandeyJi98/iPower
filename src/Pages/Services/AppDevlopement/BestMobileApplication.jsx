import walkGif from "../../../Images/RetirementWalk.gif"

const BestMobileCompany = () => {
  return (
    <>
      <div className="container mt-5">
        {/* <!-- first row --> */}
        <div className="row">
          <div className="col-12 col-lg-6 order-lg-2">
            <h2 className="mb-2">
              <strong>Walk Challenge</strong>
            </h2>
            <span  style={{fontSize:"1rem", fontWeight:'600'}}>
               Overall, Walk Challenges offer participants a
              structured way to improve fitness levels, achieve personal goals,
              connect with others, and support meaningful causes. They cater to
              a wide range of abilities and motivations, making them accessible
              and beneficial for individuals of all ages and fitness levels.
              Benefits of Walk Challenges Physical Fitness: Walking challenges
              promote cardiovascular health, improve endurance, and contribute
              to weight management.
            </span>

            <div style={{marginTop:"1rem"}}>
            <li style={{fontSize:"1rem"}}><strong>Cardiovascular Health:</strong> Walking strengthens the heart and improves blood circulation.</li>
            <li  style={{fontSize:"1rem"}}><strong>Weight Management:</strong> Regular walking helps burn calories, aiding in weight loss and maintenance.</li>
            <li  style={{fontSize:"1rem"}}><strong>Muscle Strength:</strong> Walking tones and strengthens various muscle groups, particularly in the legs and core.</li>
            <li  style={{fontSize:"1rem"}}><strong>Bone Health:</strong> Walking increases bone density and reduces the risk of osteoporosis.</li>
            <li  style={{fontSize:"1rem"}}><strong>Joint Health:</strong> As a low-impact activity, walking enhances joint mobility and reduces the risk of arthritis.</li>
            </div>
          </div>

          <div className="col-12 col-lg-6 mb-5 mb-lg-0 order-lg-1 d-flex justify-content-center">
            <img
              className="img-fluid"
              src={walkGif}
              alt="App Development"
              height="450px"
              width="450px"
            />
          </div>
        </div>
      </div>
    </>
  );
};
export default BestMobileCompany;
