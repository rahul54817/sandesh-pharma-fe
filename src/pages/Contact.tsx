import { useState } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';

export default function Contact() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Contact form submitted:', { name, email, message });
        alert('Message submitted successfully!');
        setName('');
        setEmail('');
        setMessage('');
    };

    return (
        <>
            <Header />
            <section
                style={{
                    minHeight: '100vh',
                    background: 'linear-gradient(135deg, #0c5360ff 0%, #127c91 100%)',
                    color: '#fff',
                    paddingTop: '120px',
                    paddingBottom: '50px'
                }}
            >
                <div className="container h-100">
                    <div
                        className="row align-items-center justify-content-center g-5 h-100"
                        style={{ minHeight: 'calc(100vh - 200px)' }} // ensures center between header & footer
                    >
                        {/* Info Section */}
                        <div className="col-12 col-lg-5 text-center text-lg-start">
                            <h2 className="fw-bold mb-3">Get in Touch</h2>
                            <p className="mb-4 fs-5">
                                Have questions about our medicines or services?
                                We’re here to help and would love to hear from you.
                            </p>
                            <ul className="list-unstyled fs-6">
                                <li className="mb-2">📍 123 Pharma Street, Medical City</li>
                                <li className="mb-2">📞 +91 98765 43210</li>
                                <li>✉️ contact@sandeshpharma.com</li>
                            </ul>
                        </div>

                        {/* Form Section */}
                        <div className="col-12 col-lg-5">
                            <div
                                className="p-4 shadow-lg bg-white rounded"
                                style={{ color: '#000', borderRadius: '12px' }}
                            >
                                <h4 className="fw-bold mb-4 text-center text-primary">
                                    CONTACT FORM
                                </h4>
                                <form onSubmit={handleSubmit}>
                                    <div className="mb-3">
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Your Name"
                                            value={name}
                                            required
                                            onChange={(e) => setName(e.target.value)}
                                        />
                                    </div>

                                    <div className="mb-3">
                                        <input
                                            type="email"
                                            className="form-control"
                                            placeholder="Your Email"
                                            value={email}
                                            required
                                            onChange={(e) => setEmail(e.target.value)}
                                        />
                                    </div>

                                    <div className="mb-3">
                                        <textarea
                                            className="form-control"
                                            placeholder="Your Message"
                                            rows={4}
                                            value={message}
                                            required
                                            onChange={(e) => setMessage(e.target.value)}
                                        ></textarea>
                                    </div>

                                    <button
                                        type="submit"
                                        className="btn w-100"
                                        style={{
                                            backgroundColor: '#0c5360ff',
                                            color: '#fff',
                                            fontWeight: 'bold'
                                        }}
                                    >
                                        SEND MESSAGE
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
}
