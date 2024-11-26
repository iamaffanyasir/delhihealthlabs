import React from 'react';
import './LatestBlogs.css';

const LatestBlogs = () => {
  const blogs = [
    {
      title: "Understanding Blood Test Results",
      excerpt: "A comprehensive guide to reading and understanding your blood test reports.",
      date: "May 15, 2024",
      category: "Health Guide",
      image: "blood-test.jpg"
    },
    {
      title: "Importance of Regular Health Check-ups",
      excerpt: "Why you should never skip your routine health screenings and check-ups.",
      date: "May 12, 2024",
      category: "Wellness",
      image: "health-checkup.jpg"
    },
    {
      title: "Diabetes Prevention Tips",
      excerpt: "Simple lifestyle changes that can help prevent diabetes and maintain good health.",
      date: "May 10, 2024",
      category: "Disease Prevention",
      image: "diabetes.jpg"
    }
  ];

  return (
    <div className="latest-blogs">
      <div className="blogs-container">
        <h2>Health & Wellness Blog</h2>
        <p className="section-desc">Stay informed with our latest health articles</p>
        
        <div className="blogs-grid">
          {blogs.map((blog, index) => (
            <div key={index} className="blog-card">
              <div className="blog-image">
                <img src={`/images/blogs/${blog.image}`} alt={blog.title} />
                <span className="category">{blog.category}</span>
              </div>
              <div className="blog-content">
                <span className="date">{blog.date}</span>
                <h3>{blog.title}</h3>
                <p>{blog.excerpt}</p>
                <button className="read-more">Read More</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LatestBlogs; 