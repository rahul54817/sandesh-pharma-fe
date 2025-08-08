import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import storyImage from "../assets/about1.jpg"
import missionImage from "../assets/about2.jpg"
import commitmentImage from "../assets/about3.jpg"

const About: React.FC = () => {
  return (
    <>
      <Header />

      {/* Hero Section */}
      <section
        className="mt-5"
        style={{
          background: "linear-gradient(135deg, #0c5360 0%, #127c91 100%)",
          paddingTop: "150px",
          paddingBottom: "80px",
          color: "#fff",
        }}
      >
        <div className="container text-center">
          <h1 className="display-5 fw-bold mb-3">About Sandesh Pharma</h1>
          <p className="lead mb-0">
            Trusted healthcare solutions with innovation, integrity, and
            excellence.
          </p>
        </div>
      </section>

      {/* About Content */}
      <section className="py-5" style={{ backgroundColor: "#f9f9f9" }}>
        <div className="container">
          <div className="row g-4">
            {/* Card 1 */}
            <div className="col-lg-4 col-md-6">
              <div className="bg-white rounded shadow-sm h-100 overflow-hidden">
                <img
                  src = {storyImage}
                  alt="Our Story"
                  className="w-100"
                  style={{ height: "200px", objectFit: "cover" }}
                />
                <div className="p-4">
                  <h4 className="fw-bold text-primary mb-3">Our Story</h4>
                  <p className="text-muted">
                    Established with a vision to make affordable and high-quality
                    healthcare accessible to all, we have grown by embracing
                    innovation and staying aligned with the latest advancements in
                    medical science.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="col-lg-4 col-md-6">
              <div className="bg-white rounded shadow-sm h-100 overflow-hidden">
                <img
                  src = {missionImage}
                  alt="Our Mission"
                  className="w-100"
                  style={{ height: "200px", objectFit: "cover" }}
                />
                <div className="p-4">
                  <h4 className="fw-bold text-primary mb-3">Our Mission</h4>
                  <p className="text-muted">
                    To deliver safe, effective healthcare solutions that improve
                    lives. We combine cutting-edge research, strict quality
                    control, and a passionate team to create a meaningful impact.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="col-lg-4 col-md-6">
              <div className="bg-white rounded shadow-sm h-100 overflow-hidden">
                <img
                  src={commitmentImage}
                  alt="Our Commitment"
                  className="w-100"
                  style={{ height: "200px", objectFit: "cover" }}
                />
                <div className="p-4">
                  <h4 className="fw-bold text-primary mb-3">Our Commitment</h4>
                  <p className="text-muted">
                    We believe in sustainable practices, continuous R&D, and a
                    patient-first approach. Every step we take is aimed at building
                    a healthier future for everyone.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Closing Statement */}
          <div className="mt-5 text-center">
            <p className="fs-5 text-muted">
              Thank you for choosing{" "}
              <span className="fw-bold text-primary">Sandesh Pharma</span> — your
              trusted partner in health.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default About;
