import { NavLink } from "react-router-dom";
import yelloTshirt from "../../../Images/white.jpg"
const Tshirt = () => {
  return (
    <>
      {/* </div> -->
<!-- social button end -->
        <!-- web design text start --> */}
      <div className="container mt-5">
      <h3 style={{display:"flex", justifyContent:"center", alignContent:"center"}}>Medal and T-shirt Preview</h3>
        <div className="row">
          <div className="col-12 col-lg-6 order-lg-1">
          <img
              className="img-fluid"
              src={yelloTshirt}
              alt="Best Web Development Company In Gurgaon" />
          </div>
          <div className="col-12 col-lg-6 order-lg-2 d-flex justify-content-center align-items-center">
            <img
              className="img-fluid"
              src={yelloTshirt}
              alt="Best Web Development Company In Gurgaon" />
          </div>
        </div>
      </div>
    </>
  );
};
export default Tshirt;
