// src/ErrorPage.tsx
import React from "react";

const ErrorPage: React.FC = () => {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f9fafb",
        textAlign: "center",
        padding: "20px",
      }}
    >
      <img
        src="https://cdn-icons-png.flaticon.com/512/2748/2748558.png"
        alt="Error"
        style={{ width: "200px", marginBottom: "20px" }}
      />
      <h1 style={{ fontSize: "2.5rem", color: "#ff4d4f", marginBottom: "10px" }}>
        Oops! Something went wrong
      </h1>
      <p style={{ maxWidth: "500px", color: "#555", lineHeight: "1.6" }}>
        We’re working on fixing the issue. Please try again later or head back to the homepage.
      </p>
      <a
        href="/"
        style={{
          marginTop: "20px",
          padding: "12px 24px",
          backgroundColor: "#0070f3",
          color: "white",
          borderRadius: "8px",
          textDecoration: "none",
          fontWeight: "bold",
          transition: "background-color 0.3s ease",
        }}
        onMouseOver={(e) =>
          ((e.target as HTMLAnchorElement).style.backgroundColor = "#005bb5")
        }
        onMouseOut={(e) =>
          ((e.target as HTMLAnchorElement).style.backgroundColor = "#0070f3")
        }
      >
        Go Home
      </a>
    </div>
  );
};

export default ErrorPage;
