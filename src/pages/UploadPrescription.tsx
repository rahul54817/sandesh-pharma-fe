// src/pages/UploadPrescription.tsx
import { useState, useRef } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useNavigate } from 'react-router-dom';

export default function UploadPrescription() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [isCameraOpen, setIsCameraOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [uploadSuccess, setUploadSuccess] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const navigate = useNavigate();

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setSelectedFile(file);
      setPreviewUrl(URL.createObjectURL(file));
      setIsCameraOpen(false);
    }
  };

  const openCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
      }
      setIsCameraOpen(true);
    } catch (err) {
      console.error("Error accessing camera:", err);
      alert("Could not access camera. Please check permissions.");
    }
  };

  const capturePhoto = () => {
    if (videoRef.current) {
      const canvas = document.createElement('canvas');
      canvas.width = videoRef.current.videoWidth;
      canvas.height = videoRef.current.videoHeight;
      const ctx = canvas.getContext('2d');
      if (ctx) {
        ctx.drawImage(videoRef.current, 0, 0, canvas.width, canvas.height);
        canvas.toBlob((blob) => {
          if (blob) {
            const file = new File([blob], 'prescription.jpg', { type: 'image/jpeg' });
            setSelectedFile(file);
            setPreviewUrl(URL.createObjectURL(blob));
            setIsCameraOpen(false);
            // Stop camera stream
            const stream = videoRef.current?.srcObject as MediaStream;
            if (stream) {
              stream.getTracks().forEach(track => track.stop());
            }
          }
        }, 'image/jpeg', 0.9);
      }
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedFile) return;

    setIsLoading(true);
    
    // Simulate API call
    try {
      // In a real app, you would upload to your server here
      await new Promise(resolve => setTimeout(resolve, 2000));
      setUploadSuccess(true);
    } catch (error) {
      console.error("Upload failed:", error);
      alert("Upload failed. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const resetForm = () => {
    setSelectedFile(null);
    setPreviewUrl(null);
    setUploadSuccess(false);
  };

  return (
    <>
      <Header />
      <section 
        className="py-5"
        style={{
          minHeight: "100vh",
          paddingTop: "90px",
          backgroundColor: "#f9fafb",
          marginTop : '100px'
        }}
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="card border-0 shadow-sm p-4" style={{ borderRadius: "12px" }}>
                <h2 className="text-center mb-4" style={{ color: "#127c91" }}>
                  <i className="bi bi-prescription me-2"></i>
                  Upload Prescription
                </h2>
                
                {uploadSuccess ? (
                  <div className="text-center py-4">
                    <div className="mb-4">
                      <i className="bi bi-check-circle-fill text-success" style={{ fontSize: "4rem" }}></i>
                    </div>
                    <h4 className="mb-3">Prescription Uploaded Successfully!</h4>
                    <p className="text-muted mb-4">
                      Our pharmacists will review your prescription and prepare your medicines.
                    </p>
                    <div className="d-flex justify-content-center gap-3">
                      <button 
                        className="btn"
                        style={{
                          backgroundColor: "#127c91",
                          color: "white",
                          padding: "0.5rem 1.5rem",
                          borderRadius: "20px"
                        }}
                        onClick={() => navigate("/")}
                      >
                        Back to Home
                      </button>
                      <button 
                        className="btn btn-outline-secondary"
                        style={{
                          padding: "0.5rem 1.5rem",
                          borderRadius: "20px"
                        }}
                        onClick={resetForm}
                      >
                        Upload Another
                      </button>
                    </div>
                  </div>
                ) : (
                  <>
                    <form onSubmit={handleSubmit}>
                      <div className="mb-4">
                        <h5 className="mb-3" style={{ color: "#0c5360" }}>
                          How would you like to upload?
                        </h5>
                        <div className="d-flex flex-column flex-md-row gap-3">
                          <button
                            type="button"
                            className="btn d-flex align-items-center justify-content-center flex-column p-4"
                            style={{
                              backgroundColor: "#f0f7fa",
                              border: "1px dashed #cce4e8",
                              borderRadius: "12px",
                              flex: 1
                            }}
                            onClick={() => fileInputRef.current?.click()}
                          >
                            <i className="bi bi-upload text-primary mb-2" style={{ fontSize: "2rem" }}></i>
                            <span>Upload from Device</span>
                            <input
                              type="file"
                              ref={fileInputRef}
                              onChange={handleFileChange}
                              accept="image/*"
                              className="d-none"
                            />
                          </button>
                          <button
                            type="button"
                            className="btn d-flex align-items-center justify-content-center flex-column p-4"
                            style={{
                              backgroundColor: "#f0f7fa",
                              border: "1px dashed #cce4e8",
                              borderRadius: "12px",
                              flex: 1
                            }}
                            onClick={openCamera}
                          >
                            <i className="bi bi-camera text-primary mb-2" style={{ fontSize: "2rem" }}></i>
                            <span>Take Photo</span>
                          </button>
                        </div>
                      </div>

                      {isCameraOpen && (
                        <div className="mb-4 text-center">
                          <video 
                            ref={videoRef} 
                            autoPlay 
                            playsInline
                            style={{ 
                              width: "100%", 
                              maxHeight: "400px",
                              borderRadius: "8px",
                              border: "1px solid #cce4e8"
                            }}
                          ></video>
                          <button
                            type="button"
                            className="btn mt-3"
                            style={{
                              backgroundColor: "#127c91",
                              color: "white",
                              padding: "0.5rem 1.5rem",
                              borderRadius: "20px"
                            }}
                            onClick={capturePhoto}
                          >
                            <i className="bi bi-camera-fill me-2"></i>
                            Capture Photo
                          </button>
                        </div>
                      )}

                      {previewUrl && (
                        <div className="mb-4">
                          <h5 className="mb-3" style={{ color: "#0c5360" }}>Prescription Preview</h5>
                          <div className="text-center">
                            <img
                              src={previewUrl}
                              alt="Prescription preview"
                              className="img-fluid rounded"
                              style={{ 
                                maxHeight: "400px",
                                border: "1px solid #cce4e8"
                              }}
                            />
                            <button
                              type="button"
                              className="btn btn-sm mt-2"
                              style={{
                                backgroundColor: "#f0f7fa",
                                color: "#0c5360",
                                borderRadius: "20px"
                              }}
                              onClick={() => {
                                setSelectedFile(null);
                                setPreviewUrl(null);
                              }}
                            >
                              <i className="bi bi-x-circle me-1"></i>
                              Remove
                            </button>
                          </div>
                        </div>
                      )}

                      <div className="mt-4">
                        <button
                          type="submit"
                          className="btn w-100"
                          style={{
                            backgroundColor: "#127c91",
                            color: "white",
                            padding: "0.75rem",
                            borderRadius: "20px",
                            fontSize: "1.1rem"
                          }}
                          disabled={!selectedFile || isLoading}
                        >
                          {isLoading ? (
                            <>
                              <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                              Processing...
                            </>
                          ) : (
                            <>
                              <i className="bi bi-send-fill me-2"></i>
                              Submit Prescription
                            </>
                          )}
                        </button>
                      </div>
                    </form>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}