import { useState } from 'react';
import Footer from '../components/Footer';
import logo from '../assets/logo6.png';
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
            <section className="py-5 mt-5" style={{ minHeight: '100vh', paddingTop: '150px' }}>
                <div className="d-flex justify-content-center align-items-center vh-100">
                    <div
                        className="card shadow p-4"
                        style={{ width: '100%', maxWidth: '400px', borderRadius: '12px' }}
                    >
                        <div className="text-center mb-4">
                            <img src={logo} alt="Sandesh Pharma" height="75" className="mb-2" />
                            <h4 className="fw-bold">CONTACT US</h4>
                        </div>

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
                                className="btn w-100 mb-3"
                                style={{ backgroundColor: '#0c5360ff', color: '#fff' }}
                            >
                                SEND MESSAGE
                            </button>
                        </form>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
}
