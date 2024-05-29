import React from "react";
import Navbar from "../components/Navbar";
import Cards from "../components/Cards";
import Footer from "../components/Footer";
import img1 from '../images/zoro.jpeg';
import img2 from '../images/luffy.jpeg';
import img3 from '../images/sukuna.jpg';
import img4 from '../images/logo.jpg';
import img5 from '../images/img3.jpeg';

function Home() {
  return (
    <div>
      <Navbar />
      <div className="container">
        {/* Gym Membership Category */}
        <div className="fs-3 m-3">Gym Membership</div>
        <hr />
        <div className="row justify-content-center">
          {/* Basic Membership */}
          <div className="col-md-4">
            <Cards
              gymName="Basic"
              description="Access to basic gym facilities."
              options={{
                "1 month": "Rs. 60",
                "3 months": "Rs. 150",
                "6 months": "Rs. 270",
                "12 months": "Rs. 500"
              }}
              img={img1}
            />
          </div>
          {/* Premium Membership */}
          <div className="col-md-4">
            <Cards
              gymName="Premium"
              description="Access to premium gym facilities."
              options={{
                "1 month": "Rs. 90",
                "3 months": "Rs. 250",
                "6 months": "Rs. 450",
                "12 months": "Rs. 800"
              }}
              img={img2}
            />
          </div>
          {/* VIP Membership */}
          <div className="col-md-4">
            <Cards
              gymName="VIP"
              description="Exclusive access to VIP gym facilities."
              options={{
                "1 month": "Rs. 150",
                "3 months": "Rs. 400",
                "6 months": "Rs. 700",
                "12 months": "Rs. 1200"
              }}
              img={img3}
            />
          </div>
        </div>

        {/* Olympia Preparation Category */}
        <div className="fs-3 m-3">Olympia Preparation</div>
        <hr />
        <div className="row justify-content-center">
          {/* Strength Training Program */}
          <div className="col-md-4">
            <Cards
              gymName="Strength Training"
              description="Customized strength training program."
              options={{
                "1 month": "Rs. 120",
                "3 months": "Rs. 330",
                "6 months": "Rs. 600",
                "12 months": "Rs. 1000"
              }}
              img={img4}
            />
          </div>
          {/* Nutrition Consultation */}
          <div className="col-md-4">
            <Cards
              gymName="Nutrition Consultation"
              description="One-on-one nutrition consultation."
              options={{
                "1 session": "Rs. 50",
                "3 sessions": "Rs. 120",
                "5 sessions": "Rs. 200",
                "10 sessions": "Rs. 350"
              }}
              img={img5}
            />
          </div>
          {/* Personal Trainer */}
          <div className="col-md-4">
            <Cards
              gymName="Personal Trainer"
              description="Personalized training sessions."
              options={{
                "5 sessions": "Rs. 200",
                "10 sessions": "Rs. 350",
                "20 sessions": "Rs. 600",
                "40 sessions": "Rs. 1000"
              }}
              img={img2}
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
