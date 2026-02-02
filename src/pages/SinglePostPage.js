// src/pages/SinglePostPage.js
import React, { useState, useEffect, useCallback } from "react";
import { useParams, Link } from "react-router-dom";
import { FaArrowLeft, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { mockPosts } from "../data/mockPosts";
import { blogCategories, getCategoryById } from "../data/blogCategories";
import { api } from "../services/api";
import "./SinglePostPage.css";

function SinglePostPage() {
  const { slug } = useParams();
  const [postData, setPostData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    async function fetchPost() {
      try {
        const data = await api.get(`/blog/posts/${slug}`);
        setPostData(data);
      } catch (err) {
        console.error("API error, falling back to mocks:", err);
        // Fallback Mock
        const foundMock = mockPosts.find(p => p.slug === slug);
        if (foundMock) {
          setPostData({
            post: {
              title: foundMock.title,
              category: foundMock.category || 'conseils',
              published_at: new Date().toISOString(),
              first_name: foundMock.author, last_name: '',
              main_image_url: foundMock.image, body: foundMock.content
            },
            slideshow_images: []
          });
        } else {
          setPostData(null);
        }
      } finally {
        setLoading(false);
      }
    }
    fetchPost();
  }, [slug]);

  // --- Construction des slides (Inchangé) ---
  const slides = [];
  if (postData?.post.main_image_url) {
    slides.push({ url: postData.post.main_image_url, alt: postData.post.title });
  }
  if (postData?.slideshow_images?.length > 0) {
    postData.slideshow_images.forEach(img => {
        slides.push({ url: img.image_url, alt: img.alt_text || postData.post.title });
    });
  }

  // --- Navigation (Inchangé) ---
  const nextSlide = useCallback(() => {
    setCurrentSlide(current => (current === slides.length - 1 ? 0 : current + 1));
  }, [slides.length]);

  const prevSlide = () => {
    setCurrentSlide(current => (current === 0 ? slides.length - 1 : current - 1));
  };

  useEffect(() => {
    if (slides.length <= 1) return;
    const intervalID = setInterval(() => {
      nextSlide();
    }, 4000);
    return () => clearInterval(intervalID);
  }, [currentSlide, nextSlide, slides.length]);


  if (loading) return <div className="post-loading">Chargement...</div>;
  if (!postData) return <div className="post-not-found">Article introuvable</div>;

  const { post } = postData;
  const dateFormatted = new Date(post.published_at).toLocaleDateString('fr-FR', {
    day: 'numeric', month: 'long', year: 'numeric'
  });

  return (
    <div className="single-post-page">
      <title>{`${post.title} | Foodmoov`}</title>

      <div className="post-container">
        
        <div className="post-hero-section">
            {slides.length > 0 ? (
                <div className="custom-slider">
                    <img 
                        src={slides[currentSlide].url} 
                        alt={slides[currentSlide].alt} 
                        className="slider-image" 
                    />
                    {slides.length > 1 && (
                        <>
                            <button className="slider-btn prev" onClick={prevSlide}><FaChevronLeft /></button>
                            <button className="slider-btn next" onClick={nextSlide}><FaChevronRight /></button>
                            <div className="slider-dots">
                                {slides.map((_, idx) => (
                                    <span key={idx} className={`dot ${idx === currentSlide ? 'active' : ''}`} onClick={() => setCurrentSlide(idx)}></span>
                                ))}
                            </div>
                        </>
                    )}
                </div>
            ) : (
                <div className="no-image-banner">Foodmoov Blog</div>
            )}
        </div>

        <div className="post-header">
            <Link
              to={`/blog?categorie=${post.category || 'conseils'}`}
              className="post-category-orig"
              style={{ backgroundColor: getCategoryById(post.category)?.color || 'var(--primary-color)' }}
            >
              {getCategoryById(post.category)?.name || post.category || 'Conseils'}
            </Link>
            <h1>{post.title}</h1>
            <p className="post-meta">Par {post.first_name} {post.last_name} - {dateFormatted}</p>
        </div>

        <div className="post-content" dangerouslySetInnerHTML={{ __html: post.body }} />

        <Link to="/blog" className="back-to-blog-link"><FaArrowLeft /> Retour au blog</Link>

      </div>
    </div>
  );
}

export default SinglePostPage;