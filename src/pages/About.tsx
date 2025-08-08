import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const About: React.FC = () => {
    return (
        <>
            <Header />
           <section className="py-5 mt-5" style={{ minHeight: '100vh', paddingTop: '150px' }}>

                <div className="flex-grow px-4 py-12 max-w-5xl mx-auto">
                    <h1 className="text-4xl font-bold mb-6 text-center text-primary">About Sandesh Pharma</h1>

                    <p className="mb-4 text-lg text-gray-700">
                        At Sandesh Pharma, we are committed to innovation, integrity, and excellence in the field of pharmaceuticals. Established with a vision to bring affordable and high-quality healthcare to every corner of the country, we have continually advanced in our journey by adhering to our core values and staying aligned with the latest advancements in medical science.
                    </p>

                    <p className="mb-4 text-lg text-gray-700">
                        Our mission is to deliver effective and safe healthcare solutions that improve lives. Through a combination of cutting-edge research, stringent quality control, and a passionate team of professionals, we strive to make a meaningful impact on the communities we serve.
                    </p>

                    <p className="mb-4 text-lg text-gray-700">
                        At the heart of Sandesh Pharma lies a relentless pursuit of excellence. Whether it’s our commitment to R&D, sustainable practices, or patient-centric approach, we believe in building a healthier future for all.
                    </p>

                    <p className="text-lg text-gray-700">
                        Thank you for choosing Sandesh Pharma — your trusted partner in health.
                    </p>
                </div>

            </section>
            <Footer />
        </>

    );
};

export default About;
