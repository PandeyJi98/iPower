import walkImage from "../../../Images/walking-foot.png"
const Build = () => {
    return (
        <>
          {/* <!-- features start --> */}
          <div className="container mb-3 mt-5">
                <div className="row">
                    <div className="col-12 col-lg-7" data-aos="fade-up-right">
                        <h2 className="mb-4 fs-4"><strong>Challenege Rules</strong></h2>
                        <div className="row">
                             <div className="col-12">
                                    <p><strong>(1) Complete your chosen distance in the given duration of the event.</strong></p>
                                    <p><strong>(2) Record your activity in any fitness app (STRAVA Recommended)</strong></p>
                                    <p><strong>(3) You are free to choose the days, place (indoors or outdoors), and the distance you want to complete on any particular day.</strong></p>
                                    <p><strong>(4) Participants has to ride a minimum distance of 5 KM for an activity to be considered for the challenge. Less than 5 KM won't be counted.</strong></p>
                                    <p><strong>(5) In a day, a maximum of two rides are accepted. If you do more than 2, then only the first two will be counted towards the challenge.</strong></p>
                                    <p><strong>(6) If you have registered for the medal category then it is mandatory to complete up to 95% of your chosen target to be eligible for medal. If you fail to complete 95% of your selected target then you won't be receiving the finisher's medal.</strong></p>
                                </div>
                            {/* <div className="row">
                               
                                <div className="col-12 col-md-6">
                                    <p><img src="assets/image/feature4.gif" alt="App Development" height="60px" width="60px" />&nbsp;&nbsp;<strong>Security</strong></p>
                                    <p><img src="assets/image/feature5.gif" alt="App Development" height="60px" width="60px" />&nbsp;&nbsp;<strong>Customer Engagement</strong></p>
                                    <p><img src="assets/image/feature6.gif" alt="App Development" height="60px" width="60px" />&nbsp;&nbsp;<strong>Increase Accessibilty</strong></p>
                                    <p><img src="assets/image/feature7.gif" alt="App Development" height="60px" width="60px" />&nbsp;&nbsp;<strong>Support</strong></p>
                                </div>
                            </div> */}
                        </div>
                    </div>
                    <div className="col-12 col-lg-5" data-aos="fade-up-left">
                        <img className="img-fluid" src={walkImage} alt="Innovative App Devlopment Company In Delhi NCR" />
                    </div>
                </div>
            </div>
            <br /><br />

            {/* <!-- app development text end --> */}
            <div className="container mb-5">
                <h2 className="text-center mb-5"><strong>Benefits of walking</strong></h2>
                <div className="row m-auto d-flex justify-content-evenly">
                    <div className="col-12 col-lg-4 mb-5 mb-lg-0  d-flex justify-content-center" data-aos="flip-right">
                        <div className="card cardShadow container" style={{ width: "18rem" }}>
                            <img src="assets/image/feature4.gif" className="card-img-top appImg" alt=" Best Android Development Company In Gurgaon" />
                            <div className="card-body">
                                <h3 className="card-title text-center">Improves Cardiovascular Health</h3>
                                <p className="card-text">Walking regularly helps improve heart health by strengthening the heart, lowering blood pressure,
                                     and improving circulation. It can reduce the risk of heart disease and stroke.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-lg-4 mb-5 mb-lg-0  d-flex justify-content-center" data-aos="flip-down">
                        <div className="card cardShadow container" style={{ width: "18rem" }}>
                            <img src="assets/image/feature7.gif" className="card-img-top appImg" alt="iOS Development" />
                            <div className="card-body">
                                <h3 className="card-title text-center">Supports Weight Management</h3>
                                <p className="card-text">Walking is an effective way to burn calories and manage weight.
                                     Regular walking can help maintain a healthy weight, reduce body fat, and improve muscle tone and strength.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-lg-4 d-flex justify-content-center" data-aos="flip-left">
                        <div className="card cardShadow container" style={{ width: "18rem" }}>
                            <img src="assets/image/feature5.gif" className="card-img-top appImg" alt="Cross Platform" />
                            <div className="card-body">
                                <h3 className="card-title text-center">Enhances Mental Well-being</h3>
                                <p className="card-text">Walking has positive effects on mental health by reducing symptoms of anxiety,
                                     depression, and stress. It can boost mood, enhance cognitive function, and improve overall mental clarity and focus.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
          
        </>
    )
}
export default Build;


// Challenge Rules

// (2) Record your activity in any fitness app (STRAVA Recommended)
// (3) You are free to choose the days, place (indoors or outdoors), and the distance you want to complete on any particular day.
// (4) Participants has to ride a minimum distance of 5 KM for an activity to be considered for the challenge. Less than 5 KM won't be counted.
// (5) In a day, a maximum of two rides are accepted. If you do more than 2, then only the first two will be counted towards the challenge.
// (6) If you have registered for the medal category then it is mandatory to complete up to 95% of your chosen target to be eligible for medal. If you fail to complete 95% of your selected target then you won't be receiving the finisher's medal.