// src/components/BlogCard.tsx
import { Link } from "react-router-dom";
import type { IBlogPost } from "../types/blog";

interface Props {
  post: IBlogPost;
}

export default function BlogCard({ post }: Props) {
  return (
    <div 
      className="card h-100 border-0 shadow-sm overflow-hidden"
      style={{ 
        borderRadius: "12px",
        transition: "transform 0.3s ease, box-shadow 0.3s ease",
        borderLeft: "3px solid #127c91" // Your theme color as accent
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-5px)";
        e.currentTarget.style.boxShadow = "0 10px 20px rgba(0,0,0,0.1)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.boxShadow = "0 4px 10px rgba(0,0,0,0.05)";
      }}
    >
      {/* Image */}
      <div style={{ height: "200px", overflow: "hidden" }}>
        <img
          src={post.image}
          alt={post.title}
          className="img-fluid w-100 h-100 object-cover"
          style={{ transition: "transform 0.5s" }}
          onMouseEnter={(e) => e.currentTarget.style.transform = "scale(1.1)"}
          onMouseLeave={(e) => e.currentTarget.style.transform = "scale(1)"}
        />
      </div>

      {/* Card Body */}
      <div className="card-body">
        {/* Tags */}
        <div className="d-flex gap-2 mb-2 flex-wrap">
          {post.tags.map((tag, i) => (
            <span 
              key={i} 
              className="badge"
              style={{
                backgroundColor: "#f0f7fa", // Light version of your theme
                color: "#0c5360", // Darker shade of your theme
                fontWeight: "500"
              }}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Title */}
        <h5 className="card-title" style={{ color: "#127c91" }}>{post.title}</h5>
        
        {/* Excerpt */}
        <p className="card-text text-muted">{post.excerpt}</p>
        
        {/* Author & Date */}
        <div className="d-flex justify-content-between align-items-center mt-3">
          <span className="text-muted small">{post.author}</span>
          <span className="text-muted small">
            {new Date(post.date).toLocaleDateString()}
          </span>
        </div>
      </div>

      {/* Footer with Likes, Comments and Read More */}
      <div 
        className="card-footer bg-transparent border-0"
        style={{ backgroundColor: "#f9fafb" }} // Light background
      >
        <div className="d-flex justify-content-between align-items-center">
          {/* Likes & Comments */}
          <div className="d-flex gap-3">
            <span style={{ color: "#127c91" }}>
              <i className="bi bi-heart-fill me-1"></i>
              {post.likes}
            </span>
            <span style={{ color: "#127c91" }}>
              <i className="bi bi-chat-left-text-fill me-1"></i>
              {post.comments.length}
            </span>
          </div>
          
          {/* Read More Button */}
          <Link 
            to={`/blog/${post.id}`} 
            className="btn btn-sm"
            style={{
              backgroundColor: "#127c91",
              color: "white",
              borderRadius: "20px",
              padding: "0.25rem 1rem",
              border: "none"
            }}
          >
            Read More
          </Link>
        </div>
      </div>
    </div>
  );
}