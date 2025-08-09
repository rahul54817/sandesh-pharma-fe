import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { blogPosts } from "../types/blog";
import BlogCard from "../components/BlogCard";
import { useNavigate } from "react-router-dom";

export default function Blog() {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const filteredPosts = blogPosts.filter(
    (post) =>
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.tags.some((tag) => tag.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <>
      <Header />
      {/* Hero Section */}
      <div
        className="blog-hero py-5 text-center text-white"
        style={{
          background: "linear-gradient(135deg, #0c5360 0%, #127c91 100%)",
          paddingTop: "100px",
          paddingBottom: "80px",
          marginBottom: "40px",
          marginTop: "80px"
        }}
      >
        <div className="container">
          <h1 className="display-4 fw-bold mb-3">Sandesh Pharma Blogs</h1>
          <p className="lead mb-4" style={{ opacity: 0.9 }}>
            Discover the latest insights on healthcare, medications, and wellness
          </p>

          {/* Search Bar */}
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="input-group input-group-lg shadow">
                <input
                  type="text"
                  className="form-control border-0 py-3"
                  placeholder="Search articles, topics, or authors..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  style={{ borderRadius: "50px 0 0 50px" }}
                />
                <button
                  className="btn btn-light text-primary px-4"
                  type="button"
                  style={{ borderRadius: "0 50px 50px 0" }}
                >
                  <i className="bi bi-search fs-5"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <section className="py-5" style={{ backgroundColor: "#f9fafb" }}>
        <div className="container">

          {/* All Posts Section */}
          <div className="mb-5">
            <h3 className="fw-bold mb-4 d-flex align-items-center flex-wrap" style={{ color: "#127c91" }}>
              <span className="d-inline-flex align-items-center me-2">
                <i className="bi bi-journal-text fs-4 me-2" style={{ color: "#127c91" }}></i>
                <span className="position-relative">
                  {searchTerm ? `Search Results for "${searchTerm}"` : "All Articles"}
                  <span
                    className="position-absolute bottom-0 start-0 w-100"
                    style={{
                      height: "2px",
                      background: "linear-gradient(90deg, #127c91 0%, rgba(18,124,145,0.2) 100%)"
                    }}
                  ></span>
                </span>
              </span>
              <span
                className="badge rounded-pill ms-2 px-2 py-1"
                style={{
                  backgroundColor: "#f0f7fa",
                  color: "#127c91",
                  border: "1px solid #cce4e8",
                  fontSize: "0.85rem",
                  fontWeight: 600
                }}
              >
                {filteredPosts.length} {filteredPosts.length === 1 ? "article" : "articles"}
              </span>
            </h3>

            {filteredPosts.length > 0 ? (
              <div className="row g-4">
                {filteredPosts.map((post) => (
                  <div key={post.id} className="col-md-6 col-lg-4">
                    <BlogCard post={post} />
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-5 bg-white rounded-3 shadow-sm">
                <i className="bi bi-search text-muted" style={{ fontSize: "3rem" }}></i>
                <h4 className="text-muted mt-3">No articles found</h4>
                <p className="text-muted mb-4">Try different search terms or browse all articles</p>
                <button
                  className="btn btn-primary px-4 py-2"
                  onClick={() => {
                    setSearchTerm("");
                    navigate("/blog");
                  }}
                >
                  <i className="bi bi-arrow-counterclockwise me-2"></i>
                  Reset Search
                </button>
              </div>
            )}
          </div>

          {/* Categories/Tags Section */}
          {/* Categories/Tags Section */}
          <div className="bg-white p-4 rounded-3 shadow-sm mb-5">
            <h4 className="fw-bold mb-3" style={{ color: "#127c91" }}>
              <i className="bi bi-tags me-2"></i>Browse by Topics
            </h4>
            <div className="d-flex flex-wrap gap-2">
              {['health', 'medication', 'wellness', 'chronic', 'prevention', 'research'].map((tag) => (
                <button
                  key={tag}
                  className="btn rounded-pill"
                  style={{
                    backgroundColor: searchTerm === tag ? "#127c91" : "#f0f7fa",
                    color: searchTerm === tag ? "white" : "#0c5360",
                    border: searchTerm === tag ? "none" : "1px solid #cce4e8",
                    padding: "0.375rem 1rem",
                    transition: "all 0.3s ease"
                  }}
                  onClick={() => setSearchTerm(tag === searchTerm ? "" : tag)}
                >
                  {tag.charAt(0).toUpperCase() + tag.slice(1)}
                  {searchTerm === tag && (
                    <i className="bi bi-x-circle ms-2"></i>
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}