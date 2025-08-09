import { useParams, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useBlog } from "../context/BlogContext";
import { useState } from "react";

export default function BlogPost() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { posts, likePost, addComment } = useBlog();
  const [commentForm, setCommentForm] = useState({
    name: '',
    email: '',
    comment: ''
  });

  const post = posts.find((p) => p.id === Number(id));

  const handleCommentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!post) return;

    addComment(post.id, {
      name: commentForm.name,
      email: commentForm.email,
      comment: commentForm.comment
    });

    setCommentForm({
      name: '',
      email: '',
      comment: ''
    });
  };

  if (!post) {
    return (
      <>
        <Header />
        <div className="container py-5 text-center" style={{ marginTop: "90px" }}>
          <h4>Blog post not found</h4>
          <button
            className="btn mt-3"
            style={{
              backgroundColor: "#127c91",
              color: "white",
              padding: "0.5rem 1.5rem",
              borderRadius: "20px"
            }}
            onClick={() => navigate("/blog")}
          >
            Back to Blog
          </button>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />
      <article className="container py-5" style={{ marginTop: "90px" }}>
        <div className="row justify-content-center">
          <div className="col-lg-9">
            {/* Back Button */}
            <button
              className="btn mb-4"
              style={{
                backgroundColor: "#f0f7fa",
                color: "#0c5360",
                border: "1px solid #cce4e8",
                padding: "0.5rem 1rem",
                borderRadius: "20px"
              }}
              onClick={() => navigate("/blog")}
            >
              <i className="bi bi-arrow-left me-2"></i>
              Back to Blog
            </button>

            {/* Blog Post Header */}
            <div className="card border-0 shadow-sm mb-5" style={{ borderRadius: "12px" }}>
              <div style={{
                aspectRatio: "16/9", // Use modern aspect-ratio control
                overflow: "hidden",
                borderRadius: "12px 12px 0 0" // Simplified border radius
              }}>
                <img
                  src={post.image}
                  alt={post.title || "Health infographic about medication"}
                  className="img-fluid w-100 h-100 object-cover"
                  style={{
                    transition: "transform 0.5s ease",
                    minHeight: "100%", // Ensure full coverage
                    minWidth: "100%",
                    objectPosition: "center" // Focus on center of image
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
                  onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
                  loading="lazy"
                />
              </div>
              <div className="card-body">
                <div className="d-flex flex-wrap gap-2 mb-3">
                  {post.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="badge"
                      style={{
                        backgroundColor: "#f0f7fa",
                        color: "#0c5360",
                        fontWeight: "500",
                        borderRadius: "20px",
                        padding: "0.35rem 0.75rem"
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h1 className="mb-3 fw-bold" style={{ color: "#127c91" }}>{post.title}</h1>
                <div className="d-flex align-items-center gap-3 mb-4">
                  <span className="text-muted">
                    <i className="bi bi-person-fill me-2"></i>
                    {post.author}
                  </span>
                  <span className="text-muted">
                    <i className="bi bi-calendar me-2"></i>
                    {new Date(post.date).toLocaleDateString()}
                  </span>
                  <span className="text-muted">
                    <i className="bi bi-chat-left-text me-2"></i>
                    {post.comments.length} comments
                  </span>
                </div>
              </div>
            </div>

            {/* Blog Content */}
            <div className="mb-5 px-3">
              <div className="content" style={{ lineHeight: "1.8", fontSize: "1.1rem" }}>
                <p className="lead mb-4" style={{ color: "#127c91", fontWeight: "500" }}>
                  {post.excerpt}
                </p>
                <div className="mb-5">
                  {post.content.split('\n').map((paragraph, i) => (
                    <p key={i} className="mb-3">{paragraph}</p>
                  ))}
                </div>
              </div>

              {/* Like Button */}
              <div className="d-flex justify-content-center mb-5">
                <button
                  className="btn"
                  style={{
                    backgroundColor: "#f0f7fa",
                    color: "#127c91",
                    border: "1px solid #cce4e8",
                    padding: "0.5rem 1.5rem",
                    borderRadius: "20px",
                    fontWeight: "500"
                  }}
                  onClick={() => likePost(post.id)}
                >
                  <i className="bi bi-heart-fill me-2"></i>
                  Like this post ({post.likes})
                </button>
              </div>
            </div>

            {/* Comments Section */}
            <div className="comments-section bg-white p-4 rounded-3 shadow-sm mb-5">
              <h4 className="fw-bold mb-4" style={{ color: "#127c91" }}>
                <i className="bi bi-chat-square-text me-2"></i>
                Comments ({post.comments.length})
              </h4>

              {/* Comment Form */}
              <form onSubmit={handleCommentSubmit} className="mb-5">
                <div className="card border-0 shadow-sm p-4" style={{ backgroundColor: "#f9fafb" }}>
                  <h5 className="mb-3" style={{ color: "#0c5360" }}>Add a Comment</h5>
                  <div className="row g-3">
                    <div className="col-md-6">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Your Name"
                        value={commentForm.name}
                        onChange={(e) => setCommentForm({ ...commentForm, name: e.target.value })}
                        required
                        style={{ borderRadius: "8px", borderColor: "#cce4e8" }}
                      />
                    </div>
                    <div className="col-md-6">
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Your Email"
                        value={commentForm.email}
                        onChange={(e) => setCommentForm({ ...commentForm, email: e.target.value })}
                        required
                        style={{ borderRadius: "8px", borderColor: "#cce4e8" }}
                      />
                    </div>
                    <div className="col-12">
                      <textarea
                        className="form-control"
                        rows={4}
                        placeholder="Share your thoughts..."
                        value={commentForm.comment}
                        onChange={(e) => setCommentForm({ ...commentForm, comment: e.target.value })}
                        required
                        style={{ borderRadius: "8px", borderColor: "#cce4e8" }}
                      ></textarea>
                    </div>
                    <div className="col-12">
                      <button
                        type="submit"
                        className="btn"
                        style={{
                          backgroundColor: "#127c91",
                          color: "white",
                          padding: "0.5rem 1.5rem",
                          borderRadius: "20px",
                          fontWeight: "500"
                        }}
                      >
                        Post Comment
                      </button>
                    </div>
                  </div>
                </div>
              </form>

              {/* Comments List */}
              {post.comments.length === 0 ? (
                <div className="text-center py-4 bg-light rounded">
                  <i className="bi bi-chat-square text-muted" style={{ fontSize: "2rem" }}></i>
                  <p className="mt-2 text-muted">No comments yet. Be the first to comment!</p>
                </div>
              ) : (
                <div className="comments-list">
                  {post.comments.map((comment) => (
                    <div
                      key={comment.id}
                      className="card mb-3 border-0 shadow-sm p-3"
                      style={{
                        borderRadius: "12px",
                        borderLeft: "3px solid #127c91",
                        backgroundColor: "#fff"
                      }}
                    >
                      <div className="d-flex">
                        {/* Avatar */}
                        <div
                          className="d-flex align-items-center justify-content-center me-3"
                          style={{
                            minWidth: "40px",
                            height: "40px",
                            backgroundColor: "#0c5360",
                            color: "white",
                            borderRadius: "50%",
                            fontSize: "1rem",
                            fontWeight: "bold"
                          }}
                        >
                          {comment.name.charAt(0).toUpperCase()}
                        </div>

                        {/* Comment Content */}
                        <div className="flex-grow-1">
                          {/* Header Row */}
                          <div className="d-flex flex-column flex-md-row justify-content-between mb-2">
                            <div>
                              <h6 className="mb-0 fw-bold" style={{ color: "#0c5360" }}>
                                {comment.name}
                              </h6>
                              <small className="text-muted">{comment.email}</small>
                            </div>
                            <small className="text-muted mt-2 mt-md-0">
                              {new Date(comment.date).toLocaleDateString('en-US', {
                                month: 'short',
                                day: 'numeric',
                                year: 'numeric'
                              })}
                            </small>
                          </div>

                          {/* Comment Text */}
                          <p className="mb-3">{comment.comment}</p>

                          {/* Actions */}
                          <div className="d-flex gap-2">
                            <button
                              className="btn btn-sm py-1 px-2"
                              style={{
                                backgroundColor: "#f0f7fa",
                                color: "#0c5360",
                                borderRadius: "20px",
                                fontSize: "0.8rem"
                              }}
                            >
                              <i className="bi bi-reply me-1"></i> Reply
                            </button>
                            <button
                              className="btn btn-sm py-1 px-2"
                              style={{
                                backgroundColor: "#f0f7fa",
                                color: "#0c5360",
                                borderRadius: "20px",
                                fontSize: "0.8rem"
                              }}
                            >
                              <i className="bi bi-flag me-1"></i> Report
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </article>
      <Footer />
    </>
  );
}