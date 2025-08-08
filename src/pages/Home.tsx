
import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import heroImage from "../assets/hero.jpg";
import productImage from "../assets/equipment.jpg";
import serviceImage from "../assets/service.jpg";
import researchImage from "../assets/research.jpg";

const Home: React.FC = () => {
  return (
    <>
      <Header />

      {/* Hero Section */}
      <section
        style={{
          background: `url(${heroImage}) center/cover no-repeat`,
          minHeight: "90vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#fff",
          textAlign: "center",
        }}
      >
        <div style={{ background: "rgba(0,0,0,0.5)", padding: "40px", borderRadius: "12px" }}>
          <h1 className="display-4 fw-bold">Shaping the Future of Healthcare</h1>
          <p className="lead mt-3">
            Delivering trusted medicines, innovative research, and global health solutions.
          </p>
          <a
            href="/medicines"
            className="btn btn-primary btn-lg mt-4"
            style={{ backgroundColor: "#127c91", border: "none" }}
          >
            Explore Our Products
          </a>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-5" style={{ backgroundColor: "#f9f9f9" }}>
        <div className="container text-center">
          <div className="row g-4">
            <div className="col-md-4">
              <h3 className="fw-bold text-primary">50+ Years of Excellence</h3>
              <p className="text-muted">A trusted name in the pharmaceutical industry with decades of experience.</p>
            </div>
            <div className="col-md-4">
              <h3 className="fw-bold text-primary">Global Presence</h3>
              <p className="text-muted">Supplying quality medicines to healthcare providers worldwide.</p>
            </div>
            <div className="col-md-4">
              <h3 className="fw-bold text-primary">Innovation Driven</h3>
              <p className="text-muted">Constantly investing in research to create better healthcare solutions.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Sections */}
      <section className="py-5">
        <div className="container">
          <div className="row g-4">
            <div className="col-lg-4 col-md-6">
              <div className="bg-white rounded shadow-sm overflow-hidden h-100">
                <img src={productImage} alt="Products" className="w-100" style={{ height: "220px", objectFit: "cover" }} />
                <div className="p-4">
                  <h4 className="fw-bold text-primary">Quality Medicines</h4>
                  <p className="text-muted">Manufacturing world-class pharmaceutical products for better patient outcomes.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="bg-white rounded shadow-sm overflow-hidden h-100">
                <img src={serviceImage} alt="Services" className="w-100" style={{ height: "220px", objectFit: "cover" }} />
                <div className="p-4">
                  <h4 className="fw-bold text-primary">Healthcare Solutions</h4>
                  <p className="text-muted">Comprehensive services from research to distribution for healthcare providers.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="bg-white rounded shadow-sm overflow-hidden h-100">
                <img src={researchImage} alt="Research" className="w-100" style={{ height: "220px", objectFit: "cover" }} />
                <div className="p-4">
                  <h4 className="fw-bold text-primary">Research & Development</h4>
                  <p className="text-muted">Innovating new treatments to address global healthcare challenges.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section
        className="py-5 text-center text-white"
        style={{ background: "linear-gradient(135deg, #0c5360 0%, #127c91 100%)" }}
      >
        <div className="container">
          <h2 className="fw-bold">Partner with Sandesh Pharma</h2>
          <p className="mt-3 mb-4">Join us in our mission to make quality healthcare accessible to all.</p>
          <a href="/contact" className="btn btn-light btn-lg">
            Get in Touch
          </a>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Home;

